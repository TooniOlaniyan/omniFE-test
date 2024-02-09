import { FilterProps } from "@/types";



export const fetchStudentData = async (filters?: FilterProps) => {
  try {
    let url = "https://test.omniswift.com.ng/api/viewAllData";
    let requestOptions: RequestInit = {
      method: "GET",
    };

    if (filters) {
      url = "https://test.omniswift.com.ng/api/filterData";
      requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      };
    }
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      return data.data.students;
    } else {
      throw new Error(data.message || "Error fetching data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const handleDownload = async (id: string) => {
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

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error downloading results:", error);
  }
};
