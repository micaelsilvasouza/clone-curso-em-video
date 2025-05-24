import Navbar from "../components/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar logo="logoBlue.png" styleHamburguer="bg-blue-950" styleLinks="text-blue-950"/>
            {children}
        </>
    )
}