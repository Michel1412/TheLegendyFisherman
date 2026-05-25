// priority: 87
// Pesos e listas para loot de pesca influenciado pela vara.

;(function () {
  var tlf = global.TLF || {}
  tlf.constants = tlf.constants || {}
  tlf.constants.fishing = tlf.constants.fishing || {}

  tlf.constants.fishing.config = {
    /** 60% peixe ≈ 3× uma base de ~20% peixe */
    FISH_CHANCE: 0.6,
    NON_FISH_CHANCE: 0.4,
    NON_FISH: {
      LIXO: 0.35,
      TESOURO: 0.15,
      INSIGNEA: 0.05,
      OUTROS: 0.45
    },
    FISH_TIER: {
      BELOW: 0.3,
      ABOVE: 0.15,
      ROD: 0.55
    }
  }

  /** Ordem dos tiers (índice = “nível”) */
  tlf.constants.tierOrder = [
    'low',
    'medium',
    'good',
    'great',
    'excellent',
    'perfect',
    'legendary'
  ]

  /** Itens sem utilidade na pesca */
  tlf.constants.fishing.junkIds = [
    'aquaculture:driftwood',
    'aquaculture:fish_bones',
    'aquaculture:tin_can',
    'aquaculture:algae',
    'aquaculture:goldfish',
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
    'minecraft:kelp'
  ]

  /** Caixas / loot abrível (Aquaculture) */
  tlf.constants.fishing.treasureIds = [
    'aquaculture:box',
    'aquaculture:lockbox',
    'aquaculture:treasure_chest',
    'aquaculture:neptunes_bounty',
    'aquaculture:message_in_a_bottle'
  ]

  /** Insígnias — substitua quando houver itens próprios do mod TLF */
  tlf.constants.fishing.insigniaIds = [
    'minecraft:name_tag',
    'minecraft:nautilus_shell',
    'aquaculture:neptunium_nugget',
    'minecraft:heart_of_the_sea'
  ]

  global.TLF = tlf
  global.TLF_FISHING = tlf.constants.fishing.config
  global.TLF_TIER_ORDER = tlf.constants.tierOrder
  global.TLF_LIXO_IDS = tlf.constants.fishing.junkIds
  global.TLF_TESOURO_IDS = tlf.constants.fishing.treasureIds
  global.TLF_INSIGNEA_IDS = tlf.constants.fishing.insigniaIds
})()
