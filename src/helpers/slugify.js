/**
 * Convert a string to a URL-safe slug.
 * - Lowercases
 * - Removes diacritics (áéíóú ñ ü, etc.)
 * - Replaces spaces with hyphens
 * - Collapses repeated hyphens
 * - Keeps only a–z, 0–9 and hyphens
 * @param {string} str
 * @returns {string}
 */
export function slugify(str = '') {
  return String(str)
    .trim()
    .toLowerCase()
    // quitar acentos/diacríticos
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    // reemplazar espacios por guiones
    .replace(/\s+/g, '-')
    // quitar cualquier cosa que no sea a-z, 0-9 o '-'
    .replace(/[^a-z0-9-]/g, '')
    // colapsar guiones repetidos
    .replace(/-+/g, '-')
    // quitar guiones al inicio/fin
    .replace(/^-+|-+$/g, '');
}
