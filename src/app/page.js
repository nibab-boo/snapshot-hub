import DarkToggle from "@/components/DarkToggle";
import GalleryCard from "@/components/GalleryCard";

export default function Home() {
  return (
    <div className={`grid grid-rows-[20px_1fr_20px] grid-cols-[repeat(auto-fill,minmax(150px,1fr))] bg-white dark:bg-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <DarkToggle />
      <GalleryCard title="Sunset" imgSrc='https://picsum.photos/200' />
      <GalleryCard title="Sunset" imgSrc='https://picsum.photos/200' />
      <GalleryCard title="Sunset" imgSrc='https://picsum.photos/200' />
      <GalleryCard title="Sunset" imgSrc='https://picsum.photos/200' />
    </div>
  );
}
