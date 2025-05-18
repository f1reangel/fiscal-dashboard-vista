
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileExcel } from "lucide-react";

interface ExcelFileUploaderProps {
  onFileLoaded: (content: string, name: string) => void;
}

const ExcelFileUploader = ({ onFileLoaded }: ExcelFileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file) return;
    
    // Check if file is Excel
    const isExcel = 
      file.type === "application/vnd.ms-excel" || 
      file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.name.endsWith('.xlsx') || 
      file.name.endsWith('.xls') ||
      file.name.endsWith('.csv');
    
    if (!isExcel) {
      alert("Please upload only Excel files (.xlsx, .xls, .csv)");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        // For demo purposes, we're just passing the file content as a string
        // In a real application, you would parse the Excel data appropriately
        onFileLoaded(e.target.result.toString(), file.name);
      }
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center ${
        isDragging ? "border-primary bg-primary/5" : "border-gray-300"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <FileExcel className="h-12 w-12 mx-auto text-gray-400 mb-4" />
      <p className="mb-2 text-sm font-medium">
        Drag and drop your Excel file here, or
      </p>
      <Button
        variant="outline"
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = ".xlsx,.xls,.csv";
          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) handleFile(file);
          };
          input.click();
        }}
      >
        Browse Files
      </Button>
      <p className="mt-2 text-xs text-gray-500">
        Supports .xlsx, .xls and .csv files
      </p>
    </div>
  );
};

export default ExcelFileUploader;
