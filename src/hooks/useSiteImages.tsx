import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface SiteImage {
  id: string;
  image_type: string;
  image_url: string;
  alt_text: string | null;
  is_active: boolean;
}

export const useSiteImages = () => {
  return useQuery({
    queryKey: ["site-images"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_images")
        .select("*")
        .eq("is_active", true);

      if (error) throw error;
      return data as SiteImage[];
    },
  });
};

export const useSiteImage = (imageType: string) => {
  return useQuery({
    queryKey: ["site-image", imageType],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_images")
        .select("*")
        .eq("image_type", imageType)
        .eq("is_active", true)
        .single();

      if (error) throw error;
      return data as SiteImage;
    },
  });
};

export const useUpdateSiteImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      imageType,
      file,
      altText,
    }: {
      imageType: string;
      file: File;
      altText?: string;
    }) => {
      // Upload file to storage
      const fileExt = file.name.split(".").pop();
      const fileName = `${imageType}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("site-images")
        .upload(filePath, file, {
          upsert: true,
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("site-images").getPublicUrl(filePath);

      // Update database
      const { error: updateError } = await supabase
        .from("site_images")
        .update({
          image_url: publicUrl,
          alt_text: altText,
          updated_at: new Date().toISOString(),
        })
        .eq("image_type", imageType);

      if (updateError) throw updateError;

      return publicUrl;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site-images"] });
      toast.success("Image updated successfully");
    },
    onError: (error) => {
      toast.error(`Failed to update image: ${error.message}`);
    },
  });
};
