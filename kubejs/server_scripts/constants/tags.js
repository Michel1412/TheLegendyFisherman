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

global.TLF.constants = global.TLF.constants || {}
global.TLF.constants.tags = global.TLF_TAGS
