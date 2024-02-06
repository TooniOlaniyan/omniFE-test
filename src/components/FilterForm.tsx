import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterForm = () => {
  return (
    <div className="bg-white flex flex-col gap-5 p-8 items-start">
      <h1 className="text-gray-400">Filter Student Table By:</h1>
      <form
        className="flex flex-wrap items-start justify-start gap-14"
        action=""
      >
        <div>
          <label htmlFor="">Age</label>
          <Select>
            <SelectTrigger className="w-[350px] p-6">
              <SelectValue placeholder="select age" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">19</SelectItem>
              <SelectItem value="dark">20</SelectItem>
              <SelectItem value="system">25</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="">State</label>
          <Select>
            <SelectTrigger className="w-[350px] p-6">
              <SelectValue placeholder="select state" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Abuja</SelectItem>
              <SelectItem value="dark">Borno</SelectItem>
              <SelectItem value="system">Kaduna</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="">Level</label>
          <Select>
            <SelectTrigger className="w-[350px] p-6">
              <SelectValue placeholder="select level" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">100 level</SelectItem>
              <SelectItem value="dark">200 level</SelectItem>
              <SelectItem value="system">300 level</SelectItem>
              <SelectItem value="system">400 level</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <Select>
            <SelectTrigger className="w-[350px] p-6">
              <SelectValue placeholder="select gender" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">male</SelectItem>
              <SelectItem value="dark">female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button className="bg-primary-green text-white w-[350px] mt-6 py-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
