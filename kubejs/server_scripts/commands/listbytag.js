// priority: 0
// /listbytag test | atalhos | peixes | peixes_crus
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

  event.register(root)
})
