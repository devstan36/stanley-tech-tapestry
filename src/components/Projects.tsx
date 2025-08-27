import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
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
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Network Security Dashboard",
      description: "Real-time network monitoring and security analysis tool with threat detection and reporting.",
      image: "/placeholder.svg",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Cybersecurity"
    },
    {
      id: 3,
      title: "Cloud Infrastructure Automation",
      description: "Automated deployment and scaling solution for cloud infrastructure using Infrastructure as Code.",
      image: "/placeholder.svg",
      technologies: ["AWS", "Terraform", "Python", "Jenkins"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Cloud Computing"
    },
    {
      id: 4,
      title: "Live Event Audio System",
      description: "Professional audio mixing and management system for live events with real-time controls.",
      image: "/placeholder.svg",
      technologies: ["C++", "Qt", "ASIO", "Hardware Integration"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Audio Engineering"
    },
    {
      id: 5,
      title: "IT Asset Management System",
      description: "Comprehensive IT asset tracking and management solution for enterprise environments.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Laravel", "MySQL", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "IT Management"
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
        }}>
          <CarouselContent className="md:-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="service-card group hover:border-accent/30 h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
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
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
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