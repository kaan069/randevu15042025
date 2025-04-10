type Hospital = {
    id: string;
    name: string;
    availability: string;
};

/**
 * SOAP XML yanıtını parse edip hastane listesini çıkarır
 */
export const parseHospitalListXML = (xmlStr: string): Hospital[] => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "text/xml");

    const hospitalNodes = xml.getElementsByTagName("GetHospitalListResult");
    const hospitals: Hospital[] = [];

    for (let i = 0; i < hospitalNodes.length; i++) {
        const node = hospitalNodes[i];

        const id = node.getElementsByTagName("ID")[0]?.textContent || "";
        const name = node.getElementsByTagName("Name")[0]?.textContent || "";
        const availability = node.getElementsByTagName("Availability")[0]?.textContent || "";

        hospitals.push({ id, name, availability });
    }

    return hospitals;
};
export const parseDepartmentListXML = (xmlStr: string) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "text/xml");
  
    const departmentNodes = xml.getElementsByTagName("GetDepartmentListResult");
    const departments: { id: string; name: string; availability: string }[] = [];
  
    for (let i = 0; i < departmentNodes.length; i++) {
      const node = departmentNodes[i];
  
      const id = node.getElementsByTagName("ID")[0]?.textContent || "";
      const name = node.getElementsByTagName("Name")[0]?.textContent || "";
      const availability = node.getElementsByTagName("Availability")[0]?.textContent || "";
  
      departments.push({ id, name, availability });
    }
  
    return departments;
  };
  
export const parseBranchListXML = (xmlStr: string) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "text/xml");

    const branchNodes = xml.getElementsByTagName("GetBranchListResult");
    const branches: { id: string; name: string; availability: string }[] = [];

    for (let i = 0; i < branchNodes.length; i++) {
        const node = branchNodes[i];

        const id = node.getElementsByTagName("ID")[0]?.textContent || "";
        const name = node.getElementsByTagName("Name")[0]?.textContent || "";
        const availability = node.getElementsByTagName("Availability")[0]?.textContent || "";

        branches.push({ id, name, availability });
    }

    return branches;
};
export const parseDoctorListXML = (xmlStr: string) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "text/xml");

    const doctorNodes = xml.getElementsByTagName("GetDoctorListResult");
    const doctors: {
        id: string;
        name: string;
        availability: string;
        deptName: string;
        branchName: string;
    }[] = [];

    for (let i = 0; i < doctorNodes.length; i++) {
        const node = doctorNodes[i];

        const id = node.getElementsByTagName("ID")[0]?.textContent || "";
        const name = node.getElementsByTagName("Name")[0]?.textContent || "";
        const availability = node.getElementsByTagName("Availability")[0]?.textContent || "";
        const deptName = node.getElementsByTagName("DeptName")[0]?.textContent || "";
        const branchName = node.getElementsByTagName("BranchName")[0]?.textContent || "";

        doctors.push({ id, name, availability, deptName, branchName });
    }

    return doctors;
};

