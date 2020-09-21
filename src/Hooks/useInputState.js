import { useState } from "react";

export default function useInputState(value) {
  const [state, setState] = useState(value);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const reset = () => {
    setState("");
  };
  return [state, handleChange, reset];
}
