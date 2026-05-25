// priority: 94

global.TLF_buildRodIdsClient = function () {
  var tlfIds = []
  try {
    Ingredient.of('#forge:tools/fishing_rods').itemIds.forEach(function (id) {
      tlfIds.push(String(id))
    })
  } catch (e) {
    console.error('[TLF] rod ids client: ' + e)
  }
  tlfIds.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  global.TLF_ROD_IDS = tlfIds
  global.TLF.constants.rodIds = global.TLF_ROD_IDS
}

global.TLF_buildRodIdsClient()
