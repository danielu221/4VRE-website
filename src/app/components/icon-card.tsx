import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface IconCardProps {
  icon: ReactNode;
  iconDesktop?: ReactNode;
  title: string;
  subtitle: string;
}

export function IconCard({ icon, iconDesktop, title, subtitle }: IconCardProps) {
  return (
    <Card className="bg-card rounded-3xl border-none h-full">
      {/* Mobile layout: horizontal with icon on left */}
      <div className="flex flex-row items-center p-6 md:hidden">
        <div className="flex-shrink-0 flex items-center justify-center mr-6">
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <h3 className="text-xl font-medium">{subtitle}</h3>
        </div>
      </div>
      
      {/* Desktop layout: vertical with icon on top */}
      <div className="hidden md:flex flex-col items-center py-12">
        <div className="mb-6 flex items-center justify-center">
          {iconDesktop || icon}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <h3 className="text-xl font-medium">{subtitle}</h3>
        </div>
      </div>
    </Card>
  );
}