import { useState } from "react";
import { data } from "../utilities/data";

const ProjectTable = () => {
  const [projects, setProjects] = useState(data);

  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const [dropdownVisible, setDropDownVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(undefined);
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    email: "",
    project: "",
    status: "",
  });

  const [statusDropDownVisible, setStatusDropDownVisible] = useState<
    number | null
  >(null);

  return <div className="p-4 w-[93%] ml-20">ProjectTable</div>;
};
export default ProjectTable;
