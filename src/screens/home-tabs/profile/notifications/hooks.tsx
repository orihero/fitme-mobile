import { useState } from "react";

export const NotificationsHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
