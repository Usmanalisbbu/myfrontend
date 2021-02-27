import axios from "axios";

export function requestGetCountry() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/country",
  });
}

export function requestPostCountry(values) {
  return axios.post("country", values);
}

export function requestDeleteCountry(values) {
  return axios.delete(`${"country"}/${values.payload}`);
}
export function requestUpdateCountry(values) {
  return axios.put(`${"country"}/${values.id}`, values);
}

export function requestGetCity() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/city",
  });
}

export function requestPostCity(values) {
  return axios.post("city", values);
}

export function requestDeleteCity(values) {
  return axios.delete(`${"city"}/${values.payload}`);
}
export function requestUpdateCity(values) {
  return axios.put(`${"city"}/${values.id}`, values);
}

// Religion
export function requestGetReligion() {
  return axios.get("religion");
}

export function requestPostReligion(values) {
  return axios.post("religion", values);
}

export function requestDeleteReligion(values) {
  return axios.delete(`${"religion"}/${values.payload}`);
}
export function requestUpdateReligion(values) {
  return axios.put(`${"religion"}/${values.id}`, values);
}

// evaluation compentencies

export function requestGetEvaluationcompentencies() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/evaluation_competence",
  });
}

export function requestPostEvaluationcompentencies(values) {
  return axios.post("evaluation_competence", values);
}

export function requestDeleteEvaluationcompentencies(values) {
  return axios.delete(`${"evaluation_competence"}/${values.payload}`);
}
export function requestUpdateEvaluationcompentencies(values) {
  return axios.put(`${"evaluation_competence"}/${values.id}`, values);
}

// education
export function requestGetEducationTraingType() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/educationtrainingtype",
  });
}

export function requestPostEducationTraingType(values) {
  return axios.post("educationtrainingtype", values);
}

export function requestDeleteEducationTraingType(values) {
  return axios.delete(`${"educationtrainingtype"}/${values.payload}`);
}
export function requestUpdateEducationTraingType(values) {
  return axios.put(`${"educationtrainingtype"}/${values.id}`, values);
}
// document type
export function requestGetDocumenttype() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/documenttype",
  });
}

export function requestPostDocumenttype(values) {
  return axios.post("documenttype", values);
}

export function requestDeleteDocumenttype(values) {
  return axios.delete(`${"documenttype"}/${values.payload}`);
}
export function requestUpdateDocumenttype(values) {
  return axios.put(`${"documenttype"}/${values.id}`, values);
}

// beneficiary type
export function requestGetBeneficiary_type() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/beneficiarytype",
  });
}

export function requestPostBeneficiary_type(values) {
  return axios.post("beneficiarytype", values);
}

export function requestDeleteBeneficiary_type(values) {
  return axios.delete(`${"beneficiarytype"}/${values.payload}`);
}
export function requestUpdateBeneficiary_type(values) {
  return axios.put(`${"beneficiarytype"}/${values.id}`, values);
}

// leave vacation type
export function requestGetLeaveVacationType() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/leavevacationtype",
  });
}

export function requestPostLeaveVacationType(values) {
  return axios.post("leavevacationtype", values);
}

export function requestDeleteLeaveVacationType(values) {
  return axios.delete(`${"leavevacationtype"}/${values.payload}`);
}
export function requestUpdateLeaveVacationType(values) {
  return axios.put(`${"leavevacationtype"}/${values.id}`, values);
}

// position desingation
export function requestGetPositionDesignation() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/positiondesignation",
  });
}

export function requestPostPositionDesignation(values) {
  return axios.post("positiondesignation", values);
}

export function requestDeletePositionDesignation(values) {
  return axios.delete(`${"positiondesignation"}/${values.payload}`);
}
export function requestUpdatePositionDesignation(values) {
  return axios.put(`${"positiondesignation"}/${values.id}`, values);
}

// sponsor
export function requestGetSponsor() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/sponsor",
  });
}

export function requestPostSponsor(values) {
  return axios.post("sponsor", values);
}

export function requestDeleteSponsor(values) {
  return axios.delete(`${"sponsor"}/${values.payload}`);
}
export function requestUpdateSponsor(values) {
  return axios.put(`${"sponsor"}/${values.id}`, values);
}

// Earnings benefits
export function requestGetEarningsBenefits() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/earningbenefit",
  });
}

export function requestPostEarningsBenefits(values) {
  return axios.post("earningbenefit", values);
}

export function requestDeleteEarningsBenefits(values) {
  return axios.delete(`${"earningbenefit"}/${values.payload}`);
}
export function requestUpdateEarningsBenefits(values) {
  return axios.put(`${"earningbenefit"}/${values.id}`, values);
}

// deducation
export function requestGetDeduction() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/deduction",
  });
}

export function requestPostDeduction(values) {
  return axios.post("deduction", values);
}

export function requestDeleteDeduction(values) {
  return axios.delete(`${"deduction"}/${values.payload}`);
}
export function requestUpdateDeduction(values) {
  return axios.put(`${"deduction"}/${values.id}`, values);
}
// modification type
export function requestGetModificationType() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/modification",
  });
}

export function requestPostModificationType(values) {
  return axios.post("modification", values);
}

export function requestDeleteModificationType(values) {
  return axios.delete(`${"modification"}/${values.payload}`);
}
export function requestUpdateModificationType(values) {
  return axios.put(`${"modification"}/${values.id}`, values);
}
// currencies type
export function requestGetCurrenciesType() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/currency",
  });
}

export function requestPostCurrenciesType(values) {
  return axios.post("currency", values);
}

export function requestDeleteCurrenciesType(values) {
  return axios.delete(`${"currency"}/${values.payload}`);
}
export function requestUpdateCurrenciesType(values) {
  return axios.put(`${"currency"}/${values.id}`, values);
}

// currencies type
export function requestGetSection() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/section",
  });
}

export function requestPostSection(values) {
  return axios.post("section", values);
}

export function requestDeleteSection(values) {
  return axios.delete(`${"section"}/${values.payload}`);
}
export function requestUpdateSection(values) {
  return axios.put(`${"section"}/${values.id}`, values);
}

// currencies type
export function requestGetCostCenter() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/costcenter",
  });
}

export function requestPostCostCenter(values) {
  return axios.post("costcenter", values);
}

export function requestDeleteCostCenter(values) {
  return axios.delete(`${"costcenter"}/${values.payload}`);
}
export function requestUpdateCostCenter(values) {
  return axios.put(`${"costcenter"}/${values.id}`, values);
}

// currencies type
export function requestGetPercentage() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/percentage",
  });
}

export function requestPostPercentage(values) {
  return axios.post("percentage", values);
}

export function requestDeletePercentage(values) {
  return axios.delete(`${"percentage"}/${values.payload}`);
}
export function requestUpdatePercentage(values) {
  return axios.put(`${"percentage"}/${values.id}`, values);
}

// evaluation type
export function requestGetEvaluationType() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/evaluationtype",
  });
}

export function requestPostEvaluationType(values) {
  return axios.post("evaluationtype", values);
}

export function requestDeleteEvaluationType(values) {
  return axios.delete(`${"evaluationtype"}/${values.payload}`);
}
export function requestUpdateEvaluationType(values) {
  return axios.put(`${"evaluationtype"}/${values.id}`, values);
}
// evaluation type
export function requestGetSession() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/sessions",
  });
}

export function requestPostSession(values) {
  return axios.post("sessions", values);
}

export function requestDeleteSession(values) {
  return axios.delete(`${"sessions"}/${values.payload}`);
}
export function requestUpdateSession(values) {
  return axios.put(`${"sessions"}/${values.id}`, values);
}

// evaluation type
export function requestGetCompanySchedule() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/companyschedule",
  });
}

export function requestPostCompanySchedule(values) {
  return axios.post("companyschedule", values);
}

export function requestDeleteCompanySchedule(values) {
  return axios.delete(`${"companyschedule"}/${values.payload}`);
}
export function requestUpdateCompanySchedule(values) {
  return axios.put(`${"companyschedule"}/${values.id}`, values);
}

// Gosi Subscription
export function requestGetGosiSubscription() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/gosisubscription",
  });
}

export function requestPostGosiSubscription(values) {
  return axios.post("gosisubscription", values);
}

export function requestDeleteGosiSubscription(values) {
  return axios.delete(`${"gosisubscription"}/${values.payload}`);
}
export function requestUpdateGosiSubscription(values) {
  return axios.put(`${"gosisubscription"}/${values.id}`, values);
}
// company
export function requestGetCompany() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/companies",
  });
}
export function requestPostCompany(values) {
  return axios.post("companies", values);
}

export function requestDeleteCompany(values) {
  return axios.delete(`${"companies"}/${values.payload}`);
}
export function requestUpdateCompany(values) {
  return axios.put(`${"companies"}/${values.id}`, values);
}