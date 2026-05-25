# Componente: TLF_tellSource

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md)
- Tecnico: [`listbytag-command.md`](./listbytag-command.md), [`list-tag-result.md`](./list-tag-result.md)

## Onde está

`kubejs/server_scripts/utils/tell_source.js`  
Prioridade: **95**.

## O que faz

Envia `Text` do KubeJS para quem executou o comando:

- Se for **jogador** → `player.tell(message)`
- Se for **console** → `server.tell(message)`

## Assinatura

```javascript
global.TLF_tellSource(source, message)
```

## Por que existe

Evita duplicar lógica em cada comando e evita bugs como chamar `tell` antes de definir a função (causava `unexpected error` no chat).

## Consumidores

- `utils/list_tag_result.js`
- `commands/listbytag.js` (subcomando `test`)
