import type { ReactNode } from "react";
import "../styles/global.css";

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="m-4 flex flex-col">
        {children}
        {modal}
      </body>
    </html>
  );
}
