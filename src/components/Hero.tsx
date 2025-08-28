import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/80 to-accent/70"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Stanley Ayo
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 text-white/90 font-medium">
            IT Specialist | Software Developer | Live Sound Engineer
          </p>
          <p className="text-lg sm:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
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
          <button 
            onClick={scrollToNextSection}
            className="animate-bounce hover:text-white/80 transition-colors cursor-pointer"
          >
            <ArrowDown className="w-6 h-6 mx-auto text-white/60" />
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-accent/30 rounded-lg rotate-45 animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 border border-white/10 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;