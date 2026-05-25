// priority: 80
// Orquestra getByTag + chat + arquivo temporário.

/**
 * @param {import('net.minecraft.commands.CommandSourceStack')} source
 * @param {string} tagOrAlias
 * @returns {boolean}
 */
global.TLF_listTagForCommand = function (source, tagOrAlias) {
  var tlfLookup = global.TLF_getByTag(tagOrAlias)

  if (!tlfLookup.ok) {
    global.TLF_tellSource(source, Text.red(tlfLookup.error))
    return false
  }

  var tlfPath = global.TLF_writeTagListTemp(tlfLookup.alias, tlfLookup.tag, tlfLookup.ids)

  global.TLF_tellSource(source, Text.gold('=== ' + tlfLookup.alias + ' → ' + tlfLookup.tag + ' (' + tlfLookup.ids.length + ') ==='))
  tlfLookup.ids.forEach(function (id) {
    global.TLF_tellSource(source, Text.gray(id))
  })
  global.TLF_tellSource(source, Text.darkGray('Exportado em: ' + tlfPath))

  console.info('[listbytag] ' + tlfLookup.alias + ' → ' + tlfLookup.tag + ' (' + tlfLookup.ids.length + ' itens)')
  tlfLookup.ids.forEach(function (id) {
    console.info('  - ' + id)
  })

  return true
}

/**
 * @param {import('net.minecraft.commands.CommandSourceStack')} source
 */
global.TLF_listAtalhosForCommand = function (source) {
  global.TLF_tellSource(source, Text.gold('=== Atalhos de tags (TLF_TAGS) ==='))
  Object.keys(global.TLF_TAGS).forEach(function (key) {
    global.TLF_tellSource(source, Text.gray(key + ' → ' + global.TLF_TAGS[key]))
  })
}
