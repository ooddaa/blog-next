import Image from "next/image"
import { useMediaQuery } from "@mantine/hooks"

interface FeatureItemProps {
  width?: number,
  height?: number, 
  src: string,
  text: string,
  title: string,
  alt?: string
}

export const FeatureItem = ({ width = 308, height = 600, src, text, title, alt } : FeatureItemProps) => {
  const isMobile = useMediaQuery("(max-width: 690px)")
  return (      
      <div className="h-full flex flex-col md:flex-row items-center md:items-start max-sm:gap-16 pt-16 bg-white border">
          <main className="w-1/2 flex flex-col items-center justify-center md:items-start md:jusify-start space-y-4 max-md:pt-8 pl-16">
            <div className="text-xl text-slate-600 font-bold">
              {title}
            </div>
            <div className="text-lg">
            {text}
            </div>
          </main>
        <Image
          src={src}
          width={isMobile ? 200 : width}
          height={isMobile ? 400 : height}
          alt={alt || title.toLowerCase().replace(" ", "-")}
        />
      </div>
  )
}
