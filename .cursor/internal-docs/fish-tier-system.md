# Sistema de tier TLF (peixes e varas)

## Relacionados

- Gameplay: [`../gameplay/progression.md`](../gameplay/progression.md), [`../gameplay/routes.md`](../gameplay/routes.md), [`../gameplay/reputation.md`](../gameplay/reputation.md)
- Tecnico: [`fishing-loot-system.md`](./fishing-loot-system.md), [`ftb-quests-progressao-tlf.md`](./ftb-quests-progressao-tlf.md)

## Conceito

Cada **peixe** (ID da tag `peixes`) pode existir com **qualquer tier** (7 tiers). A combinação é guardada no **NBT** do item:

```json
{ "tlf_tier": "good" }
```

Não são 196 itens registrados — é 1 ID de peixe + NBT.

## Arquivos

| Arquivo | Lado | Função |
|---------|------|--------|
| `startup_scripts/constants/fish_tiers.js` | ambos | `TLF_FISH_TIERS` |
| `server_scripts/constants/fish_ids.js` | server | `TLF_FISH_IDS` via tag |
| `client_scripts/constants/fish_ids.js` | client | mesma lista para tooltip |
| `server_scripts/utils/fish_tier.js` | server | `TLF_applyFishTier`, `TLF_itemWithFishTier`, `TLF_eachFishTier` |
| `client_scripts/utils/fish_tier_client.js` | client | tooltip |
| `client_scripts/tooltips/fish_tooltips.js` | client | registra tooltip em todos os IDs |
| `server_scripts/tags/fish_tiers.js` | server | `#tlf:fish`, `#tlf:tier/<id>` |
| `server_scripts/commands/tlf_tier.js` | server | `/tlf fish`, `/tlf rod`, `/tlf net` |

## Varas de pesca

- Atalho: `varas` → `#forge:tools/fishing_rods`
- Listar: `/listbytag varas`
- Mesmo NBT `tlf_tier`; tooltip usa `tooltipRod` em `fish_tiers.js`
- Comandos: `/tlf rod set good`, `/tlf rod give legendary`
- Tags: `tlf:rods`, `tlf:rod_tier/<id>`

## Comandos de teste

```
/listbytag varas
/tlf fish set good        → tier na mão (peixe)
/tlf fish give legendary  → 1× cada peixe com tier lendário
/tlf rod set excellent    → tier na vara na mão
/tlf rod give perfect     → 1× cada vara com tier perfeito
```

## Tags de item (datapack KubeJS)

- `tlf:fish` — todos os peixes da tag
- `tlf:tier/low`, `tlf:tier/good`, … — mesmo conjunto de IDs (receitas/filtros; tier real está no NBT)

## Tooltip

Mostra: nome colorido, `[tlf:good]`, qualidade, multiplicador, descrição.

Só aparece se o item tiver `tlf_tier` no NBT.

## Uso em outros scripts

```javascript
player.give(global.TLF.items.createFishWithTier('aquaculture:carp', 'excellent', 1))
```

```javascript
global.TLF.items.eachFishTier(function (fishId, tierId) {
  // fishId × tierId
})
```

Os aliases `global.TLF_itemWithFishTier` e `global.TLF_eachFishTier` ainda existem para compatibilidade, mas novos scripts devem preferir o namespace `global.TLF`.
