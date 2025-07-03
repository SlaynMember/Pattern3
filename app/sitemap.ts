import { MetadataRoute } from 'next'
import { projectsData } from '@/data/projectsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pattern3.com'
  
  const staticPages = [
    '',
    '/work',
    '/about',
    '/start',
  ]
  
  const projectPages = projectsData.map(project => `/work/${project.id}`)
  
  const allPages = [...staticPages, ...projectPages]
  
  return allPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : 0.8,
  }))
}