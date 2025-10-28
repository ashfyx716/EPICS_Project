import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import { 
  FileText, 
  Download, 
  ClipboardList, 
  Map, 
  BookOpen, 
  FileBarChart,
  Briefcase,
  Heart,
  Phone
} from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Preparedness{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Downloadable checklists, guides, posters, and essential resources for disaster preparedness
              </p>
            </div>
          </div>
        </section>

        {/* Essential Checklists */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Essential Checklists</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ResourceCard
                icon={<ClipboardList className="w-6 h-6" />}
                title="Emergency Kit Checklist"
                description="Complete list of essential items for your school's emergency supply kit"
                downloadUrl="#"
              />
              <ResourceCard
                icon={<ClipboardList className="w-6 h-6" />}
                title="Evacuation Planning Checklist"
                description="Step-by-step guide to creating effective evacuation routes and procedures"
                downloadUrl="#"
              />
              <ResourceCard
                icon={<ClipboardList className="w-6 h-6" />}
                title="Communication Protocol"
                description="Essential contact information and emergency communication templates"
                downloadUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Educational Materials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Educational Materials</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ResourceCard
                icon={<BookOpen className="w-6 h-6" />}
                title="Student Safety Guide"
                description="Age-appropriate disaster safety information for K-12 students"
                downloadUrl="#"
                externalUrl="#"
              />
              <ResourceCard
                icon={<FileText className="w-6 h-6" />}
                title="Teacher's Handbook"
                description="Comprehensive guide for educators on disaster preparedness instruction"
                downloadUrl="#"
                externalUrl="#"
              />
              <ResourceCard
                icon={<BookOpen className="w-6 h-6" />}
                title="Parent Information Packet"
                description="Resources for parents to reinforce safety education at home"
                downloadUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Safety Posters & Visuals */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Safety Posters & Visuals</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ResourceCard
                icon={<FileBarChart className="w-6 h-6" />}
                title="Drop, Cover, Hold On Poster"
                description="Visual guide for earthquake safety procedures (printable)"
                downloadUrl="#"
              />
              <ResourceCard
                icon={<Map className="w-6 h-6" />}
                title="Evacuation Map Template"
                description="Customizable floor plan template for exit routes and assembly points"
                downloadUrl="#"
              />
              <ResourceCard
                icon={<FileBarChart className="w-6 h-6" />}
                title="Fire Safety Procedures"
                description="Step-by-step fire safety infographic for classrooms"
                downloadUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Emergency Plans */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Emergency Plans & Templates</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ResourceCard
                icon={<FileText className="w-6 h-6" />}
                title="School Emergency Plan"
                description="Comprehensive template for developing your institution's emergency plan"
                downloadUrl="#"
              />
              <ResourceCard
                icon={<FileText className="w-6 h-6" />}
                title="Crisis Communication Plan"
                description="Template for managing communication during emergencies"
                downloadUrl="#"
              />
              <ResourceCard
                icon={<Map className="w-6 h-6" />}
                title="Reunification Protocol"
                description="Procedures for safely reuniting students with families post-disaster"
                downloadUrl="#"
              />
            </div>
          </div>
        </section>

        {/* First Aid & Medical */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">First Aid & Medical Resources</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ResourceCard
                icon={<Heart className="w-6 h-6" />}
                title="Basic First Aid Guide"
                description="Essential first aid procedures for common emergencies"
                downloadUrl="#"
                externalUrl="#"
              />
              <ResourceCard
                icon={<Heart className="w-6 h-6" />}
                title="Medical Supply List"
                description="Recommended medical supplies for school emergency kits"
                downloadUrl="#"
              />
              <ResourceCard
                icon={<Phone className="w-6 h-6" />}
                title="Emergency Contact Card"
                description="Wallet-sized card with critical emergency numbers and information"
                downloadUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Additional Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <Download className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Complete Resource Pack</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Download all our resources in one comprehensive package (PDF, 50MB)
                  </p>
                  <button className="text-primary font-semibold text-sm hover:underline">
                    Download All Resources →
                  </button>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-bold mb-2">External Resources</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Links to FEMA, Red Cross, and other trusted disaster preparedness organizations
                  </p>
                  <button className="text-secondary font-semibold text-sm hover:underline">
                    View External Links →
                  </button>
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

export default Resources;
