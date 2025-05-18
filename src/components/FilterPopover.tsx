
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";
import { Label } from "@/components/ui/label";

export interface FilterOptions {
  dateRange: string;
  category: string;
}

interface FilterPopoverProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export default function FilterPopover({ onFilterChange }: FilterPopoverProps) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: "all",
    category: "all",
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h4 className="font-medium">Filter Reports</h4>
          
          <div className="space-y-2">
            <Label htmlFor="date-range">Date Range</Label>
            <Select 
              value={filters.dateRange} 
              onValueChange={(value) => handleFilterChange("dateRange", value)}
            >
              <SelectTrigger id="date-range">
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-quarter">This Quarter</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select 
              value={filters.category} 
              onValueChange={(value) => handleFilterChange("category", value)}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="expenses">Expenses</SelectItem>
                <SelectItem value="profit">Profit</SelectItem>
                <SelectItem value="investments">Investments</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                setFilters({ dateRange: "all", category: "all" });
                onFilterChange({ dateRange: "all", category: "all" });
              }}
            >
              Reset
            </Button>
            <Button 
              size="sm" 
              onClick={() => setOpen(false)}
            >
              Apply Filter
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
