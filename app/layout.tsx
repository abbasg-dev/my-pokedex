"use client";

import "./globals.css";
import { QueryClientProviderWrapper } from "../queryClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";
import * as ROUTES from "./constants/routes";
import App from "./page";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProviderWrapper>
          <BrowserRouter>
            <Routes>
              <Route path={ROUTES.HOME} element={<App />} />
              <Route
                path={ROUTES.POKEMON_DETAILS}
                element={<PokemonDetails />}
              />
            </Routes>
            {children}
          </BrowserRouter>
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
