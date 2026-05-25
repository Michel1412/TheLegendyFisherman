// priority: 88
// Aplica tier (NBT tlf_tier) em ItemStack de peixe. Combina peixe × tier via lista das tags.

;(function () {
  var tlf = global.TLF || {}
  tlf.tier = tlf.tier || {}
  tlf.items = tlf.items || {}
  tlf.rod = tlf.rod || {}
  tlf.net = tlf.net || {}
  tlf.entity = tlf.entity || {}
  tlf.util = tlf.util || {}

  tlf.tier.resolve = function (tierKey) {
  if (!tierKey || !global.TLF.constants.tiers) return null
  var tlfK = String(tierKey).toUpperCase()
  if (global.TLF.constants.tiers[tlfK]) return global.TLF.constants.tiers[tlfK]
  var tlfId = String(tierKey).toLowerCase()
  var tlfName
  for (tlfName in global.TLF.constants.tiers) {
    if (global.TLF.constants.tiers[tlfName].id === tlfId) return global.TLF.constants.tiers[tlfName]
  }
  return null
  }

  tlf.items.isFishId = function (itemId) {
  return global.TLF_FISH_IDS && global.TLF_FISH_IDS.indexOf(String(itemId)) >= 0
}

  tlf.items.isTreasureId = function (itemId) {
  return global.TLF_TESOURO_IDS && global.TLF_TESOURO_IDS.indexOf(String(itemId)) >= 0
}

  tlf.rod.isRodId = function (itemId) {
  return global.TLF_ROD_IDS && global.TLF_ROD_IDS.indexOf(String(itemId)) >= 0
}

  tlf.items.applyTierMultiplier = function (stack, tierObj) {
  if (!stack || stack.empty || !tierObj) return stack
  var tlfCount = stack.count || 1
  var tlfNew = Math.max(1, Math.round(tlfCount * tierObj.multiplier))
  if (tlfNew === tlfCount) return stack
  var tlfNbt = stack.nbt ? String(stack.nbt) : null
  if (tlfNbt) return Item.of(String(stack.id), tlfNew, tlfNbt)
  return Item.of(String(stack.id), tlfNew)
  }

  tlf.items.applyTier = function (stack, tierKey) {
  var tlfTier = global.TLF.tier.resolve(tierKey)
  if (!tlfTier || !stack || stack.empty) return stack
  return Item.of(String(stack.id), stack.count || 1, '{tlf_tier:"' + tlfTier.id + '"}')
  }

  tlf.tier.readFromStack = function (stack) {
  if (!stack || stack.empty) return null
  var tlfNbt = stack.nbt
  if (!tlfNbt) return null
  var tlfId = String(tlfNbt.getString('tlf_tier'))
  if (!tlfId || tlfId === 'null') return null
  return global.TLF.tier.resolve(tlfId)
  }

/** @returns ItemStack */
  tlf.items.fishWithTier = function (stack, tierKey) {
  var tlfTier = global.TLF.tier.resolve(tierKey)
  if (!tlfTier || !stack || stack.empty) return stack
  var tlfItemId = String(stack.id)
  if (!global.TLF.items.isFishId(tlfItemId)) return stack
  return Item.of(tlfItemId, stack.count, '{tlf_tier:"' + tlfTier.id + '"}')
  }

  tlf.items.createFishWithTier = function (itemId, tierKey, count) {
  var tlfTier = global.TLF.tier.resolve(tierKey)
  if (!tlfTier || !global.TLF.items.isFishId(itemId)) return null
  var tlfN = count || 1
  return Item.of(String(itemId), tlfN, '{tlf_tier:"' + tlfTier.id + '"}')
  }

  tlf.items.eachFishTier = function (fn) {
  var tlfI, tlfJ, tlfFish, tlfTierId
  for (tlfI = 0; tlfI < global.TLF_FISH_IDS.length; tlfI++) {
    tlfFish = global.TLF_FISH_IDS[tlfI]
    for (tlfJ = 0; tlfJ < global.TLF_TIER_IDS.length; tlfJ++) {
      tlfTierId = global.TLF_TIER_IDS[tlfJ]
      fn(tlfFish, tlfTierId)
    }
  }
  }

  tlf.rod.applyTier = function (stack, tierKey) {
  var tlfTier = global.TLF.tier.resolve(tierKey)
  if (!tlfTier || !stack || stack.empty) return stack
  var tlfItemId = String(stack.id)
  if (!global.TLF.rod.isRodId(tlfItemId)) return stack
  return Item.of(tlfItemId, stack.count, '{tlf_tier:"' + tlfTier.id + '"}')
  }

  tlf.rod.itemWithTier = function (itemId, tierKey, count) {
  var tlfTier = global.TLF.tier.resolve(tierKey)
  if (!tlfTier || !global.TLF.rod.isRodId(itemId)) return null
  var tlfN = count || 1
  return Item.of(String(itemId), tlfN, '{tlf_tier:"' + tlfTier.id + '"}')
  }

  tlf.items.treasureWithTier = function (itemId, tierKey, count) {
  var tlfTier = global.TLF.tier.resolve(tierKey)
  if (!tlfTier || !global.TLF.items.isTreasureId(itemId)) return null
  var tlfStack = Item.of(String(itemId), count || 1, '{tlf_tier:"' + tlfTier.id + '"}')
  tlfStack = global.TLF.items.applyTierMultiplier(tlfStack, tlfTier)
  return tlfStack
  }

  tlf.net.isNetId = function (itemId) {
  return String(itemId) === global.TLF_FISHING_NET_ID
  }

  tlf.net.getTierId = function (stack) {
  var tlfTier = global.TLF.tier.readFromStack(stack)
  if (tlfTier) return tlfTier.id
  return 'medium'
  }

  tlf.net.applyTier = function (stack, tierKey) {
  var tlfTier = global.TLF.tier.resolve(tierKey)
  if (!tlfTier || !stack || stack.empty) return stack
  if (!global.TLF.net.isNetId(String(stack.id))) return stack
  var tlfDmg = stack.damage || 0
  return Item.of(String(stack.id), 1, '{tlf_tier:"' + tlfTier.id + '",Damage:' + tlfDmg + '}')
  }

  tlf.net.itemWithTier = function (tierKey, damage) {
  var tlfTier = global.TLF.tier.resolve(tierKey)
  if (!tlfTier) return null
  var tlfDmg = damage || 0
  return Item.of(global.TLF_FISHING_NET_ID, 1, '{tlf_tier:"' + tlfTier.id + '",Damage:' + tlfDmg + '}')
  }

/** Peixe capturado: 85% tier da rede, 10% acima, 5% abaixo */
  tlf.net.rollFishTier = function (netTierId, rng) {
  var tlfCfg = global.TLF_NET_CAPTURE_TIER
  var tlfOrder = global.TLF_TIER_ORDER
  if (!tlfOrder || !tlfOrder.length) {
    tlfOrder = ['low', 'medium', 'good', 'great', 'excellent', 'perfect', 'legendary']
  }
  var tlfIndex = function (tierId) {
    var tlfI = tlfOrder.indexOf(String(tierId))
    return tlfI < 0 ? 1 : tlfI
  }
  var tlfAt = function (idx) {
    var tlfMax = tlfOrder.length - 1
    var tlfI = idx
    if (tlfI < 0) tlfI = 0
    if (tlfI > tlfMax) tlfI = tlfMax
    return tlfOrder[tlfI]
  }
  var tlfCenter = tlfIndex(netTierId)
  var tlfRoll = rng && typeof rng.nextFloat === 'function' ? rng.nextFloat() : Math.random()

  if (tlfRoll < tlfCfg.BELOW) {
    if (tlfCenter > 0) return tlfAt(tlfCenter - 1)
    return tlfAt(tlfCenter)
  }
  if (tlfRoll < tlfCfg.BELOW + tlfCfg.ABOVE) {
    if (tlfCenter < tlfOrder.length - 1) return tlfAt(tlfCenter + 1)
    return tlfAt(tlfCenter)
  }
  return tlfAt(tlfCenter)
  }

  tlf.util.damageStack = function (player, hand, stack, amount) {
  if (!player || !stack || stack.empty) return Item.empty
  var tlfMax = stack.maxDamage
  if (!tlfMax || tlfMax <= 0) tlfMax = global.TLF_FISHING_NET_MAX_DAMAGE || 64
  var tlfDmg = stack.damage || 0
  var tlfNew = tlfDmg + amount
  var tlfNbt = stack.nbt ? String(stack.nbt) : '{}'
  if (tlfNew >= tlfMax) {
    return Item.empty
  }
  if (stack.nbt && stack.nbt.getString('tlf_tier')) {
    var tlfTier = String(stack.nbt.getString('tlf_tier'))
    return Item.of(String(stack.id), 1, '{tlf_tier:"' + tlfTier + '",Damage:' + tlfNew + '}')
  }
  return Item.of(String(stack.id), 1, '{Damage:' + tlfNew + '}')
  }

  tlf.entity.getTypeId = function (entity) {
  if (!entity) return ''
  if (entity.typeId) return String(entity.typeId)
  if (entity.entityTypeId) return String(entity.entityTypeId)
  if (entity.type) return String(entity.type)
  return String(entity)
  }

  tlf.entity.toFishItemId = function (entity) {
  var tlfId = global.TLF_getEntityTypeId(entity)
  if (global.TLF.items.isFishId(tlfId)) return tlfId
  return null
  }

  tlf.entity.isFish = function (entity) {
  if (!entity) return false
  if (global.TLF.entity.toFishItemId(entity)) return true
  if (entity.is && entity.is('tlf:fish_entities')) return true
  return false
  }

  tlf.rod.eachTier = function (fn) {
  var tlfI, tlfJ, tlfRod, tlfTierId
  for (tlfI = 0; tlfI < global.TLF_ROD_IDS.length; tlfI++) {
    tlfRod = global.TLF_ROD_IDS[tlfI]
    for (tlfJ = 0; tlfJ < global.TLF_TIER_IDS.length; tlfJ++) {
      tlfTierId = global.TLF_TIER_IDS[tlfJ]
      fn(tlfRod, tlfTierId)
    }
  }
  }

  global.TLF = tlf

  global.TLF_resolveTier = tlf.tier.resolve
  global.TLF_isFishId = tlf.items.isFishId
  global.TLF_isTreasureId = tlf.items.isTreasureId
  global.TLF_isRodId = tlf.rod.isRodId
  global.TLF_applyTierMultiplier = tlf.items.applyTierMultiplier
  global.TLF_applyItemTier = tlf.items.applyTier
  global.TLF_readTierFromStack = tlf.tier.readFromStack
  global.TLF_applyFishTier = tlf.items.fishWithTier
  global.TLF_itemWithFishTier = tlf.items.createFishWithTier
  global.TLF_eachFishTier = tlf.items.eachFishTier
  global.TLF_applyRodTier = tlf.rod.applyTier
  global.TLF_itemWithRodTier = tlf.rod.itemWithTier
  global.TLF_itemWithTreasureTier = tlf.items.treasureWithTier
  global.TLF_isNetId = tlf.net.isNetId
  global.TLF_getNetTierId = tlf.net.getTierId
  global.TLF_applyNetTier = tlf.net.applyTier
  global.TLF_itemWithNetTier = tlf.net.itemWithTier
  global.TLF_rollFishTierForNet = tlf.net.rollFishTier
  global.TLF_damageHandStack = tlf.util.damageStack
  global.TLF_getEntityTypeId = tlf.entity.getTypeId
  global.TLF_entityToFishItemId = tlf.entity.toFishItemId
  global.TLF_isFishEntity = tlf.entity.isFish
  global.TLF_eachRodTier = tlf.rod.eachTier
})()
