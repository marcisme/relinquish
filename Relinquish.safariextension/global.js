var query

function beforeSearchHandler(event) {
  query = event.query
}

safari.application.addEventListener("beforeSearch", beforeSearchHandler, true)

function messageHandler(event) {
  if (event.name === "hasQuery") {
    if (query) {
      safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("focusMainPage", query)
      query = undefined
    }
  }
}

safari.application.addEventListener("message", messageHandler, false)

