import type { PlasmoMessaging } from "@plasmohq/messaging"

export type RequestBody = {
}

export type ResponseBody = {
  url: string
}

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  ResponseBody
> = async (req, res) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      res.send({ url: tabs[0].url.toString() });
    }
  });
}

export default handler
