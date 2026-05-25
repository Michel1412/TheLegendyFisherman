# FTB Quests — guia SNBT (TLF)

Referência para editar quests em `config/ftbquests/quests/` no modpack **The Legendary Fishman** (Minecraft 1.20.1, Forge).

## Relacionados

- Gameplay: [`../gameplay/progression.md`](../gameplay/progression.md), [`../gameplay/routes.md`](../gameplay/routes.md)
- Tecnico: [`ftb-quests-progressao-tlf.md`](./ftb-quests-progressao-tlf.md), [`fish-tier-system.md`](./fish-tier-system.md)

Documentação oficial (versão 1.21.1 na wiki; o formato SNBT é o mesmo na 1.20.1):

| Tópico | URL |
|--------|-----|
| SNBT (tipos, sufixos `L`/`d`, arrays) | https://docs.feed-the-beast.com/docs/mods/technical/SNBT |
| Tipos de **task** (UI) | https://docs.feed-the-beast.com/docs/mods/suite/Quests/Developer/Quests/Types |
| Tipos de **reward** | https://docs.feed-the-beast.com/docs/mods/suite/Quests/Developer/Quests/Rewards |
| Capítulos | https://docs.feed-the-beast.com/docs/mods/suite/Quests/Developer/Chapters |

Código-fonte dos identificadores `type` (confirma nomes no SNBT): [TaskTypes.java](https://github.com/FTBTeam/FTB-Quests/blob/main/common/src/main/java/dev/ftb/mods/ftbquests/quest/task/TaskTypes.java), [RewardTypes.java](https://github.com/FTBTeam/FTB-Quests/blob/main/common/src/main/java/dev/ftb/mods/ftbquests/quest/reward/RewardTypes.java).

---

## Estrutura de pastas

```
config/ftbquests/quests/
├── data.snbt                 # defaults globais (version, progression_mode, …)
├── chapter_groups.snbt       # grupos de abas no livro de quests
├── chapters/
│   └── meu_capitulo.snbt     # um arquivo = um capítulo (quests + images)
├── reward_tables/
│   └── minha_tabela.snbt     # pool para random / choice / loot
└── lang/
    └── en_us.snbt            # títulos e descrições (opcional; chaves por ID)
```

Após editar arquivos: `/reload` no servidor ou reiniciar o mundo. No cliente, **Edit Mode** (botão no canto do livro de quests) para criar/arrastar quests na UI e exportar SNBT.

**IDs:** cada quest, task, reward e capítulo usa um hex de 16 caracteres (ex.: `"1E56E7B4A170BEB7"`). Gere novos no jogo (Edit Mode) ou copie de quests existentes — não reutilize o mesmo ID em dois objetos.

**Números longos:** use sufixo `L` (`count: 10L`, `value: 50000000L`, `table_id: 8753320133508230191L`).

---

## `data.snbt` (mínimo)

```snbt
{
	default_autoclaim_rewards: "disabled"
	default_consume_items: false
	default_quest_shape: "circle"
	progression_mode: "linear"
	version: 13
}
```

Campos comuns: `pause_game`, `grid_scale`, `show_lock_icons`, `verify_on_load`. Valores exatos dependem da versão do mod no pack.

---

## `chapter_groups.snbt`

```snbt
{
	chapter_groups: [
		{ id: "A0F0000000000001" }
	]
}
```

Título do grupo no `lang/en_us.snbt`: `chapter_group.A0F0000000000001.title: "TLF"`.

**IDs:** só caracteres hex (`0-9`, `A-F`). Ex.: `A0F0000000000040`, não `TLF…` (letras inválidas).

---

## Anatomia de um capítulo

```snbt
{
	filename: "tlf_exemplo"
	group: "A0F0000000000001"
	id: "A0F0000000000002"
	icon: { id: "minecraft:fishing_rod" }
	quests: [ /* ver exemplos abaixo */ ]
	images: [ /* decoração no mapa — não é task */ ]
}
```

Campos úteis por **quest**: `dependencies`, `optional`, `hide_until_deps_complete`, `shape`, `size`, `x`/`y` (posição no grid), `rewards`, `tasks`.

---

## Tasks (`tasks[]` → campo `type`)

Na wiki o nome é amigável; no SNBT o `type` é o ID do mod (coluna **SNBT**).

| Wiki (UI) | SNBT `type` | Exemplo mínimo |
|-----------|-------------|----------------|
| Item | `item` | Ver abaixo |
| Checkmark | `checkmark` | Clique manual |
| Kill Entity | `kill` | `entity` + `value` |
| Advancement | `advancement` | `advancement` + `criterion` |
| Visit Dimension | `dimension` | `dimension` |
| Visit Biome | `biome` | `biome` (ou tag `#minecraft:is_ocean`) |
| Find Structure | `structure` | `structure` (ID de estrutura) |
| Location | `location` | `position` + `size` + `dimension` |
| Observation | `observation` | `to_observe` + `observe_type` |
| Stat | `stat` | `stat` + `value` |
| Fluid | `fluid` | `fluid: { id, amount }` |
| XP Levels | `xp` | `value` + `points` (ver nota) |
| Stage (Game Stages) | `gamestage` | `stage` (requer mod Game Stages) |
| Forge Energy | `forge_energy` | `value` (+ `max_input`; Forge) |
| Custom | `custom` | Só lógica de outro mod/script |
| Image | — | Entrada em `images:` do **capítulo**, não em `tasks` |

### `item`

```snbt
tasks: [{
	id: "A0F0000000000010"
	item: { count: 1, id: "minecraft:cod" }
	type: "item"
}]
```

Variantes: `count: 64L`, `consume_items: true` (Task Screen / consumir do inventário), filtros `ftbfiltersystem:smart_filter`, componentes NBT em `item.components`.

### `checkmark`

```snbt
tasks: [{
	id: "A0F0000000000011"
	type: "checkmark"
}]
```

### `kill`

```snbt
tasks: [{
	entity: "minecraft:zombie"
	id: "A0F0000000000012"
	type: "kill"
	value: 10L
}]
```

### `advancement`

```snbt
tasks: [{
	advancement: "minecraft:adventure/root"
	criterion: ""
	id: "A0F0000000000013"
	type: "advancement"
}]
```

### `dimension`

```snbt
tasks: [{
	dimension: "minecraft:the_nether"
	id: "A0F0000000000014"
	type: "dimension"
}]
```

### `biome`

```snbt
tasks: [{
	biome: "minecraft:beach"
	id: "A0F0000000000015"
	type: "biome"
}]
```

### `structure`

```snbt
tasks: [{
	id: "A0F0000000000016"
	structure: "minecraft:village"
	type: "structure"
}]
```

### `location`

```snbt
tasks: [{
	dimension: "minecraft:overworld"
	id: "A0F0000000000017"
	ignore_dimension: false
	position: [I; 0, 64, 0 ]
	size: [I; 5, 5, 5 ]
	type: "location"
}]
```

### `observation`

```snbt
tasks: [{
	id: "A0F0000000000018"
	observe_type: 0
	timer: 0L
	to_observe: "minecraft:furnace"
	type: "observation"
}]
```

`to_observe`: ID de bloco ou entidade. `observe_type`: modo de observação (0 = padrão na maioria dos packs).

### `stat`

```snbt
tasks: [{
	id: "A0F0000000000019"
	stat: "minecraft:fish_caught"
	type: "stat"
	value: 10
}]
```

### `fluid`

```snbt
tasks: [{
	fluid: {
		amount: 1000
		id: "minecraft:water"
	}
	id: "A0F000000000001A"
	type: "fluid"
}]
```

### `xp` (task “XP Levels” na wiki)

No SNBT o tipo é `xp`, não `xp_levels`. Campo `value` = quantidade; `points: false` = níveis de XP; `points: true` = pontos de experiência totais.

```snbt
tasks: [{
	id: "A0F000000000001B"
	points: false
	type: "xp"
	value: 5L
}]
```

### `gamestage` (wiki: “Stage”)

Requer **Game Stages** (ou integração equivalente). Nome no SNBT é `gamestage`, não `stage`.

```snbt
tasks: [{
	id: "A0F000000000001C"
	stage: "tlf_iniciante"
	type: "gamestage"
}]
```

### `forge_energy`

Só Forge. Comum com **Task Screen** (`ftbquests:task_screen`). Entrada de energia até `max_input` FE/t.

```snbt
tasks: [{
	id: "A0F000000000001D"
	max_input: 1000L
	type: "forge_energy"
	value: 10000L
}]
```

### `custom` (task)

Não completa sozinha; outros mods/KubeJS definem o comportamento. Mínimo no arquivo:

```snbt
tasks: [{
	id: "A0F000000000001E"
	type: "custom"
}]
```

### Imagem decorativa (capítulo)

Não é task. Fica em `images:` no `.snbt` do capítulo:

```snbt
images: [{
	height: 2.0d
	image: "minecraft:textures/block/oak_planks.png"
	rotation: 0.0d
	width: 4.0d
	x: 0.0d
	y: -3.0d
}]
```

---

## Rewards (`rewards[]` → campo `type`)

| Wiki | SNBT `type` | Campos principais |
|------|-------------|-------------------|
| Item | `item` | `item: { id, count }`, opcional `count` no reward |
| XP | `xp` | `xp: 100` |
| XP Levels | `xp_levels` | `xp_levels: 5` |
| Command | `command` | `command`, `permission_level`, `silent` |
| Random Reward | `random` | `table_id` (long) |
| Choice Reward | `choice` | `table_id` |
| Loot Reward | `loot` | `table_id` (pode não dar nada) |
| All Table Reward | `all_table` | `table_id` (todos os itens da tabela) |
| Advancement | `advancement` | `advancement`, `criterion`, `auto` |
| Toast | `toast` | `description` (chave de tradução ou texto) |
| Stage | `gamestage` | `stage`, `auto` |
| Custom | `custom` | Depende de addon (ex. tags em máquinas) |

### `item`

```snbt
rewards: [{
	id: "A0F0000000000020"
	item: { count: 1, id: "minecraft:emerald" }
	type: "item"
}]
```

### `xp`

```snbt
rewards: [{
	id: "A0F0000000000021"
	type: "xp"
	xp: 50
}]
```

### `xp_levels`

```snbt
rewards: [{
	id: "A0F0000000000022"
	type: "xp_levels"
	xp_levels: 3
}]
```

### `command`

```snbt
rewards: [{
	command: "/give @p minecraft:cod 8"
	id: "A0F0000000000023"
	permission_level: 2
	silent: false
	type: "command"
}]
```

### `random` / `choice` / `loot` / `all_table`

Exige arquivo em `reward_tables/` com o mesmo `id` numérico que `table_id`:

```snbt
rewards: [{
	exclude_from_claim_all: true
	id: "A0F0000000000024"
	table_id: 1234567890123456789L
	type: "random"
}]
```

`choice`: jogador escolhe um item da tabela. `loot`: rolagem com chance de vazio. `all_table`: recebe tudo da tabela.

### `advancement` (reward)

```snbt
rewards: [{
	advancement: "minecraft:story/root"
	auto: "enabled"
	criterion: ""
	id: "A0F0000000000025"
	type: "advancement"
}]
```

### `toast`

```snbt
rewards: [{
	description: "quest.tlf.toast.exemplo"
	id: "A0F0000000000026"
	type: "toast"
}]
```

### `gamestage` (reward)

```snbt
rewards: [{
	auto: "invisible"
	id: "A0F0000000000027"
	stage: "tlf_recompensa_etapa"
	type: "gamestage"
}]
```

### `custom` (reward)

Usado por integrações (ex. Custom Machinery). Exemplo real (StoneBlock):

```snbt
rewards: [{
	auto: "disabled"
	exclude_from_claim_all: true
	id: "A0F0000000000028"
	tags: ["exemplo_upgrade"]
	team_reward: true
	type: "custom"
}]
```

---

## `reward_tables/*.snbt`

```snbt
{
	id: "A0F0000000000030"
	loot_size: 1
	rewards: [
		{
			id: "A0F0000000000031"
			item: { count: 1, id: "minecraft:cod" }
			weight: 10.0f
		}
		{
			id: "A0F0000000000032"
			item: { count: 1, id: "minecraft:salmon" }
			weight: 5.0f
		}
	]
}
```

O `table_id` nas quests é o valor numérico do `id` da tabela (em packs exportados aparece como long, ex. `8753320133508230191L`). Se criar à mão, use o mesmo hex convertido ou exporte pelo jogo.

---

## `lang/en_us.snbt` (trecho)

```snbt
{
	chapter.A0F0000000000002.title: "TLF — Referência SNBT"
	quest.A0F0000000000040.title: "Exemplo: Item"
	quest.A0F0000000000040.quest_subtitle: "Pegar um bacalhau"
	quest.a0f.toast.exemplo: "Missão concluída!"
}
```

---

## Capítulo de referência no pack

Arquivos prontos para copiar/ativar:

- `config/ftbquests/quests/chapters/tlf_snbt_reference.snbt` — uma quest por tipo de task + uma quest com todos os rewards de exemplo
- `config/ftbquests/quests/reward_tables/tlf_reference.snbt` — tabela para `random` / `choice` / `loot`
- `config/ftbquests/quests/data.snbt`, `chapter_groups.snbt`, `lang/en_us.snbt`

Remova ou renomeie o capítulo se não quiser que jogadores vejam a “página de laboratório” no livro de quests.

---

## Dicas TLF (pesca)

- Tasks `item` com peixes do mod: `id` do item (ex. `aquaculture:…`, itens KubeJS).
- Para progressão por tier, combine `gamestage` + recompensas `item` / `command` (`/tlf` se expuser comandos).
- `stat: "minecraft:fish_caught"` combina bem com linha de progressão de pescador.

---

## Referência rápida — origem dos exemplos

Exemplos validados contra:

- `Project Minecolonies United/config/ftbquests/`
- `All the Mods 10 Lite/config/ftbquests/` (`forge_energy`)
- `FTB StoneBlock 4/config/ftbquests/` (`location`, `fluid`, `gamestage`, `toast`, `custom`)
