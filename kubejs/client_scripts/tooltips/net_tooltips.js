// priority: 0

ItemEvents.tooltip(function (event) {
  event.addAdvanced('kubejs:fishing_net', function (item, advanced, text) {
    global.TLF.client.tooltips.paintNet(item, text)
  })
})
