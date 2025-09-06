import localFont from "next/font/local";

export const heavitasFont = localFont({
  src: [{ path: "../app/fonts/Heavitas.ttf", weight: "400", style: "normal" }],
  variable: "--font-heavitas",
  display: "swap",
});
