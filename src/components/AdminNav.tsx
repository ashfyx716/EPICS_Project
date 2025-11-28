import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Image } from "lucide-react";

const AdminNav = () => {
  const location = useLocation();
  
  const navItems = [
    { to: "/admin/resources", label: "Resources", icon: FileText },
    { to: "/admin/site-images", label: "Site Images", icon: Image },
  ];
  
  return (
    <div className="bg-card border-b border-border mb-6">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 py-3">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button
                variant={location.pathname === item.to ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
