import { useState } from "react";

export const SelectLanguageHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
