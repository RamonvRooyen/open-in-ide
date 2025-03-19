export const logToWindow = (message: string) => {
  console.log(message)
  chrome.devtools.inspectedWindow.eval(`console.log("${message}")`)
}