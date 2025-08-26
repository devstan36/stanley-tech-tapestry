import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    "15+ Years Experience",
    "IT Infrastructure Expert",
    "Software Development",
    "Cybersecurity Specialist",
    "Live Sound Engineer",
    "Project Leadership"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about turning complex challenges into simple, effective solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <Card className="border-accent/20 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    I'm <span className="font-semibold text-accent">Stanley Ayo</span>, an IT Specialist with over 15 years of experience delivering innovative technology solutions that make life and work easier.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground">
                    I'm passionate about turning complex challenges into simple, effective systems that people actually enjoy using. My expertise spans software development, IT infrastructure, cybersecurity, live sound engineering, and tech support — blending technical precision with creative problem-solving.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground">
                    Whether building a custom application, securing a network, or delivering flawless event audio, my mission is to help people and businesses thrive through the power of technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Key Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="p-3 justify-center text-center bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-colors"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="border-accent/20 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-primary mb-4">My Approach</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-accent">Listen First:</strong> Understanding your unique challenges and goals
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-accent">Strategic Planning:</strong> Designing solutions that scale with your business
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-accent">Reliable Delivery:</strong> Implementing robust, user-friendly solutions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-accent">Ongoing Support:</strong> Ensuring long-term success and optimization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;