# TLF Agent Docs

Esta pasta contem configuracao e documentacao de apoio para agentes IA trabalhando no modpack **The Legendary Fishman**.

Use estes documentos para orientar refatoracoes, auditorias e planejamento antes de alterar scripts, quests, economia, progressao ou lista de mods.

## Mapa da pasta

| Pasta | Uso |
|-------|-----|
| [`manifests/`](./manifests/) | Identidade, visao do produto, manifestos e rotas de alto nivel. |
| [`architecture/`](./architecture/) | Auditoria de mods, riscos tecnicos, conflitos e arquitetura ideal. |
| [`gameplay/`](./gameplay/) | Loop, progressao, endgame, lendas, reputacao, rotas e pacing/economia. |
| [`internal-docs/`](./internal-docs/) | Documentacao tecnica dos sistemas existentes no workspace. |
| [`kubejs-docs/`](./kubejs-docs/) | Referencias, APIs e padroes KubeJS preservados para consulta. |

## Fontes principais

- Visao central: [`manifests/vision.md`](./manifests/vision.md)
- Identidade extraida dos manifestos: [`manifests/identity.md`](./manifests/identity.md)
- Auditoria de mods: [`architecture/mods-audit.md`](./architecture/mods-audit.md)
- Mapa tecnico existente: [`internal-docs/README.md`](./internal-docs/README.md)

## Regra de uso

Quando uma decisao de produto mudar, atualize primeiro [`manifests/vision.md`](./manifests/vision.md) e depois os documentos derivados em `architecture/`, `gameplay/` ou `internal-docs/`.
