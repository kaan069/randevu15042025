// import axios from "axios";

// const SOAP_URL = "/erandevu.php"; // çünkü proxy ile yönlendirdik

// //  HASTANE LİSTESİ ÇEKME
// export const getHospitalList = async () => {
//     const xml = `
//     <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//       <soap:Body>
//         <GetHospitalListRequest xmlns="http://erandevu.bizmed.com.tr:8092/erandevu.php">
//           <Login>
//             <UserName>bkaradeniz</UserName>
//             <PassWord>26710</PassWord>
//           </Login>
//         </GetHospitalListRequest>
//       </soap:Body>
//     </soap:Envelope>
//   `;

//     const response = await axios.post(SOAP_URL, xml, {
//         headers: {
//             "Content-Type": "text/xml;charset=UTF-8",
//             SOAPAction: "",
//         },
//     });

//     return response.data;
// };

// // ✅ BÖLÜM (DEPARTMAN) LİSTESİ ÇEKME
// export const getDepartmentList = async (hospitalId: string, branchId: string) => {
//     const xml = `
//     <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//       <soap:Body>
//         <GetDepartmentListRequest xmlns="http://erandevu.bizmed.com.tr:8092/erandevu.php">
//           <Login>
//             <UserName>bkaradeniz</UserName>
//             <PassWord>26710</PassWord>
//           </Login>
//           <HospitalID>2</HospitalID>
//           <BranchID>1900</BranchID>
//           <QueryParams>3</QueryParams>
//         </GetDepartmentListRequest>
//       </soap:Body>
//     </soap:Envelope>
//   `;

//     const response = await axios.post(SOAP_URL, xml, {
//         headers: {
//             "Content-Type": "text/xml;charset=UTF-8",
//             SOAPAction: "",
//         },
//     });

//     return response.data;
// };
// export const getBranchList = async (hospitalId: string) => {
//     const xml = `
//       <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//         <soap:Body>
//           <GetBranchListRequest xmlns="http://erandevu.bizmed.com.tr:8092/erandevu.php">
//             <Login>
//               <UserName>bkaradeniz</UserName>
//               <PassWord>26710</PassWord>
//             </Login>
//             <HospitalID>${hospitalId}</HospitalID>
//             <QueryParams>3</QueryParams>
//           </GetBranchListRequest>
//         </soap:Body>
//       </soap:Envelope>
//     `;

//     const response = await axios.post("/erandevu.php", xml, {
//         headers: {
//             "Content-Type": "text/xml;charset=UTF-8",
//             SOAPAction: "",
//         },
//     });

//     return response.data;
// };
// export const getDoctorList = async (hospitalId: string, branchId: string, departmentId: string) => {
//     const xml = `
//       <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//         <soap:Body>
//           <GetDoctorListRequest xmlns="http://erandevu.bizmed.com.tr:8092/erandevu.php">
//             <Login>
//               <UserName>bkaradeniz</UserName>
//               <PassWord>26710</PassWord>
//             </Login>
//             <HospitalID>${hospitalId}</HospitalID>
//             <BranchID>${branchId}</BranchID>
//             <DepartmentID>${departmentId}</DepartmentID>
//             <QueryParams>3</QueryParams> <!-- Burayı unutmamalısın -->
//           </GetDoctorListRequest>
//         </soap:Body>
//       </soap:Envelope>
//     `;

//     const response = await axios.post("/erandevu.php", xml, {
//         headers: {
//             "Content-Type": "text/xml;charset=UTF-8",
//             SOAPAction: "",
//         },
//     });

//     return response.data;
// };

export{}