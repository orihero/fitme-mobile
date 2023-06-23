import { useEffect, useState } from "react";

export const CalcDailyNormHooks = () => {
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState(0);
  const [selected, setSelected] = useState<number | undefined>();
  const [calculated, setCalculated] = useState(0);

  const effect = () => {
    let result = Number(weight);

    if (gender === 0) {
      result = result * 2;
    }
    if (gender === 1) {
      result = result * 1.5;
    }

    if (selected !== undefined) {
      if (selected === 0) {
        result = result * 2.5;
      }
      if (selected === 1) {
        result = result * 3;
      }
      if (selected === 2) {
        result = result * 3.5;
      }
      if (selected === 3) {
        result = result * 4;
      }
      if (selected === 4) {
        result = result * 5;
      }
    }

    setCalculated(result);
  };

  useEffect(() => {
    effect();
  }, [weight, gender, selected]);

  const onSelect = (index: number) => {
    if (selected === index) {
      setSelected(undefined);
    } else {
      setSelected(index);
    }
  };

  return {
    weight,
    setWeight,
    gender,
    setGender,
    calculated,
    selected,
    onSelect,
  };
};
