# Supply Camp TLF: Como Criar

Status: Track B concluido.

## Objetivo

Transformar o Supply Camp comum do MineColonies em um "Supply Dock" com identidade do TLF:

> Viva como um pescador humilde, aproveitando a paz e da leveza da vida.

O jogador deve sentir que comecou em um canto simples da costa, nao em uma cidade pronta.

## Pack alvo

Use esta pasta:

```txt
blueprints/medieval_nordic_fishing_village/
```

Para o item do MineColonies reconhecer camp/ship, o caminho correto e:

```txt
blueprints/<style>/decorations/supplies/
```

Os nomes esperados sao:

- `camp.blueprint`
- `supplycamp.blueprint`
- `ship.blueprint`
- `supplyship.blueprint`

## Estrutura ja existente

A primeira estrutura oficial do tema e:

```txt
blueprints/chelzinho/scans/fishercamp1.blueprint
```

Ela foi copiada para:

```txt
blueprints/medieval_nordic_fishing_village/decorations/fishercamp1.blueprint
blueprints/medieval_nordic_fishing_village/supplycamp/fishercamp1.blueprint
blueprints/medieval_nordic_fishing_village/decorations/supplies/camp.blueprint
blueprints/medieval_nordic_fishing_village/decorations/supplies/supplycamp.blueprint
blueprints/medieval_nordic_fishing_village/decorations/supplies/ship.blueprint
blueprints/medieval_nordic_fishing_village/decorations/supplies/supplyship.blueprint
```

No fluxo atual, `decorations/fishercamp1.blueprint` e a cabana de spawn dos players. As copias em `decorations/supplies/` sao as que o Supply Camp/Supply Ship do MineColonies deve encontrar.

Tambem foi criado um override local do style built-in `nordic`:

```txt
blueprints/minecolonies/nordic/decorations/supplies/camp.blueprint
blueprints/minecolonies/nordic/decorations/supplies/supplycamp.blueprint
blueprints/minecolonies/nordic/decorations/supplies/ship.blueprint
blueprints/minecolonies/nordic/decorations/supplies/supplyship.blueprint
```

Assim, se o jogador escolher `nordic` no item de suprimentos, ele deve receber a estrutura `fishercamp1`.

## Variantes planejadas

Crie pelo menos uma dessas variantes primeiro. Depois, adicione as outras quando quiser ampliar variedade:

- `pier_decadente.blueprint`: um pier gasto, com tabuas falhando, lanternas simples, barris e redes.
- `porto_pequeno.blueprint`: um pequeno porto de sobrevivencia com baus, fogueira e espaco para crafting.
- `cais_improvisado.blueprint`: cais torto feito de madeira reaproveitada, cordas e caixas.
- `barco_velho.blueprint`: barco encalhado ou semi-destruido, usado como abrigo e deposito inicial.

## Como criar a blueprint

1. Abra um mundo criativo separado so para construcao.
2. Construa a variante em escala pequena. Evite cidade pronta, paredes enormes ou doca gigante.
3. Inclua somente o necessario:
   - abrigo simples;
   - fogueira ou fonte de luz;
   - pequeno cais;
   - barco ou restos de barco;
   - baus/barris;
   - redes, cordas e decoracoes de pesca;
   - mesa de trabalho;
   - espaco para colocar o Town Hall depois.
4. Use o Scan Tool da Structurize para selecionar a area.
5. Exporte a estrutura com o nome da variante.
6. Mova o `.blueprint` para `blueprints/medieval_nordic_fishing_village/decorations/supplies/`.
7. Reinicie o jogo antes de validar no MineColonies.

## Checklist visual

- Parece humilde, nao nobre.
- Parece costeiro, nao urbano.
- Tem madeira, corda, redes, barris e lanternas.
- Nao entrega recursos demais.
- Cabe em area razoavelmente limpa.
- Funciona tanto em praia quanto perto de rios/oceano.

## Validacao no jogo

1. Entre em mundo criativo.
2. Pegue `minecolonies:supplycampdeployer` e `minecolonies:supplychestdeployer`.
3. Abra a GUI do Supply Camp/Supply Ship.
4. Escolha `nordic` ou `Medieval Nordic Fishing Village`.
5. Confirme se `camp`, `supplycamp`, `ship` ou `supplyship` carregam a estrutura `fishercamp1`.
6. Confirme se a area branca de preview nao exige terraplanagem absurda.

## Regras de narrativa

O Supply Dock representa o primeiro passo para sair da sobrevivencia solitaria e entrar na vida comunitaria. Ele deve parecer um lugar onde alguem humilde poderia morar, pescar, consertar rede e descansar durante a chuva.
