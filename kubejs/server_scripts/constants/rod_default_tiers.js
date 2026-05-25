// priority: 86
// Tier padrão da vara quando não há NBT tlf_tier (por ID do item).

global.TLF_ROD_DEFAULT_TIER = {
  'minecraft:fishing_rod': 'low',
  'aquaculture:wooden_fishing_rod': 'low',
  'aquaculture:iron_fishing_rod': 'low',
  'aquaculture:gold_fishing_rod': 'medium',
  'aquaculture:diamond_fishing_rod': 'good',
  'aquaculture:neptunium_fishing_rod': 'great'
}

global.TLF.constants = global.TLF.constants || {}
global.TLF.constants.rodDefaultTier = global.TLF_ROD_DEFAULT_TIER
