# KubeJS reativado

Data: 2026-05-25.
Reativado: 2026-05-26.

Motivo original: a lista de mods mudou bastante e o projeto precisava validar build, mapa, registries e progresso sem interferencia dos ajustes atuais de KubeJS.

Status atual: modo minimo encerrado. Os scripts `*.js.disabled` foram reativados para `*.js`.

## Estrategia

Os scripts haviam sido desativados por renomeacao reversivel de `*.js` para `*.js.disabled`.

Em 2026-05-26, os scripts pausados foram reativados. A unica excecao foi o duplicado antigo de `startup_scripts/items/fishing_net.js.disabled`, que foi removido porque `startup_scripts/items/fishing_net.js` ja existe corrigido e com modelo valido.

Arquivos que tinham sido mantidos ativos durante o modo minimo:

- `server_scripts/00_core/tlf_namespace.js`
- `server_scripts/constants/tags.js`
- `server_scripts/utils/tell_source.js`
- `server_scripts/utils/get_by_tag.js`
- `server_scripts/utils/list_tag_result.js`
- `server_scripts/utils/write_temp.js`
- `server_scripts/commands/listbytag.js`

Esse subconjunto existe apenas para manter os comandos de descoberta:

- `/listbytag atalhos`
- `/listbytag trofeus`
- `/listbytag iscas`
- `/listbytag anzois`
- `/tlf list trophies`
- `/tlf list baits`
- `/tlf list hooks`

## O que foi reativado

- Registro de itens KubeJS (`hook`, `fishing_net`).
- Alteracao da vara vanilla.
- Receitas customizadas.
- Tags TLF geradas para tiers, peixes, varas, redes e loot.
- Modificador de loot de pesca via LootJS.
- Tooltips client-side.
- Remocao de drops de entidades de peixe.
- Comandos antigos de tier (`/tlf fish|rod|net ...`).
- Scripts de teste.

## Como foi reativado

Foi usado o mesmo processo de renomeacao reversivel, preservando o `fishing_net.js` corrigido:

```powershell
Get-ChildItem -Path kubejs -Recurse -Filter *.js.disabled | ForEach-Object {
  Rename-Item -LiteralPath $_.FullName -NewName ($_.Name -replace '\.disabled$', '')
}
```

Depois abra o jogo novamente. Como scripts de `startup_scripts` foram reativados, `/reload` sozinho nao basta.

## Observacao

O modo minimo nao esta mais ativo. Itens criados por `StartupEvents.registry`, como `kubejs:fishing_net` e `kubejs:hook`, devem voltar ao registry depois de reiniciar o Minecraft.
