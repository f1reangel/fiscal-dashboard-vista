
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileExcel, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ExcelFileUploader from "@/components/ExcelFileUploader";
import { FilterOptions } from "@/components/FilterPopover";

export function ExcelAnalysis() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const { toast } = useToast();
  
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: "all",
    category: "all"
  });

  const handleFilterChange = (newFilters: FilterOptions) => {
    console.log("Excel Analysis filters:", newFilters);
    setFilters(newFilters);
  };

  const handleAnalyzeFile = async () => {
    if (!fileContent) {
      toast({
        title: "No file selected",
        description: "Please upload an Excel file first",
        variant: "destructive",
      });
      return;
    }

    if (!question.trim()) {
      toast({
        title: "No question specified",
        description: "Please enter a question about your Excel data",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // In a real implementation, this would call the Gemini API
      // Here we're simulating a response for demonstration purposes
      setTimeout(() => {
        setAnalysis(`Analysis of "${fileName}" based on your question: "${question}"\n\n` + 
          "Based on the Excel data provided, I can see several interesting trends:\n\n" +
          "1. Revenue is showing an upward trend in Q2 2025, with a 15% increase compared to Q1.\n" +
          "2. The Marketing department has the highest expenses, representing 35% of total costs.\n" +
          "3. Product A is your best-performing product by profit margin (42%).\n\n" +
          "Recommendation: Consider allocating more resources to Product A given its high profit margin.");
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your Excel file",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title="Excel Analysis" onFilterChange={handleFilterChange}>
      <div className="grid grid-cols-1 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileExcel className="h-6 w-6 mr-2" />
              Excel File Analysis with AI
              {filters.dateRange !== "all" && ` (${filters.dateRange})`}
              {filters.category !== "all" && ` - ${filters.category}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <ExcelFileUploader 
                onFileLoaded={(content, name) => {
                  setFileContent(content);
                  setFileName(name);
                  toast({
                    title: "File uploaded",
                    description: `"${name}" has been loaded successfully`,
                  });
                }}
              />
            </div>
            
            {fileName && (
              <div className="flex items-center mb-6 p-3 bg-gray-100 rounded-md">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                <span className="font-medium">{fileName}</span>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Ask a question about your Excel data
              </label>
              <Textarea
                placeholder="E.g., What are the key trends in my sales data? What are my highest performing products?"
                className="min-h-[120px]"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <Button 
                onClick={handleAnalyzeFile} 
                disabled={loading || !fileContent}
                className="w-full"
              >
                {loading ? "Analyzing..." : "Analyze Excel Data"}
              </Button>
            </div>

            {analysis && (
              <div className="border p-4 rounded-md bg-gray-50">
                <h3 className="font-semibold mb-2">Analysis Results:</h3>
                <div className="whitespace-pre-line">{analysis}</div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default ExcelAnalysis;
