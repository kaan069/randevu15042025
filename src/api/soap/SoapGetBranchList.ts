import axios from "axios";

const SOAP_URL = "/erandevu.php";

export const getBranchList = async (hospitalId: string) => {
  const xml = `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <GetBranchListRequest xmlns="http://erandevu.bizmed.com.tr:8092/erandevu.php">
            <Login>
              <UserName>bkaradeniz</UserName>
              <PassWord>26710</PassWord>
            </Login>
            <HospitalID>${hospitalId}</HospitalID>
            <QueryParams>3</QueryParams>
          </GetBranchListRequest>
        </soap:Body>
      </soap:Envelope>
    `;

  const response = await axios.post(SOAP_URL, xml, {
    headers: {
      "Content-Type": "text/xml;charset=UTF-8",
      SOAPAction: "",
    },
  });

  return [response.data];
};