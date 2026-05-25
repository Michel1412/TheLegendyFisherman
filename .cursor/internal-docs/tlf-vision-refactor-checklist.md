# TLF Vision Refactor - Checklist Final

Checklist auditado contra o plano original apos a Fase 5. Marquei como concluido apenas o que foi encontrado no workspace.

## Fase 1 - Fonte de Verdade Inicial

- [x] Criar `.cursor/manifests/vision.md` como template de visao.
  - Observacao: o arquivo existe e contem secoes de validacao de mods, riscos, conflitos, arquitetura, identidade, fantasia, loop, mecanicas, progressao, endgame, especializacoes, reputacao, rotas, lendas, pacing/economia, generos e decisoes.
- [x] Criar `.cursor/architecture/mods-audit.md`.
  - Observacao: o arquivo existe e inclui inventario bruto vindo de `minecraftinstance.json`.
- [x] Atualizar `.cursor/internal-docs/README.md`.
  - Observacao: o README interno aponta para o novo namespace `.cursor/` e lista documentos tecnicos existentes.

## Fase 2 - Reorganizacao da Pasta `.cursor/`

- [x] Criar/manter `manifests/`, `architecture/`, `gameplay/`, `internal-docs/` e `kubejs-docs/`.
- [x] Manter `manifesto_*` em `.cursor/manifests/`.
- [x] Adicionar `.cursor/manifests/identity.md`.
- [x] Criar documentos de arquitetura: `architecture.md`, `mods-audit.md`, `risks.md`, `conflicts.md`.
- [x] Criar documentos de gameplay: `gameplay-loop.md`, `progression.md`, `endgame.md`, `reputation.md`, `routes.md`, `legends.md`, `pacing-economy.md`.
- [x] Atualizar docs internos para referenciar o novo namespace quando aplicavel.
  - Observacao: buscas em Markdown encontraram links para `../manifests/`, `../architecture/` e `../gameplay/`.
- [x] Criar `.cursor/README.md`.

## Fase 3 - Refatoracao KubeJS para `global.TLF`

- [x] Criar namespace `global.TLF` nos tres contextos KubeJS (`startup_scripts`, `server_scripts`, `client_scripts`).
- [x] Consolidar sistemas em buckets como `constants`, `tier`, `items`, `rod`, `util`, `services`, `services.fishing` e `client.tooltips`.
- [x] Preservar aliases antigos `global.TLF_*` por compatibilidade de ciclo.
  - Observacao: os aliases ainda existem e apontam para funcoes/valores do namespace novo quando aplicavel.
- [x] Preservar comportamento sem troca ampla de arquitetura.
- [~] Organizacao fisica adicional.
  - Observacao: a pasta ja esta separada por `00_core`, `constants`, `utils`, `items`, `loot`, `recipes`, `tags`, `tooltips` e comandos. Nao foi feita reorganizacao maior, o que parece coerente com "se seguro".

## Fase 4 - FTB Quests e Progressao

- [x] Revisar `config/ftbquests/quests/chapters/`.
- [x] Atualizar `.cursor/internal-docs/ftb-quests-progressao-tlf.md` com Mermaid.
- [x] Criar cross-link entre internal-docs e gameplay.
  - Observacao: o documento de FTB Quests aponta para `progression.md`, `routes.md` e `gameplay-loop.md`.
- [x] Corrigir/revisar chaves de idioma FTB.
  - Observacao: `pt_br.snbt` contem chaves `chapter_group.<id>.title` e quests-chave auditadas.
- [x] Validar gates principais e IDs documentados.
  - Observacao: IDs `2B63327585027AE2`, `12753FFB6686B5F3` e `499DAD451959A7D3` foram encontrados nos capitulos/dependencias.

## Fase 5 - Preparar para GitHub

- [x] Criar `README.md` na raiz.
  - Observacao: inclui pitch, aviso de IA, instrucoes CurseForge, estrutura, status alpha, stack tecnica evidenciada e link para `.cursor/manifests/vision.md`.
- [x] Criar `.gitignore`.
  - Observacao: ignora logs, saves, local, mods, crash reports, cache, mundos, export/temp KubeJS e backups; nao ignora `kubejs/`, `config/ftbquests/` nem `.cursor/`.
- [~] Criar licenca apos decisao.
  - Observacao: nao havia decisao explicita de licenca; foi criado `LICENSE.md` como pendencia de decisao, sem declarar termos finais.
- [x] Criar `CONTRIBUTING.md` curto.
  - Observacao: documenta o fluxo `vision.md -> manifests/docs -> tasks no Cursor`.

## Validacoes Executadas

- [x] Leitura de `.cursor/manifests/vision.md`, `.cursor/README.md`, `.cursor/internal-docs/README.md`, `.cursor/architecture/mods-audit.md` e `.cursor/internal-docs/ftb-quests-progressao-tlf.md`.
- [x] Busca por documentos esperados em `.cursor/manifests/`, `.cursor/architecture/`, `.cursor/gameplay/`, `.cursor/internal-docs/` e `.cursor/kubejs-docs/`.
- [x] Busca por `global.TLF` e aliases `global.TLF_*` em `kubejs/**/*.js`.
- [x] Busca por gates, chaves de idioma e referencias FTB em `config/ftbquests/quests`.
- [x] Verificacao de stack tecnica por `mods-audit.md` e configs presentes no workspace.

## Riscos e Pendencias Finais

- [ ] Licenca legal final precisa de decisao humana.
- [ ] Separar licenca de codigo, assets, quests, textos e documentacao, se necessario.
- [ ] Confirmar no jogo os registries reais de MineColonies/Structurize usados pela etapa de vila.
- [ ] Preencher os `TBD` de produto em `.cursor/manifests/vision.md` antes de novas refatoracoes grandes.
- [ ] Evoluir quests para requisitos especificos do manifesto, como tiers TLF, insignias, rede de pesca e milestones de rotas.
