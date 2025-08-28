import { Mail, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Stanley Ayo</h3>
            <p className="text-primary-foreground/80">
              IT Specialist & Technology Solutions Expert
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <p className="text-primary-foreground/80 mb-4">
              Ready to transform your technology challenges into opportunities?
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:stanleym37@gmail.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/stanley-ayo-2633697a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-accent bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Stanley Ayo. Helping businesses thrive through technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;