import { useState } from "react";

export const NutritionPlanHooks = () => {
  const [state, setState] = useState("");

  return { state, setState };
};
