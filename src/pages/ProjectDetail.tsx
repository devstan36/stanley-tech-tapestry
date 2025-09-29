import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { web3Projects } from "@/components/Projects";

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "Estateman",
      description: "The complete real estate management solution trusted by over 10,000+ agents and brokerages worldwide. Streamline operations, accelerate deal closures, and scale your business with our all-in-one platform designed for modern real estate professionals.",
      fullDescription: "The complete real estate management solution trusted by over 10,000+ agents and brokerages worldwide. Streamline operations, accelerate deal closures, and scale your business with our all-in-one platform designed for modern real estate professionals. Transform Your Real Estate Business From lead generation to closing day, our comprehensive platform handles every aspect of your real estate workflow. Manage listings, nurture client relationships, track commissions, and automate routine tasks while focusing on what you do best - closing deals and growing your network.",
      image: "/realty.png",
      technologies: ["React", "TypeScript", `FastAPI`, "PostgreSQL"],
      liveUrl: "https://estateman.scaleitpro.com",
      category: "Real Estate Technology",
      features: ["Lead Generation", "Listing Management", "Client Relationship Management", "Commission Tracking", "Deal Pipeline"]
    },
    {
      id: 2,
      title: "Skylit Luxury",
      description: "Your Ultimate Travel Companion - Car Rental & Hotel Booking Made Simple. Book smarter, travel better. The all-in-one app trusted by over 2 million travelers worldwide for seamless car rentals and hotel reservations.",
      fullDescription: "Your Ultimate Travel Companion - Car Rental & Hotel Booking Made Simple. Book smarter, travel better. The all-in-one app trusted by over 2 million travelers worldwide for seamless car rentals and hotel reservations. Compare prices, secure the best deals, and manage your entire trip from one powerful platform. Everything You Need for Perfect Travel Planning Whether you're planning a business trip, family vacation, or weekend getaway, our comprehensive app puts the world's best travel options at your fingertips. Compare thousands of cars and accommodations, book instantly, and enjoy exclusive member benefits wherever your journey takes you.",
      image: "/skylyt.png",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      liveUrl: "https://skylytluxury.com",
      category: "Travel Technology",
      features: ["Car Rental Booking", "Hotel Reservations", "Price Comparison", "Trip Management", "Member Benefits"]
    },
    {
      id: 3,
      title: "Calmcare",
      description: "Your Ultimate Travel Professional Counseling Platform - Mental Health Support That Fits Your Life. Access professional mental health support anytime, anywhere through secure video sessions, messaging, and personalized care plans.",
      fullDescription: "Your Ultimate Travel Professional Counseling Platform - Mental Health Support That Fits Your Life. Access professional mental health support anytime, anywhere through secure video sessions, messaging, and personalized care plans. Healing Made Accessible Break down barriers to mental health care with our comprehensive platform designed for modern wellness needs. Whether you're managing anxiety, depression, relationship challenges, or life transitions, our network of qualified professionals provides compassionate support tailored to your unique journey.",
      image: "/calm.png",
      technologies: ["React", "TypeScript"],
      liveUrl: "https://calmcare.scaleitpro.com",
      category: "Mental Health Technology",
      features: ["Video Sessions", "Secure Messaging", "Personalized Care Plans", "Professional Network", "Wellness Tracking"]
    },

    {
      id: 5,
      title: "EverySchool Management System",
      description: "EverySchool is an integrated, cloud-based school management system designed to streamline administrative processes and enhance educational outcomes for institutions of all sizes.",
      fullDescription: "EverySchool is an integrated, cloud-based school management system designed to streamline administrative processes and enhance educational outcomes for institutions of all sizes. Our comprehensive platform brings together students, teachers, parents, and administrators in a unified digital ecosystem that simplifies daily operations and improves communication across the entire school community.",
      image: "/every.png",
      technologies: ["Php", "MySQL"],
      liveUrl: "https://everyschool.online",
      category: "Education Technology",
      features: ["Student Management", "Teacher Portal", "Parent Communication", "Administrative Tools", "Academic Tracking"]
    },
    {
      id: 6,
      title: "Education Management Information System (EMIS)",
      description: "The Education Management Information System (EMIS) is a comprehensive digital platform designed to transform educational administration and data management across Nigeria's educational ecosystem.",
      fullDescription: "The Education Management Information System (EMIS) is a comprehensive digital platform designed to transform educational administration and data management across Nigeria's educational ecosystem. This centralized system enables real-time monitoring, planning, and decision-making for the Nigerian education sector at federal, state, and local government levels.",
      image: "/emis.png",
      technologies: ["React", "TypeScript", "PostgreSQL", "FastAPI"],
      liveUrl: "https://emis.scaleitpro.com",
      category: "Education Technology",
      features: ["Real-time Monitoring", "Data Management", "Educational Planning", "Government Integration", "Decision Support"]
    },

  ];

  const allProjects = [...projects, ...web3Projects];
  const project = allProjects.find(p => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button 
            variant="outline"
            onClick={() => {
              window.history.back();
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 lg:h-96 object-contain rounded-lg shadow-lg bg-gray-50"
              loading="lazy"
              decoding="async"
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

            <div className="pt-4 flex gap-4">
              <Button asChild className="btn-hero">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </a>
              </Button>
              {project.githubUrl && project.githubUrl !== "#" && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View On Github
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;