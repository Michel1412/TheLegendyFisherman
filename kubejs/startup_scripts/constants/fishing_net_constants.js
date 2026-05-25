// priority: 100

;(function () {
  var tlf = global.TLF || {}
  tlf.constants = tlf.constants || {}
  tlf.constants.net = tlf.constants.net || {}

  tlf.constants.net.id = 'kubejs:fishing_net'
  tlf.constants.net.maxDamage = 64
  tlf.constants.net.captureTier = {
    BELOW: 0.05,
    ABOVE: 0.1,
    NET: 0.85
  }

  global.TLF = tlf
  global.TLF_FISHING_NET_ID = tlf.constants.net.id
  global.TLF_FISHING_NET_MAX_DAMAGE = tlf.constants.net.maxDamage
  global.TLF_NET_CAPTURE_TIER = tlf.constants.net.captureTier
})()
