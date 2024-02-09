import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { resultData } from "@/constant";
import { cummulative } from "@/constant";
import { CourseResult } from "@/types";

const DownloadResult = ({ data }: any) => {
  const handleClick = () => {};
  const { firstname, surname, level } = data;
  return (
    <main className="flex flex-col gap-10 p-52">
      <header className="flex justify-evenly gap-5">
        <img src="#" alt="logo" />
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-gray-400 font-bold">
            FREMONT COLLEGE OF EDUCATION
          </h2>
          <p className="text-gray-400 font-light">
            No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria
          </p>
          <h2 className="font-bold">Post Graduate Diploma in Education</h2>
          <p className="text-gray-500 font-bold">
            Student First Statement Of Result
          </p>
        </div>
        <img src="#" alt="passport" />
      </header>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="font-bold">
            Name:{" "}
            <span className="text-gray-400 ml-4">
              {firstname} {surname}
            </span>
          </p>
          <p className="font-bold">
            Reg No: <span className="text-gray-400 ml-4">{data.reg_no}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">
            level: <span className="text-gray-400 ml-4">{level}</span>
          </p>
          <p className="font-bold">
            Session: <span className="text-gray-400 ml-4">{data.session} </span>
          </p>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-result-blue text-white">
            <TableHead className="">S/N</TableHead>
            <TableHead>Course Code</TableHead>
            <TableHead>Course Title</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Total point</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.result &&
            data.result.map((resultItem:CourseResult, index:number) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-gray-400">
                  {index}
                </TableCell>
                <TableCell className="font-medium text-gray-400">
                  {resultItem.coursecode}
                </TableCell>
                <TableCell className="font-medium text-gray-400">
                  {resultItem.title}
                </TableCell>
                <TableCell className="font-medium text-gray-400">
                  {resultItem.credit_unit}
                </TableCell>
                <TableCell className="font-medium text-gray-400">
                  {resultItem.grade}
                </TableCell>
                <TableCell className="font-medium text-gray-400">
                  {resultItem.total_point}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Table className="w-[30rem]">
        <TableHeader>
          <TableRow className="bg-result-blue text-white">
            <TableHead className="">UNTS</TableHead>
            <TableHead>UNTD</TableHead>
            <TableHead>GPTS</TableHead>
            <TableHead>GPTD</TableHead>
            <TableHead>GPATS</TableHead>
            <TableHead>GPATD</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-gray-200">
          {cummulative.map((info, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-gray-400">
                {info.units}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.untd}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.gpts}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.gptd}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.gpats}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.gpatd}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p>Remarks: Pass</p>
      <div>Resgistra</div>
      <button onClick={handleClick}>Download</button>
    </main>
  );
};

export default DownloadResult;
