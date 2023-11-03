import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface BlurredFillImageProps {
  url: string;
  alt: string;
}

export default async function BlurredFillImage({
  url,
  alt,
}: BlurredFillImageProps) {
  const src = url;
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      fill
      alt={alt}
      style={{ objectFit: "cover" }}
      placeholder="blur"
      blurDataURL={base64}
      unoptimized
    />
  );
}
