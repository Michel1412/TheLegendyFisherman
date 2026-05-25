// priority: 85
// Exporta lista no log do KubeJS (java.io / java.nio bloqueados pelo class filter do KubeJS 2001).

global.TLF_EXPORT_PREFIX = '[listbytag-export]'

/**
 * Grava IDs no logs/kubejs/server.log (não é possível usar java.io.File nesta versão).
 * @param {string} tlfAlias
 * @param {string} tlfTag
 * @param {string[]} tlfIds
 * @returns {string} onde buscar a exportação
 */
global.TLF_writeTagListTemp = function (tlfAlias, tlfTag, tlfIds) {
  var tlfLogHint = 'logs/kubejs/server.log'

  console.info(global.TLF_EXPORT_PREFIX + ' === ' + tlfAlias + ' → ' + tlfTag + ' (' + tlfIds.length + ') ===')
  console.info(global.TLF_EXPORT_PREFIX + ' atalho: ' + tlfAlias)
  console.info(global.TLF_EXPORT_PREFIX + ' tag: ' + tlfTag)
  console.info(global.TLF_EXPORT_PREFIX + ' total: ' + tlfIds.length)

  tlfIds.forEach(function (id) {
    console.info(global.TLF_EXPORT_PREFIX + ' ' + id)
  })

  return tlfLogHint + ' (filtre por ' + global.TLF_EXPORT_PREFIX + ')'
}
