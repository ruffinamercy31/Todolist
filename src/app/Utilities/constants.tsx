export interface FormFieldInterface {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  readonly?: boolean;
  error?: string;
}

export interface ApplicantDetailsInterface {
  name: string;
  fatherName: string;
  pan: string;
  dob: string;
  altMobileNum: number;
  relationType: number;
  gender: number;
  martialStatus: number;
  acNo: number;
  bankName: number;
  ifscCode: string;
  bankType: number;
  residenceType: number;
  ResidenceAddress: string;
  stateName: string;
  cityName: number;
  Pincode: number;
  PermanentAddress: string;
  permanentState: string;
  permanentCity: number;
  permanentPin: number;
  organization: string;
  occupationType: number;
  employedSince: string;
  companyType: number;
  salary: number;
  officeAddress: string;
  officeState: string;
  officeCity: number;
  officePin: number;
}

interface StateInterface {
  id: number;
  value: string;
  label: string;
  hidden?: boolean;
}

export const stateList: StateInterface[] = [
  {
    id: 2,
    value: "Tamilnadu",
    label: "Tamilnadu",
  },
  {
    id: 3,
    value: "Kerela",
    label: "Kerela",
  },
  {
    id: 4,
    value: "Karnataka",
    label: "Karnataka",
  },
];

export const FormDetails: FormFieldInterface[] = [
  {
    id: "name",
    name: "name",
    type: "text",
    label: "Name",
    value: "",
    error: "",
  },
  {
    id: "fatherName",
    name: "fatherName",
    type: "text",
    label: "Father Name",
    value: "",
    error: "",
  },
  {
    id: "pan",
    name: "pan",
    type: "text",
    label: "PAN No",
    value: "",
    error: "",
  },
  {
    id: "dob",
    name: "dob",
    type: "date",
    label: "Date of Birth",
    value: "",
    error: "",
  },
  {
    id: "altMobileNum",
    name: "altMobileNum",
    type: "number",
    label: "Alternate Mobile No",
    value: "",
    error: "",
  },
  {
    id: "relationType",
    name: "relationType",
    type: "select",
    label: "Relationship Type",
    value: "",
    error: "",
  },
  {
    id: "gender",
    name: "gender",
    type: "select",
    label: "Gender",
    value: "",
    error: "",
  },
  {
    id: "martialStatus",
    name: "martialStatus",
    type: "select",
    label: "Martial Status",
    value: "",
    error: "",
  },
  {
    id: "acNo",
    name: "acNo",
    type: "text",
    label: "Account Number",
    value: "",
    error: "",
  },
  {
    id: "bankName",
    name: "bankName",
    type: "select",
    label: "Bank Name",
    value: "",
    error: "",
  },
  {
    id: "ifscCode",
    name: "ifscCode",
    type: "text",
    label: "IFSC Code",
    value: "",
    error: "",
  },
  {
    id: "bankType",
    name: "bankType",
    type: "select",
    label: "Bank Type",
    value: "",
    error: "",
  },
  {
    id: "residenceType",
    name: "residenceType",
    type: "select",
    label: "Residence Type",
    value: "",
    error: "",
  },
  {
    id: "residenceAddress",
    name: "residenceAddress",
    type: "text",
    label: "Residence Address",
    value: "",
    error: "",
  },
  {
    id: "stateName",
    name: "stateName",
    type: "select",
    label: "State Name",
    value: "",
    error: "",
  },
  {
    id: "cityName",
    name: "cityName",
    type: "select",
    label: "City Name",
    value: "",
    error: "",
  },
  {
    id: "pin",
    name: "pin",
    type: "number",
    label: "Pincode",
    value: "",
    error: "",
  },
  {
    id: "permanentAddress",
    name: "permanentAddress",
    type: "text",
    label: "Permanent Address",
    value: "",
    error: "",
  },
  {
    id: "permanentState",
    name: "permanentState",
    type: "select",
    label: "Permanent State",
    value: "",
    error: "",
  },
  {
    id: "permanentCity",
    name: "permanentCity",
    type: "select",
    label: "Permanent City",
    value: "",
    error: "",
  },
  {
    id: "permanentPin",
    name: "permanentPin",
    type: "number",
    label: "Permanent Pin",
    value: "",
    error: "",
  },
  {
    id: "organization",
    name: "organization",
    type: "text",
    label: "Organization Name",
    value: "",
    error: "",
  },
  {
    id: "occupationType",
    name: "occupationType",
    type: "select",
    label: "Occupation Type",
    value: "",
    error: "",
  },
  {
    id: "employedSince",
    name: "employedSince",
    type: "date",
    label: "Employed Since",
    value: "",
    error: "",
  },
  {
    id: "companyType",
    name: "companyType",
    type: "select",
    label: "Company Type",
    value: "",
    error: "",
  },
  {
    id: "salary",
    name: "salary",
    type: "number",
    label: "Salary",
    value: "",
    error: "",
  },
  {
    id: "officeAddress",
    name: "officeAddress",
    type: "text",
    label: "Office Address",
    value: "",
    error: "",
  },
  {
    id: "officeState",
    name: "officeState",
    type: "select",
    label: "Office State",
    value: "",
    error: "",
  },
  {
    id: "officeCity",
    name: "officeCity",
    type: "select",
    label: "Office City",
    value: "",
    error: "",
  },
  {
    id: "officePin",
    name: "officePin",
    type: "number",
    label: "Office Pin",
    value: "",
    error: "",
  },
];
