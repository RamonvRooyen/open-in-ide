import { sendToBackground } from "@plasmohq/messaging"

import type { Message } from "~types/message"
import { logToWindow } from "~util/logToWindow"

// @ts-ignore
// for some reason line is not in the documentation, but it does work
chrome.devtools.panels.setOpenResourceHandler((resource: chrome.devtools.inspectedWindow.Resource, line: number) => {
    const message: Message = {
      type: "open-in-ide",
      file: {
        path: resource.url,
        line
      }
    }
    sendToBackground({
      name: "open-in-ide",
      body: {
        path: resource.url,
        line: line
      }
    }).then((response) => {
      if (!response.ok) {
        logToWindow("Couldnt open file in IDE")
      } else {
        logToWindow("Opened file in IDE")
      }
    })
  }
)

function IndexDevtools() {
  return (
    <h2>
      Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
    </h2>
  )
}

export default IndexDevtools
