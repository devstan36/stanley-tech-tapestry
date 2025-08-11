import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Cosmic Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-accent/30"></div>
        <div className="absolute inset-0" style={{ background: 'var(--hero-gradient)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-foreground px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-glow bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
            Stanley Martin
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 text-foreground/90 font-medium">
            IT Specialist | Software Developer | Live Sound Engineer
          </p>
          <p className="text-lg sm:text-xl mb-8 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Helping people and businesses thrive through the power of technology for over 15 years.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="btn-hero text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button 
              variant="outline"
              className="btn-outline-hero text-lg px-8 py-4"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/stanley-ayo-2633697a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-accent animate-neon-pulse" />
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent/30 rounded-full animate-cosmic-float hidden lg:block glow-accent"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-primary/40 rounded-lg rotate-45 animate-cosmic-float hidden lg:block glow-primary" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 border-2 border-accent/20 rounded-full animate-cosmic-float hidden lg:block pulse-glow" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-cosmic-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-accent/30 rounded-full animate-cosmic-float hidden lg:block" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Hero;