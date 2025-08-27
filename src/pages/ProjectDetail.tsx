import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      fullDescription: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog management, shopping cart functionality, secure payment processing with Stripe, order tracking, and a complete admin dashboard for inventory and order management.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      category: "Web Development",
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Inventory Management", "Order Tracking"]
    },
    {
      id: 2,
      title: "Network Security Dashboard",
      description: "Real-time network monitoring and security analysis tool with threat detection and reporting.",
      fullDescription: "Advanced network security monitoring system that provides real-time threat detection, vulnerability assessment, and comprehensive reporting. Built with Python and Django, it offers automated security scanning, alert management, and detailed analytics for network administrators.",
      image: "/placeholder.svg",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      liveUrl: "#",
      category: "Cybersecurity",
      features: ["Real-time Monitoring", "Threat Detection", "Vulnerability Assessment", "Automated Alerts", "Security Reports"]
    },
    {
      id: 3,
      title: "Cloud Infrastructure Automation",
      description: "Automated deployment and scaling solution for cloud infrastructure using Infrastructure as Code.",
      fullDescription: "Infrastructure as Code solution for automated cloud deployment and management. Utilizes Terraform for infrastructure provisioning, AWS services for scalable hosting, and Jenkins for continuous integration and deployment pipelines.",
      image: "/placeholder.svg",
      technologies: ["AWS", "Terraform", "Python", "Jenkins"],
      liveUrl: "#",
      category: "Cloud Computing",
      features: ["Infrastructure as Code", "Auto Scaling", "CI/CD Pipeline", "Multi-Environment Support", "Cost Optimization"]
    },
    {
      id: 4,
      title: "Live Event Audio System",
      description: "Professional audio mixing and management system for live events with real-time controls.",
      fullDescription: "Professional-grade audio mixing and management system designed for live events. Built with C++ and Qt framework, it provides real-time audio processing, multi-channel mixing, and hardware integration for professional sound engineering applications.",
      image: "/placeholder.svg",
      technologies: ["C++", "Qt", "ASIO", "Hardware Integration"],
      liveUrl: "#",
      category: "Audio Engineering",
      features: ["Real-time Audio Processing", "Multi-channel Mixing", "Hardware Integration", "Professional Controls", "Event Management"]
    },
    {
      id: 5,
      title: "IT Asset Management System",
      description: "Comprehensive IT asset tracking and management solution for enterprise environments.",
      fullDescription: "Enterprise-level IT asset management system for tracking and managing hardware and software assets. Features include asset lifecycle management, maintenance scheduling, compliance reporting, and integration with existing IT infrastructure.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Laravel", "MySQL", "REST API"],
      liveUrl: "#",
      category: "IT Management",
      features: ["Asset Tracking", "Lifecycle Management", "Maintenance Scheduling", "Compliance Reporting", "API Integration"]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="bg-accent/10 text-accent mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl font-bold text-primary mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Button asChild className="btn-hero">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;