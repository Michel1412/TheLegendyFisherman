// priority: 80
// Tag custom TLF: tudo que pode sair na pesca (ver constants/pescavel_ids.js).

ServerEvents.tags('item', function (event) {
  if (!global.TLF_PESCAVEL_IDS || !global.TLF_PESCAVEL_IDS.length) return

  global.TLF_PESCAVEL_IDS.forEach(function (itemId) {
    event.add('tlf:pescavel', itemId)
  })
})
