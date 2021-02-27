import { all } from "redux-saga/effects";
import countrySagas from "./country/saga";
import authSagas from "./auth/saga";
import citySagas from "./city/saga";
import religionSagas from "./religion/saga";
import evaluationcompentenciesSagas from "./evaluationcompentencies/saga";
import educationTrainingTypeSagas from "./educationtrainingtype/saga";
import documenttypeSagas from "./documenttype/saga";

import beneficiary_typeSagas from "./beneficiary_type/saga";
import leavevacationtypeSagas from "./leave_vacation_type/saga";
import positiondesignationSagas from "./position_designation/saga";
import sponsorSagas from "./sponsor/saga";
import earningsbenefitsSagas from "./earningsbenefits/saga";

import deductionSagas from "./deduction/saga";
import modificationtypeSagas from "./modification_type/saga";
import currencies_typesagas from "./currencies_type/saga";
import sectionSagas from "./section/saga";
import costcenterSagas from "./costcenter/saga";
import percentageSagas from "./percentage/saga";
import evaluationtypeSagas from "./evaluationtype/saga";
import sessionSagas from "./session/saga";
import companyscheduleSagas from "./companyschedule/saga";
import gosisubscriptionSagas from "./gosisubscription/saga";
import companySagas from "./company/saga";

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    countrySagas(),
    citySagas(),
    religionSagas(),
    evaluationcompentenciesSagas(),
    educationTrainingTypeSagas(),
    documenttypeSagas(),
    beneficiary_typeSagas(),
    leavevacationtypeSagas(),
    positiondesignationSagas(),
    sponsorSagas(),
    earningsbenefitsSagas(),
    deductionSagas(),
    modificationtypeSagas(),
    currencies_typesagas(),
    sectionSagas(),
    costcenterSagas(),
    percentageSagas(),
    evaluationtypeSagas(),
    sessionSagas(),
    companyscheduleSagas(),
    gosisubscriptionSagas(),
    companySagas(),
  ]);
}
