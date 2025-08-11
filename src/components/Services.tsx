import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Server, 
  Network, 
  Shield, 
  Cloud, 
  Volume2, 
  Headphones 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Building tailored web, mobile, and desktop applications that meet your specific business requirements.",
      features: ["Web Applications", "Mobile Apps", "Desktop Solutions", "API Development"]
    },
    {
      icon: Server,
      title: "IT Systems Setup & Support",
      description: "Designing, installing, and maintaining reliable IT infrastructure for businesses of all sizes.",
      features: ["System Installation", "Hardware Setup", "Software Configuration", "Ongoing Maintenance"]
    },
    {
      icon: Network,
      title: "Network & Server Administration",
      description: "Ensuring secure, efficient, and optimized network operations with expert server management.",
      features: ["Network Design", "Server Management", "Performance Optimization", "System Monitoring"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protecting businesses against threats through comprehensive audits, monitoring, and defense strategies.",
      features: ["Security Audits", "Threat Monitoring", "Compliance", "Incident Response"]
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Management",
      description: "Deploying and managing cloud-based solutions for enhanced scalability and cost-efficiency.",
      features: ["Cloud Migration", "AWS/Azure Setup", "Cost Optimization", "Cloud Security"]
    },
    {
      icon: Volume2,
      title: "Live Event Sound Engineering",
      description: "Delivering crystal-clear audio for conferences, concerts, and corporate events with professional expertise.",
      features: ["Live Sound Setup", "Audio Mixing", "Equipment Management", "Event Coordination"]
    },
    {
      icon: Headphones,
      title: "Technical Support Services",
      description: "Offering prompt and efficient troubleshooting for hardware, software, and network problems.",
      features: ["24/7 Support", "Remote Assistance", "On-site Service", "Training & Documentation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="service-card group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;