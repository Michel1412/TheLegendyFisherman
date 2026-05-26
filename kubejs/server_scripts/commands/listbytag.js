// priority: 0
// /listbytag test | atalhos | peixes | trofeus | iscas | anzois
// /tlf list trophies|baits|hooks
// Literais gerados de TLF_TAGS — IIFE evita redeclaration do Rhino no forEach.

ServerEvents.commandRegistry(event => {
  var Commands = event.commands

  var root = Commands.literal('listbytag')
    .then(
      Commands.literal('test')
        .executes(function (ctx) {
          global.TLF_tellSource(ctx.source, Text.gray('[listbytag] comando ok'))
          return 1
        })
    )
    .then(
      Commands.literal('atalhos')
        .executes(function (ctx) {
          global.TLF_listAtalhosForCommand(ctx.source)
          return 1
        })
    )

  Object.keys(global.TLF_TAGS).forEach(function (k) {
    ;(function (tlfAtalhoFixo) {
      root = root.then(
        Commands.literal(tlfAtalhoFixo)
          .executes(function (ctx) {
            return global.TLF_listTagForCommand(ctx.source, tlfAtalhoFixo) ? 1 : 0
          })
      )
    })(String(k))
  })

  Object.keys(global.TLF_DISCOVERY_LISTS || {}).forEach(function (k) {
    ;(function (tlfAtalhoFixo) {
      root = root.then(
        Commands.literal(tlfAtalhoFixo)
          .executes(function (ctx) {
            return global.TLF_listTagForCommand(ctx.source, tlfAtalhoFixo) ? 1 : 0
          })
      )
    })(String(k))
  })

  event.register(root)

  event.register(
    Commands.literal('tlf')
      .then(
        Commands.literal('list')
          .then(Commands.literal('trophies').executes(function (ctx) {
            return global.TLF_listTagForCommand(ctx.source, 'trofeus') ? 1 : 0
          }))
          .then(Commands.literal('trofeus').executes(function (ctx) {
            return global.TLF_listTagForCommand(ctx.source, 'trofeus') ? 1 : 0
          }))
          .then(Commands.literal('baits').executes(function (ctx) {
            return global.TLF_listTagForCommand(ctx.source, 'iscas') ? 1 : 0
          }))
          .then(Commands.literal('iscas').executes(function (ctx) {
            return global.TLF_listTagForCommand(ctx.source, 'iscas') ? 1 : 0
          }))
          .then(Commands.literal('hooks').executes(function (ctx) {
            return global.TLF_listTagForCommand(ctx.source, 'anzois') ? 1 : 0
          }))
          .then(Commands.literal('anzois').executes(function (ctx) {
            return global.TLF_listTagForCommand(ctx.source, 'anzois') ? 1 : 0
          }))
      )
  )
})
