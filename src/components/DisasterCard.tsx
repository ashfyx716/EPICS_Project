import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DisasterCardProps {
  title: string;
  description: string;
  image: string;
  color: "primary" | "secondary" | "accent" | "alert";
}

const DisasterCard = ({ title, description, image, color }: DisasterCardProps) => {
  const colorClasses = {
    primary: "border-primary hover:shadow-primary/20",
    secondary: "border-secondary hover:shadow-secondary/20",
    accent: "border-accent hover:shadow-accent/20",
    alert: "border-alert hover:shadow-alert/20",
  };

  return (
    <Card
      className={`group overflow-hidden border-2 ${colorClasses[color]} hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up`}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Link to="/learn">
          <Button variant="outline" size="sm" className="group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default DisasterCard;
