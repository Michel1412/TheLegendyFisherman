# MineColonies: Base TLF

Status: Track A concluido.

## Fonte oficial

Baseado na wiki oficial do MineColonies sobre Supply Camp e Supply Ship:

- URL: https://minecolonies.com/wiki/items/supply_camp_and_ship/
- Arquivo local de apoio: `uploads/supply_camp_and_ship-0.md`

## O que importa para o TLF

O Supply Camp ou Supply Ship e a forma normal de comecar uma colonia no MineColonies. Ele fornece materiais iniciais, um lugar seguro e o bloco de Town Hall para iniciar a colonia.

No TLF, esta mecanica sera tratada como um marco narrativo: o jogador nao esta fundando uma cidade generica, esta transformando uma vida simples de pescador em um pequeno porto vivo.

## Regras praticas do Supply Camp/Ship

- O jogador escolhe o estilo pelo terceiro dropdown da GUI de colocacao.
- A area precisa estar limpa, plana e grande o suficiente para o preview branco.
- Supply Ship exige area de agua pelo menos um bloco maior que a construcao.
- Depois de confirmar, o mundo normalmente nao permite colocar outro Supply Camp/Ship, exceto se outro item for encontrado em loot.
- O conteudo interno pode variar por style, e alguns styles escondem tesouros.

## Leitura TLF

Para o modpack, o Supply Camp deve virar um "Supply Dock":

- pier decadente;
- porto pequeno;
- cais improvisado;
- barco velho;
- lanternas, redes, barris e caixas de peixe;
- uma transicao clara entre sobrevivencia humilde e comunidade costeira.

## Structurize e schematics

Styles do MineColonies funcionam como style packs, carregados pela pasta `blueprints/` e pelos packs internos dos jars. O fluxo de criacao e:

1. Construir a estrutura em mundo criativo separado.
2. Usar o Scan Tool da Structurize.
3. Exportar a blueprint.
4. Mover a blueprint para o style pack em `blueprints/<style_id>/`.

O projeto mantem `config/structurize-common.toml` com:

```toml
[gameplay]
ignoreSchematicsFromJar = false
allowPlayerSchematics = true
```

Isso permite schematics do usuario e evita quebrar huts do MineColonies por falta de substitutos completos.
