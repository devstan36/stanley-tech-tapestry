import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RealtyPro",
      description: "The complete real estate management solution trusted by over 10,000+ agents and brokerages worldwide. Streamline operations, accelerate deal closures, and scale your business with our all-in-one platform designed for modern real estate professionals. Transform Your Real Estate Business From lead generation to closing day, our comprehensive platform handles every aspect of your real estate workflow.",
      image: "/realty.png",
      technologies: ["React", "TypeScript"],
      liveUrl: "https://realtyspark.scaleitpro.com",
      githubUrl: "#",
      category: "Real Estate Technology"
    },
    {
      id: 2,
      title: "Skylit Luxury",
      description: "Your Ultimate Travel Companion - Car Rental & Hotel Booking Made Simple. Book smarter, travel better. The all-in-one app trusted by over 2 million travelers worldwide for seamless car rentals and hotel reservations. Compare prices, secure the best deals, and manage your entire trip from one powerful platform. Everything You Need for Perfect Travel Planning Whether you're planning a business trip, family vacation, or weekend getaway, our comprehensive app puts the world's best travel options at your fingertips.",
      image: "/skylyt.png",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      liveUrl: "https://skylyt.scaleitpro.com",
      githubUrl: "#",
      category: "Travel Technology"
    },
    {
      id: 3,
      title: "Calmcare",
      description: "Your Ultimate Travel Professional Counseling Platform - Mental Health Support That Fits Your Life. Access professional mental health support anytime, anywhere through secure video sessions, messaging, and personalized care plans. Healing Made Accessible Break down barriers to mental health care with our comprehensive platform designed for modern wellness needs. Whether you're managing anxiety, depression, relationship challenges, or life transitions, our network of qualified professionals provides compassionate support tailored to your unique journey.",
      image: "/calm.png",
      technologies: ["React", "TypeScript"],
      liveUrl: "https://calmcare.scaleitpro.com",
      githubUrl: "#",
      category: "Mental Health Technology"
    },

    {
      id: 5,
      title: "EverySchool Management System",
      description: "EverySchool is an integrated, cloud-based school management system designed to streamline administrative processes and enhance educational outcomes for institutions of all sizes.",
      image: "/every.png",
      technologies: ["Laravel", "PostgreSQL"],
      liveUrl: "https://everyschool.online",
      githubUrl: "#",
      category: "Education Technology"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across different technology domains
          </p>
        </div>

        <Carousel className="w-full" opts={{
          align: "center",
          loop: true,
        }} plugins={[
          {
            init: (embla) => {
              const autoplay = () => {
                if (embla.canScrollNext()) {
                  embla.scrollNext();
                } else {
                  embla.scrollTo(0);
                }
              };
              const interval = setInterval(autoplay, 3000);
              embla.on('pointerDown', () => clearInterval(interval));
            }
          }
        ]}>
          <CarouselContent className="md:-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="service-card group hover:border-accent/30 h-full flex flex-col hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                      />
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-6">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          asChild
                        >
                          <a href={`/project/${project.id}`}>
                            <ArrowRight className="w-4 h-4 mr-2" />
                            View Details
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;