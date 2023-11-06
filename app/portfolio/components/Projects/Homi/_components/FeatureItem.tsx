import Image from "next/image"

interface FeatureItemProps {
  width?: number,
  height?: number, 
  src: string,
  text: string,
  title: string,
  alt?: string
}

export const FeatureItem = ({ width = 308, height = 600, src, text, title, alt } : FeatureItemProps) => {
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
          width={width}
          height={height}
          alt={alt || title.toLowerCase().replace(" ", "-")}
        />
      </div>
  )
}
