import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Akshat Nahata",
  description: "Welcome to Akshat's portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-[#121212]">
          <div className="container mx-auto px-12 py-4">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
