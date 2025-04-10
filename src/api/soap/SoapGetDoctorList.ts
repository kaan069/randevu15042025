import axios from "axios";

export const getDoctorList = async (hospitalId: string, branchId: string, departmentId: string) => {
    const xml = `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <GetDoctorListRequest xmlns="http://erandevu.bizmed.com.tr:8092/erandevu.php">
            <Login>
              <UserName>bkaradeniz</UserName>
              <PassWord>26710</PassWord>
            </Login>
            <HospitalID>${hospitalId}</HospitalID>
            <BranchID>${branchId}</BranchID>
            <DepartmentID>${departmentId}</DepartmentID>
            <QueryParams>3</QueryParams> <!-- Burayı unutmamalısın -->
          </GetDoctorListRequest>
        </soap:Body>
      </soap:Envelope>
    `;

    const response = await axios.post("/erandevu.php", xml, {
        headers: {
            "Content-Type": "text/xml;charset=UTF-8",
            SOAPAction: "",
        },
    });

    return response.data;
};