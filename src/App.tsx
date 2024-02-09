import "./index.css";
import FilterForm from "./components/FilterForm";
import DataTable from "./components/DataTable";
import { useEffect, useState } from "react";
import { fetchStudentData } from "./lib";
import { FilterProps, StudentDataProps } from "./types";

function App() {
  const [allStudentInfo, setAllStudentInfo] = useState<StudentDataProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<StudentDataProps[]>([]);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const studentData = await fetchStudentData();
        setAllStudentInfo(studentData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, []);
  const handleFilterChange = async (filters: FilterProps) => {
    try {
      setLoading(true);
      const filteredData = await fetchStudentData(filters);
      console.log(filteredData)
        setFilteredData(filteredData);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching filtered data:", error);
      setLoading(false);
    }
  };
  return (
    <div className="w-full p-4 md:p-10 h-full bg-grey flex flex-col gap-10">
      <header>
        <h1 className="font-bold text-3xl">Student Data Table</h1>
      </header>
      <div>
        <FilterForm loading={loading} onFilterChange={handleFilterChange} />
      </div>
      <div>
        <DataTable
          allStudentInfo={allStudentInfo}
          filteredData={filteredData}
        />
      </div>
    </div>
  );
}

export default App;
