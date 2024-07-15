import React from "react";
import './globals.css';
import { Plus_Jakarta_Sans } from "next/font/google";
import Providers from '@/app/componenets/providers';
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log("rendering");
  return (
    
    <html lang="en">
      {/* <body className={ font.className }> */}
      {/* {children} */}
      {/* </body> */}
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>

  );
}
