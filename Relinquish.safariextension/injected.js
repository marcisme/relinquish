function messageHandler(event) {
  if (event.name === "focusMainPage") {
    var element = document.querySelector("input[value='" + event.message + "']")
    if (element) {
      element.focus()
      element.blur()
    }
  }
}

safari.self.addEventListener("message", messageHandler, false)

safari.self.tab.dispatchMessage("hasQuery")

