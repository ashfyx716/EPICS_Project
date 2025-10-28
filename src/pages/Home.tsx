import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AlertBanner from "@/components/AlertBanner";
import DisasterCard from "@/components/DisasterCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Users, BookOpen } from "lucide-react";
import earthquakeIcon from "@/assets/icon-earthquake.jpg";
import floodIcon from "@/assets/icon-flood.jpg";
import fireIcon from "@/assets/icon-fire.jpg";
import pandemicIcon from "@/assets/icon-pandemic.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Alert Banner */}
        <div className="container mx-auto px-4 py-4">
          <AlertBanner
            message="🌊 Flood Warning in Effect - Check our Resources page for emergency preparedness tips"
            type="warning"
          />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Disaster Types Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learn About Different{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Disaster Types
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding different disasters is the first step to being prepared. 
                Explore our comprehensive guides for each type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DisasterCard
                title="Earthquakes"
                description="Learn how to prepare, protect yourself during shaking, and respond safely after an earthquake."
                image={earthquakeIcon}
                color="primary"
              />
              <DisasterCard
                title="Floods"
                description="Understand flood risks, evacuation procedures, and water safety measures for your institution."
                image={floodIcon}
                color="secondary"
              />
              <DisasterCard
                title="Fire Safety"
                description="Master fire prevention, evacuation plans, and emergency response protocols for your campus."
                image={fireIcon}
                color="alert"
              />
              <DisasterCard
                title="Pandemics"
                description="Prepare for health emergencies with hygiene protocols, social distancing, and safety measures."
                image={pandemicIcon}
                color="accent"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border-2 border-primary/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-up">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Emergency Checklist</h3>
                <p className="text-muted-foreground mb-4">
                  Download our comprehensive checklist to ensure your school is fully prepared.
                </p>
                <Link to="/resources">
                  <Button variant="outline" className="w-full">
                    Get Checklist
                  </Button>
                </Link>
              </div>

              <div className="bg-card border-2 border-secondary/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-up">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Training Modules</h3>
                <p className="text-muted-foreground mb-4">
                  Access interactive courses on disaster awareness and first aid training.
                </p>
                <Link to="/learn">
                  <Button variant="secondary" className="w-full">
                    Start Training
                  </Button>
                </Link>
              </div>

              <div className="bg-card border-2 border-accent/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-up">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Join Our Community</h3>
                <p className="text-muted-foreground mb-4">
                  Volunteer, donate, or partner with us to build safer educational institutions.
                </p>
                <Link to="/get-involved">
                  <Button variant="action" className="w-full">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Tips Section */}
        <section className="py-20 bg-gradient-to-br from-alert/5 via-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <AlertTriangle className="w-12 h-12 text-alert mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Quick Emergency Tips</h2>
                <p className="text-muted-foreground">
                  Essential actions to take during an emergency situation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6 border-l-4 border-primary">
                  <h3 className="font-bold mb-2">Stay Calm & Assess</h3>
                  <p className="text-sm text-muted-foreground">
                    Take a deep breath and quickly assess the situation. Keep students calm and follow your emergency plan.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border-l-4 border-secondary">
                  <h3 className="font-bold mb-2">Follow Evacuation Routes</h3>
                  <p className="text-sm text-muted-foreground">
                    Use designated evacuation routes and meet at the assembly point. Never use elevators during emergencies.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border-l-4 border-accent">
                  <h3 className="font-bold mb-2">Call for Help</h3>
                  <p className="text-sm text-muted-foreground">
                    Dial 911 or your local emergency number. Provide clear information about your location and situation.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border-l-4 border-alert">
                  <h3 className="font-bold mb-2">Account for Everyone</h3>
                  <p className="text-sm text-muted-foreground">
                    Take attendance once at the assembly point. Report any missing persons immediately to authorities.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link to="/contact">
                  <Button variant="alert" size="lg" className="animate-pulse-glow">
                    🚨 Emergency Contacts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real schools and colleges implementing effective disaster preparedness programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 shadow-md animate-fade-up">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-xl font-bold mb-2">Lincoln High School</h3>
                <p className="text-muted-foreground mb-4">
                  "After implementing DisasterReady's program, we successfully evacuated 1,200 students 
                  in under 8 minutes during a fire drill. Our staff feels confident and prepared."
                </p>
                <p className="text-sm font-semibold text-primary">- Principal Sarah Johnson</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-md animate-fade-up">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-2">Riverside College</h3>
                <p className="text-muted-foreground mb-4">
                  "The comprehensive training modules helped us create a robust emergency response plan. 
                  Our entire campus is now equipped with the knowledge to handle any disaster."
                </p>
                <p className="text-sm font-semibold text-secondary">- Dean Michael Roberts</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
