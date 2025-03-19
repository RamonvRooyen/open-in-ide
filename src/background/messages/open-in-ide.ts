import type { PlasmoMessaging } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

import { fileUrlToPath } from "~util/fileUrlToPath"
import type {Rule} from "~types/rule";
import {getRewrittenPath} from "~util/getRewrittenPath";

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
  //const path = fileUrlToPath(req.body.path)
  const beforeRewrite = decodeURIComponent(req.body.path)

  const path = await getRewrittenPath(beforeRewrite)
  // Intellij only for now
  console.log("Rewrote path", beforeRewrite, path)
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
