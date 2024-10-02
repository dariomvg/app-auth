import { Header } from "@/components/Header";
import "./globals.css";
import ProviderAuth from "@/contexts/ContextAuth";

export const metadata = {
  title: "App auth",
  description: "App para autenticación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderAuth>
          <Header />
          {children}
        </ProviderAuth>
      </body>
    </html>
  );
}
