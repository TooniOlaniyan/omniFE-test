// // ResultContext.js

// import  { createContext, useContext , useState , ReactNode } from "react";

// const ResultContext = createContext('');



// export const ResultProvider = (
//   {children} : {children: ReactNode}
// ) => {
//   const [resultData, setResultData] = useState('');
//   const handleDownload = async (id: string) => {
//     try {
//       let url = `https://test.omniswift.com.ng/api/viewResult/${id}`;
//       let requestOptions = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await fetch(url, requestOptions);
//       const data = await response.json();
//       setResultData(data);
//       return data;
//     } catch (error) {
//       console.error("Error downloading results:", error);
//       return null;
//     }
//   };
//   const value = {
//     resultData,
//     handleDownload
//   }

//   return (
//     <ResultContext.Provider value={value}>
//       {children}
//     </ResultContext.Provider>
//   );
// };

// export const useResultContext = () => {
//   return useContext(ResultContext);
// };
