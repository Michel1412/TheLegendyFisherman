// priority: 0

ItemEvents.tooltip(function (event) {
  if (!global.TLF_ROD_IDS) return

  global.TLF_ROD_IDS.forEach(function (rodId) {
    event.addAdvanced(rodId, function (item, advanced, text) {
      global.TLF.client.tooltips.paintRod(item, text)
    })
  })
})
