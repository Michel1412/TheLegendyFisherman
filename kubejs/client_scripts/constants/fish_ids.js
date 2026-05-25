// priority: 95

global.TLF_buildFishIdsClient = function () {
  var tlfIds = []
  try {
    Ingredient.of('#minecraft:fishes').itemIds.forEach(function (id) {
      tlfIds.push(String(id))
    })
  } catch (e) {
    console.error('[TLF] fish ids client: ' + e)
  }
  tlfIds.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  global.TLF_FISH_IDS = tlfIds
  global.TLF.constants.fishIds = global.TLF_FISH_IDS
}

global.TLF_buildFishIdsClient()
