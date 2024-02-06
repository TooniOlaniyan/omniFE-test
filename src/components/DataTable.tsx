import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DataTable = () => {
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
          <TableRow>
            <TableCell className="font-medium text-gray-400">01</TableCell>
            <TableCell className="font-medium text-gray-400">
              Chukwuma
            </TableCell>
            <TableCell className="font-medium text-gray-400">James</TableCell>
            <TableCell className="font-medium text-gray-400">24</TableCell>
            <TableCell className="font-medium text-gray-400">Male</TableCell>
            <TableCell className="font-medium text-gray-400">
              100 level
            </TableCell>
            <TableCell className="font-medium text-gray-400">
              Ebonyi state
            </TableCell>
            <TableCell className="font-medium">
              <p className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer">Download Result</p>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-400">01</TableCell>
            <TableCell className="font-medium text-gray-400">
              Chukwuma
            </TableCell>
            <TableCell className="font-medium text-gray-400">James</TableCell>
            <TableCell className="font-medium text-gray-400">24</TableCell>
            <TableCell className="font-medium text-gray-400">Male</TableCell>
            <TableCell className="font-medium text-gray-400">
              100 level
            </TableCell>
            <TableCell className="font-medium text-gray-400">
              Ebonyi state
            </TableCell>
            <TableCell className="font-medium">
              <p className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer">Download Result</p>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-400">01</TableCell>
            <TableCell className="font-medium text-gray-400">
              Chukwuma
            </TableCell>
            <TableCell className="font-medium text-gray-400">James</TableCell>
            <TableCell className="font-medium text-gray-400">24</TableCell>
            <TableCell className="font-medium text-gray-400">Male</TableCell>
            <TableCell className="font-medium text-gray-400">
              100 level
            </TableCell>
            <TableCell className="font-medium text-gray-400">
              Ebonyi state
            </TableCell>
            <TableCell className="font-medium ">
              <p className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer">Download Result</p>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-400">01</TableCell>
            <TableCell className="font-medium text-gray-400">
              Chukwuma
            </TableCell>
            <TableCell className="font-medium text-gray-400">James</TableCell>
            <TableCell className="font-medium text-gray-400">24</TableCell>
            <TableCell className="font-medium text-gray-400">Male</TableCell>
            <TableCell className="font-medium text-gray-400">
              100 level
            </TableCell>
            <TableCell className="font-medium text-gray-400">
              Ebonyi state
            </TableCell>
            <TableCell className="font-medium">
              <p className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer">Download Result</p>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-400">01</TableCell>
            <TableCell className="font-medium text-gray-400">
              Chukwuma
            </TableCell>
            <TableCell className="font-medium text-gray-400">James</TableCell>
            <TableCell className="font-medium text-gray-400">24</TableCell>
            <TableCell className="font-medium text-gray-400">Male</TableCell>
            <TableCell className="font-medium text-gray-400">
              100 level
            </TableCell>
            <TableCell className="font-medium text-gray-400">
              Ebonyi state
            </TableCell>
            <TableCell className="font-medium">
              <p className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer">Download Result</p>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-400">01</TableCell>
            <TableCell className="font-medium text-gray-400">
              Chukwuma
            </TableCell>
            <TableCell className="font-medium text-gray-400">James</TableCell>
            <TableCell className="font-medium text-gray-400">24</TableCell>
            <TableCell className="font-medium text-gray-400">Male</TableCell>
            <TableCell className="font-medium text-gray-400">
              100 level
            </TableCell>
            <TableCell className="font-medium text-gray-400">
              Ebonyi state
            </TableCell>
            <TableCell className="font-medium">
              <p className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer">Download Result</p>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-400">01</TableCell>
            <TableCell className="font-medium text-gray-400">
              Chukwuma
            </TableCell>
            <TableCell className="font-medium text-gray-400">James</TableCell>
            <TableCell className="font-medium text-gray-400">24</TableCell>
            <TableCell className="font-medium text-gray-400">Male</TableCell>
            <TableCell className="font-medium text-gray-400">
              100 level
            </TableCell>
            <TableCell className="font-medium text-gray-400">
              Ebonyi state
            </TableCell>
            <TableCell className="font-medium ">
              <p className="text-white bg-primary-green text-center w-[70%] p-[0.3rem] cursor-pointer">Download Result</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
