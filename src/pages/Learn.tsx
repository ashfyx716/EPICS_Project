import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Video, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Award,
  AlertTriangle,
  Droplet,
  Flame,
  Shield
} from "lucide-react";

const Learn = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Learn & Be{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Prepared
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive educational modules designed for students, teachers, and staff
              </p>
            </div>
          </div>
        </section>

        {/* Learning Modules */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="earthquake" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
                <TabsTrigger value="earthquake">Earthquakes</TabsTrigger>
                <TabsTrigger value="flood">Floods</TabsTrigger>
                <TabsTrigger value="fire">Fire Safety</TabsTrigger>
                <TabsTrigger value="pandemic">Pandemics</TabsTrigger>
              </TabsList>

              <TabsContent value="earthquake" className="space-y-6">
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Earthquake Preparedness</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Video className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-sm">Video Lesson</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Understanding Earthquakes</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>15 minutes</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-sm">Reading Material</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Drop, Cover, and Hold On</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>10 minutes</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-sm">Quiz</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Test Your Knowledge</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>5 minutes</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <h3 className="font-bold mb-3">What You'll Learn:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>How earthquakes occur and their warning signs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Proper "Drop, Cover, and Hold On" technique</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Building evacuation procedures and assembly points</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Post-earthquake safety measures and aftershocks</span>
                        </li>
                      </ul>
                    </div>

                    <Button className="w-full md:w-auto" size="lg">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="flood" className="space-y-6">
                <Card className="border-2 border-secondary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Droplet className="w-6 h-6 text-secondary" />
                      </div>
                      <CardTitle className="text-2xl">Flood Safety & Response</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Video className="w-4 h-4 text-secondary" />
                          <span className="font-semibold text-sm">Video Lesson</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Understanding Flood Risks</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>12 minutes</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-secondary" />
                          <span className="font-semibold text-sm">Reading Material</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Evacuation Planning</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>8 minutes</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          <span className="font-semibold text-sm">Quiz</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Test Your Knowledge</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>5 minutes</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <h3 className="font-bold mb-3">What You'll Learn:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Identifying flood-prone areas and reading flood warnings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Creating effective evacuation routes and emergency kits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Water safety measures and avoiding flood waters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Post-flood cleanup and health precautions</span>
                        </li>
                      </ul>
                    </div>

                    <Button variant="secondary" className="w-full md:w-auto" size="lg">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fire" className="space-y-6">
                <Card className="border-2 border-alert/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-alert/10 rounded-lg flex items-center justify-center">
                        <Flame className="w-6 h-6 text-alert" />
                      </div>
                      <CardTitle className="text-2xl">Fire Safety Training</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Video className="w-4 h-4 text-alert" />
                          <span className="font-semibold text-sm">Video Lesson</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Fire Prevention Basics</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>18 minutes</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-alert" />
                          <span className="font-semibold text-sm">Reading Material</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Evacuation Procedures</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>12 minutes</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-alert" />
                          <span className="font-semibold text-sm">Quiz</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Test Your Knowledge</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>5 minutes</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <h3 className="font-bold mb-3">What You'll Learn:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-alert mt-0.5 flex-shrink-0" />
                          <span>Fire prevention strategies and early detection systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-alert mt-0.5 flex-shrink-0" />
                          <span>Proper use of fire extinguishers and fire alarms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-alert mt-0.5 flex-shrink-0" />
                          <span>Safe evacuation techniques and exit strategies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-alert mt-0.5 flex-shrink-0" />
                          <span>Stop, drop, and roll procedure for clothing fires</span>
                        </li>
                      </ul>
                    </div>

                    <Button variant="alert" className="w-full md:w-auto" size="lg">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pandemic" className="space-y-6">
                <Card className="border-2 border-accent/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-2xl">Pandemic Preparedness</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Video className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-sm">Video Lesson</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Health Emergency Response</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>20 minutes</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-sm">Reading Material</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Hygiene Protocols</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>10 minutes</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-sm">Quiz</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Test Your Knowledge</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>5 minutes</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <h3 className="font-bold mb-3">What You'll Learn:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Understanding disease transmission and prevention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Proper hand hygiene and personal protective equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Social distancing protocols and remote learning strategies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Mental health support during health emergencies</span>
                        </li>
                      </ul>
                    </div>

                    <Button variant="action" className="w-full md:w-auto" size="lg">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Earn Your Certification</h2>
              <p className="text-muted-foreground mb-8">
                Complete all modules and assessments to receive your official DisasterReady certification, 
                recognized by educational institutions and emergency management organizations.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Core Modules</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-3xl font-bold text-secondary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Learning Hours</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-3xl font-bold text-accent mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Certificate</div>
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

export default Learn;
