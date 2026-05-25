// priority: 50
// Única vara do pack: 3 gravetos + 2 cordas, 10 dur., tier LOW fixo no NBT.

ServerEvents.recipes(function (event) {
  event.remove({ output: 'minecraft:fishing_rod' })
  event.remove({ id: /fishing_rod/ })

  event
    .shaped('minecraft:fishing_rod', [
      '  S',
      ' SR',
      'S R'
    ], {
      R: 'farmersdelight:rope',
      S: 'minecraft:stick'
    })
    .id('tlf:improvised_fishing_rod')
    .modifyResult(function (stack) {
      if (global.TLF.rod.applyTier) {
        return global.TLF.rod.applyTier(stack, 'LOW')
      }
      return Item.of('minecraft:fishing_rod', 1, '{tlf_tier:"low",Damage:0}')
    })
})
