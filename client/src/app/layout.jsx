import { Header } from "@/components/Header";
import "./globals.css";
import ProviderAuth from "@/contexts/ContextAuth";

export const metadata = {
  title: "Manejo de autenticación para inicio de sesión con Cookies y JWT",
  description: "Todo el manejo completo: seguridad, escalabilidad y buenas prácticas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ProviderAuth>
          <Header />
          {children}
        </ProviderAuth>
      </body>
    </html>
  );
}
