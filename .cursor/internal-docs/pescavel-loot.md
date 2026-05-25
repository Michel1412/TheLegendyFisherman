# O que pode ser pescado (TLF)

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md), [`../gameplay/pacing-economy.md`](../gameplay/pacing-economy.md)
- Tecnico: [`fishing-loot-system.md`](./fishing-loot-system.md), [`tags-constants.md`](./tags-constants.md)

## Não existe uma tag vanilla única

A pesca usa **loot tables**, não uma tag de itens “pescáveis”:

| Loot table | Mod | Conteúdo |
|------------|-----|----------|
| `aquaculture:gameplay/fishing/fish` | Aquaculture | Peixes + tartarugas, leech, jellyfish, etc. |
| `aquaculture:gameplay/fishing/junk` | Aquaculture | Lata, baú, goldfish, algas… |
| `aquaculture:gameplay/fishing/neptunium` | Aquaculture | Neptune's Bounty, nugget |
| `minecraft:gameplay/fishing/fish` | Vanilla | cod, salmon, tropical, pufferfish |
| `minecraft:gameplay/fishing/junk` | Vanilla | lily pad, leather, bone, bowl… |
| `minecraft:gameplay/fishing/treasure` | Vanilla | saddle, name tag, bow, book… |

## Tags de item no pack

| Atalho `listbytag` | Tag | O que lista |
|--------------------|-----|-------------|
| `peixes` | `#minecraft:fishes` | Só itens “peixe” do Aquaculture (28) |
| `pescavel` | `#tlf:pescavel` | **Lista completa TLF** para loot de pesca |

`#minecraft:fishes` **não inclui** lixo, tesouro, tartarugas pescadas, jellyfish, leech, etc.

## Como `#tlf:pescavel` é montada

Arquivo: `server_scripts/constants/pescavel_ids.js`

1. Todos os IDs de `#minecraft:fishes` (via `TLF_getByTag('peixes')`)
2. + `TLF_PESCAVEL_EXTRAS` (itens das loot tables acima que faltam na tag vanilla)

Registro da tag: `server_scripts/tags/pescavel.js`

## Comando

```
/reload
/listbytag pescavel
/listbytag peixes
```

Exportação no log: prefixo `[listbytag-export]` em `logs/kubejs/server.log`.

## Próximo passo (loot table)

Editar pools com LootJS / `LootJS` ou `ServerEvents.lootTables` usando `#tlf:pescavel` ou subconjuntos por tier.
