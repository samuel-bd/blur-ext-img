import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface BlurredImageProps {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export default async function BlurredImage({
  url,
  width,
  height,
  alt,
}: BlurredImageProps) {
  const src = url;
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
      unoptimized
    />
  );
}
