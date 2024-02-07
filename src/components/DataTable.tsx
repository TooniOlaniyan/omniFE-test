
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StudentDataProps } from "@/types";



const DataTable: React.FC<{
  filteredData: StudentDataProps[];
  allStudentInfo: StudentDataProps[];
}> = ({ filteredData, allStudentInfo }) => {
  const dataToDisplay = filteredData.length > 0 ? filteredData : allStudentInfo;
  return (
    <div className="bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">S/N</TableHead>
            <TableHead>Surname</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataToDisplay.map((info: StudentDataProps) => (
            <TableRow key={info.id}>
              <TableCell className="font-medium text-gray-400">
                {info.id}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.surname}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.firstname}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.age}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.gender}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.level}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.state}
              </TableCell>
              <TableCell className="font-medium">
                <p className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer">
                  Download Result
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
