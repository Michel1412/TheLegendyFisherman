// priority: 95
// Envia mensagem ao jogador que executou o comando, ou ao console do servidor.

/**
 * @param {import('net.minecraft.commands.CommandSourceStack')} source
 * @param {*} message Text do KubeJS
 */
global.TLF_tellSource = function (source, message) {
  var tlfPlayer = source.player

  if (tlfPlayer) {
    tlfPlayer.tell(message)
    return
  }

  if (source.server) {
    source.server.tell(message)
  }
}
