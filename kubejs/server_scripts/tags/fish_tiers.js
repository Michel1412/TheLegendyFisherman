// priority: 82
// Tags de item: tlf:fish e tlf:tier/<id> (todos os peixes podem usar cada tier via NBT).

ServerEvents.tags('item', function (event) {
  if (!global.TLF_FISH_IDS || !global.TLF_FISH_IDS.length) return

  global.TLF_FISH_IDS.forEach(function (fishId) {
    event.add('tlf:fish', fishId)
  })

  global.TLF_TIER_IDS.forEach(function (tierId) {
    global.TLF_FISH_IDS.forEach(function (fishId) {
      event.add('tlf:tier/' + tierId, fishId)
    })
  })
})
