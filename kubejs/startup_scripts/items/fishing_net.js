// priority: 10
// Utensílio único: 1 por stack, 64 de durabilidade (como vara de pesca).

StartupEvents.registry('item', function (event) {
  event
    .create('fishing_net')
    .displayName('Rede de Pesca')
    .maxStackSize(1)
    .maxDamage(64)
    .tooltip('Clique em um peixe para capturá-lo.')
})
