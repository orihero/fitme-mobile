import { useState } from "react";

export const WelcomeHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
