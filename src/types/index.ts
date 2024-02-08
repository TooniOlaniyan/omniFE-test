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
