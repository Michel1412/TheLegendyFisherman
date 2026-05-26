// priority: 100
// Mapa de atalhos → tags. Adicione novas entradas conforme o modpack evoluir.

global.TLF_TAGS = {
  // Peixes como item (#minecraft:fishes) — 28 no Aquaculture
  peixes: '#minecraft:fishes',
  peixes_crus: '#forge:raw_fishes',
  // Tudo que pode sair na pesca (peixes + lixo + tesouro + extras) — tag TLF
  pescavel: '#tlf:pescavel',
  varas: '#forge:tools/fishing_rods',
  // Loot de pesca (não-peixe)
  lixos: '#tlf:lixos',
  tesouros: '#tlf:tesouros',
  insignea: '#tlf:insignea'
}

// Categorias de descoberta: usam tags candidatas quando existirem e,
// se possivel, varrem IDs por palavras-chave/modid para novos mods de pesca.
global.TLF_DISCOVERY_LISTS = {
  trofeus: {
    label: 'Troféus',
    aliases: ['trophy', 'trophies', 'trofeus', 'trofeu'],
    tagCandidates: [
      '#forge:trophies',
      '#forge:trofeus',
      '#starcatcher:trophies',
      '#tide:trophies',
      '#aquaculture:trophies'
    ],
    modids: ['starcatcher', 'tide', 'aquaculture', 'fishingreal'],
    keywords: ['trophy', 'trophies', 'trofeu', 'trofeus', 'troféu', 'troféus'],
    excludeKeywords: []
  },
  iscas: {
    label: 'Iscas',
    aliases: ['bait', 'baits', 'iscas', 'isca'],
    tagCandidates: [
      '#forge:baits',
      '#forge:fishing_baits',
      '#aquaculture:baits',
      '#aquaculture:fishing_baits',
      '#tide:baits',
      '#fishingreal:baits',
      '#starcatcher:baits'
    ],
    modids: ['aquaculture', 'tide', 'fishingreal', 'starcatcher', 'fishermens_trap'],
    keywords: ['bait', 'baits', 'isca', 'iscas', 'worm', 'worms', 'minnow', 'leeches', 'leech'],
    excludeKeywords: []
  },
  anzois: {
    label: 'Anzóis',
    aliases: ['hook', 'hooks', 'anzois', 'anzol'],
    tagCandidates: [
      '#forge:hooks',
      '#forge:fishing_hooks',
      '#aquaculture:hooks',
      '#aquaculture:fishing_hooks',
      '#tide:hooks',
      '#fishingreal:hooks',
      '#starcatcher:hooks'
    ],
    modids: ['aquaculture', 'tide', 'fishingreal', 'starcatcher', 'kubejs'],
    keywords: ['hook', 'hooks', 'anzol', 'anzois', 'anzóis'],
    excludeKeywords: ['tripwire_hook']
  }
}

global.TLF.constants = global.TLF.constants || {}
global.TLF.constants.tags = global.TLF_TAGS
global.TLF.constants.discoveryLists = global.TLF_DISCOVERY_LISTS
