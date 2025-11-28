import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AdminNav from "@/components/AdminNav";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSiteImages, useUpdateSiteImage } from "@/hooks/useSiteImages";
import { Loader2, Upload, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AdminSiteImages = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const { data: images, isLoading } = useSiteImages();
  const updateImage = useUpdateSiteImage();
  const [selectedFiles, setSelectedFiles] = useState<{ [key: string]: File }>({});
  const [altTexts, setAltTexts] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/");
      return;
    }

    const { data: hasAdminRole } = await supabase.rpc('has_role', {
      _user_id: user.id,
      _role: 'admin'
    });

    if (!hasAdminRole) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
  };

  const handleFileSelect = (imageType: string, file: File | null) => {
    if (file) {
      setSelectedFiles((prev) => ({ ...prev, [imageType]: file }));
    }
  };

  const handleUpload = async (imageType: string) => {
    const file = selectedFiles[imageType];
    if (!file) return;

    await updateImage.mutateAsync({
      imageType,
      file,
      altText: altTexts[imageType],
    });

    // Clear selection after upload
    setSelectedFiles((prev) => {
      const newState = { ...prev };
      delete newState[imageType];
      return newState;
    });
  };

  const getImageLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      hero: "Hero Image",
      earthquake_icon: "Earthquake Icon",
      flood_icon: "Flood Icon",
      fire_icon: "Fire Icon",
      pandemic_icon: "Pandemic Icon",
    };
    return labels[type] || type;
  };

  if (!isAdmin) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <AdminNav />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Manage Site Images</h1>
            <p className="text-muted-foreground">
              Upload and manage images displayed across the website
            </p>
          </div>

          <div className="grid gap-6">
            {images?.map((image) => (
              <Card key={image.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    {getImageLabel(image.image_type)}
                  </CardTitle>
                  <CardDescription>
                    Current: {image.image_url}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Current Image Preview */}
                    <div>
                      <Label className="mb-2 block">Current Image</Label>
                      <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border">
                        <img
                          src={image.image_url}
                          alt={image.alt_text || "Current image"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {image.alt_text || "No alt text"}
                      </p>
                    </div>

                    {/* Upload New Image */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor={`file-${image.image_type}`}>
                          Upload New Image
                        </Label>
                        <Input
                          id={`file-${image.image_type}`}
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileSelect(
                              image.image_type,
                              e.target.files?.[0] || null
                            )
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor={`alt-${image.image_type}`}>
                          Alt Text (Optional)
                        </Label>
                        <Input
                          id={`alt-${image.image_type}`}
                          placeholder="Describe the image..."
                          value={altTexts[image.image_type] || ""}
                          onChange={(e) =>
                            setAltTexts((prev) => ({
                              ...prev,
                              [image.image_type]: e.target.value,
                            }))
                          }
                          className="mt-1"
                        />
                      </div>

                      <Button
                        onClick={() => handleUpload(image.image_type)}
                        disabled={
                          !selectedFiles[image.image_type] ||
                          updateImage.isPending
                        }
                        className="w-full"
                      >
                        {updateImage.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            Update Image
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminSiteImages;
