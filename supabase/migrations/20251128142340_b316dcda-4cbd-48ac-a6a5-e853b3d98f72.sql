-- Create table for site images
CREATE TABLE public.site_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  image_type TEXT NOT NULL UNIQUE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.site_images ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view active images
CREATE POLICY "Site images are viewable by everyone"
  ON public.site_images
  FOR SELECT
  USING (is_active = true);

-- Only admins can manage images
CREATE POLICY "Only admins can manage site images"
  ON public.site_images
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_site_images_updated_at
  BEFORE UPDATE ON public.site_images
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Insert default image types
INSERT INTO public.site_images (image_type, image_url, alt_text) VALUES
  ('hero', '/src/assets/hero-disaster-ready.jpg', 'Emergency first aid kit and disaster preparedness supplies'),
  ('earthquake_icon', '/src/assets/icon-earthquake.jpg', 'Earthquake disaster icon'),
  ('flood_icon', '/src/assets/icon-flood.jpg', 'Flood disaster icon'),
  ('fire_icon', '/src/assets/icon-fire.jpg', 'Fire disaster icon'),
  ('pandemic_icon', '/src/assets/icon-pandemic.jpg', 'Pandemic disaster icon');

-- Create storage bucket for site images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('site-images', 'site-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for site images
CREATE POLICY "Site images are publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'site-images');

CREATE POLICY "Admins can upload site images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'site-images' 
    AND (SELECT has_role(auth.uid(), 'admin'::app_role))
  );

CREATE POLICY "Admins can update site images"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'site-images' 
    AND (SELECT has_role(auth.uid(), 'admin'::app_role))
  );

CREATE POLICY "Admins can delete site images"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'site-images' 
    AND (SELECT has_role(auth.uid(), 'admin'::app_role))
  );