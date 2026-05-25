# Componente: TLF_TAGS

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md), [`../gameplay/progression.md`](../gameplay/progression.md)
- Tecnico: [`pescavel-loot.md`](./pescavel-loot.md), [`listbytag-command.md`](./listbytag-command.md)

## Onde está

`kubejs/server_scripts/constants/tags.js`  
Prioridade: **100** (carrega primeiro).

## O que faz

Define atalhos em português/snake_case → tags do Minecraft/Forge:

```javascript
global.TLF_TAGS = {
  peixes: '#minecraft:fishes',
  peixes_crus: '#forge:raw_fishes',
  pescavel: '#tlf:pescavel',
  varas: '#forge:tools/fishing_rods'
}

`pescavel` é tag **custom** do TLF (ver [pescavel-loot.md](./pescavel-loot.md)).
```

## Como estender

Adicione uma linha no objeto e use `/listbytag <novo_atalho>`.

Exemplo:

```javascript
varas: '#forge:fishing_rods'
```

## Consumidores

- `utils/get_by_tag.js` — resolve atalho → tag
- `utils/list_tag_result.js` — lista atalhos no comando `/listbytag atalhos`
