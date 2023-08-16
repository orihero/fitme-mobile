import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../store/slices/appSlice";

export const NotificationsHooks = () => {
  const user = useSelector(selectUser);
  console.log("====================================");
  console.log(user);
  console.log("====================================");

  return user;
};
