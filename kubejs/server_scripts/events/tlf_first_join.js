// priority: 0
// TLF: experiencia de primeira entrada (CP6).

PlayerEvents.loggedIn(function (event) {
  var player = event.player
  var tag = player.persistentData

  if (tag.getBoolean('tlf_welcomed')) return
  tag.putBoolean('tlf_welcomed', true)

  player.server.runCommandSilent('gamerule spawnRadius 0')
  player.server.runCommandSilent('weather rain 6000')
  player.server.runCommandSilent('time set 1000')

  var username = player.username
  player.server.runCommandSilent('title ' + username + ' title {"text":"Seja bem-vindo Pescador!!","color":"aqua","bold":true}')
  player.server.runCommandSilent('title ' + username + ' subtitle {"text":"Sente o cheiro do mar. Sua jornada comeca aqui.","color":"gray","italic":true}')

  player.tell([
    Text.of('Seja bem-vindo ').gold(),
    Text.of('Pescador!!').aqua().bold()
  ])
})
