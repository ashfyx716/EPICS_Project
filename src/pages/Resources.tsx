import { useState, useEffect } from "react";
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
  Phone,
  Video
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  file_url: string | null;
  thumbnail_url: string | null;
}

const Resources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const { data, error } = await supabase
      .from("resources")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load resources",
        variant: "destructive",
      });
      return;
    }

    setResources(data || []);
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "checklist":
        return <ClipboardList className="w-6 h-6" />;
      case "educational":
        return <BookOpen className="w-6 h-6" />;
      case "poster":
        return <FileBarChart className="w-6 h-6" />;
      case "template":
        return <FileText className="w-6 h-6" />;
      case "medical":
        return <Heart className="w-6 h-6" />;
      case "video":
        return <Video className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "checklist":
        return "Essential Checklists";
      case "educational":
        return "Educational Materials";
      case "poster":
        return "Safety Posters & Visuals";
      case "template":
        return "Emergency Plans & Templates";
      case "medical":
        return "First Aid & Medical Resources";
      case "video":
        return "Educational Videos";
      default:
        return "Resources";
    }
  };

  const categories = ["checklist", "educational", "poster", "template", "medical", "video"];
  
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

        {/* Dynamic Resource Sections */}
        {categories.map((category, index) => {
          const categoryResources = resources.filter((r) => r.category === category);
          
          if (categoryResources.length === 0) return null;

          return (
            <section 
              key={category} 
              className={`py-20 ${index % 2 === 1 ? "bg-muted/30" : ""}`}
            >
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {getCategoryTitle(category)}
                </h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {categoryResources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      icon={getIcon(resource.category)}
                      title={resource.title}
                      description={resource.description || ""}
                      downloadUrl={resource.file_url || undefined}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

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
                    Download all our resources in one comprehensive package
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
