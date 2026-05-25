// priority: 50
// Loot de pesca (LootJS 2.12+): addLootTypeModifier + apply.

LootJS.modifiers(function (event) {
  event
    .addLootTypeModifier(LootType.FISHING)
    .removeLoot(Ingredient.all)
    .apply(function (tlfCtx) {
      var tlfStack = global.TLF.services.fishing.rollCatch(tlfCtx)
      if (tlfStack && !tlfStack.empty) {
        tlfCtx.addLoot(LootEntry.of(tlfStack))
      }
    })
})
