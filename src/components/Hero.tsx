import { Button } from "@/components/ui/button";
import { Battery, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Powered by Machine Learning</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Smart EV Battery
            <span className="text-gradient block mt-2">Swapping System</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionize your EV charging experience with AI-powered battery management. 
            Instant swaps, predictive analytics, and zero downtime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Dashboard
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Battery className="w-6 h-6" />
                <span className="text-3xl font-bold">10K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Active Batteries</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-secondary">
                <Zap className="w-6 h-6" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Swap Stations</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary">
                <TrendingUp className="w-6 h-6" />
                <span className="text-3xl font-bold">99.8%</span>
              </div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
