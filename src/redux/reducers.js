import { combineReducers } from "redux";
import authUser from "./auth/reducer";

import settings from "./settings/reducer";
import menu from "./menu/reducer";

import countryApp from "./country/reducer";
import cityApp from "./city/reducer";
import religionApp from "./religion/reducer";
import evaluationcompentenciesApp from "./evaluationcompentencies/reducer";
import educationTrainingTypeApp from "./educationtrainingtype/reducer";
import documenttypeApp from "./documenttype/reducer";
import beneficiary_typeApp from "./beneficiary_type/reducer";
import leavevacationtypeApp from "./leave_vacation_type/reducer";
import positiondesignationApp from "./position_designation/reducer";
import sponsorApp from "./sponsor/reducer";
import earningsbenefitsApp from "./earningsbenefits/reducer";
import deductionApp from "./deduction/reducer";
import modificationtypeApp from "./modification_type/reducer";
import currenciestypeApp from "./currencies_type/reducer";
import sectionApp from "./section/reducer";
import costcenterApp from "./costcenter/reducer";
import percentageApp from "./percentage/reducer";
import evaluationtypeApp from "./evaluationtype/reducer";
import sessionApp from "./session/reducer";
import companyscheduleApp from "./companyschedule/reducer";
import gosisubscriptionApp from "./gosisubscription/reducer";
import companyApp from "./company/reducer";

const reducers = combineReducers({
  authUser,
  menu,
  settings,
  countryApp,
  cityApp,
  religionApp,
  evaluationcompentenciesApp,
  educationTrainingTypeApp,
  documenttypeApp,
  beneficiary_typeApp,
  leavevacationtypeApp,
  positiondesignationApp,
  sponsorApp,
  earningsbenefitsApp,
  deductionApp,
  modificationtypeApp,
  currenciestypeApp,
  sectionApp,
  costcenterApp,
  percentageApp,
  evaluationtypeApp,
  sessionApp,
  companyscheduleApp,
  gosisubscriptionApp,
  companyApp,
});

export default reducers;
