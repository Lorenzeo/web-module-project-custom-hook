import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [DarkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
    return[ DarkMode, setDarkMode];

};

export default useDarkMode;