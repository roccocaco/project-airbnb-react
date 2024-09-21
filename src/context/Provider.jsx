import { Children, useState } from "react";
import Context from "./Context";

export default function Provider({ children }) {
  const [anyValue, setAnyValue] = useState("");

  const contextValue = {
    anyValue,
    setAnyValue,
  };

  return <Context.Provider value={contextValue}>{Children}</Context.Provider>;
}
