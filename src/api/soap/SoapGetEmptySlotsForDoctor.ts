const SOAP_URL = "/erandevu.php"; // Proxy ile yönlendirme yapılmalı

export const getEmptySlotsForDoctor = async (
  hospitalId: string,
  departmentId: string,
  doctorId: string,
  startTime: string,
  endTime: string
): Promise<[string]> => {
  const soapEnvelope = `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetEmptySlotsForDoctorRequest xmlns="http://erandevu.bizmed.com.tr:8092/erandevu.php">
          <Login>
            <UserName>bkaradeniz</UserName>
            <PassWord>26710</PassWord>
          </Login>
          <HospitalID>${hospitalId}</HospitalID>
          <DepartmentID>${departmentId}</DepartmentID>
          <DoctorID>${doctorId}</DoctorID>
          <StartTime>${startTime}</StartTime>
          <EndTime>${endTime}</EndTime>
        </GetEmptySlotsForDoctorRequest>
      </soap:Body>
    </soap:Envelope>`;

  // 🧠 Gönderilen XML'i terminale bas
  console.log("📤 SOAP REQUEST:");
  console.log(soapEnvelope);

  try {
    const response = await fetch(SOAP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/xml;charset=UTF-8",
        SOAPAction:
          "http://erandevu.bizmed.com.tr:8092/erandevu.php#GetEmptySlotsForDoctor",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ API HATA CEVABI:", errorText);
      throw new Error(`API hata verdi: ${response.status}`);
    }

    const responseText = await response.text();
    console.log("✅ API SUCCESS RESPONSE:");
    console.log(responseText);

    return [responseText];
  } catch (error) {
    console.error("💥 getEmptySlotsForDoctor hatası:", error);
    throw error;
  }
};
