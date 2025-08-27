import { createContext,useContext } from "react";


export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=> {},
    lightTheme:()=> {},

})

export const Themeprovider=ThemeContext.Provider

/* making custom hook for directly returning Themecontext */
export default function useTheme(){
    return useContext(ThemeContext)
}