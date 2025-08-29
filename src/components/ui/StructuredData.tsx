import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

interface StructuredDataProps {
  type: 'website' | 'organization' | 'service' | 'article' | 'breadcrumb'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const location = useLocation()

  useEffect(() => {
    const generateSchema = () => {
      const baseUrl = 'https://pattern3.com'
      
      switch (type) {
        case 'website':
          return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Pattern3",
            "url": baseUrl,
            "description": "AI automation consultancy for SMBs - helping teams save 7.5 hours a week with human-centered AI workflows",
            "sameAs": [
              "https://instagram.com/pattern3solutions"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/work?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          }

        case 'organization':
          return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pattern3 LLC",
            "url": baseUrl,
            "logo": `${baseUrl}/images/pattern3black.png`,
            "description": "AI automation consultancy specializing in human-centered AI workflows for small and medium businesses",
            "founder": {
              "@type": "Person",
              "name": "Will Patterson",
              "jobTitle": "Founder & AI Consultant"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "United States"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "will@pattern3.com",
              "contactType": "customer service"
            },
            "serviceArea": {
              "@type": "Country",
              "name": "United States"
            }
          }

        case 'service':
          return {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Automation Consulting",
            "provider": {
              "@type": "Organization",
              "name": "Pattern3 LLC"
            },
            "description": "Custom AI automation solutions that save SMB teams 7.5+ hours per week",
            "serviceType": "AI Automation Consulting",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Small and Medium Businesses"
            }
          }

        case 'breadcrumb':
          const pathSegments = location.pathname.split('/').filter(Boolean)
          const breadcrumbItems = []
          
          // Always start with home
          breadcrumbItems.push({
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          })

          pathSegments.forEach((segment, index) => {
            const href = baseUrl + '/' + pathSegments.slice(0, index + 1).join('/')
            let name = segment
            
            // Convert segments to readable names
            switch (segment) {
              case 'work':
                name = 'Case Studies'
                break
              case 'about':
                name = 'About Pattern3'
                break
              case 'start':
                name = 'Get Started'
                break
              default:
                // For project IDs, convert to title case
                if (href.includes('/work/')) {
                  name = segment
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                }
            }

            breadcrumbItems.push({
              "@type": "ListItem",
              "position": index + 2,
              "name": name,
              "item": href
            })
          })

          return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems
          }

        case 'article':
          return {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data.title,
            "description": data.description,
            "author": {
              "@type": "Person",
              "name": "Will Patterson"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Pattern3 LLC",
              "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/images/pattern3black.png`
              }
            },
            "datePublished": data.datePublished || "2024-01-01",
            "dateModified": data.dateModified || "2024-01-01",
            "image": data.image ? `${baseUrl}${data.image}` : undefined,
            "url": `${baseUrl}${location.pathname}`
          }

        default:
          return null
      }
    }

    const schema = generateSchema()
    if (!schema) return

    // Remove existing schema of this type
    const existingScript = document.querySelector(`script[data-schema="${type}"]`)
    if (existingScript) {
      existingScript.remove()
    }

    // Add new schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-schema', type)
    script.textContent = JSON.stringify(schema, null, 2)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector(`script[data-schema="${type}"]`)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [type, data, location.pathname])

  return null
}