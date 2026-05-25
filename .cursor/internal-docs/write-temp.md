# Componente: TLF_writeTagListTemp

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md)
- Tecnico: [`listbytag-command.md`](./listbytag-command.md), [`list-tag-result.md`](./list-tag-result.md)

## Onde está

`kubejs/server_scripts/utils/write_temp.js`  
Prioridade: **85**.

## O que faz

Grava arquivo de texto com todos os IDs listados.

## Caminho da exportação

`logs/kubejs/server.log` — linhas com prefixo `[listbytag-export]`

**Não** usa `kubejs/config/temp/*.txt`: KubeJS 2001 bloqueia `java.io` e `java.nio` no class filter.

## Assinatura

```javascript
global.TLF_writeTagListTemp(alias, tag, ids)
// → string (caminho absoluto do arquivo)
```

## Conteúdo do arquivo

Cabeçalho com atalho, tag, total e uma linha por ID.

## Limitação KubeJS

`Java.loadClass('java.io.File')` falha com: `Class is not allowed by class filter!`  
O BuiltinKubeJSPlugin nega o pacote `java.io` inteiro (exceto `Closeable` / `Serializable`).

## Consumidores

- `utils/list_tag_result.js`
