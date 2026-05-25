// priority: 85
// IDs de peixes a partir da tag peixes (TLF_TAGS). Carrega após get_by_tag (90).

global.TLF_buildFishIds = function () {
  var tlfResult = global.TLF_getByTag('peixes')
  global.TLF_FISH_IDS = tlfResult.ok ? tlfResult.ids : []
  global.TLF_TIER_IDS = []
  Object.keys(global.TLF.constants.tiers).forEach(function (k) {
    global.TLF_TIER_IDS.push(global.TLF.constants.tiers[k].id)
  })
  global.TLF.constants.fishIds = global.TLF_FISH_IDS
  global.TLF.constants.tierIds = global.TLF_TIER_IDS
  console.info('[TLF] ' + global.TLF_FISH_IDS.length + ' peixes, ' + global.TLF_TIER_IDS.length + ' tiers')
}

ServerEvents.loaded(function () {
  global.TLF_buildFishIds()
})

global.TLF_buildFishIds()
