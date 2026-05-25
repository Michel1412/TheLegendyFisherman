// priority: 84
// Rolls de pesca: 60% peixe (tier pela vara) / 40% não-peixe (lixo, tesouro, insígnia, outros).

;(function () {
  var tlf = global.TLF || {}
  tlf.constants = tlf.constants || {}
  tlf.tier = tlf.tier || {}
  tlf.rod = tlf.rod || {}
  tlf.util = tlf.util || {}
  tlf.services = tlf.services || {}
  tlf.services.fishing = tlf.services.fishing || {}

  tlf.tier.index = function (tierId) {
  var tlfI = global.TLF_TIER_ORDER.indexOf(String(tierId))
  return tlfI < 0 ? 1 : tlfI
  }

  tlf.tier.idAtIndex = function (index) {
  var tlfMax = global.TLF_TIER_ORDER.length - 1
  var tlfI = index
  if (tlfI < 0) tlfI = 0
  if (tlfI > tlfMax) tlfI = tlfMax
  return global.TLF_TIER_ORDER[tlfI]
  }

  tlf.util.randomFloat = function (rng) {
  if (rng && typeof rng.nextFloat === 'function') return rng.nextFloat()
  return Math.random()
  }

  tlf.util.randomInt = function (rng, max) {
  if (max <= 0) return 0
  if (rng && typeof rng.nextInt === 'function') return rng.nextInt(max)
  return Math.floor(Math.random() * max)
  }

  tlf.util.pickFromList = function (ids, rng) {
  if (!ids || !ids.length) return null
  var tlfIdx = global.TLF.util.randomInt(rng, ids.length)
  return Item.of(ids[tlfIdx])
  }

  tlf.services.fishing.buildMiscNonFishIds = function () {
  var tlfSet = {}
  var tlfMark = function (id) {
    tlfSet[String(id)] = true
  }
  var tlfI

  if (global.TLF_FISH_IDS) {
    for (tlfI = 0; tlfI < global.TLF_FISH_IDS.length; tlfI++) {
      tlfMark(global.TLF_FISH_IDS[tlfI])
    }
  }
  if (global.TLF_LIXO_IDS) {
    for (tlfI = 0; tlfI < global.TLF_LIXO_IDS.length; tlfI++) {
      tlfMark(global.TLF_LIXO_IDS[tlfI])
    }
  }
  if (global.TLF_TESOURO_IDS) {
    for (tlfI = 0; tlfI < global.TLF_TESOURO_IDS.length; tlfI++) {
      tlfMark(global.TLF_TESOURO_IDS[tlfI])
    }
  }
  if (global.TLF_INSIGNEA_IDS) {
    for (tlfI = 0; tlfI < global.TLF_INSIGNEA_IDS.length; tlfI++) {
      tlfMark(global.TLF_INSIGNEA_IDS[tlfI])
    }
  }

  global.TLF_MISC_NON_FISH_IDS = []
  global.TLF.constants.miscNonFishIds = global.TLF_MISC_NON_FISH_IDS
  if (!global.TLF_PESCAVEL_IDS) return

  for (tlfI = 0; tlfI < global.TLF_PESCAVEL_IDS.length; tlfI++) {
    var tlfId = global.TLF_PESCAVEL_IDS[tlfI]
    if (!tlfSet[tlfId]) {
      global.TLF_MISC_NON_FISH_IDS.push(tlfId)
    }
  }
  global.TLF.constants.miscNonFishIds = global.TLF_MISC_NON_FISH_IDS
  }

  tlf.util.toKubeStack = function (stack) {
  if (!stack) return null
  if (stack.id !== undefined || stack.empty !== undefined) return stack
  try {
    return Item.of(stack)
  } catch (e) {
    return null
  }
  }

  tlf.rod.isImprovised = function (toolStack) {
  var tlfStack = global.TLF.util.toKubeStack(toolStack)
  if (!tlfStack || tlfStack.empty) return false
  return String(tlfStack.id) === 'minecraft:fishing_rod'
  }

  tlf.rod.getTierId = function (toolStack) {
  var tlfStack = global.TLF.util.toKubeStack(toolStack)
  if (!tlfStack || tlfStack.empty) return 'medium'
  if (global.TLF.rod.isImprovised(tlfStack)) return 'low'
  var tlfFromNbt = global.TLF.tier.readFromStack(tlfStack)
  if (tlfFromNbt) return tlfFromNbt.id
  var tlfRodId = String(tlfStack.id)
  if (global.TLF_ROD_DEFAULT_TIER && global.TLF_ROD_DEFAULT_TIER[tlfRodId]) {
    return global.TLF_ROD_DEFAULT_TIER[tlfRodId]
  }
  return 'medium'
  }

/** @returns {string} tier id do peixe */
  tlf.services.fishing.rollFishTierForRod = function (rodTierId, rng, toolStack) {
  if (toolStack && global.TLF.rod.isImprovised(toolStack)) return 'low'
  var tlfCfg = global.TLF_FISHING.FISH_TIER
  var tlfCenter = global.TLF.tier.index(rodTierId)
  var tlfRoll = global.TLF.util.randomFloat(rng)

  if (tlfRoll < tlfCfg.BELOW) {
    if (tlfCenter > 0) return global.TLF.tier.idAtIndex(tlfCenter - 1)
    return global.TLF.tier.idAtIndex(tlfCenter)
  }
  if (tlfRoll < tlfCfg.BELOW + tlfCfg.ABOVE) {
    if (tlfCenter < global.TLF_TIER_ORDER.length - 1) {
      return global.TLF.tier.idAtIndex(tlfCenter + 1)
    }
    return global.TLF.tier.idAtIndex(tlfCenter)
  }
  return global.TLF.tier.idAtIndex(tlfCenter)
  }

  tlf.services.fishing.rollNonFishLoot = function (rodTierId, rng, toolStack) {
  var tlfSub = global.TLF_FISHING.NON_FISH
  var tlfRoll = global.TLF.util.randomFloat(rng)

  if (tlfRoll < tlfSub.LIXO) {
    return global.TLF.util.pickFromList(global.TLF_LIXO_IDS, rng)
  }
  if (tlfRoll < tlfSub.LIXO + tlfSub.TESOURO) {
    var tlfTreasureId = global.TLF_TESOURO_IDS[global.TLF.util.randomInt(rng, global.TLF_TESOURO_IDS.length)]
    var tlfTierId = global.TLF.services.fishing.rollFishTierForRod(rodTierId, rng, toolStack)
    var tlfStack = global.TLF.items.treasureWithTier(tlfTreasureId, tlfTierId, 1)
    if (tlfStack) return tlfStack
    return global.TLF.util.pickFromList(global.TLF_TESOURO_IDS, rng)
  }
  if (tlfRoll < tlfSub.LIXO + tlfSub.TESOURO + tlfSub.INSIGNEA) {
    var tlfIns = global.TLF.util.pickFromList(global.TLF_INSIGNEA_IDS, rng)
    if (tlfIns) return tlfIns
  }
  if (!global.TLF_MISC_NON_FISH_IDS || !global.TLF_MISC_NON_FISH_IDS.length) {
    global.TLF.services.fishing.buildMiscNonFishIds()
  }
  return global.TLF.util.pickFromList(global.TLF_MISC_NON_FISH_IDS, rng)
  }

/** @returns {ItemStack|null} */
  tlf.services.fishing.rollCatch = function (lootContext) {
  if (!global.TLF_FISH_IDS || !global.TLF_FISH_IDS.length) {
    global.TLF_buildFishIds()
  }
  if (!global.TLF_PESCAVEL_IDS || !global.TLF_PESCAVEL_IDS.length) {
    global.TLF_buildPescavelIds()
  }
  global.TLF.services.fishing.buildMiscNonFishIds()

  var tlfRng = lootContext.getRandom ? lootContext.getRandom() : lootContext.random
  var tlfTool = lootContext.getTool ? lootContext.getTool() : lootContext.tool
  var tlfRodTier = global.TLF.rod.getTierId(tlfTool)
  var tlfMain = global.TLF.util.randomFloat(tlfRng)

  if (tlfMain < global.TLF_FISHING.FISH_CHANCE) {
    var tlfFishId = global.TLF_FISH_IDS[global.TLF.util.randomInt(tlfRng, global.TLF_FISH_IDS.length)]
    var tlfFishTier = global.TLF.services.fishing.rollFishTierForRod(tlfRodTier, tlfRng, tlfTool)
    var tlfStack = global.TLF.items.createFishWithTier(tlfFishId, tlfFishTier)
    if (tlfStack) return tlfStack
    return Item.of(tlfFishId)
  }

  return global.TLF.services.fishing.rollNonFishLoot(tlfRodTier, tlfRng, tlfTool)
  }

  global.TLF = tlf

  global.TLF_tierIndex = tlf.tier.index
  global.TLF_tierIdAtIndex = tlf.tier.idAtIndex
  global.TLF_randomFloat = tlf.util.randomFloat
  global.TLF_randomInt = tlf.util.randomInt
  global.TLF_pickFromList = tlf.util.pickFromList
  global.TLF_buildMiscNonFishIds = tlf.services.fishing.buildMiscNonFishIds
  global.TLF_toKubeStack = tlf.util.toKubeStack
  global.TLF_isImprovisedRod = tlf.rod.isImprovised
  global.TLF_getRodTierId = tlf.rod.getTierId
  global.TLF_rollFishTierForRod = tlf.services.fishing.rollFishTierForRod
  global.TLF_rollNonFishLoot = tlf.services.fishing.rollNonFishLoot
  global.TLF_rollFishingCatch = tlf.services.fishing.rollCatch

  ServerEvents.loaded(function () {
    global.TLF.services.fishing.buildMiscNonFishIds()
  })

  global.TLF.services.fishing.buildMiscNonFishIds()
})()
