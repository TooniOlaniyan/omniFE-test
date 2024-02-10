import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CourseResult } from "@/types";

const DownloadResult = ({ data }: any) => {
  
  return (
    <main className="flex flex-col gap-10 p-52">
      <header className="flex justify-evenly gap-5">
        <img src={data.logo} alt="logo" />
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
        <img src={data.profile_picture} alt="passport" />
      </header>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="font-bold">
            Name:{" "}
            <span className="text-gray-400 ml-4">
              {data.data.firstname} {data.data.surname}
            </span>
          </p>
          <p className="font-bold">
            Reg No: <span className="text-gray-400 ml-4">{data.data.reg_no}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">
            level: <span className="text-gray-400 ml-4">{data.data.level}</span>
          </p>
          <p className="font-bold">
            Session: <span className="text-gray-400 ml-4">{data.data.session} </span>
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
          {data.data.result &&
            data.data.result.map((resultItem: CourseResult, index: number) => (
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
          {data.data.cummulative && (
            <TableRow>
              <TableCell className="font-medium text-gray-400">
                {data.data.cummulative.unts}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {data.data.cummulative.untd}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {data.data.cummulative.gpts}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {data.data.cummulative.gptd}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {data.data.cummulative.gpats}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {data.data.cummulative.gpatd}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <p>Remarks: {data.data.cummulative.remarks}</p>
      <div>Resgistra</div>
    </main>
  );
};

export default DownloadResult;
