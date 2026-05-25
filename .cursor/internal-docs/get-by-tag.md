# Componente: TLF_getByTag

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md), [`../gameplay/progression.md`](../gameplay/progression.md)
- Tecnico: [`tags-constants.md`](./tags-constants.md), [`listbytag-command.md`](./listbytag-command.md)

## Onde está

`kubejs/server_scripts/utils/get_by_tag.js`  
Prioridade: **90**.

## O que faz

Recebe atalho (`peixes`) ou tag completa (`#minecraft:fishes`) e devolve lista ordenada de IDs de itens.

## Assinatura

```javascript
global.TLF_getByTag(tagOrAlias)
// → { ok, alias, tag?, ids[], error? }
```

## Regras importantes

1. Atalho sem `#` → busca em `global.TLF_TAGS`
2. Texto com `#` → usa como tag direta
3. Coleta IDs com `Ingredient.of(tag).itemIds.forEach` (nunca `Array.from` nem `.slice`)
4. **Rhino 2001:** não usar `const`/`let` nem nomes `alias`, `tag`, `ids`, `atalho` — usar `var tlfKey`, `tlfTag`, `tlfIds`
5. Ordenação com `tlfIds.sort(function(a,b){...})` em vez de `.sort()` sem comparador

## Consumidores

- `utils/list_tag_result.js`

## Origem da API

Ver [.cursor/kubejs-docs/kubejs-origin-command.md](../kubejs-docs/kubejs-origin-command.md) — seção Ingredient.
