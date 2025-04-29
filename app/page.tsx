'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()

  const showNotification = () => {
    toast({
      title: "Added to cart",
      description: "Your item has been added to your cart",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight">
            Handcrafted Ceramics<br />for Mindful Living
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
            Each piece tells a story of craftsmanship, intention, and natural beauty. Made with care in our Portland studio.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 rounded-none uppercase text-sm tracking-wider">Shop Collection</Button>
            <Button size="lg" variant="outline" className="px-8 rounded-none uppercase text-sm tracking-wider">
              Our Process
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-16">Featured Collection</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-[1200px] mx-auto">
            <Card className="bg-card/50 border-none rounded-none shadow-none overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"></div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium">Minimalist Vase</h3>
                  <span className="text-sm">8</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Hand-thrown stoneware with matte finish
                </p>
                <Button variant="ghost" size="sm" className="w-full rounded-none uppercase text-xs tracking-wider" onClick={showNotification}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-none rounded-none shadow-none overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"></div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium">Espresso Set</h3>
                  <span className="text-sm">2</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Set of 4 handcrafted espresso cups
                </p>
                <Button variant="ghost" size="sm" className="w-full rounded-none uppercase text-xs tracking-wider" onClick={showNotification}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-none rounded-none shadow-none overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"></div>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium">Serving Bowl</h3>
                  <span className="text-sm">8</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Large serving bowl with speckled glaze
                </p>
                <Button variant="ghost" size="sm" className="w-full rounded-none uppercase text-xs tracking-wider" onClick={showNotification}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-serif text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-[4/5] bg-muted relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Crafted with Intention</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Each piece begins as a lump of clay and is transformed through a process that honors traditional techniques while embracing modern aesthetics.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our ceramics are wheel-thrown or hand-built, dried slowly, bisque fired, glazed, and then high-fired to create durable, functional art for everyday use.
              </p>
              <Button variant="outline" className="rounded-none uppercase text-sm tracking-wider">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[500px] mx-auto text-center">
            <h2 className="text-2xl font-serif mb-6">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive updates on new collections, studio insights, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="rounded-none uppercase text-xs tracking-wider">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
