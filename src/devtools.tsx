import { logToWindow } from "~util/logToWindow"
import type { Message } from "~types/message"

// @ts-ignore
// for some reason line is not in the documentation, but it does work
chrome.devtools.panels.setOpenResourceHandler((resource: chrome.devtools.inspectedWindow.Resource, line: number) => {
  logToWindow(`Opened resource: ${resource.url}:${line}`)
  const message: Message = {
    type: "open-in-ide",
    file: {
      path: resource.url,
      line
    }
  }
  chrome.runtime.sendMessage(message).then((response)=>{
    if (!response.ok) {
      console.error("Couldnt open file in IDE")
    }
  })

})


function IndexDevtools() {
  return (
    <h2>
      Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
    </h2>
  )
}

export default IndexDevtools