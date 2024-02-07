import { jsPDF } from "jspdf";
import { FilterProps } from "@/types";
import ReactDOMServer from "react-dom/server";
import {PureComponent} from 'react'
import DownloadResult from "@/components/DownloadResult";

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

export const handleDownload = async () => {
  try {
    // const componentHtml = ReactDOMServer.renderToString(<DownloadResult />);
    // const pdf = new jsPDF();
    // pdf.html(componentHtml, {
    //   callback: () => {
    //     // Save the PDF when rendering is done
    //     pdf.save("student_result.pdf");
    //   },
    // });
  } catch (error) {
    console.error("Error downloading results:", error);
  }
};
