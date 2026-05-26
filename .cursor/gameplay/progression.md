# Progressao

> Documento para detalhar tiers, insignias, desbloqueios e requisitos. Fonte central: [`../manifests/vision.md`](../manifests/vision.md).

## Tiers

| Tier | Multiplicador |
|------|---------------|
| LOW | 0.6x |
| MEDIUM | 1.0x |
| GOOD | 1.2x |
| GREAT | 1.5x |
| EXCELLENT | 2.0x |
| PERFECT | 3.0x |
| LEGENDARY | 5.0x |

## Ritmo de progressao

| Etapa | Ritmo |
|-------|-------|
| LOW -> MEDIUM | rapido |
| MEDIUM -> GOOD | moderado |
| GOOD -> GREAT | lento |
| GREAT -> EXCELLENT | dificil |
| EXCELLENT -> PERFECT | muito raro |
| PERFECT -> LEGENDARY | endgame social |

## Insignias

Insignias sao marcos oficiais de progressao e representam reconhecimento. Elas devem funcionar como itens fisicos, chaves de progressao e simbolos visuais de reputacao.

## Desbloqueios

TBD: mapear desbloqueios por tier, rota e sistema.

## Requisitos

TBD: consolidar requisitos por rota a partir dos manifestos em [`../manifests/`](../manifests/).

## Fluxo atual

Estado implementado hoje em FTB Quests: Intro expandido para 8 passos, rota Pescador Aprendiz expandida para 13 passos, quatro rotas em paralelo, fase mestre, fundacao de vila e metricas finais. O sistema KubeJS de tiers existe, mas esta temporariamente pausado para validar os mods novos sem interferencia. A rede de pesca foi reativada em modo minimo para introduzir peixes como entidades.

```mermaid
flowchart TD
  faca["Faca do marujo"]
  corda["Corda improvisada"]
  vara["Vara do aprendiz"]
  redeIntro["Rede do iniciante"]
  mordida["Primeira mordida"]
  tiers["Lendo as mares"]
  cais["O cais te chama"]
  gateIntro["Fundamentos concluidos"]
  aprCais["Aprendiz do cais"]
  caixa["Caixa de apetrechos"]
  mesa["Mesa de aposentadoria"]
  varaIron["Vara de ferro forjada"]
  verme["Verme do quintal"]
  anzol["Anzol que nao corta"]
  linhaBoia["Linha e boia"]
  equipa["Equipa o pescador"]
  cinco["Rede de iniciante"]
  minigame["A barra colorida"]
  oceano["Aguas abertas"]
  diario["Diario do oceano"]
  pescador["Aprendiz pescador concluido"]
  cozinheiro["Rota Cozinheiro<br/>peixe cozido e fogueira"]
  arteso["Rota Artesao<br/>mesa, barco, bau"]
  marinheiro["Rota Marinheiro<br/>praia, barco, oceano"]
  profundos["Caminhos Profundos"]
  mestre["Gate Mestre"]
  mp["Mestre Pescador<br/>100-200 peixes"]
  mc["Mestre Cozinheiro<br/>smoker, cauldron, cooked_cod"]
  ma["Mestre Artesao<br/>smithing, anvil, grindstone"]
  mm["Mestre Marinheiro<br/>distancia de barco e biomas"]
  vila["Inicio da Vila<br/>MineColonies"]
  metricas["Suas Metricas<br/>play_time"]

  faca --> corda --> vara --> redeIntro --> mordida --> tiers --> cais --> gateIntro
  gateIntro --> aprCais --> caixa --> mesa --> varaIron --> verme --> anzol --> linhaBoia --> equipa --> cinco --> minigame --> oceano --> diario --> pescador
  gateIntro --> cozinheiro
  gateIntro --> arteso
  gateIntro --> marinheiro
  pescador --> profundos
  cozinheiro --> profundos
  arteso --> profundos
  marinheiro --> profundos
  profundos --> mestre
  mestre --> mp
  mestre --> mc
  mestre --> ma
  mestre --> mm
  mp --> vila
  mc --> vila
  ma --> vila
  mm --> vila
  vila --> metricas
```

## Proposta refeita com os mods novos

A progressao deve sair de "quantidade de peixes" como eixo principal e passar a medir dominio de equipamento, ecossistemas e trofeus. Varas, iscas e anzois devem ser camadas complementares:

- Varas definem alcance de tier/ambiente.
- Iscas direcionam familia de peixe, raridade ou bioma.
- Anzois modulam risco/recompensa, durabilidade, captura especial ou chance de trofeu.
- Peixes variados viram colecao, economia e culinaria.
- Trofeus viram marcos de reputacao, decoracao e chaves de quests.

```mermaid
flowchart TD
  base["Sobrevivencia costeira<br/>comida, corda, faca, primeira vara"]
  catalogo["Catalogo do Pescador<br/>listar peixes, iscas, anzois e trofeus"]
  kit1["Kit improvisado<br/>vara simples + isca comum + anzol basico"]
  costa["Costa e rios<br/>peixes comuns, comida, moedas baixas"]
  upgrade1["Primeiro upgrade<br/>vara melhor ou isca dedicada"]
  biomas["Biomas de pesca<br/>rio, praia, oceano, pantano, frio, profundo"]
  kit2["Equipamento especializado<br/>vara por ambiente + isca alvo + anzol de bonus"]
  colecao["Colecoes de peixes<br/>familias, tamanhos, receitas, vendas"]
  trofeu1["Primeiros trofeus<br/>decoracao + reputacao local"]
  rotas["Rotas TLF<br/>Pescador, Cozinheiro, Artesao, Marinheiro"]
  mestre["Mestria<br/>peixes raros, trofeus, contratos e vila"]
  lendario["Endgame lendario<br/>trofeus unicos, eventos, reputacao social"]

  base --> catalogo --> kit1 --> costa --> upgrade1
  upgrade1 --> biomas --> kit2
  kit2 --> colecao
  kit2 --> trofeu1
  colecao --> rotas
  trofeu1 --> rotas
  rotas --> mestre --> lendario
```

## Regras de design para a nova progressao

- Evitar depender de sistemas KubeJS pausados. A excecao atual e `kubejs:fishing_net`, reativado em modo minimo para ensinar captura de peixe-entidade.
- Cada quest de pesca deve declarar se pede captura, entrega, colecao, equipamento ou trofeu.
- Trofeus devem ser raros, visiveis e reaproveitados como requisito de reputacao, nao apenas como loot vendavel.
- Iscas e anzois devem aparecer cedo o suficiente para o jogador entender que pesca nao e so spam de vara.
- A vila deve consumir resultados da pesca: comida, decoracao, contratos, trofeus e suprimentos.

## Rede de pesca minima

Arquivo ativo: `kubejs/server_scripts/items/fishing_net_minimal.js`.

Escopo atual:

- registra `kubejs:fishing_net` em `kubejs/startup_scripts/items/fishing_net.js`;
- captura entidades vanilla `minecraft:cod`, `minecraft:salmon`, `minecraft:tropical_fish` e `minecraft:pufferfish`;
- entrega o item equivalente ao jogador;
- remove a entidade capturada;
- nao aplica tiers, durabilidade especial, raridade ou conversao de peixes de mods ainda.

## Referencias

- [`../manifests/manifestos_tlf_rotas_e_progressao.md`](../manifests/manifestos_tlf_rotas_e_progressao.md)
- [`routes.md`](./routes.md)
- [`endgame.md`](./endgame.md)
- Tecnico: [`../internal-docs/ftb-quests-progressao-tlf.md`](../internal-docs/ftb-quests-progressao-tlf.md)
- Tecnico: [`../internal-docs/fish-tier-system.md`](../internal-docs/fish-tier-system.md)
- Tecnico: [`../internal-docs/fishing-loot-system.md`](../internal-docs/fishing-loot-system.md)
- Tecnico: [`../internal-docs/crash-ftbquests-teamdata-2026-05-25.md`](../internal-docs/crash-ftbquests-teamdata-2026-05-25.md)
