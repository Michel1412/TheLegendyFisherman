# Crash FTB Quests TeamData - 2026-05-25

Crash analisado: `crash-reports/crash-2026-05-25_16.50.02-server.txt`.

## Causa raiz

O crash acontece no tick do jogador, dentro de `FTBQuestsEventHandler.playerTick`, porque o FTB Quests tenta chamar `TeamData.isLocked()` mas o `TeamData` retornou `null`.

Linha raiz do crash:

```text
java.lang.NullPointerException: Cannot invoke "dev.ftb.mods.ftbquests.quest.TeamData.isLocked()" because "data" is null
```

O mundo aberto no crash era `saves/teste1`, com o jogador `Chelzinho` (`f77ba79a-17ed-48b6-9edf-9e380c6114ef`). Esse mundo tinha pasta `ftbteams`, mas nao tinha arquivos SNBT de time nem dados de `ftbquests` para o jogador. O mundo antigo `saves/test` tinha esses arquivos.

## Correcao aplicada

Foram criados dados minimos no mundo `teste1`:

- `saves/teste1/ftbteams/ftbteams.snbt`
- `saves/teste1/ftbteams/player/f77ba79a-17ed-48b6-9edf-9e380c6114ef.snbt`
- `saves/teste1/ftbquests/f77ba79a-17ed-48b6-9edf-9e380c6114ef.snbt`

O arquivo de quests foi criado vazio de progresso para evitar copiar progresso antigo do mundo `test` sem confirmacao do usuario.

## Validacao recomendada

1. Abrir o mundo `teste1`.
2. Confirmar que o jogador entra sem crash no primeiro tick.
3. Abrir a interface do FTB Quests e confirmar que as quests aparecem.
4. Se o jogador quiser migrar progresso do mundo `test`, copiar conscientemente o conteudo de `saves/test/ftbquests/f77ba79a-17ed-48b6-9edf-9e380c6114ef.snbt` para o arquivo equivalente em `teste1`.
