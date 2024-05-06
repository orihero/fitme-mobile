import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Box } from "../../../../components/common";
import { ApiService } from "../../../../services";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../store/slices/appSlice";
import { ROLES } from "../../../../types";
import Video from "react-native-video";

export interface IAdItem {
  _id?: string;
  imageUrl?: string;
  videoUrl?: string;
  link?: string;
}

const AdItem = ({
  item,
  fetchAds,
}: {
  index: number;
  item: IAdItem;
  fetchAds: () => void;
}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);
  const isSuperAdmin = user?.role === ROLES.SUPERADMIN;
  const onRemove = async () => {
    try {
      setLoading(true);
      const res = await ApiService.delete(`/ads/${item._id}`);
      await fetchAds();
    } catch (error) {}
    setLoading(false);
  };

  const openUrl = async (link: string | undefined) => {
    if (!link) {
      return;
    }
    try {
      const canOpen = await Linking.canOpenURL(link);
      if (canOpen) {
        Linking.openURL(link);
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openUrl(item.link)}>
        {!!item.videoUrl ? (
          <View style={styles.video}>
            <Video style={styles.video} source={{ uri: item.videoUrl }} />
          </View>
        ) : (
          <Box
            cover={item.imageUrl || ""}
            dots={isSuperAdmin}
            show={show}
            setShow={() => setShow((e) => !e)}
            onRemove={onRemove}
            dotsLoading={loading}
            containerStyle={{ marginTop: 10 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AdItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 20,
  },
  image: {
    width: Dimensions.get("window").width - 30,
  },
  video: {
    width: Dimensions.get("window").width - 20,
    height: 160,
  },
});
