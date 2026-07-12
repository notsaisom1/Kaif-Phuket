import { defineCliConfig } from 'sanity/cli'

/**
 * Replace projectId after creating a Sanity project:
 *   npx sanity@latest init --env
 * or set SANITY_STUDIO_PROJECT_ID in studio/.env
 */
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'kaif-phuket',
})
