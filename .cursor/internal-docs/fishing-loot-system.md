# Sistema de loot de pesca (TLF)

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md), [`../gameplay/progression.md`](../gameplay/progression.md), [`../gameplay/pacing-economy.md`](../gameplay/pacing-economy.md)
- Tecnico: [`fish-tier-system.md`](./fish-tier-system.md), [`pescavel-loot.md`](./pescavel-loot.md), [`fishing-loot-checklist.md`](./fishing-loot-checklist.md)

## Objetivo

A **vara de pesca** (tier NBT `tlf_tier` ou tier padrão por material) controla o que sai na pesca via **LootJS**, substituindo o loot das tabelas `FISHING` e `aquaculture:gameplay/fishing/*`.

## Proporções

### Grupo principal (cada captura)

| Resultado | Chance |
|-----------|--------|
| Peixe (`#minecraft:fishes` + tier NBT) | **60%** |
| Não-peixe | **40%** |

A meta de “**3× mais chance de peixe**” usa 60% como alvo (~3× uma base de 20%).

### Se não for peixe (40%)

| Subtipo | Tag | Chance dentro do não-peixe |
|---------|-----|----------------------------|
| Lixo | `#tlf:lixos` | 35% |
| Tesouro (caixas) | `#tlf:tesouros` | 15% |
| Insígnia | `#tlf:insignea` | 5% |
| Outros pescáveis | `#tlf:pescavel` (exceto peixe e tags acima) | 45% |

### Se for peixe — tier do item

Centro = tier da vara. Sempre **3 tiers** possíveis (abaixo / vara / acima), com fallback no tier da vara se não houver vizinho.

| Tier do peixe | Chance |
|---------------|--------|
| 1 abaixo da vara | 30% |
| Igual à vara | 55% |
| 1 acima da vara | 15% |

## Arquivos

| Arquivo | Função |
|---------|--------|
| `constants/fishing_loot_constants.js` | Pesos e listas de IDs |
| `constants/rod_default_tiers.js` | Tier padrão por ID da vara |
| `utils/fishing_loot.js` | Funções de roll |
| `tags/fishing_loot_tags.js` | Registro das tags |
| `loot/fishing_loot_modifier.js` | LootJS (`addLootTypeModifier` + `apply` — API 2.12/2.13) |

## Comandos úteis

```
/reload
/listbytag lixos
/listbytag tesouros
/listbytag insignea
/tlf rod set good
/tlf rod give legendary
```

## Tesouros com tier (sorte)

Ao pescar um item de `#tlf:tesouros`, o tier segue a mesma regra da vara (30% abaixo / 55% vara / 15% acima). O **multiplicador do tier** aumenta a **quantidade** do item (ex.: tier 2.0x → 2 caixas).

## Rede de pesca

- Item: `kubejs:fishing_net` — textura em `kubejs/assets/kubejs/textures/item/fishing_net.png`
- Utensílio **único** (stack 1), **64** de durabilidade (como vara)
- Tier no NBT da rede: `/tlf net set <tier>` | `/tlf net give <tier>`
- Captura: **85%** tier da rede, **10%** acima, **5%** abaixo
- Peixes mortos **não dropam** loot (`EntityEvents.drops`)

## Expandir insígnias

Edite `TLF_INSIGNEA_IDS` em `fishing_loot_constants.js` e recarregue.
