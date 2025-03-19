import {useEffect, useState} from "react";
import {sendToBackground} from "@plasmohq/messaging";

export const useCurrentUrl = () => {
    const [currentUrl, setCurrentUrl] = useState<URL>(()=>new URL("https://google.com"));

    useEffect(() => {
        sendToBackground({
            name:"get-current-url"
        }).then(({url})=>setCurrentUrl(new URL(url)));
    },[])


    return currentUrl;
}