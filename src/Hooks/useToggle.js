import { useState } from "react";

export default function useToggle(toggle = false) {
  const [isToggle, setIsToggle] = useState(toggle);

  const toggleValue = () => {
    setIsToggle(!isToggle);
  };

  return [isToggle, toggleValue];
}
