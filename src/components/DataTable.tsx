import { usePDF } from "react-to-pdf";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StudentDataProps } from "@/types";
import DownloadResult from "./DownloadResult";

const DataTable: React.FC<{
  filteredData: StudentDataProps[];
  allStudentInfo: StudentDataProps[];
}> = ({ filteredData, allStudentInfo }) => {
  const [studentResult, setStudentResult] = useState({});
  const message = "No Result.Would you like to try again";
  const dataToDisplay = filteredData.length > 0 ? filteredData : allStudentInfo;
  const { toPDF, targetRef } = usePDF({ filename: "studentresult.pdf" });
  const handleDownloadClick = async (id: string) => {
    try {
      let url = `https://test.omniswift.com.ng/api/viewResult/${id}`;
      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      if (data && data.message === "Successfull" && data.data) {
        setStudentResult(data.data);
        console.log(data.data);
      } else {
        console.error("Error: Unexpected response format");
      }

      console.log(studentResult);
      toPDF();
    } catch (error) {
      console.error("Error downloading results:", error);
    }
  };
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
          {dataToDisplay.length > 0 ? (
            dataToDisplay.map((info: StudentDataProps) => (
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
                  <p
                    onClick={() => handleDownloadClick(info.id)}
                    className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer"
                  >
                    Download Result
                  </p>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={8}
                className="text-center font-bold text-red-900"
              >
                {message}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div ref={targetRef}>
        {studentResult && <DownloadResult data={studentResult} />}
      </div>
    </div>
  );
};

export default DataTable;
