import Navbar from "@/app/components/layout/navbar";

export default function CursoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    {children}
    </>
  );
}
