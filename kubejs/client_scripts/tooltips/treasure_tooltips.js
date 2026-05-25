// priority: 0

ItemEvents.tooltip(function (event) {
  event.addAdvanced('#tlf:tesouros', function (item, advanced, text) {
    global.TLF.client.tooltips.paintTreasure(item, text)
  })
})
