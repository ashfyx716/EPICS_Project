import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlertBanner from "@/components/AlertBanner";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, Info, Calendar, MapPin } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      type: "urgent",
      title: "Severe Weather Warning",
      location: "Northeast Region",
      time: "2 hours ago",
      message: "Heavy rainfall expected. Schools in affected areas should review flood preparedness plans.",
    },
    {
      id: 2,
      type: "warning",
      title: "Heat Wave Advisory",
      location: "Southwest Region",
      time: "5 hours ago",
      message: "Extreme temperatures forecasted. Ensure adequate hydration stations and cooling areas are available.",
    },
    {
      id: 3,
      type: "info",
      title: "Preparedness Drill Reminder",
      location: "All Regions",
      time: "1 day ago",
      message: "Monthly safety drill scheduled for next week. Review evacuation procedures with all staff.",
    },
    {
      id: 4,
      type: "info",
      title: "New Safety Guidelines Released",
      location: "National",
      time: "2 days ago",
      message: "Updated pandemic response guidelines now available in the Resources section.",
    },
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "urgent":
        return "destructive";
      case "warning":
        return "default";
      default:
        return "secondary";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "urgent":
        return <AlertTriangle className="w-5 h-5 text-alert" />;
      case "warning":
        return <Bell className="w-5 h-5 text-accent" />;
      default:
        return <Info className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <Bell className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Safety{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Alerts
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Real-time disaster alerts, warnings, and important safety updates for educational institutions
              </p>
            </div>
          </div>
        </section>

        {/* Active Alerts Banner */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <AlertBanner
              message="⚠️ Active Alert: Flood warning in Northeast region. Click for details and safety guidelines."
              type="urgent"
            />
          </div>
        </section>

        {/* Alert Feed */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Recent Alerts</h2>
                <button className="text-sm text-primary font-medium hover:underline">
                  Subscribe to Alerts →
                </button>
              </div>

              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        {getIcon(alert.type)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold">{alert.title}</h3>
                              <Badge variant={getBadgeVariant(alert.type)}>
                                {alert.type.toUpperCase()}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {alert.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {alert.time}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{alert.message}</p>
                        
                        <button className="text-sm text-primary font-medium hover:underline">
                          View Full Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Alert Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Alert Types</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 border-2 border-alert/20 text-center">
                  <div className="w-16 h-16 bg-alert/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-alert" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Urgent</h3>
                  <p className="text-sm text-muted-foreground">
                    Immediate threats requiring instant action and response
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border-2 border-accent/20 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Warning</h3>
                  <p className="text-sm text-muted-foreground">
                    Potential hazards to monitor and prepare for
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border-2 border-primary/20 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Info className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Information</h3>
                  <p className="text-sm text-muted-foreground">
                    General updates, reminders, and awareness messages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alert Subscription CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
              <Bell className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Never Miss an Alert</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to receive instant notifications about disasters, emergencies, and safety updates 
                relevant to your region via email and SMS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg border border-border bg-background"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Alerts;
