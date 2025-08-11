import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:stanleym37@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Email client opened",
      description: "Your message has been prepared. Please send it from your email client.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your technology needs? Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="service-card border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you need custom software development, IT support, cybersecurity solutions, 
                  or live sound engineering services, I'm here to help turn your vision into reality.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <a 
                        href="mailto:stanleym37@gmail.com"
                        className="text-accent hover:text-accent-dark transition-colors"
                      >
                        stanleym37@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Linkedin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/stanley-ayo-2633697a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-dark transition-colors"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Location</p>
                      <p className="text-muted-foreground">Available for remote and on-site work</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="service-card border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Why Work With Me?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">15+ years of proven experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Comprehensive technology solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Fast response and reliable support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Focus on practical, user-friendly solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="service-card border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border/50 focus:border-accent focus:ring-accent/20"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border/50 focus:border-accent focus:ring-accent/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-border/50 focus:border-accent focus:ring-accent/20 resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-hero text-lg py-3"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;