import { ThemeProvider } from '~/components/theme-provider'
import './globals.css'
export const metadata = {
  title: 'Arya tries coding',
  description: 'Generated by Mynraw'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute='class' enableSystem={false}>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
