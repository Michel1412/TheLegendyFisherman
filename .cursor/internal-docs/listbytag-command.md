# Comando: /listbytag

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md), [`../gameplay/progression.md`](../gameplay/progression.md)
- Tecnico: [`tags-constants.md`](./tags-constants.md), [`pescavel-loot.md`](./pescavel-loot.md)

## Onde está

`kubejs/server_scripts/commands/listbytag.js`  
Prioridade: **0**.

## Subcomandos (todos `literal`)

| Comando | Como é registrado |
|---------|-------------------|
| `/listbytag test` | `literal('test')` fixo |
| `/listbytag atalhos` | `literal('atalhos')` fixo |
| `/listbytag peixes` | `literal('peixes')` gerado de `TLF_TAGS` |
| `/listbytag peixes_crus` | idem |

Novos atalhos em `constants/tags.js` viram subcomando automaticamente após `/reload`.

## Por que não usa argumento STRING

No KubeJS 2001 + Rhino, ler argumento com `getResult` / `getString` dentro de `executes` causa:

```
redeclaration of var input
```

Solução adotada: **cada atalho é um `literal`**, sem valor vindo do chat.

## Registro dinâmico

```javascript
Object.keys(global.TLF_TAGS).forEach(function (atalho) {
  root = root.then(
    Commands.literal(atalho).executes(function (ctx) {
      return global.TLF_listTagForCommand(ctx.source, atalho) ? 1 : 0
    })
  )
})
```

## Limitação

Tags novas precisam de entrada em `TLF_TAGS` (não dá para passar `#minecraft:fishes` arbitrário pelo chat). Para tag avulsa, adicione um atalho no mapa.

## Fluxo

`listbytag.js` → `TLF_listTagForCommand` → `TLF_getByTag` + `TLF_writeTagListTemp` + `TLF_tellSource`

## Testar

1. `/reload`
2. `/listbytag test`
3. `/listbytag peixes`

Exportação: `logs/kubejs/server.log` (buscar `[listbytag-export]`)
