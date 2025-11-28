import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-disaster-ready.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background -z-10" />
      
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Building Safer Communities
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Be{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Prepared
              </span>
              {" "}for Any Disaster
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Comprehensive disaster preparedness education for schools and colleges. 
              Learn, prepare, and respond effectively to emergencies with expert guidance and resources.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/learn">
                <Button variant="hero" size="lg" className="gap-2">
                  <BookOpen className="w-5 h-5" />
                  Start Learning
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Users className="w-5 h-5" />
                  Get Involved
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Schools Trained</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Students Educated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-border">
              <img
                src={heroImage}
                alt="Emergency first aid kit and disaster preparedness supplies"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg animate-pulse-glow">
              <div className="text-sm font-semibold">🏆 Award Winning</div>
              <div className="text-xs opacity-90">Safety Program 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
