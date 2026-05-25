// priority: 81

ServerEvents.tags('item', function (event) {
  if (!global.TLF_ROD_IDS || !global.TLF_ROD_IDS.length) return

  global.TLF_ROD_IDS.forEach(function (rodId) {
    event.add('tlf:rods', rodId)
  })

  global.TLF_TIER_IDS.forEach(function (tierId) {
    global.TLF_ROD_IDS.forEach(function (rodId) {
      event.add('tlf:rod_tier/' + tierId, rodId)
    })
  })
})
