// priority: 77
// Entidades de peixe (mesmo id do item quando existir).

ServerEvents.tags('entity_type', function (event) {
  if (!global.TLF_FISH_IDS || !global.TLF_FISH_IDS.length) return

  global.TLF_FISH_IDS.forEach(function (fishId) {
    try {
      event.add('tlf:fish_entities', fishId)
    } catch (e) {
      // Alguns ids são só item, não entidade — ignorar
    }
  })
})
