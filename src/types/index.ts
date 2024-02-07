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
  age: string;
  state: string;
  level: string;
  gender: string;
  // [key: string]: string;
}
