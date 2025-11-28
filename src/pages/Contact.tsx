import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  AlertTriangle,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're here to help with your disaster preparedness questions and support needs
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-12 bg-gradient-to-r from-alert/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border-2 border-alert/30 rounded-2xl p-8 animate-pulse-glow">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-alert flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Emergency Numbers</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-alert mb-2">🚨 Emergency Services</h3>
                        <p className="text-3xl font-bold text-alert mb-1">112</p>
                        <p className="text-sm text-muted-foreground">National Emergency Number</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">📞 Police / Fire / Ambulance</h3>
                        <p className="text-2xl font-bold mb-1">100 / 101 / 102</p>
                        <p className="text-sm text-muted-foreground">24/7 Emergency Helplines</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Have questions about our programs, resources, or training? We'd love to hear from you. 
                    Our team typically responds within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91-11-2345-6789</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">help@disasterready.in</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        National Disaster Management Center<br />
                        Block-4, Sector 18, Dwarka<br />
                        New Delhi - 110075, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 10:00 AM - 3:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Resources */}
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-3">Need Immediate Help?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        → View Emergency Procedures
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        → Download Safety Checklists
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        → Access Training Resources
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        → Read FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input id="contact-email" type="email" placeholder="john.doe@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" type="tel" placeholder="+91-98765-43210" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="mt-1 min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Offices */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Regional Offices</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">North India Region</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    New Delhi
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +91-11-2345-0001
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">South India Region</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Bangalore, Karnataka
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +91-80-2345-0002
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold mb-2">West India Region</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Mumbai, Maharashtra
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +91-22-2345-0003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
