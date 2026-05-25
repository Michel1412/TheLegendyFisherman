// priority: 0
// /tlf fish set|give <tier>  |  /tlf rod set|give  |  /tlf net set|give
// /listbytag peixes | /listbytag varas

ServerEvents.commandRegistry(function (event) {
  var Commands = event.commands

  function tlfTierBranch(literalName, handler) {
    var tlfNode = Commands.literal(literalName)
    var tlfIdx, tlfTierId
    for (tlfIdx = 0; tlfIdx < global.TLF_TIER_IDS.length; tlfIdx++) {
      tlfTierId = global.TLF_TIER_IDS[tlfIdx]
      ;(function (tlfFixed) {
        tlfNode = tlfNode.then(
          Commands.literal(tlfFixed).executes(function (ctx) {
            return handler(ctx, tlfFixed) ? 1 : 0
          })
        )
      })(tlfTierId)
    }
    return tlfNode
  }

  event.register(
    Commands.literal('tlf')
      .then(
        Commands.literal('fish')
          .then(
            tlfTierBranch('set', function (ctx, tierId) {
              var tlfPlayer = ctx.source.player
              if (!tlfPlayer) {
                global.TLF_tellSource(ctx.source, Text.red('Apenas jogadores.'))
                return false
              }
              var tlfHand = tlfPlayer.mainHandItem
              if (tlfHand.empty) {
                global.TLF_tellSource(ctx.source, Text.red('Segure um peixe na mão.'))
                return false
              }
              if (!global.TLF.items.isFishId(tlfHand.id)) {
                global.TLF_tellSource(ctx.source, Text.red('Item na mão não é um peixe (tag peixes).'))
                return false
              }
              tlfPlayer.setMainHandItem(global.TLF.items.fishWithTier(tlfHand, tierId))
              global.TLF_tellSource(ctx.source, Text.green('Tier "' + tierId + '" no peixe.'))
              return true
            })
          )
          .then(
            tlfTierBranch('give', function (ctx, tierId) {
              var tlfPlayer = ctx.source.player
              if (!tlfPlayer) return false
              var tlfCount = 0
              global.TLF_FISH_IDS.forEach(function (fishId) {
                var tlfStack = global.TLF.items.createFishWithTier(fishId, tierId, 1)
                if (tlfStack) {
                  tlfPlayer.give(tlfStack)
                  tlfCount++
                }
              })
              global.TLF_tellSource(ctx.source, Text.green(tlfCount + ' peixes com tier "' + tierId + '".'))
              return true
            })
          )
      )
      .then(
        Commands.literal('rod')
          .then(
            tlfTierBranch('set', function (ctx, tierId) {
              var tlfPlayer = ctx.source.player
              if (!tlfPlayer) {
                global.TLF_tellSource(ctx.source, Text.red('Apenas jogadores.'))
                return false
              }
              var tlfHand = tlfPlayer.mainHandItem
              if (tlfHand.empty) {
                global.TLF_tellSource(ctx.source, Text.red('Segure uma vara na mão.'))
                return false
              }
              if (!global.TLF.rod.isRodId(tlfHand.id)) {
                global.TLF_tellSource(ctx.source, Text.red('Item na mão não é uma vara (tag varas).'))
                return false
              }
              tlfPlayer.setMainHandItem(global.TLF.rod.applyTier(tlfHand, tierId))
              global.TLF_tellSource(ctx.source, Text.green('Tier "' + tierId + '" na vara.'))
              return true
            })
          )
          .then(
            tlfTierBranch('give', function (ctx, tierId) {
              var tlfPlayer = ctx.source.player
              if (!tlfPlayer) return false
              var tlfCount = 0
              global.TLF_ROD_IDS.forEach(function (rodId) {
                var tlfStack = global.TLF.rod.itemWithTier(rodId, tierId, 1)
                if (tlfStack) {
                  tlfPlayer.give(tlfStack)
                  tlfCount++
                }
              })
              global.TLF_tellSource(ctx.source, Text.green(tlfCount + ' varas com tier "' + tierId + '".'))
              return true
            })
          )
      )
      .then(
        Commands.literal('net')
          .then(
            tlfTierBranch('set', function (ctx, tierId) {
              var tlfPlayer = ctx.source.player
              if (!tlfPlayer) {
                global.TLF_tellSource(ctx.source, Text.red('Apenas jogadores.'))
                return false
              }
              var tlfHand = tlfPlayer.mainHandItem
              if (tlfHand.empty) {
                global.TLF_tellSource(ctx.source, Text.red('Segure a rede de pesca na mão.'))
                return false
              }
              if (!global.TLF.net.isNetId(tlfHand.id)) {
                global.TLF_tellSource(ctx.source, Text.red('Item na mão não é kubejs:fishing_net.'))
                return false
              }
              tlfPlayer.setMainHandItem(global.TLF.net.applyTier(tlfHand, tierId))
              global.TLF_tellSource(ctx.source, Text.green('Tier "' + tierId + '" na rede.'))
              return true
            })
          )
          .then(
            tlfTierBranch('give', function (ctx, tierId) {
              var tlfPlayer = ctx.source.player
              if (!tlfPlayer) return false
              var tlfStack = global.TLF.net.itemWithTier(tierId, 0)
              if (tlfStack) tlfPlayer.give(tlfStack)
              global.TLF_tellSource(ctx.source, Text.green('Rede com tier "' + tierId + '".'))
              return true
            })
          )
      )
  )
})
