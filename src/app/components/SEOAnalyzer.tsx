"use client";

import React, { useState } from 'react';

interface AnalysisResult {
  score: number;
  issues: string[];
  suggestions: string[];
}

export default function SEOAnalyzer() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyzeURL = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) return;
    
    setLoading(true);
    
    // This is a mock analysis - in a real implementation, you would call an API
    // that performs actual SEO analysis on the provided URL
    setTimeout(() => {
      // Mock result
      const mockResult: AnalysisResult = {
        score: Math.floor(Math.random() * 41) + 60, // Random score between 60-100
        issues: [
          'Meta description is too short (95 characters)',
          'H1 tag is missing',
          'Page loading speed is slow (4.2s)',
          'Mobile responsiveness issues detected',
        ],
        suggestions: [
          'Extend meta description to 150-160 characters',
          'Add an H1 tag that includes your primary keyword',
          'Optimize images to improve loading speed',
          'Implement responsive design fixes for mobile devices',
          'Add more internal links to important pages',
        ],
      };
      
      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">SEO Analyzer</h2>
      
      <form onSubmit={analyzeURL} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL to analyze (e.g., https://4vre.pl/inwestycje)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400"
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </form>
      
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {result && !loading && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Overall Score</h3>
            <span className={`text-3xl font-bold ${getScoreColor(result.score)}`}>
              {result.score}/100
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className={`h-4 rounded-full ${
                result.score >= 90 ? 'bg-green-500' : 
                result.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${result.score}%` }}
            ></div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-red-600">Issues Found</h3>
            <ul className="list-disc pl-5 space-y-2">
              {result.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-600">Suggestions</h3>
            <ul className="list-disc pl-5 space-y-2">
              {result.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Note: This is a simplified analysis. For a comprehensive SEO audit, consider using professional tools like Screaming Frog, Ahrefs, or SEMrush.
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 