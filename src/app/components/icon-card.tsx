import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function IconCard({ icon, title, subtitle }: IconCardProps) {
  return (
    <Card className="bg-card rounded-3xl border-none h-full flex flex-col items-center py-12">
      <div className="w-32 h-32 mb-6 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center">
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <h3 className="text-xl font-medium">{subtitle}</h3>
      </div>
    </Card>
  );
}