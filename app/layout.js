import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
