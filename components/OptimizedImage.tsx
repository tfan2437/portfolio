"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  fill?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  theme?: "light" | "dark";
}

const black =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAALCAABAAEBAREA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB8A//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=";
const white =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAICAgICAgICAgICAgICAwUDAwMDAwYEBAMEBgYGBgYGBggICQcHBwoKCgoKCgoMDAwMDAwMDAwMDAwMDAz/wAALCAABAAEBAREA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAA/AMf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwCf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  quality = 85,
  placeholder = "empty",
  fill = false,
  objectFit = "cover",
  theme = "dark",
}: OptimizedImageProps) => {
  const blurDataURL = theme === "dark" ? black : white;

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      className={cn(
        fill ? `object-${objectFit}` : "",
        !fill && objectFit !== "cover" ? `object-${objectFit}` : "",
        className
      )}
      style={!fill ? { objectFit } : undefined}
      draggable={false}
      blurDataURL={blurDataURL}
    />
  );
};

export default OptimizedImage;

// ============================================================================
// USAGE EXAMPLES WITH BEST PRACTICES
// ============================================================================

// 1. Hero Section Images (Critical, Above-the-fold)
export const HeroImage = () => (
  <OptimizedImage
    src="/hero-banner.webp"
    alt="Hero banner"
    width={1920}
    height={1080}
    priority={true}
    quality={90}
    placeholder="blur"
    className="w-full h-auto"
  />
);

// 2. Project Cards (Important, but can be lazy loaded)
export const ProjectCardImage = ({ project }: { project: any }) => (
  <OptimizedImage
    src={project.image}
    alt={project.title}
    width={600}
    height={400}
    priority={false}
    quality={85}
    placeholder="blur"
    className="w-full h-auto rounded-lg"
  />
);

// 3. Cloudflare R2 Images (Lower priority, external CDN)
export const R2Image = ({ src, alt, width, height }: any) => (
  <OptimizedImage
    src={src}
    alt={alt}
    width={width}
    height={height}
    priority={false}
    quality={80}
    placeholder="blur"
    className="w-full h-auto rounded-lg"
  />
);

// 4. Avatar/Profile Images (Small, can be higher quality)
export const AvatarImage = () => (
  <OptimizedImage
    src="/metadata/avator.webp"
    alt="Profile avatar"
    width={42}
    height={42}
    priority={true}
    quality={95}
    className="rounded-full"
  />
);

// 5. Background Images (Fill container)
export const BackgroundImage = ({ src, alt }: { src: string; alt: string }) => (
  <OptimizedImage
    src={src}
    alt={alt}
    width={0}
    height={0}
    fill={true}
    priority={false}
    quality={75}
    objectFit="cover"
    sizes="100vw"
    className="absolute inset-0"
  />
);

// ============================================================================
// NEXT.JS CONFIG OPTIMIZATION
// ============================================================================

// next.config.ts
const nextConfig = {
  images: {
    // Optimize image formats
    formats: ["image/webp", "image/avif"],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Remote image patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.tfan2437.workers.dev",
        port: "",
        pathname: "/**",
      },
    ],

    // Enable image optimization
    unoptimized: false,

    // Minimum cache time for optimized images
    minimumCacheTTL: 31536000, // 1 year

    // Disable static imports for better optimization
    dangerouslyAllowSVG: false,
  },
};

// ============================================================================
// IMAGE OPTIMIZATION GUIDELINES
// ============================================================================

/*
🎯 IMAGE FORMAT STRATEGY:

1. **WebP (Primary)**
   - Use for all new images
   - 25-35% smaller than JPEG
   - Excellent browser support
   - Ideal for: Projects, UI elements, photos

2. **AVIF (Future-proof)**
   - Even better compression than WebP
   - Limited browser support (enable as fallback)
   - Next.js handles fallbacks automatically

3. **JPEG (Legacy)**
   - Use only for existing images
   - Gradual migration to WebP
   - Good for photos with complex colors

4. **PNG**
   - Use only for images requiring transparency
   - Icons, logos with transparency
   - Consider SVG alternatives

📏 IMAGE SIZING STRATEGY:

1. **Export Resolution**: 2x display size
   - Display 400px → Export 800px
   - Accounts for retina displays
   - DPI: 72 (web standard)

2. **Quality Settings**:
   - Critical images (hero, above-fold): 85-95%
   - Standard content: 75-85%
   - Background/decorative: 65-75%

3. **Dimensions**:
   - Always specify width/height
   - Prevents layout shift (CLS)
   - Use aspect-ratio CSS for responsive

🚀 LOADING STRATEGY:

1. **Priority Loading**:
   - Hero images
   - Above-the-fold content
   - Critical UI elements

2. **Lazy Loading** (default):
   - Below-the-fold images
   - Project galleries
   - Decorative images

3. **Preloading**:
   - Next critical image
   - User interaction hints

💡 PERFORMANCE OPTIMIZATIONS:

1. **Blur Placeholders**:
   - Generate low-quality placeholders
   - Base64 encoded tiny images
   - Smooth loading experience

2. **Sizes Attribute**:
   - Tell browser expected display size
   - Enables optimal image selection
   - Responsive image downloads

3. **CDN Strategy**:
   - Cloudflare R2 for non-critical images
   - Local storage for critical assets
   - Automatic format negotiation

📱 RESPONSIVE BREAKPOINTS:

- Mobile: 640px and below
- Tablet: 641px - 1024px  
- Desktop: 1025px and above
- Large: 1920px and above

🔧 IMPLEMENTATION TIPS:

1. Always use the OptimizedImage component
2. Set appropriate priority for above-fold images
3. Use blur placeholders for better UX
4. Specify sizes for responsive images
5. Monitor Core Web Vitals (LCP, CLS)
6. Use next/image analyzer for optimization insights

*/
