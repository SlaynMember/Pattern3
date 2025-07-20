interface StaticImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
}

/**
 * Static image component that works reliably during build-time rendering
 * This component avoids any dynamic behavior that could cause prerendering issues
 */
export default function StaticImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy'
}: StaticImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : loading}
      decoding="async"
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  )
}