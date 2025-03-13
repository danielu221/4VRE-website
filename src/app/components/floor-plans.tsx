"use client";

import { useState, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type FloorPlanTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
};

interface FloorPlansProps {
  tabs: FloorPlanTab[];
}

export function FloorPlans({ tabs }: FloorPlansProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [prevHeight, setPrevHeight] = useState<number | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  // Handle tab change with animation
  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    
    if (contentRef.current) {
      setPrevHeight(contentRef.current.offsetHeight);
    }
    
    setIsChanging(true);
    
    // Short delay to allow fade-out animation to complete
    setTimeout(() => {
      setActiveTab(tabId);
      setIsChanging(false);
    }, 150);
  };

  return (
    <section className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <Card className="overflow-hidden rounded-3xl">
            <CardHeader className="p-9 pb-0">
              <div className="flex space-x-2 border-b pb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "border-b-2 border-foreground"
                        : "hover:text-foreground/80"
                    }`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div 
                ref={contentRef}
                className="flex flex-col md:flex-row transition-all duration-300 ease-in-out"
                style={prevHeight ? { minHeight: `${prevHeight}px` } : {}}
              >
                {/* Content wrapper with key for proper re-rendering */}
                <div 
                  key={activeTab}
                  className={`w-full flex flex-col md:flex-row transition-opacity duration-150 ease-in-out ${isChanging ? 'opacity-0' : 'animate-fadeIn'}`}
                >
                  {/* Left column - Text content */}
                  <div className="w-full md:w-1/2 p-9">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                      {activeTabData.title}
                    </h2>
                    <p className="mb-12">{activeTabData.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {activeTabData.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-5 h-5 mr-2 border border-foreground flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-3 h-3"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* <div className="border-t pt-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium"
                      >
                        OPIS POSIADŁOŚCI PDF
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        </svg>
                      </a>
                    </div> */}
                  </div>

                  {/* Right column - Floor plan image */}
                  <div className="w-full md:w-1/2 p-9">
                    <img
                      src={activeTabData.imageSrc}
                      alt={`Plan ${activeTabData.label}`}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400/e2e8f0/64748b?text=Plan+mieszkania";
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 