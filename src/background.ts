import type { Message } from "~types/message"
import { fileUrlToPath } from "~util/fileUrlToPath"

export {}
chrome.runtime.onMessage.addListener(
  (message: Message, sender, sendResponse) => {
    console.log("Received message in background:", message)

    if (message.type === "open-in-ide") {
      const file = message.file
      const path = fileUrlToPath(file.path)
      console.log("path", path)
      fetch(
        `http://localhost:63342/api/file/${encodeURI(path)}?line=${file.line}`
      )
        .then(() => {
          sendResponse({ ok: true })
        })
        .catch(() => {
          sendResponse({ ok: false })
        })
    }

    return true
  }
)
