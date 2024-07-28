import QueryClientProvider from '@/providers/QueryClientProvider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
