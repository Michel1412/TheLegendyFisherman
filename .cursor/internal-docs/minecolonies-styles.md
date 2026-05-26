# MineColonies: Styles TLF

Status: Track A concluido.

## Decisao do modpack

Style tematico ativo: `nordic`.

Nome narrativo usado pelo TLF: `Medieval Nordic Fishing Village`.

Motivo: o style pedido nao existe como pack pronto no projeto atual. O mais proximo dentro do MineColonies 1.20.1 e o estilo `nordic`, que combina com madeira escura, clima frio, docas, lanternas, costa e sobrevivencia humilde.

## Checkpoint 1: desativar styles padrao

Resultado aplicado: soft-lock documentado.

MineColonies/Structurize nao oferece uma trava segura para remover styles especificos um por um. A opcao tecnica conhecida e `ignoreSchematicsFromJar = true` em `config/structurize-common.toml`, mas isso remove tambem schematics internos necessarios para huts e pode quebrar preview/building quando o pack custom nao estiver completo.

Por isso, no TLF:

- `ignoreSchematicsFromJar = false` fica mantido.
- Os styles padrao continuam tecnicamente disponiveis.
- A progressao, os textos e os documentos tratam apenas `nordic` / `Medieval Nordic Fishing Village` como style correto.
- Quando o pack custom estiver completo, o hard-lock pode ser reavaliado.

## Checkpoint 2: style default

Resultado aplicado: default narrativo.

O default oficial do TLF e:

```txt
nordic
```

Na interface do Supply Camp, o jogador deve escolher o estilo nordico. Forcar a pre-selecao da GUI do MineColonies exigiria mod separado ou patch direto, entao fica fora do escopo seguro de KubeJS/config.

## Styles built-in conhecidos

Lista de referencia para auditoria visual. O unico permitido pela direcao do TLF e `nordic`.

| Style ID | Status TLF | Observacao |
| --- | --- | --- |
| `nordic` | Permitido | Base visual do Medieval Nordic Fishing Village. |
| `medieval_oak` | Nao recomendado | Visual medieval comum, menos costeiro. |
| `medieval_spruce` | Nao recomendado | Pode parecer vila generica. |
| `medieval_dark_oak` | Nao recomendado | Bom visual, mas menos identidade de pescador humilde. |
| `fortress` | Nao recomendado | Militar demais para o inicio cozy. |
| `caledonia` | Nao recomendado | Forte, mas menos alinhado ao cais simples. |
| `ancient_athens` | Nao recomendado | Visual classico fora da fantasia pesqueira nordica. |
| `desert_oasis` | Nao recomendado | Bioma e materiais fogem do foco maritimo. |
| `jungle_treehouse` | Nao recomendado | Fantasia de selva. |
| `warped_dutch` | Nao recomendado | Fantasia exotica/endgame, nao inicio humilde. |
| `stalactite_caves` | Nao recomendado | Subterraneo demais para porto costeiro. |

## Regra de conferencia

Ao criar mundo de teste, colocar um Supply Camp/Ship e conferir se o player entende pelo texto de quest/documentacao que o style correto e o nordico. Se outro style for escolhido, isso nao quebra o jogo, mas quebra a direcao de arte do pack.

## Override local de suprimentos

O MineColonies 1.20.1 usa o caminho `decorations/supplies/` para Supply Camp e Supply Ship. Para o TLF, a blueprint `fishercamp1` foi instalada como:

```txt
blueprints/minecolonies/nordic/decorations/supplies/camp.blueprint
blueprints/minecolonies/nordic/decorations/supplies/supplycamp.blueprint
blueprints/minecolonies/nordic/decorations/supplies/ship.blueprint
blueprints/minecolonies/nordic/decorations/supplies/supplyship.blueprint
```

Isso funciona como override local do style `nordic`: ao usar Supply Camp ou Supply Ship com esse style, a estrutura esperada e `fishercamp1`.
