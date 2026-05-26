// priority: 10
// Utensilio unico para introduzir que peixes podem existir como entidades.

StartupEvents.registry('item', function (event) {
  event
    .create('fishing_net')
    .displayName('Rede de Pesca')
    .maxStackSize(1)
    .maxDamage(64)
})
