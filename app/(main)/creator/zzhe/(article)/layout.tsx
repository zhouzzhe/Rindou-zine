import FirstImage from "@/app/components/firstImage";
import Sidebar from "@/app/components/sidebar";
import SubSidebar from "@/app/components/subsidebar";

export default function CreatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FirstImage/>
      <section className="relative mx-auto flex max-w-[1440px] justify-center">
        <SubSidebar />
        {children}
        <Sidebar />
      </section>
    </>
  );
}
