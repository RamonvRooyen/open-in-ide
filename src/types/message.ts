export type Message = {
  type: "open-in-ide",
  file: {
    path: string,
    line: number
  }
} | {
  type: "get-current-url",
}