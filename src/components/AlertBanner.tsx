import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AlertBannerProps {
  message: string;
  type?: "warning" | "info" | "urgent";
  onClose?: () => void;
}

const AlertBanner = ({ message, type = "info", onClose }: AlertBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const bgClass = {
    warning: "bg-accent/10 border-accent",
    info: "bg-primary/10 border-primary",
    urgent: "bg-alert/10 border-alert",
  }[type];

  const iconClass = {
    warning: "text-accent",
    info: "text-primary",
    urgent: "text-alert",
  }[type];

  return (
    <div className={`${bgClass} border-l-4 p-4 rounded-lg animate-fade-in`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconClass}`} />
        <p className="flex-1 text-sm font-medium text-foreground">{message}</p>
        <button
          onClick={handleClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close alert"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AlertBanner;
