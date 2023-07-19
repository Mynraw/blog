import { ThemeProvider } from '~/components/theme-provider';
import Navbar from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
