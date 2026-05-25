// priority: 83
// Itens que podem sair na pesca (loot tables), além de #minecraft:fishes.
// Fonte: aquaculture:gameplay/fishing/* + minecraft:gameplay/fishing/*

global.TLF_PESCAVEL_EXTRAS = [
  // Aquaculture — fish pool (não estão em #minecraft:fishes)
  'aquaculture:jellyfish',
  'aquaculture:leech',
  'aquaculture:arrau_turtle',
  'aquaculture:box_turtle',
  'aquaculture:starshell_turtle',
  // Aquaculture — junk
  'aquaculture:driftwood',
  'aquaculture:fish_bones',
  'aquaculture:tin_can',
  'aquaculture:box',
  'aquaculture:lockbox',
  'aquaculture:treasure_chest',
  'aquaculture:goldfish',
  'aquaculture:message_in_a_bottle',
  'aquaculture:algae',
  'aquaculture:neptunes_bounty',
  'aquaculture:neptunium_nugget',
  // Vanilla — fish (tabela base; pack pode mesclar com Aquaculture)
  'minecraft:cod',
  'minecraft:salmon',
  'minecraft:tropical_fish',
  'minecraft:pufferfish',
  // Vanilla — junk
  'minecraft:lily_pad',
  'minecraft:leather_boots',
  'minecraft:leather',
  'minecraft:bone',
  'minecraft:potion',
  'minecraft:string',
  'minecraft:bowl',
  'minecraft:stick',
  'minecraft:ink_sac',
  'minecraft:tripwire_hook',
  'minecraft:rotten_flesh',
  'minecraft:bamboo',
  'minecraft:seagrass',
  'minecraft:kelp',
  // Vanilla — treasure
  'minecraft:name_tag',
  'minecraft:saddle',
  'minecraft:bow',
  'minecraft:fishing_rod',
  'minecraft:book',
  'minecraft:nautilus_shell'
]

global.TLF.constants = global.TLF.constants || {}
global.TLF.constants.pescavelExtras = global.TLF_PESCAVEL_EXTRAS

global.TLF_buildPescavelIds = function () {
  var tlfMap = {}
  var tlfAdd = function (id) {
    tlfMap[String(id)] = true
  }

  var tlfPeixes = global.TLF_getByTag('peixes')
  if (tlfPeixes.ok) {
    tlfPeixes.ids.forEach(tlfAdd)
  }

  global.TLF_PESCAVEL_EXTRAS.forEach(tlfAdd)

  global.TLF_PESCAVEL_IDS = []
  for (var tlfKey in tlfMap) {
    global.TLF_PESCAVEL_IDS.push(tlfKey)
  }
  global.TLF_PESCAVEL_IDS.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  global.TLF.constants.pescavelIds = global.TLF_PESCAVEL_IDS

  console.info('[TLF] pescavel: ' + global.TLF_PESCAVEL_IDS.length + ' itens (peixes + loot de pesca)')
}

ServerEvents.loaded(function () {
  global.TLF_buildPescavelIds()
})

global.TLF_buildPescavelIds()
