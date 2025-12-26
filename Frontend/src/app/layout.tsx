import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" cz-shortcut-listen="true">
         <body className={inter.className} cz-shortcut-listen="true">
            {children}
         </body>
      </html>
   );
}
