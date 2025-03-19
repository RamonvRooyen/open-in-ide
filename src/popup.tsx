import React from "react"

import { Main } from "~ui/Main"
import { OpenInIdeProvider } from "~ui/OpenInIDEContext"

function PopupIndex() {
  return (
    <OpenInIdeProvider>
      <Main/>
    </OpenInIdeProvider>
  )
}

export default PopupIndex
