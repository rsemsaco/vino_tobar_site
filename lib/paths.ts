/** Prefix only local paths; idempotent to prevent duplicated base paths. */
export const BASE_PATH = '/vino_tobar_site';
export const SITE_URL = `https://rsemsaco.github.io${BASE_PATH}/`;
export function localPath(path: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === BASE_PATH || normalized.startsWith(`${BASE_PATH}/`)) return normalized;
  return `${BASE_PATH}${normalized}`;
}
