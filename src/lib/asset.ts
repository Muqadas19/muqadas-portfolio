export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function hashHref(hash: string) {
  const id = hash.replace(/^\/?#?/, "");
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}/#${id}`;
}
