import { useEffect, useState } from "react";
import {
  CalendarItem,
  IActiveDayProps,
} from "../../../../../components/CustomCalendar";
import { ApiService } from "../../../../../services";
import { useRedux } from "../../../../../store/hooks";
import {
  selectMeasurements,
  selectUser,
  setUser,
} from "../../../../../store/slices/appSlice";
import { Response, User } from "../../../../../types";
import { getCalendarDays } from "../../../../../utils/getCalendarDays";

const cd = new Date(Date.now());

export const MeasurementsHooks = () => {
  const [user, dispatch] = useRedux(selectUser);
  const [measurements] = useRedux(selectMeasurements);

  const [show, setShow] = useState<any>({});
  const [modalValue, setModalValue] = useState("");
  const [modalLoading, setModalLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeDay, setActiveDay] = useState<IActiveDayProps | null>(null);
  const [activeMonth, setActiveMonth] = useState(cd.getMonth());
  const [activeYear, setActiveYear] = useState(cd.getFullYear());
  const [monthlyData, setMonthlyData] = useState<CalendarItem[][]>([]);

  const effect = () => {
    const { arr } = getCalendarDays(activeYear, activeMonth);

    let newArr = arr.map((a: CalendarItem[]) =>
      a.map((aa: CalendarItem) => {
        let newAa: CalendarItem = aa;

        if (aa) {
          delete newAa?.past;
        } else {
          newAa = null;
        }

        return newAa;
      })
    );

    setMonthlyData(newArr);
  };

  useEffect(() => {
    effect();
  }, [activeMonth]);

  const onAddCol = async () => {
    if (user) {
      setModalLoading(true);

      try {
        let res = await ApiService.put<Response<User>>(
          `/users/add-measurement-key/${user._id}`,
          {
            key: modalValue,
          }
        );

        dispatch(setUser(res.data));
        setModalLoading(false);
        setShow({});
        setModalValue("");
      } catch (e) {
        console.log("e", e);
        setModalLoading(false);
      }
    }
  };

  const onAddRow = async () => {
    if (user) {
      setLoading(true);

      try {
        const res = await ApiService.put<Response<User>>(
          `/users/add-measurement-row/${user._id}`
        );

        dispatch(setUser(res.data));
        setLoading(false);
      } catch (e) {
        console.log("e: ", e);
        setLoading(false);
      }
    }
  };

  const onRemoveRow = async () => {
    if (user) {
      setModalLoading(true);

      try {
        const res = await ApiService.patch<Response<User>>(
          `/users/remove-measurement-row/${user._id}`
        );

        dispatch(setUser(res.data));
        setModalLoading(false);
      } catch (e) {
        console.log("e: ", e);
        setModalLoading(false);
      }

      setShow({});
    }
  };

  const onRemind = () => {
    console.log("onRemind");
  };

  const onSet = (i: number, ii: number) => {
    const { key, value } = (measurements ?? [])[i].data[ii];

    setShow({
      b: true,
      i,
      ii,
      key,
    });

    if (value) {
      setModalValue(value);
    }
  };

  const onSetValue = async () => {
    const { i: index, key } = show;

    if (user) {
      setModalLoading(true);

      try {
        const res = await ApiService.put<Response<User>>(
          `/users/set-measurement-value/${user._id}`,
          {
            key,
            index,
            value: modalValue,
          }
        );

        dispatch(setUser(res.data));
        setModalLoading(false);
        setShow({});
        setModalValue("");
      } catch (e) {
        console.log("e: ", e);
        setModalLoading(false);
      }
    }
  };

  const onSetDate = (i: number) => {
    const { date: d } = (measurements ?? [])[i];

    let date = new Date(d);

    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

    const { arr } = getCalendarDays(year, month);

    arr.map((a, i) =>
      a.map((aa, ii) => {
        if (aa && aa.day === day) {
          setActiveDay({ weekIndex: i, dayIndex: ii });
        }
      })
    );

    setActiveMonth(month);
    setActiveYear(year);

    setShow({
      c: true,
      i,
    });
  };

  const onSetDateValue = async () => {
    const { weekIndex, dayIndex } = activeDay ?? {};
    const { arr } = getCalendarDays(activeYear, activeMonth);

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (weekIndex === i && dayIndex === j) {
          if (user) {
            setModalLoading(true);

            try {
              const res = await ApiService.put<Response<User>>(
                `/users/set-measurement-date/${user._id}`,
                {
                  index: show.i,
                  date: {
                    year: activeYear,
                    month: activeMonth + 1,
                    day: arr[i][j]?.day,
                  },
                }
              );

              dispatch(setUser(res.data));
              setModalLoading(false);
              setShow({});
            } catch (e) {
              console.log("e: ", e);
              setModalLoading(false);
            }
          }
        }
      }
    }
  };

  const onClose = () => {
    setShow({});
    setModalValue("");
  };

  return {
    measurements,
    modalLoading,
    loading,
    show,
    setShow,
    modalValue,
    setModalValue,
    monthlyData,
    activeDay,
    setActiveDay,
    activeMonth,
    setActiveMonth,
    activeYear,
    setActiveYear,
    onSet,
    onSetValue,
    onSetDate,
    onSetDateValue,
    onAddCol,
    onAddRow,
    onRemoveRow,
    onRemind,
    onClose,
  };
};
