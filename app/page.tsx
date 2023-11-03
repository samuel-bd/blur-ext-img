import BlurredFillImage from "@/app/ui/BlurredFillImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="relative overflow-hidden w-[400px] h-[400px]">
          {/* @ts-expect-error Async Component */}
          <BlurredFillImage
            url="https://source.unsplash.com/random" // generates random picture from unsplash
            alt="A test for blur"
          />
        </div>
      </div>
    </main>
  );
}
