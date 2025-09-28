import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    "https://i.ibb.co/B2DPnzBk/Whats-App-Image-2025-09-26-at-14-53-45.jpg",
    "https://i.ibb.co/ZpbJ111P/Whats-App-Image-2025-09-26-at-14-53-46-1.jpg",
    "https://i.ibb.co/Xr3ZdGwG/Whats-App-Image-2025-09-26-at-14-53-46.jpg",
    "https://i.ibb.co/0jCwTQCR/Whats-App-Image-2025-09-26-at-14-53-47-1.jpg",
    "https://i.ibb.co/ZyJL5m7/Whats-App-Image-2025-09-26-at-14-53-47-2.jpg",
    "https://i.ibb.co/BVZ9pRtR/Whats-App-Image-2025-09-26-at-14-53-47-3.jpg",
    "https://i.ibb.co/N25X0F5Q/Whats-App-Image-2025-09-26-at-14-53-47.jpg",
    "https://i.ibb.co/Q72MC7Zs/Whats-App-Image-2025-09-26-at-14-53-48.jpg",
    "https://i.ibb.co/NdWPr1rZ/Whats-App-Image-2025-09-26-at-14-54-06.jpg",
    "https://i.ibb.co/j9qc5DPP/Whats-App-Image-2025-09-26-at-14-54-07.jpg",
    "https://i.ibb.co/gLB0Q4L5/Whats-App-Image-2025-09-26-at-14-54-09-1.jpg",
    "https://i.ibb.co/JWvDS28B/Whats-App-Image-2025-09-26-at-14-54-09.jpg",
    "https://i.ibb.co/xW3mP63/Whats-App-Image-2025-09-26-at-14-54-10-1.jpg",
    "https://i.ibb.co/8JDfrFm/Whats-App-Image-2025-09-26-at-14-54-10.jpg",
    "https://i.ibb.co/6JgwbVRv/Whats-App-Image-2025-09-26-at-14-54-11-1.jpg",
    "https://i.ibb.co/zWM1fMqG/Whats-App-Image-2025-09-26-at-14-54-11.jpg",
    "https://i.ibb.co/wZvGykZC/Whats-App-Image-2025-09-26-at-14-55-38.jpg",
    "https://i.ibb.co/pvtdq6Mv/Whats-App-Image-2025-09-26-at-14-55-54.jpg",
    "https://i.ibb.co/7tMD6wGP/Whats-App-Image-2025-09-26-at-14-56-30-1.jpg",
    "https://i.ibb.co/WNrW2Ljc/Whats-App-Image-2025-09-26-at-14-56-30-2.jpg",
    "https://i.ibb.co/WppVHLN7/Whats-App-Image-2025-09-26-at-14-56-30.jpg",
    "https://i.ibb.co/XfCFSj0D/Whats-App-Image-2025-09-26-at-14-56-31-1.jpg",
    "https://i.ibb.co/prs5RCRf/Whats-App-Image-2025-09-26-at-14-56-31-2.jpg",
    "https://i.ibb.co/DmhzMTS/Whats-App-Image-2025-09-26-at-14-56-31-3.jpg",
    "https://i.ibb.co/0ypRz3Dt/Whats-App-Image-2025-09-26-at-14-56-31.jpg"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20">
        <section className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">Our Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our collection of moments, events, and achievements at Virtuous Law Partners.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-card border-border">
                        <CardContent className="flex aspect-video items-center justify-center p-6">
                          <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-border bg-card text-card-foreground hover:bg-accent" />
              <CarouselNext className="border-border bg-card text-card-foreground hover:bg-accent" />
            </Carousel>
            
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                Use the arrow buttons to navigate through {galleryImages.length} images
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;