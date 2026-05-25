# Checklist — Loot de pesca (vara → loot)

## Relacionados

- Gameplay: [`../gameplay/gameplay-loop.md`](../gameplay/gameplay-loop.md), [`../gameplay/pacing-economy.md`](../gameplay/pacing-economy.md)
- Tecnico: [`fishing-loot-system.md`](./fishing-loot-system.md), [`fish-tier-system.md`](./fish-tier-system.md)

## Fase 1 — Tags e dados

- [x] Constantes de peso (`fishing_loot_constants.js`): 60% peixe / 40% não-peixe
- [x] Tag `#tlf:lixos` (itens sem utilidade)
- [x] Tag `#tlf:tesouros` (caixas / abríveis da pesca)
- [x] Tag `#tlf:insignea` (itens especiais — expandir no modpack)
- [x] Atalhos em `TLF_TAGS`: `lixos`, `tesouros`, `insignea`
- [ ] Revisar lista de `insignea` quando existirem itens próprios do TLF

## Fase 2 — Lógica da vara

- [x] Tier base da vara: NBT `tlf_tier` ou padrão por ID da vara (`rod_default_tiers.js`)
- [x] Se **peixe**: 30% tier abaixo, 15% tier acima, 55% tier da vara (sem vizinho → fica no tier da vara)
- [x] Janela de 3 tiers sempre centrada no tier da vara

## Fase 3 — Não-peixe (dentro dos 40%)

- [x] 35% → `#tlf:lixos`
- [x] 15% → `#tlf:tesouros`
- [x] 5% → `#tlf:insignea`
- [x] 45% → outros itens `#tlf:pescavel` (exceto peixes e as tags acima)

## Fase 4 — LootJS

- [x] `LootJS.modifiers` em `LootType.FISHING` + tabelas `aquaculture:gameplay/fishing/*`
- [x] Substituir loot gerado por um único item do sistema TLF
- [ ] Testar in-game: `/reload` → pescar com varas iron/gold/diamond/neptunium + `/tlf rod set`

## Fase 5 — Validação

- [ ] `/listbytag lixos` / `tesouros` / `insignea`
- [ ] Confirmar tooltips de tier no peixe após captura
- [ ] Ajustar listas se algum item não existir no pack (erro no log KubeJS)

## Referência rápida

| Grupo | Chance (do total) |
|-------|-------------------|
| Peixe | 60% |
| Não-peixe | 40% |

| Subgrupo (só não-peixe) | Chance (do 40%) |
|-------------------------|-----------------|
| Lixo | 35% |
| Tesouro | 15% |
| Insígnia | 5% |
| Outros | 45% |

| Tier do peixe (só peixe) | Chance |
|--------------------------|--------|
| 1 tier abaixo da vara | 30% |
| Tier da vara | 55% |
| 1 tier acima da vara | 15% |
