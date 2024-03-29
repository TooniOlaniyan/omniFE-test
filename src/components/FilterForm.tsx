import { ChangeEvent, useState } from "react";
import { FilterProps } from "@/types";

const FilterForm = ({ onFilterChange, loading }: any) => {
  const [filters, setFilters] = useState<FilterProps>({
    age: "",
    state: "",
    level: "",
    gender: "",
  });

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const strValue = String(value);
    setFilters((prevState) => ({
      ...prevState,
      [name]: strValue,
    }));
  };
  const handleSearchFilter = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // console.log(filters);
      onFilterChange(filters);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white flex flex-col gap-5 p-8 items-start">
      <h1 className="text-gray-400">Filter Student Table By:</h1>
      <form
        className="flex flex-wrap items-start justify-start gap-14"
        action=""
        onSubmit={handleSearchFilter}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="age">Age</label>
          <select
            id="age"
            onChange={handleFilterChange}
            name="age"
            className="w-[300px] p-4 rounded-xl border-2 border-gray-400 text-gray-400"
          >
            <option value="">Select Age</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="state">State</label>
          <select
            id="state"
            onChange={handleFilterChange}
            name="state"
            className="w-[300px] p-4 rounded-xl border-2 border-gray-400 text-gray-400"
          >
            <option value="">Select State</option>
            <option value="Abuja">Abuja</option>
            <option value="kaduna">Kaduna</option>
            <option value="Borno">Borno</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="level">Level</label>
          <select
            id="level"
            onChange={handleFilterChange}
            name="level"
            className="w-[300px] p-4 rounded-xl border-2 border-gray-400 text-gray-400"
          >
            <option value="">Select Level</option>
            <option value="100 Level">100</option>
            <option value="200 Level">200</option>
            <option value="300 Level">300</option>
            <option value="400 Level">400</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            onChange={handleFilterChange}
            name="gender"
            className="w-[300px] p-4 rounded-xl border-2 border-gray-400 text-gray-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button className="bg-primary-green text-white w-[300px] mt-9 py-3">
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
