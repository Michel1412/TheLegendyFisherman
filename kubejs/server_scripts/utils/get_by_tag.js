// priority: 90
// Retorna IDs de itens a partir de um atalho (ex: "peixes") ou tag completa (ex: "#minecraft:fishes").
// Rhino/KubeJS 2001: evitar const/let e nomes curtos (alias, tag, ids, atalho) — causam redeclaration.

global.TLF_collectTagIds = function (tlfTag) {
  var tlfIds = []
  try {
    Ingredient.of(tlfTag).itemIds.forEach(function (id) {
      tlfIds.push(String(id))
    })
  } catch (e) {
    return { ok: false, ids: [], error: 'Erro ao ler a tag ' + tlfTag + '.' }
  }
  return { ok: true, ids: tlfIds }
}

global.TLF_collectAllItemIds = function () {
  var tlfIds = []
  try {
    Ingredient.all.itemIds.forEach(function (id) {
      tlfIds.push(String(id))
    })
  } catch (e) {
    return { ok: false, ids: [], error: 'Nao consegui varrer todos os itens via Ingredient.all.' }
  }
  return { ok: true, ids: tlfIds }
}

global.TLF_pushUniqueSorted = function (tlfIds, tlfId) {
  if (tlfIds.indexOf(tlfId) < 0) tlfIds.push(tlfId)
}

global.TLF_sortIds = function (tlfIds) {
  tlfIds.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
}

global.TLF_findDiscoveryCategory = function (tlfKey) {
  var tlfCategories = global.TLF_DISCOVERY_LISTS || {}
  var tlfFound = null

  Object.keys(tlfCategories).forEach(function (tlfCategoryKey) {
    if (tlfFound) return

    var tlfCategory = tlfCategories[tlfCategoryKey]
    if (tlfKey === tlfCategoryKey) {
      tlfFound = tlfCategoryKey
      return
    }

    ;(tlfCategory.aliases || []).forEach(function (tlfAlias) {
      if (tlfKey === String(tlfAlias).toLowerCase()) tlfFound = tlfCategoryKey
    })
  })

  return tlfFound
}

global.TLF_getDiscoveryList = function (tlfKey) {
  var tlfCategoryKey = global.TLF_findDiscoveryCategory(tlfKey)
  var tlfCategory = tlfCategoryKey ? global.TLF_DISCOVERY_LISTS[tlfCategoryKey] : null

  if (!tlfCategory) return null

  var tlfIds = []
  var tlfUsedTags = []
  var tlfEmptyTags = []
  var tlfTagErrors = []

  ;(tlfCategory.tagCandidates || []).forEach(function (tlfTag) {
    var tlfTagLookup = global.TLF_collectTagIds(tlfTag)
    if (!tlfTagLookup.ok) {
      tlfTagErrors.push(tlfTag)
      return
    }

    if (tlfTagLookup.ids.length === 0) {
      tlfEmptyTags.push(tlfTag)
      return
    }

    tlfUsedTags.push(tlfTag)
    tlfTagLookup.ids.forEach(function (tlfId) {
      global.TLF_pushUniqueSorted(tlfIds, tlfId)
    })
  })

  var tlfAllItems = global.TLF_collectAllItemIds()
  var tlfHeuristicCount = 0

  if (tlfAllItems.ok) {
    tlfAllItems.ids.forEach(function (tlfId) {
      var tlfLower = tlfId.toLowerCase()
      var tlfModid = tlfLower.split(':')[0]
      var tlfMatchesMod = (tlfCategory.modids || []).indexOf(tlfModid) >= 0
      var tlfMatchesKeyword = false
      var tlfExcluded = false

      ;(tlfCategory.keywords || []).forEach(function (tlfKeyword) {
        if (tlfLower.indexOf(String(tlfKeyword).toLowerCase()) >= 0) tlfMatchesKeyword = true
      })

      ;(tlfCategory.excludeKeywords || []).forEach(function (tlfKeyword) {
        if (tlfLower.indexOf(String(tlfKeyword).toLowerCase()) >= 0) tlfExcluded = true
      })

      if (tlfMatchesKeyword && tlfMatchesMod && !tlfExcluded) {
        if (tlfIds.indexOf(tlfId) < 0) tlfHeuristicCount++
        global.TLF_pushUniqueSorted(tlfIds, tlfId)
      }
    })
  }

  global.TLF_sortIds(tlfIds)

  var tlfNotes = []
  if (tlfUsedTags.length > 0) tlfNotes.push('tags usadas: ' + tlfUsedTags.join(', '))
  if (tlfEmptyTags.length > 0) tlfNotes.push('tags vazias/ausentes: ' + tlfEmptyTags.join(', '))
  if (tlfTagErrors.length > 0) tlfNotes.push('tags nao lidas: ' + tlfTagErrors.join(', '))
  if (tlfAllItems.ok) {
    tlfNotes.push('heuristica por ID adicionou ' + tlfHeuristicCount + ' item(ns)')
  } else {
    tlfNotes.push(tlfAllItems.error)
  }

  return {
    ok: true,
    tag: 'discovery:' + tlfCategoryKey,
    alias: tlfCategoryKey,
    label: tlfCategory.label,
    ids: tlfIds,
    notes: tlfNotes
  }
}

/**
 * @param {string} tagOrAlias
 * @returns {{ ok: boolean, tag?: string, alias: string, label?: string, ids: string[], notes?: string[], error?: string }}
 */
global.TLF_getByTag = function (tagOrAlias) {
  var tlfKey = String(tagOrAlias).trim().toLowerCase()

  if (!tlfKey) {
    return { ok: false, alias: tlfKey, ids: [], error: 'Informe um atalho ou tag.' }
  }

  var tlfDiscovery = global.TLF_getDiscoveryList(tlfKey)
  if (tlfDiscovery) return tlfDiscovery

  var tlfTag = tlfKey.indexOf('#') === 0 ? tlfKey : global.TLF_TAGS[tlfKey]

  if (!tlfTag) {
    var tlfKeysList = Object.keys(global.TLF_TAGS).concat(Object.keys(global.TLF_DISCOVERY_LISTS || {})).join(', ')
    return {
      ok: false,
      alias: tlfKey,
      ids: [],
      error: 'Atalho "' + tlfKey + '" não encontrado. Disponíveis: ' + tlfKeysList + '.'
    }
  }

  var tlfTagResult = global.TLF_collectTagIds(tlfTag)
  if (!tlfTagResult.ok) return { ok: false, alias: tlfKey, tag: tlfTag, ids: [], error: tlfTagResult.error }

  global.TLF_sortIds(tlfTagResult.ids)

  return { ok: true, tag: tlfTag, alias: tlfKey, ids: tlfTagResult.ids }
}
