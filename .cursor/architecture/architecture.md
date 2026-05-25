# Arquitetura Ideal

> Documento de referencia para arquitetura desejada. A fonte de decisao continua sendo [`../manifests/vision.md`](../manifests/vision.md).

## Estado

Documento inicial da Fase 2. Nao substitui a auditoria de mods nem a documentacao tecnica existente.

## Principios

- A arquitetura deve sustentar a fantasia central descrita em [`../manifests/identity.md`](../manifests/identity.md).
- Sistemas de progressao, loot, itens, tooltips e quests devem ter limites claros.
- Mudancas tecnicas que afetem produto, economia ou progressao devem voltar para [`../manifests/vision.md`](../manifests/vision.md).
- Refatoracoes KubeJS devem preservar o comportamento existente salvo decisao explicita em contrario.

## Sistemas centrais previstos

| Sistema | Papel | Referencia |
|---------|-------|------------|
| Progressao | Marcos, tiers, insignias e desbloqueios | [`../gameplay/progression.md`](../gameplay/progression.md) |
| Loot | Pesca, recompensas e raridades | [`../internal-docs/fishing-loot-system.md`](../internal-docs/fishing-loot-system.md) |
| Itens | Equipamentos, insignias e itens especiais | [`../manifests/vision.md`](../manifests/vision.md) |
| Tooltips | Clareza de tiers, lore e identidade visual | [`../internal-docs/README.md`](../internal-docs/README.md) |
| Quests | Guiar progressao e registrar marcos | [`../internal-docs/ftb-quests-progressao-tlf.md`](../internal-docs/ftb-quests-progressao-tlf.md) |

## Documentos relacionados

- Auditoria de mods: [`mods-audit.md`](./mods-audit.md)
- Riscos tecnicos: [`risks.md`](./risks.md)
- Conflitos conceituais: [`conflicts.md`](./conflicts.md)
- Loop de gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md)

## Decisoes abertas

- TBD: quais tecnologias serao fontes oficiais para stages, reputacao, economia e rotas oceanicas.
- TBD: quais sistemas ficarao em KubeJS, FTB Quests, configs de mods ou eventual mod Forge proprio.
