import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface ResourceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  downloadUrl?: string;
  externalUrl?: string;
}

const ResourceCard = ({ icon, title, description, downloadUrl, externalUrl }: ResourceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 text-primary">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex gap-2">
          {downloadUrl && (
            <Button variant="secondary" size="sm" className="flex-1">
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
          )}
          {externalUrl && (
            <Button variant="outline" size="sm" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-1" />
              View
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
