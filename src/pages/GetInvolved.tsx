import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Heart, 
  Handshake, 
  Award, 
  Calendar,
  CheckCircle2
} from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Involved
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Join our mission to build safer communities through education and preparedness
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Ways to Contribute</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6">
                  Share your skills and time to help train schools and communities in disaster preparedness.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Conduct training sessions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Assist with drills and exercises</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Create educational content</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-secondary/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Donate</h3>
                <p className="text-muted-foreground mb-6">
                  Support our programs and help us reach more schools with life-saving education.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Fund training programs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Provide emergency supplies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Sponsor schools in need</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-accent/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Partner</h3>
                <p className="text-muted-foreground mb-6">
                  Collaborate with us as an organization, business, or institution to expand our reach.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Corporate sponsorships</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>School district partnerships</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Resource sharing agreements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Registration Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Volunteer Registration</h2>
                <p className="text-muted-foreground">
                  Join our community of dedicated volunteers making schools safer
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter last name" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea 
                      id="experience" 
                      placeholder="Tell us about your background in education, emergency management, or related fields..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea 
                      id="availability" 
                      placeholder="When are you available to volunteer? (days, times, frequency)"
                      className="mt-1 min-h-[80px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <Textarea 
                      id="interests" 
                      placeholder="What aspects of disaster preparedness are you most interested in?"
                      className="mt-1 min-h-[80px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-xs text-muted-foreground">MAR</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Emergency Preparedness Workshop</h3>
                      <p className="text-muted-foreground mb-3">
                        Interactive training session for educators and administrators covering earthquake and fire safety protocols.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>March 15, 2024</span>
                        </div>
                        <div>9:00 AM - 3:00 PM</div>
                      </div>
                    </div>
                    <Button variant="outline">Register</Button>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary/10 rounded-lg flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-secondary">22</div>
                      <div className="text-xs text-muted-foreground">MAR</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Community Safety Fair</h3>
                      <p className="text-muted-foreground mb-3">
                        Family-friendly event featuring safety demonstrations, resource booths, and hands-on learning activities.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>March 22, 2024</span>
                        </div>
                        <div>10:00 AM - 4:00 PM</div>
                      </div>
                    </div>
                    <Button variant="secondary">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Volunteer Recognition</h2>
              <p className="text-muted-foreground mb-8">
                All certified volunteers receive official recognition certificates, continuing education credits, 
                and exclusive access to advanced training programs.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Active Volunteers</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-3xl font-bold text-secondary mb-2">5,000+</div>
                  <div className="text-sm text-muted-foreground">Volunteer Hours</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
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

export default GetInvolved;
