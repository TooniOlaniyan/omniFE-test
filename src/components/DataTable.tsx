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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


const DataTable: React.FC<{
  filteredData: StudentDataProps[];
  allStudentInfo: StudentDataProps[];
  message:string
}> = ({ filteredData, allStudentInfo , message }) => {
  const [studentResult, setStudentResult] = useState({});

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
      if (data && data.message === "Successfull") {
        setStudentResult(data);
        // console.log(data);
      } else {
        console.error("Error: Unexpected response format");
      }

      console.log(studentResult);
    } catch (error) {
      console.error("Error downloading results:", error);
    }
  };
  return (
    <>
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
                      <AlertDialog>
                        <AlertDialogTrigger>Download Result</AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-white">
                              Are you sure?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="text-white">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-primary-green "
                              onClick={() => toPDF()}
                            >
                              Download
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
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
      </div>
      <div className="absolute left-[-9999px] top-[-9999px]" ref={targetRef}>
        {Object.keys(studentResult).length > 0 && (
          <DownloadResult data={studentResult} />
        )}
      </div>
    </>
  );
};

export default DataTable;
