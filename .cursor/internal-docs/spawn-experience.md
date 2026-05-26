# Spawn Imersivo TLF

Status: Track C concluido.

## Fantasia

O jogador nasce como um pescador humilde em uma manha chuvosa, dentro da estrutura `fishercamp1.blueprint`, perto do mar, antes de qualquer colonia existir.

Mensagem principal:

```txt
Seja bem-vindo Pescador!!
```

## O que ja esta automatizado

Arquivo ativo:

```txt
kubejs/server_scripts/events/tlf_first_join.js
```

Na primeira entrada de cada jogador:

- marca `tlf_welcomed` no `persistentData` do player;
- ajusta `spawnRadius` para `0`, evitando nascer fora da cabana;
- ajusta o clima para chuva por 6000 ticks;
- ajusta o horario para manha (`time set 1000`);
- mostra um title na tela com `Seja bem-vindo Pescador!!`;
- mostra subtitle com a frase curta de ambientacao;
- envia tambem uma mensagem no chat.

## Estrutura oficial

A estrutura oficial de spawn e:

```txt
blueprints/chelzinho/scans/fishercamp1.blueprint
```

Ela tambem foi copiada para o pack TLF em dois lugares:

```txt
blueprints/medieval_nordic_fishing_village/decorations/fishercamp1.blueprint
blueprints/medieval_nordic_fishing_village/supplycamp/fishercamp1.blueprint
```

Use a copia em `decorations/` como cabana de spawn narrativa. Use a copia em `supplycamp/` apenas se quiser testar a estrutura como Supply Camp.

## O que ainda e manual

A blueprint ja existe, mas a colagem fisica no mundo ainda e manual. Automatizar Structurize no primeiro login e fragil sem um mod dedicado de spawn.

## Como preparar um novo mapa

1. Crie o mundo normalmente.
2. Entre em modo operador/criativo.
3. Localize uma praia:

```mcfunction
/locate biome minecraft:beach
```

4. Va ate o local escolhido e defina o spawn:

```mcfunction
/setworldspawn
```

5. Cole a blueprint da cabana do pescador usando Structurize:

```txt
blueprints/medieval_nordic_fishing_village/decorations/fishercamp1.blueprint
```

6. Entre dentro da cabana, no bloco exato onde o jogador deve nascer.
7. Defina o spawn do mundo nesse ponto:

```mcfunction
/setworldspawn ~ ~ ~
/gamerule spawnRadius 0
```

8. Reentre com um player novo para validar que ele nasce dentro da estrutura, com mensagem, chuva e horario.

## Roadmap

Quando quiser automatizar a cabana em mapas futuros, avaliar uma destas opcoes:

- worldgen structure em `data/tlf/worldgen/structure/fisherman_cabin.json`;
- schematic `fishercamp1.blueprint` colada manualmente em mundos oficiais;
- mod dedicado para controlar spawn em praia + estrutura inicial.

## Regra de design

A cabana nao deve ser a starterbase do MineColonies. Ela e o abrigo narrativo inicial. O MineColonies entra depois, como evolucao para um porto vivo.
