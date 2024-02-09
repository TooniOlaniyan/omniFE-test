export interface StudentDataProps {
  id: string;
  surname: string;
  firstname: string;
  age: string;
  gender: string;
  level: string;
  state: string;
}
export interface FilterProps {
  age: string | number;
  state: string;
  level: string;
  gender: string;
  // [key: string]: string;
}
export interface CourseResult {
  coursecode: string;
  title: string;
  credit_unit: string;
  grade: string;
  total_point: string;
}

export interface Cummulative {
  unts: number;
  untd: number;
  gpts: number;
  gptd: number;
  gpats: number;
  gpatd: number;
  remarks: string;
}

export interface DataProps {
  id: number | string;
  surname: string;
  firstname: string;
  age: number | string;
  gender: string;
  level: string;
  state: string;
  reg_no: string;
  session: string;
  result: CourseResult[];
  cummulative: Cummulative;
}

export interface DownloadResultProps {
  message: string;
  data: DataProps;
  logo: string;
  profile_picture: string;
}
