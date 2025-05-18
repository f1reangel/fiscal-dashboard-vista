
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FilterPopover, { FilterOptions } from "./FilterPopover";

interface HeaderProps {
  title?: string;
  onFilterChange?: (filters: FilterOptions) => void;
}

export function Header({ title = "Dashboard", onFilterChange = () => {} }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 w-64"
          />
        </div>
        <FilterPopover onFilterChange={onFilterChange} />
      </div>
    </div>
  );
}

export default Header;
