import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Users, Heart, Award, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  DisasterReady
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to make every school and college a safe haven through 
                comprehensive disaster preparedness education and resources.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 animate-fade-up hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower educational institutions with the knowledge, resources, and training 
                  needed to prepare for, respond to, and recover from any disaster effectively, 
                  ensuring the safety and well-being of every student and staff member.
                </p>
              </div>

              <div className="bg-card border-2 border-secondary/20 rounded-2xl p-8 animate-fade-up hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every school and college is fully prepared for disasters, where 
                  students and educators feel confident and safe, and where communities are 
                  resilient in the face of any emergency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at DisasterReady
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center animate-fade-up">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  The safety and security of students and staff is our top priority in every decision we make.
                </p>
              </div>

              <div className="text-center animate-fade-up">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We build strong partnerships and foster collaboration among schools, families, and emergency services.
                </p>
              </div>

              <div className="text-center animate-fade-up">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compassion</h3>
                <p className="text-muted-foreground">
                  We approach every situation with empathy, understanding the unique needs of each institution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to making schools safer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300 animate-fade-up">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  AS
                </div>
                <h3 className="text-xl font-bold mb-1">Ashfaq Sayeed</h3>
                <p className="text-sm text-primary font-medium mb-3">Founder & Lead Developer</p>
                <p className="text-sm text-muted-foreground">
                  B.Tech CSE student at VIT Vellore, passionate about using technology for social impact and disaster management solutions
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300 animate-fade-up">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary-glow rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  MP
                </div>
                <h3 className="text-xl font-bold mb-1">Mithun Prakash</h3>
                <p className="text-sm text-secondary font-medium mb-3">Backend Developer</p>
                <p className="text-sm text-muted-foreground">
                  Computer Science student at BITS Pilani, specializing in database management and cloud architecture for emergency systems
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300 animate-fade-up">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-glow rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SS
                </div>
                <h3 className="text-xl font-bold mb-1">Sai Shashank</h3>
                <p className="text-sm text-accent font-medium mb-3">UI/UX Designer</p>
                <p className="text-sm text-muted-foreground">
                  Design student at NID Ahmedabad, focused on creating accessible and intuitive interfaces for educational platforms
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300 animate-fade-up">
                <div className="w-24 h-24 bg-gradient-to-br from-alert to-alert-glow rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SM
                </div>
                <h3 className="text-xl font-bold mb-1">Sampath Mohan</h3>
                <p className="text-sm text-alert font-medium mb-3">Content Strategist</p>
                <p className="text-sm text-muted-foreground">
                  Mass Communication student at Symbiosis Pune, developing educational content and disaster awareness campaigns
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
              <p className="text-muted-foreground">Making a real difference in school safety</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Schools Certified</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Educators Certified</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <div className="text-4xl font-bold text-alert mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
