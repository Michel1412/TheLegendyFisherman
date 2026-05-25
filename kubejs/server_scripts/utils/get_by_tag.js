// priority: 90
// Retorna IDs de itens a partir de um atalho (ex: "peixes") ou tag completa (ex: "#minecraft:fishes").
// Rhino/KubeJS 2001: evitar const/let e nomes curtos (alias, tag, ids, atalho) — causam redeclaration.

/**
 * @param {string} tagOrAlias
 * @returns {{ ok: boolean, tag?: string, alias: string, ids: string[], error?: string }}
 */
global.TLF_getByTag = function (tagOrAlias) {
  var tlfKey = String(tagOrAlias).trim().toLowerCase()

  if (!tlfKey) {
    return { ok: false, alias: tlfKey, ids: [], error: 'Informe um atalho ou tag.' }
  }

  var tlfTag = tlfKey.indexOf('#') === 0 ? tlfKey : global.TLF_TAGS[tlfKey]

  if (!tlfTag) {
    var tlfKeysList = Object.keys(global.TLF_TAGS).join(', ')
    return {
      ok: false,
      alias: tlfKey,
      ids: [],
      error: 'Atalho "' + tlfKey + '" não encontrado. Disponíveis: ' + tlfKeysList + '.'
    }
  }

  var tlfIds = []

  try {
    Ingredient.of(tlfTag).itemIds.forEach(function (id) {
      tlfIds.push(String(id))
    })
  } catch (e) {
    return { ok: false, alias: tlfKey, tag: tlfTag, ids: [], error: 'Erro ao ler a tag ' + tlfTag + '.' }
  }

  tlfIds.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })

  return { ok: true, tag: tlfTag, alias: tlfKey, ids: tlfIds }
}
