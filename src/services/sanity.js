import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2025-01-01'

export const isSanityConfigured = Boolean(
  projectId && projectId !== 'your_project_id_here' && projectId !== 'YOUR_PROJECT_ID'
)

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

/** Build a Sanity CDN image URL from an image field */
export function urlForImage(source, { width } = {}) {
  if (!source) return null
  if (source.asset?.url) return source.asset.url

  const ref = source.asset?._ref
  if (!ref || !projectId) return null

  // image-<id>-<WxH>-<ext>  (id may contain hyphens)
  const match = ref.match(/^image-(.+)-(\d+x\d+)-(\w+)$/)
  if (!match) return null

  const [, id, dimensions, format] = match
  const base = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`
  return width ? `${base}?w=${width}&auto=format` : `${base}?auto=format`
}
