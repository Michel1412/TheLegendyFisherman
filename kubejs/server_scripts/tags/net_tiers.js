// priority: 79

ServerEvents.tags('item', function (event) {
  event.add('tlf:nets', global.TLF_FISHING_NET_ID)

  if (global.TLF_TIER_IDS) {
    global.TLF_TIER_IDS.forEach(function (tierId) {
      event.add('tlf:net_tier/' + tierId, global.TLF_FISHING_NET_ID)
    })
  }
})
