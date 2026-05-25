// priority: 10
// Única vara do pack: 10 usos (só a receita TLF em server_scripts/recipes/fishing_rod_tlf.js).

ItemEvents.modification(function (event) {
  event.modify('minecraft:fishing_rod', function (item) {
    item.maxDamage = 10
  })
})
