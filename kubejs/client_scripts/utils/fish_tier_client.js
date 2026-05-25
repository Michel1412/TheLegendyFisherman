// priority: 90

;(function () {
  var tlf = global.TLF || {}
  tlf.client = tlf.client || {}
  tlf.client.tier = tlf.client.tier || {}
  tlf.client.tooltips = tlf.client.tooltips || {}

  tlf.client.tier.resolve = function (tierKey) {
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

  tlf.client.tier.readFromItem = function (item) {
  if (!item || item.empty || !item.nbt) return null
  var tlfRaw = String(item.nbt.getString('tlf_tier'))
  if (!tlfRaw || tlfRaw === 'null' || tlfRaw === '') return null
  return global.TLF.client.tier.resolve(tlfRaw)
  }

  tlf.client.tooltips.paintFish = function (item, text) {
  var tlfTier = global.TLF.client.tier.readFromItem(item)
  if (!tlfTier) return

  text.set(0, Text.of(item.hoverName).color(tlfTier.color))
  text.add(1, Text.of(''))
  text.add(2, Text.darkGray('[tlf:' + tlfTier.id + ']'))
  text.add(3, Text.of('Qualidade: ' + tlfTier.display).color(tlfTier.color))
  text.add(4, Text.of('Multiplicador: ' + tlfTier.multiplier + 'x').gold())
  text.add(5, Text.of(tlfTier.tooltip).gray().italic())
  }

  tlf.client.tooltips.paintRod = function (item, text) {
  var tlfTier = global.TLF.client.tier.readFromItem(item)
  if (!tlfTier && item && String(item.id) === 'minecraft:fishing_rod') {
    tlfTier = global.TLF.client.tier.resolve('LOW')
  }
  if (!tlfTier) return

  var tlfRodTip = tlfTier.tooltipRod || tlfTier.tooltip

  text.set(0, Text.of(item.hoverName).color(tlfTier.color))
  text.add(1, Text.of(''))
  text.add(2, Text.darkGray('[tlf:' + tlfTier.id + ']'))
  text.add(3, Text.of('Qualidade da vara: ' + tlfTier.display).color(tlfTier.color))
  text.add(4, Text.of('Bônus de pesca: ' + tlfTier.multiplier + 'x').gold())
  text.add(5, Text.of(tlfRodTip).gray().italic())
  }

  tlf.client.tooltips.paintTreasure = function (item, text) {
  var tlfTier = global.TLF.client.tier.readFromItem(item)
  if (!tlfTier) return

  text.set(0, Text.of(item.hoverName).color(tlfTier.color))
  text.add(1, Text.of(''))
  text.add(2, Text.darkGray('[tlf:' + tlfTier.id + ']'))
  text.add(3, Text.of('Sorte (tier): ' + tlfTier.display).color(tlfTier.color))
  text.add(4, Text.of('Multiplicador de loot: ' + tlfTier.multiplier + 'x').gold())
  text.add(5, Text.of('A quantidade do item é multiplicada pelo tier.').gray().italic())
  }

  tlf.client.tooltips.paintNet = function (item, text) {
  var tlfTier = global.TLF.client.tier.readFromItem(item)
  if (!tlfTier) return

  text.set(0, Text.of(item.hoverName).color(tlfTier.color))
  text.add(1, Text.of(''))
  text.add(2, Text.darkGray('[tlf:' + tlfTier.id + ']'))
  text.add(3, Text.of('Qualidade da rede: ' + tlfTier.display).color(tlfTier.color))
  text.add(5, Text.of('para aqueles querem caçar como o Bob.').gray().italic())
  }

  global.TLF = tlf
  global.TLF_resolveTierClient = tlf.client.tier.resolve
  global.TLF_readTierFromItem = tlf.client.tier.readFromItem
  global.TLF_paintFishTooltip = tlf.client.tooltips.paintFish
  global.TLF_paintRodTooltip = tlf.client.tooltips.paintRod
  global.TLF_paintTreasureTooltip = tlf.client.tooltips.paintTreasure
  global.TLF_paintNetTooltip = tlf.client.tooltips.paintNet
})()
