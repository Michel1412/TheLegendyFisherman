// priority: 84
// IDs de varas de pesca (atalho varas → #forge:tools/fishing_rods).

global.TLF_buildRodIds = function () {
  var tlfResult = global.TLF_getByTag('varas')
  global.TLF_ROD_IDS = tlfResult.ok ? tlfResult.ids : []
  global.TLF.constants.rodIds = global.TLF_ROD_IDS
  console.info('[TLF] ' + global.TLF_ROD_IDS.length + ' varas de pesca')
}

ServerEvents.loaded(function () {
  global.TLF_buildRodIds()
})

global.TLF_buildRodIds()
