// priority: 65
// Rede: utensílio com durabilidade; tier da rede define tier do peixe (85/10/5).

ItemEvents.entityInteracted(global.TLF_FISHING_NET_ID, function (event) {
  var tlfTarget = event.target
  var tlfPlayer = event.player
  var tlfNet = event.item
  var tlfHand = event.hand

  if (!tlfTarget || !tlfPlayer || !tlfNet || tlfNet.empty) return
  if (!global.TLF.entity.isFish(tlfTarget)) return

  var tlfFishId = global.TLF.entity.toFishItemId(tlfTarget)
  if (!tlfFishId) return

  if (!global.TLF.tier.readFromStack(tlfNet)) {
    tlfNet = global.TLF.net.itemWithTier('medium', tlfNet.damage || 0)
  }

  var tlfNetTier = global.TLF.net.getTierId(tlfNet)
  var tlfRng = tlfPlayer.level.random
  var tlfFishTier = global.TLF.net.rollFishTier(tlfNetTier, tlfRng)
  var tlfStack = global.TLF.items.createFishWithTier(tlfFishId, tlfFishTier, 1)
  if (!tlfStack) return

  tlfPlayer.give(tlfStack)
  tlfTarget.discard()

  var tlfBroken = global.TLF.util.damageStack(tlfPlayer, tlfHand, tlfNet, 1)
  tlfPlayer.setItemInHand(tlfHand, tlfBroken)

  event.cancel()
})
