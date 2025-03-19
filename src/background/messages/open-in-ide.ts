import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fileUrlToPath } from "~util/fileUrlToPath"

export type RequestBody = {
  path: string
  line: number
}

export type ResponseBody = {
  ok: boolean
}

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  ResponseBody
> = async (req, res) => {
  const path = fileUrlToPath(req.body.path)
  console.log("path", path)

  fetch(
    `http://localhost:63342/api/file/${encodeURI(path)}?line=${req.body.line}`
  )
    .then((resp) => {
      res.send({ ok: resp.status < 300 })
    })
    .catch(() => {
      res.send({ ok: false })
    })
}

export default handler
