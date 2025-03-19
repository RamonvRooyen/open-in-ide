import React, {createContext, type Dispatch, type SetStateAction, useContext, useMemo} from "react";
import {darkTheme} from "~theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useCurrentUrl} from "~ui/hooks/useCurrentUrl";

type OpenInIdeContextType = {
    currentUrl: URL
    tab: number
    setTab: Dispatch<SetStateAction<number>>
}

const OpenInIdeContext = createContext<OpenInIdeContextType|undefined>(undefined)

type OpenInIdeProviderProps = {
    children: React.ReactNode

}

export const OpenInIdeProvider: React.FC<OpenInIdeProviderProps> = ({children}) => {
    const currentUrl = useCurrentUrl()
    const [tab, setTab] = React.useState(0)

    const value = useMemo(()=>({
        currentUrl,
        tab,
        setTab
    }),[currentUrl, tab, setTab])
    return  <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <OpenInIdeContext.Provider value={value}>
            {children}
        </OpenInIdeContext.Provider>
    </ThemeProvider>
}


export const useOpenInIde = () => {
    const context = useContext(OpenInIdeContext)
    if (!context) throw new Error("useOpenInIde needs to be used in OpenInIdeProvider")
    return context
}