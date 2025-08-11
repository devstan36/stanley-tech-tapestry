import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      type: "education",
      title: "WASSCE",
      institution: "",
      year: "2006",
      description: "West African Senior School Certificate Examination",
      icon: GraduationCap
    },
    {
      type: "certification",
      title: "Diploma in Cyber Security",
      institution: "Alison",
      year: "2025",
      description: "Comprehensive cybersecurity training covering threat assessment, data protection, and security protocols",
      icon: Award
    },
    {
      type: "certification",
      title: "Microsoft Certified Solutions Professional (MCSP)",
      institution: "Microsoft",
      year: "Current",
      description: "Professional certification in Microsoft technologies and solutions architecture",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="service-card group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className="border-accent/30 text-accent bg-accent/5"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                    {item.institution && (
                      <p className="text-sm text-accent font-medium mt-1">
                        {item.institution}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Professional Development Note */}
          <Card className="mt-12 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Commitment to Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                I believe in continuous learning and staying current with the latest technologies and industry best practices. 
                My commitment to professional development ensures that I can provide cutting-edge solutions and maintain 
                the highest standards of service delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;