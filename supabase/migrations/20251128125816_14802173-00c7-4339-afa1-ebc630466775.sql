-- Create storage buckets for resources
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('resource-files', 'resource-files', true),
  ('resource-thumbnails', 'resource-thumbnails', true);

-- RLS policies for resource files bucket
CREATE POLICY "Anyone can view resource files"
ON storage.objects FOR SELECT
USING (bucket_id = 'resource-files');

CREATE POLICY "Admins can upload resource files"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'resource-files' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update resource files"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'resource-files' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete resource files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'resource-files' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);

-- RLS policies for thumbnails bucket
CREATE POLICY "Anyone can view thumbnails"
ON storage.objects FOR SELECT
USING (bucket_id = 'resource-thumbnails');

CREATE POLICY "Admins can upload thumbnails"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'resource-thumbnails' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update thumbnails"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'resource-thumbnails' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete thumbnails"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'resource-thumbnails' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);