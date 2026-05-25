// priority: 0
// Garante tier LOW em varas improvisadas (craft, drop, give).

ItemEvents.crafted(function (event) {
  var tlfOut = event.output
  if (!tlfOut || tlfOut.empty) return
  if (String(tlfOut.id) !== 'minecraft:fishing_rod') return
  if (global.TLF.tier.readFromStack(tlfOut)) return

  var tlfStack = global.TLF.rod.applyTier
    ? global.TLF.rod.applyTier(tlfOut, 'LOW')
    : Item.of('minecraft:fishing_rod', 1, '{tlf_tier:"low",Damage:' + (tlfOut.damage || 0) + '}')

  event.output = tlfStack
})
