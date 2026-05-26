# Checkpoints TLF: MineColonies, Spawn e Rede

Status: verificacao estatica concluida em 2026-05-26.

## CP1 - Styles padrao do MineColonies

Status: concluido como soft-lock documentado.

- Documento: `minecolonies-styles.md`
- Config: `config/structurize-common.toml`
- Decisao: manter `ignoreSchematicsFromJar = false` para nao quebrar huts do MineColonies.
- Trava aplicada: narrativa/progressao/documentacao usando apenas `nordic`.

## CP2 - Style default tematico

Status: concluido como default narrativo.

- Style ativo recomendado: `nordic`
- Nome narrativo: `Medieval Nordic Fishing Village`
- Stub futuro: `blueprints/medieval_nordic_fishing_village/pack.json`

## CP3 - Supply Camp custom

Status: estrutura pronta e primeira blueprint registrada.

- How-to: `supplycamp-howto.md`
- Blueprint oficial existente: `blueprints/chelzinho/scans/fishercamp1.blueprint`
- Copias TLF:
  - `blueprints/medieval_nordic_fishing_village/decorations/fishercamp1.blueprint`
  - `blueprints/medieval_nordic_fishing_village/supplycamp/fishercamp1.blueprint`
  - `blueprints/medieval_nordic_fishing_village/decorations/supplies/camp.blueprint`
  - `blueprints/medieval_nordic_fishing_village/decorations/supplies/supplycamp.blueprint`
  - `blueprints/medieval_nordic_fishing_village/decorations/supplies/ship.blueprint`
  - `blueprints/medieval_nordic_fishing_village/decorations/supplies/supplyship.blueprint`
- Override local do style `nordic`:
  - `blueprints/minecolonies/nordic/decorations/supplies/camp.blueprint`
  - `blueprints/minecolonies/nordic/decorations/supplies/supplycamp.blueprint`
  - `blueprints/minecolonies/nordic/decorations/supplies/ship.blueprint`
  - `blueprints/minecolonies/nordic/decorations/supplies/supplyship.blueprint`
- Variantes previstas:
  - `pier_decadente.blueprint`
  - `porto_pequeno.blueprint`
  - `cais_improvisado.blueprint`
  - `barco_velho.blueprint`

## CP4 - Tema central

Status: concluido.

Frase oficial registrada em `../manifests/vision.md`:

> "Viva como um pescador humilde, aproveitando a paz e da leveza da vida"

## CP5 - Base wiki MineColonies

Status: concluido.

- Documento: `minecolonies-base.md`
- Fonte: https://minecolonies.com/wiki/items/supply_camp_and_ship/
- Arquivo de apoio: `uploads/supply_camp_and_ship-0.md`

## CP6 - Spawn imersivo

Status: implementacao KubeJS concluida; blueprint oficial definida; validacao in-game pendente.

- Script: `kubejs/server_scripts/events/tlf_first_join.js`
- Automatiza:
  - `spawnRadius = 0`;
  - chuva;
  - manha;
  - title `Seja bem-vindo Pescador!!`;
  - subtitle e chat de ambientacao;
  - execucao unica por jogador via `persistentData.tlf_welcomed`.
- Manual por enquanto:
  - escolher bioma de praia;
  - colar `fishercamp1.blueprint` com Structurize;
  - aplicar `/setworldspawn ~ ~ ~` dentro da estrutura.

## CP7 - Item de coleta de peixe-entidade

Status: implementacao KubeJS e quest inicial concluidas; validacao in-game pendente.

- Item ativo: `kubejs/startup_scripts/items/fishing_net.js`
- Interacao minima: `kubejs/server_scripts/items/fishing_net_minimal.js`
- Quest adicionada: `Rede do iniciante`
- Intro agora tem 8 passos.
- Validacao estatica:
  - `pack.json OK`
  - dependencias do `intro.snbt` sem referencias faltantes;
  - lint sem erros nos scripts KubeJS novos.

## Teste manual recomendado

1. Abrir um mundo novo.
2. Colar `blueprints/medieval_nordic_fishing_village/decorations/fishercamp1.blueprint` em uma praia.
3. Ficar dentro da estrutura e rodar `/setworldspawn ~ ~ ~` e `/gamerule spawnRadius 0`.
4. Confirmar title, chuva e horario matinal na primeira entrada.
5. Conferir a aba Intro com 8 quests em ordem linear.
6. Receber `kubejs:fishing_net` ao completar `Vara do aprendiz`.
7. Interagir com uma entidade `minecraft:cod` usando a rede.
8. Confirmar que recebe o item `minecraft:cod` e que a entidade desaparece.
9. Testar o Supply Camp/Supply Ship e escolher o style `nordic`.
