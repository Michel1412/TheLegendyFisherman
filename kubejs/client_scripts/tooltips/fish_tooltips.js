// priority: 0
// Tooltip dinâmico: todos os peixes de TLF_FISH_IDS + tier no NBT (tlf_tier).

ItemEvents.tooltip(function (event) {
  if (!global.TLF_FISH_IDS) return

  global.TLF_FISH_IDS.forEach(function (fishId) {
    event.addAdvanced(fishId, function (item, advanced, text) {
      global.TLF.client.tooltips.paintFish(item, text)
    })
  })
})
