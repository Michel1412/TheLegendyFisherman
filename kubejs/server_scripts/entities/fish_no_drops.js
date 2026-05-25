// priority: 70
// Peixes vivos não dropam itens ao morrer (use a rede de pesca).

EntityEvents.drops(function (event) {
  if (!global.TLF_isFishEntity(event.entity)) return
  event.drops.clear()
})
