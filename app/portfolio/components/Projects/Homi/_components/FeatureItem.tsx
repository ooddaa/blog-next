import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

interface FeatureItemProps {
  width?: number;
  height?: number;
  src: string;
  text: string;
  title: string;
  alt?: string;
}

export const FeatureItem = (
  { width = 308, height = 600, src, text, title, alt }: FeatureItemProps,
) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="feature-item h-full flex flex-col items-center pt-16 bg-white border">
      <main className="w-full sm:w-1/2 flex flex-col items-center justify-center md:items-start md:jusify-start space-y-4 pb-16">
        <div className="text-xl text-slate-600 font-bold">
          {title}
        </div>
        <div className="text-lg px-8 text-center">
          {text}
        </div>
      </main>
      <Image
        className="tr"
        src={src}
        width={isMobile ? 200 : width}
        height={isMobile ? 400 : height}
        alt={alt || title.toLowerCase().replace(" ", "-")}
      />
    </div>
  );
};
