import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

interface ResourceFormDialogProps {
  open: boolean;
  onClose: () => void;
  resource?: {
    id: string;
    title: string;
    description: string;
    category: string;
    file_url: string | null;
    thumbnail_url: string | null;
  } | null;
}

const ResourceFormDialog = ({ open, onClose, resource }: ResourceFormDialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (resource) {
      setTitle(resource.title);
      setDescription(resource.description || "");
      setCategory(resource.category);
    } else {
      setTitle("");
      setDescription("");
      setCategory("");
      setFile(null);
      setThumbnail(null);
    }
  }, [resource, open]);

  const uploadFile = async (file: File, bucket: string) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      let fileUrl = resource?.file_url || null;
      let thumbnailUrl = resource?.thumbnail_url || null;

      if (file) {
        fileUrl = await uploadFile(file, "resource-files");
      }

      if (thumbnail) {
        thumbnailUrl = await uploadFile(thumbnail, "resource-thumbnails");
      }

      const resourceData = {
        title,
        description,
        category,
        file_url: fileUrl,
        thumbnail_url: thumbnailUrl,
        created_by: user.id,
      };

      if (resource) {
        const { error } = await supabase
          .from("resources")
          .update(resourceData)
          .eq("id", resource.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Resource updated successfully",
        });
      } else {
        const { error } = await supabase
          .from("resources")
          .insert([resourceData]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Resource created successfully",
        });
      }

      onClose();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{resource ? "Edit Resource" : "Add New Resource"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="checklist">Checklist</SelectItem>
                <SelectItem value="educational">Educational Material</SelectItem>
                <SelectItem value="poster">Safety Poster</SelectItem>
                <SelectItem value="template">Emergency Template</SelectItem>
                <SelectItem value="medical">Medical Resource</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="file">Resource File (PDF, Video, etc.)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                accept=".pdf,.doc,.docx,.mp4,.mov,.avi"
              />
              <Upload className="w-5 h-5 text-muted-foreground" />
            </div>
            {resource?.file_url && !file && (
              <p className="text-sm text-muted-foreground mt-1">Current file uploaded</p>
            )}
          </div>

          <div>
            <Label htmlFor="thumbnail">Thumbnail Image</Label>
            <div className="flex items-center gap-2">
              <Input
                id="thumbnail"
                type="file"
                onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                accept="image/*"
              />
              <Upload className="w-5 h-5 text-muted-foreground" />
            </div>
            {resource?.thumbnail_url && !thumbnail && (
              <p className="text-sm text-muted-foreground mt-1">Current thumbnail uploaded</p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : resource ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceFormDialog;
