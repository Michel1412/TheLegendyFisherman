# Componente: TLF_listTagForCommand / TLF_listAtalhosForCommand

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md), [`../gameplay/progression.md`](../gameplay/progression.md)
- Tecnico: [`listbytag-command.md`](./listbytag-command.md), [`get-by-tag.md`](./get-by-tag.md), [`write-temp.md`](./write-temp.md), [`tell-source.md`](./tell-source.md)

## Onde está

`kubejs/server_scripts/utils/list_tag_result.js`  
Prioridade: **80**.

## O que faz

Orquestra o fluxo completo do comando (sem registrar Brigadier):

| Função | Ação |
|--------|------|
| `TLF_listTagForCommand(source, tagOrAlias)` | getByTag → chat → arquivo → log |
| `TLF_listAtalhosForCommand(source)` | imprime mapa `TLF_TAGS` |

## Retorno

`TLF_listTagForCommand` retorna `true`/`false` para o Brigadier (`return 1` / `return 0` no comando).

## Dependências

```
TLF_getByTag
TLF_writeTagListTemp
TLF_tellSource
TLF_TAGS (via getByTag)
```

## Consumidores

- `commands/listbytag.js`
