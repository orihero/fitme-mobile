import { useState } from "react";

export const MyDataHooks = () => {
  const [active, setActive] = useState(0);

  return { active, setActive };
};
