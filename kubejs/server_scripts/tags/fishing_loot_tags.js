// priority: 78
// Tags de loot de pesca: lixos, tesouros, insignea.

ServerEvents.tags('item', function (event) {
  if (global.TLF_LIXO_IDS) {
    global.TLF_LIXO_IDS.forEach(function (id) {
      event.add('tlf:lixos', id)
    })
  }
  if (global.TLF_TESOURO_IDS) {
    global.TLF_TESOURO_IDS.forEach(function (id) {
      event.add('tlf:tesouros', id)
    })
  }
  if (global.TLF_INSIGNEA_IDS) {
    global.TLF_INSIGNEA_IDS.forEach(function (id) {
      event.add('tlf:insignea', id)
    })
  }
})
