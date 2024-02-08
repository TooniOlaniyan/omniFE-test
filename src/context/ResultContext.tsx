// ResultContext.js

import  { createContext, useContext , useState , ReactNode } from "react";

const ResultContext = createContext('');



export const ResultProvider: React.FC<{ children: ReactNode }> = (
  {children}
) => {
  const [resultData, setResultData] = useState('');
  const handleDownload = async (id: string) => {
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
      setResultData(data);

      // Return the data to be used by the caller
      return data;
    } catch (error) {
      console.error("Error downloading results:", error);
      return null;
    }
  };

  return (
    <ResultContext.Provider value={{ resultData , handleDownload }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => {
  return useContext(ResultContext);
};
