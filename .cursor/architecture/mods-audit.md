# Auditoria de Mods

> Documento de discovery para validar a lista de mods do **The Legendary Fishman** contra a visao em [`../manifests/vision.md`](../manifests/vision.md).

---

## Como auditar

- Nao classifique mods por chute.
- Mova um mod para um grupo apenas quando houver motivo registrado.
- Registre riscos tecnicos e conflitos conceituais tambem em [`../manifests/vision.md`](../manifests/vision.md) quando afetarem a direcao do modpack.
- Use o inventario bruto abaixo apenas como ponto de partida.

## Documentos relacionados

- Arquitetura ideal: [`architecture.md`](./architecture.md)
- Riscos tecnicos: [`risks.md`](./risks.md)
- Conflitos conceituais: [`conflicts.md`](./conflicts.md)
- Identidade do modpack: [`../manifests/identity.md`](../manifests/identity.md)

---

## Seguros

Mods alinhados com a visao, sem riscos relevantes conhecidos.

| Mod | Motivo | Evidencia |
|-----|--------|-----------|
| TBD | TBD | TBD |

---

## Parciais

Mods uteis, mas que exigem configuracao, limitacao de escopo ou integracao cuidadosa.

| Mod | Valor | Ajuste necessario | Evidencia |
|-----|-------|-------------------|-----------|
| TBD | TBD | TBD | TBD |

---

## Risco

Mods que podem quebrar pacing, economia, performance, compatibilidade ou identidade, mas ainda nao estao proibidos.

| Mod | Risco | Mitigacao possivel | Evidencia |
|-----|-------|--------------------|-----------|
| TBD | TBD | TBD | TBD |

---

## Proibidos

Mods incompatíveis com a visao ou com restricoes tecnicas do projeto.

| Mod | Motivo da proibicao | Evidencia |
|-----|---------------------|-----------|
| TBD | TBD | TBD |

---

## Inventario Bruto

Fonte: `minecraftinstance.json`.

Observacao: a busca por arquivos `.jar` em `mods/` nao retornou itens neste workspace; esta lista vem dos addons registrados pela instancia do CurseForge.

| Mod | Arquivo | Project ID |
|-----|---------|------------|
| Blueprint | `blueprint-1.20.1-7.1.4.jar` | `382216` |
| Macaw's Paths and Pavings | `mcw-mcwpaths-1.1.1-mc1.20.1forge.jar` | `629153` |
| Fishing Real | `fishingreal-forge-1.20.1-1.9.1-backport.jar` | `348834` |
| KubeJS | `kubejs-forge-2001.6.5-build.26.jar` | `238086` |
| Supplementaries | `supplementaries-1.20-3.1.43-forge.jar` | `412082` |
| Upgrade Aquatic | `upgrade_aquatic-1.20.1-6.0.3.jar` | `326895` |
| Nether's Delight | `nethersdelight-1.20.1-4.0.jar` | `496394` |
| MineColonies | `minecolonies-1.20.1-1.1.1214.jar` | `245506` |
| MrCrayfish's Furniture Mod: Refurbished | `refurbished_furniture-forge-1.20.1-1.0.20.jar` | `897116` |
| End's Delight | `ends_delight-1.20.1-2.4.jar` | `662675` |
| Farmer's Respite | `farmersrespite-1.20.1-2.1.2.jar` | `551453` |
| Cultural Delights | `culturaldelights-0.16.7.jar` | `574622` |
| Tide's Delight | `tidesdelight-1.20.1-1.2.0-forge.jar` | `1188673` |
| Ocean's Delight | `oceansdelight-1.0.2-1.20.jar` | `841262` |
| AppleSkin | `appleskin-forge-mc1.20.1-2.5.1.jar` | `248787` |
| Farmer's Delight | `FarmersDelight-1.20.1-1.3.2.jar` | `398521` |
| Starcatcher | `starcatcher-2.3.12-FORGE-1.20.1.jar` | `1357603` |
| Rhino | `rhino-forge-2001.2.3-build.10.jar` | `416294` |
| Framework | `framework-forge-1.20.1-0.8.0.jar` | `549225` |
| Aquaculture 2 | `Aquaculture-1.20.1-2.5.7.jar` | `60028` |
| Immersive Aircraft [Fabric/Forge] | `immersive_aircraft-1.4.0+1.20.1-forge.jar` | `666014` |
| Tide 2 | `tide-forge-1.20.1-2.0.3.jar` | `884685` |
| Jade | `Jade-1.20.1-Forge-11.13.2.jar` | `324717` |
| Villager Workers 2.0.0 | `workers-1.20.1-2.0.0.jar` | `567450` |
| FTB Teams (NeoForge) | `ftb-teams-forge-2001.3.2.jar` | `404468` |
| Moonlight Lib | `moonlight-1.20-2.16.32-forge.jar` | `499980` |
| FTB Quests (NeoForge) | `ftb-quests-forge-2001.4.22.jar` | `289412` |
| Amendments | `amendments-1.20-2.2.5.jar` | `896746` |
| CraftTweaker | `CraftTweaker-forge-1.20.1-14.0.60.jar` | `239197` |
| Macaw's Furniture | `mcw-furniture-3.4.1-mc1.20.1forge.jar` | `359540` |
| Small Ships [Fabric & Forge] | `smallships-forge-1.20.1-2.0.0-b1.4.jar` | `450659` |
| Just Enough Items (JEI) | `jei-1.20.1-forge-15.20.0.112.jar` | `238222` |
| Macaw's Stairs | `mcw-mcwstairs-1.0.2-mc1.20.1forge.jar` | `1119394` |
| Cloth Config API (Fabric/Forge/NeoForge) | `cloth-config-11.1.136-forge.jar` | `348521` |
| Fisherman's Trap [Neo/Fabric] | `fishermens_trap-2.1.4.jar` | `883029` |
| Domum Ornamentum | `domum_ornamentum-1.20.1-1.0.296-universal.jar` | `527361` |
| Open Parties and Claims | `open-parties-and-claims-forge-1.20.1-0.26.3.jar` | `636608` |
| Aquaculture Delight (A Farmer's Delight Add-on) | `aquaculturedelight-1.1.1-forge-1.20.1.jar` | `961988` |
| Multi-Piston | `multipiston-1.20-1.2.43-RELEASE.jar` | `303278` |
| TownTalk | `towntalk-1.20.1-1.1.0.jar` | `900364` |
| BlockUI | `blockui-1.20.1-1.0.193.jar` | `522992` |
| Tom's Simple Storage Mod | `toms_storage-1.20-1.7.1.jar` | `378609` |
| Structurize | `structurize-1.20.1-1.0.811.jar` | `298744` |
| FTB Library (NeoForge) | `ftb-library-forge-2001.2.12.jar` | `404465` |
| Architectury API | `architectury-9.2.14-forge.jar` | `419699` |
| LootJS: KubeJS Addon | `lootjs-forge-1.20.1-2.13.1.jar` | `570630` |
