# KubeJS — origem dos comandos e APIs (TLF)

Documento de referência: **de onde vêm** as APIs usadas nos scripts deste modpack.  
Versão do pack: **Minecraft 1.20.1**, **KubeJS 2001.6.5**, **Forge**.

Só entram aqui APIs **já usadas no código**. Outras ficam na seção [Não usadas ainda](#não-usadas-ainda).

---

## Comandos no chat (Brigadier)

### `ServerEvents.commandRegistry`

| Campo | Valor |
|-------|--------|
| **Uso no TLF** | `kubejs/server_scripts/commands/listbytag.js` |
| **Fonte** | [wiki.latvian.dev — Command Registry](https://wiki.latvian.dev/books/kubejs-legacy/page/command-registry) |
| **Fonte extra** | [KubeJS llms / ServerEvents](https://context7.com/kubejs-mods/kubejs/llms.txt) (exemplo `commandRegistry`) |
| **Wiki oficial** | [kubejs.com — commandRegistry](https://kubejs.com/wiki/events/ServerEvents/commandRegistry) *(página incompleta)* |

Registra comandos com subcomandos Brigadier. No TLF usamos **`literal`** para cada atalho (ex.: `/listbytag peixes`).

```javascript
ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  let root = Commands.literal('listbytag')
    .then(Commands.literal('test').executes(ctx => { /* ... */ return 1 }))

  Object.keys(global.TLF_TAGS).forEach(function (atalho) {
    root = root.then(
      Commands.literal(atalho).executes(function (ctx) {
        return global.TLF_listTagForCommand(ctx.source, atalho) ? 1 : 0
      })
    )
  })

  event.register(root)
})
```

| Peça | Função |
|------|--------|
| `Commands.literal('nome')` | Subcomando fixo: `/listbytag peixes` |
| `return 1` / `return 0` | Sucesso / falha (Brigadier) |
| `ctx.source` | Quem executou (jogador ou console) |
| `ctx.source.player` | Jogador; `null` se for console |

**Erro comum no Minecraft:** `An unexpected error occurred trying to execute that command` = exceção dentro do `executes` (ex.: variável indefinida, `tell` antes de existir).

**Erro Rhino (KubeJS 2001):** `redeclaration of var …` com nomes comuns (`alias`, `atalho`, `input`, `tag`) e com `const`/`let` em funções chamadas pelo comando. **Solução TLF:**

- Subcomandos `literal` + IIFE no `forEach` de registro
- Variáveis com prefixo `tlf_` e só `var` em `get_by_tag.js` / `list_tag_result.js`
- `function (ctx) { }` em vez de arrow nos `executes`

**Não usado no TLF:** `Commands.argument` + `getResult` para listbytag.

---

### `ServerEvents.customCommand` — não usado no listbytag

| Campo | Valor |
|-------|--------|
| **Fonte** | [kubejs.com — basicCommand / customCommand](https://kubejs.com/wiki/events/ServerEvents/basicCommand) |
| **Status no TLF** | Usado antes em `/listarpeixes`; **substituído** por `commandRegistry` porque não aceita argumentos (`peixes`) de forma simples no 1.20.1 |

```javascript
ServerEvents.customCommand('heal', event => {
  event.player.heal()
})
```

Comando sem argumentos: `/heal`. Para `/listbytag <atalho>`, preferir `commandRegistry`.

---

### `ServerEvents.basicCommand` — não usado

| Campo | Valor |
|-------|--------|
| **Fonte** | [kubejs.com — basicCommand](https://kubejs.com/wiki/events/ServerEvents/basicCommand) |
| **Status** | Documentado para **1.21+** (`event.input`). Não aplicável ao pack 1.20.1. |

---

## Ingredient e tags de itens

### `Ingredient.of(tag).itemIds`

| Campo | Valor |
|-------|--------|
| **Uso no TLF** | `kubejs/server_scripts/utils/get_by_tag.js` |
| **Fonte** | [kubejs.com — Ingredient](https://kubejs.com/wiki/concepts/ingredient) |
| **Fonte legado** | [latvian.dev — Item and Ingredient](https://wiki.latvian.dev/books/kubejs/page/item-and-ingredient) |

```javascript
const ids = []
Ingredient.of('#minecraft:fishes').itemIds.forEach(id => ids.push(String(id)))
```

| Regra | Motivo |
|-------|--------|
| Usar `.forEach` + `push` | `itemIds` é iterador Java no Rhino |
| **Não** usar `.slice()` | `Not implemented yet!` |
| **Não** usar `Array.from()` | `Invalid JavaScript value... JavaIteratorWrapper` |

Tags no TLF: mapa em `constants/tags.js` → `#minecraft:fishes`, etc.

---

## Texto no chat

### `Text.*` e `player.tell`

| Campo | Valor |
|-------|--------|
| **Uso no TLF** | `utils/tell_source.js`, `utils/list_tag_result.js` |
| **Fonte** | Exemplos em [commandRegistry (latvian.dev)](https://wiki.latvian.dev/books/kubejs-legacy/page/command-registry) (`Text.green('...')`) |

```javascript
player.tell(Text.gold('Título'))
player.tell(Text.gray('detalhe'))
player.tell(Text.red('erro'))
```

Wrapper: `global.TLF_tellSource(source, message)`.

---

## Compartilhar código entre arquivos

### `global.NOME`

| Campo | Valor |
|-------|--------|
| **Uso no TLF** | Todas as funções `TLF_*` e `TLF_TAGS` |
| **Fonte** | [kubejs.com — Getting Started](https://kubejs.com/wiki/tutorials/getting-started) (estrutura de pastas) |
| **Padrão da comunidade** | Objeto global Rhino; não há `import` entre scripts |

### `// priority: N`

| Campo | Valor |
|-------|--------|
| **Uso no TLF** | Topo de cada `.js` em `server_scripts/` |
| **Fonte** | [KubeJS issue #86 — ordem de execução](https://github.com/KubeJS-Mods/KubeJS/issues/86) |
| **Regra** | **Número maior = carrega antes**. Ex.: `tags.js` = 100, `listbytag.js` = 0 |

---

## Exportar lista (sem java.io)

### `console.info` + prefixo `[listbytag-export]`

| Campo | Valor |
|-------|--------|
| **Uso no TLF** | `utils/write_temp.js` |
| **Saída** | `logs/kubejs/server.log` |
| **Motivo** | KubeJS 2001 **nega** `java.io` e `java.nio` no class filter |

```javascript
console.info('[listbytag-export] aquaculture:cod')
```

**Não usado (bloqueado):** `Java.loadClass('java.io.File')` → `Class is not allowed by class filter!`

---

## Recarregar scripts

| Comando | Efeito |
|---------|--------|
| `/reload` | Recarrega receitas, tags e `server_scripts` |
| `/kubejs reload server_scripts` | Só scripts servidor |

Fonte: [kubejs.com](https://kubejs.com/) (seção "Can I reload scripts?").

---

## Não usadas ainda

Pedir para importar/documentar quando for usar:

| API | Fonte | Motivo de esperar |
|-----|--------|-------------------|
| `ServerEvents.basicCommand` | [wiki basicCommand](https://kubejs.com/wiki/events/ServerEvents/basicCommand) | 1.21+ |
| `Ingredient.items` / `.stacks` | [wiki Ingredient](https://kubejs.com/wiki/concepts/ingredient) | Alternativa a `itemIds` |
| `ServerEvents.tags('item')` | [server_scripts wiki](https://kubejs.com/wiki/folder-structure/server-scripts) | Criar tags via script |
| `ItemEvents.tooltip` | Já no client | Tooltips de peixe |
| `StartupEvents.registry` | [Getting Started](https://kubejs.com/wiki/tutorials/getting-started) | Itens/blocos custom |
| FilesJS | [LirxOwO](https://www.lirxowo.com/modrec/kubejs/filesjs) | Addon; hoje usamos Java IO |
| `event.suggest` (tab complete) | Brigadier / ProbeJS | Autocomplete de atalhos |

---

## Comandos TLF (implementados)

| Comando | Arquivo |
|---------|---------|
| `/listbytag test` | `commands/listbytag.js` |
| `/listbytag atalhos` | `commands/listbytag.js` |
| `/listbytag peixes` | `literal` de `TLF_TAGS` → `TLF_listTagForCommand` |

Atalhos definidos em `constants/tags.js`.
