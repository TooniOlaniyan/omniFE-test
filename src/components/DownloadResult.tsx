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
import { useResultContext } from "@/context/ResultContext";
const DownloadResult = () => {
  const {} = useResultContext()
  return (
    <main id="content" className="flex flex-col gap-10">
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
          <p className="font-bold">Name:Chi James</p>
          <p className="text-gray-400">Reg No: FCE/PGDE/2021/002</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">level:100 level</p>
          <p className="text-gray-400">Session: 2022/2023 Session</p>
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
          {resultData.map((info, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-gray-400">
                {info.coursecode}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.title}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.creditunit}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.grade}
              </TableCell>
              <TableCell className="font-medium text-gray-400">
                {info.totalpoint}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
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
        <TableBody>
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
    </main>
  );
};

export default DownloadResult;
