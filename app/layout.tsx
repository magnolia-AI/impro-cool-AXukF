import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Earthen | Handcrafted Ceramics',
  description: 'Discover our collection of handmade ceramic pieces crafted with care and attention to detail',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" attribute="class">
          {/* 
            TEMPLATE SECTION: Header
            This is a template header - replace with your own navigation
            Consider adding a logo, navigation links, theme toggle, etc.
          */}
          <header className="border-b border-border/40">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MobileNav />
                <div className="font-serif text-xl tracking-wide">EARTHEN</div>
              </div>
              <nav className="hidden md:flex gap-8">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors uppercase text-sm tracking-wider">Shop</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors uppercase text-sm tracking-wider">Collections</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors uppercase text-sm tracking-wider">About</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors uppercase text-sm tracking-wider">Process</a>
              </nav>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button variant="ghost" size="sm" className="rounded-none uppercase text-xs tracking-wider">Cart (0)</Button>
              </div>
            </div>
          </header>

          {/* 
            TEMPLATE NOTE:
            This is where your page content will be rendered.
            The layout wraps all pages with consistent header and footer.
          */}
          <main className="flex-1">
            {children}
          </main>

          {/* 
            TEMPLATE SECTION: Footer
            Basic footer - replace with your own design
            Consider adding navigation, social links, etc.
          */}
          <footer className="border-t border-border/40">
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                  <h3 className="font-serif text-lg mb-4">EARTHEN</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Handcrafted ceramics made with intention. Each piece tells a story of craftsmanship and natural beauty.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase text-xs tracking-wider mb-4">Shop</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tableware</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Vases</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Planters</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Decorative Pieces</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="uppercase text-xs tracking-wider mb-4">Information</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Our Process</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Care Instructions</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sustainability</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="uppercase text-xs tracking-wider mb-4">Contact</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="text-muted-foreground">Email: hello@earthenceramics.com</li>
                    <li className="text-muted-foreground">Studio: (555) 123-4567</li>
                    <li className="text-muted-foreground">123 Clay Studio Lane<br/>Portland, OR 97201</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border/40 mt-12 pt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  © 2024 Earthen Ceramics. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


