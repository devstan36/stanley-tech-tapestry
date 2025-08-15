import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Network, 
  Shield, 
  Cloud, 
  Volume2, 
  Wrench, 
  Brain, 
  MessageSquare, 
  Users 
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      icon: Code,
      title: "Software Development",
      description: "Designing, developing, and deploying robust, scalable applications tailored to business needs.",
      level: 95
    },
    {
      icon: Network,
      title: "Network Administration & IT Infrastructure",
      description: "Managing and optimizing LAN/WAN networks, servers, and enterprise IT systems.",
      level: 90
    },
    {
      icon: Shield,
      title: "Cybersecurity & Data Protection",
      description: "Implementing proactive security measures, conducting vulnerability assessments, and ensuring compliance with data protection standards.",
      level: 88
    },
    {
      icon: Cloud,
      title: "Cloud Computing Solutions",
      description: "Building and managing cloud-based services on AWS, Azure, and other leading platforms.",
      level: 85
    },
    {
      icon: Volume2,
      title: "Live Sound Engineering",
      description: "Operating professional audio systems, ensuring high-quality sound for live events, and managing technical setups.",
      level: 92
    },
    {
      icon: Wrench,
      title: "Tech Support & Troubleshooting",
      description: "Providing fast, reliable assistance to resolve hardware, software, and network issues.",
      level: 96
    }
  ];

  const softSkills = [
    {
      icon: Brain,
      title: "Problem-Solving & Technical Troubleshooting",
      description: "Quickly diagnosing issues and delivering effective, lasting solutions under pressure."
    },
    {
      icon: MessageSquare,
      title: "Clear Technical Communication",
      description: "Translating complex technical concepts into simple, actionable insights for non-technical stakeholders."
    },
    {
      icon: Users,
      title: "Project Leadership",
      description: "Planning, executing, and overseeing IT and multimedia projects, ensuring on-time and on-budget delivery."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 15 years of hands-on experience across technology and audio engineering domains
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="service-card group hover:border-accent/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{skill.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="service-card group hover:border-accent/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;