# TLF - The Legendary Fishman

**TLF - The Legendary Fishman** e um modpack RPG/sandbox maritimo para **Minecraft 1.20.1 Forge**, em fase alpha. A proposta combina pesca, rotas de especializacao, progressao por quests, vila costeira e exploracao oceanica.

> Aviso: uma parte significativa do codigo, documentacao e organizacao deste workspace foi gerada ou assistida por IA. As regras, manifestos, auditorias e documentos usados por agentes vivem em [`.cursor/`](./.cursor/).

## Status

Alpha / em construcao. Sistemas, quests, balanceamento, lista de mods e identidade final ainda podem mudar.

## Visao do Projeto

A fonte central do TLF Vision Refactor e [`./.cursor/manifests/vision.md`](./.cursor/manifests/vision.md). Consulte esse documento antes de mudar progressao, economia, quests, identidade ou curadoria de mods.

## Como Rodar Localmente

Este workspace esta estruturado como uma instancia local do CurseForge.

1. Instale o CurseForge App e habilite Minecraft.
2. Mantenha esta pasta dentro de `CurseForge/minecraft/Instances/`.
3. Abra o CurseForge e procure a instancia **TLF - The Legendary Fishman** em `My Modpacks`.
4. Se a instancia nao aparecer, crie ou importe um perfil Forge para Minecraft 1.20.1 e use esta pasta como base da instancia.
5. Inicie pelo CurseForge para carregar mods, configs, `kubejs/` e quests.

Arquivos locais de mundo, cache, logs e mods baixados nao devem ser versionados.

## Estrutura Resumida

```text
.cursor/                         Docs, manifestos, auditorias e contexto para agentes IA
config/ftbquests/quests/          Capitulos, grupos e idiomas do FTB Quests
kubejs/                           Scripts, assets e dados customizados do modpack
config/                           Configuracoes de mods da instancia
data/                             Data packs e sobrescritas de loot/tags quando presentes
minecraftinstance.json            Metadados da instancia CurseForge
```

## Stack Tecnica

Evidencias no workspace indicam uso de:

- Minecraft 1.20.1 Forge.
- KubeJS e Rhino 2001 para scripts.
- LootJS como addon KubeJS.
- FTB Quests para progressao.
- MineColonies e Structurize para a etapa de vila/colonia.
- Farmer's Delight e addons relacionados para culinaria.
- Aquaculture 2 e Aquaculture Delight para pesca e integracoes.

Outros mods aparecem no inventario da instancia e devem ser auditados em [`./.cursor/architecture/mods-audit.md`](./.cursor/architecture/mods-audit.md) antes de virarem dependencia conceitual do design.

## Licenca

A licenca final ainda esta pendente. Veja [`LICENSE.md`](./LICENSE.md).
