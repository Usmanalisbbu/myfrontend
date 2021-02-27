import React, { Component, Fragment } from "react";
import { Row, TabContent, TabPane } from "reactstrap";
import { NavLink } from "react-router-dom";
import Buttons from "../../../components/common/Button";
import classnames from "classnames";
import { injectIntl } from "react-intl";

import { connect } from "react-redux";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import {
  getCountryList,
  getCityList,
  getReligionList,
  getEvaluationcompentenciesList,
  getEducationList,
  getDocumenttypeList,
  getBeneficiary_typeList,
  getLeaveVacationTypeList,
  getPositionDesignationList,
  getSponsorList,
  getEarningsBenefitsList,
  getDeductionList,
  getModificationTypeList,
  getCurrenciesTypeList,
  getSectionList,
  getCostCenterList,
  getPercentageList,
  getEvaluationTypeList,
  getSessionList,
  getCompanyScheduleList,
  getGosiSubscriptionList,
  getCompanyList,
} from "../../../redux/actions";
import AddNewCountryModal from "../../../components/country/AddNewCountryModal";
import DataTable from "../../../components/country/Datatable";
import CityDataTable from "../../../components/city/Datatable";
import AddNewCityModal from "../../../components/city/AddNewCityModal";
// Religion
import ReligionDataTable from "../../../components/religion/Datatable";
import AddNewReligionModal from "../../../components/religion/AddNewReligionModal";

//EvaluationCompentencies
import EvaluationCompentenciesDataTable from "../../../components/evaluationcompentencies/Datatable";
import AddNewevaluationcompentenciesModal from "../../../components/evaluationcompentencies/AddNewEvaluationcompentenciesModal";

// education

import EducationDataTable from "../../../components/educationtrainingtype/Datatable";
import AddNewEducationModal from "../../../components/educationtrainingtype/AddNewEducationModal";
//Documenttype
import AddNewDocumenttypeModal from "../../../components/documenttype/AddNewDocumenttypeModal";
import AddNewDocumenttypeDataTable from "../../../components/documenttype/Datatable";
// Beneficiary_type
import Beneficiary_typeDataTable from "../../../components/beneficiary_type/Datatable";
import AddNewBeneficiary_typeModal from "../../../components//beneficiary_type/AddNewBeneficiary_typeModal";
//  leave vacation type
import LeaveVacationTypeDataTable from "../../../components/leave_vacation_type/Datatable";
import AddNewLeaveVacationTypeModal from "../../../components/leave_vacation_type/AddNewLeaveVacatonTypeModal";
// // position designation
import PositionDesignationDataTable from "../../../components/position_designation/Datatable";
import AddNewPositionDesignationModal from "../../../components/position_designation/AddNewPositionDesignationModal";
// SponsorDataTable
import SponsorDataTable from "../../../components/sponsor/Datatable";
import AddNewSponsorModal from "../../../components/sponsor/AddNewSponsorModal";
// // earnings benefits
import EarningsBenefitsDataTable from "../../../components/earning_benefit/Datatable";
import AddNewEarningsBenefitsModal from "../../../components/earning_benefit/AddNewEarningsBenefitsModal";
// deducation
import DeductionDataTable from "../../../components/deduction/Datatable";
import AddNewDeductionModal from "../../../components/deduction/AddNewDeductionModal";
//  modification type
import ModificationTypeDataTable from "../../../components/modification_type/Datatable";
import AddNewModificationTypeModal from "../../../components/modification_type/AddNewModificationTypeModal";
//  currencies type
import CurrenciesTypeDataTable from "../../../components/currencies_type/Datatable";
import AddNewCurrenciesTypeModal from "../../../components/currencies_type/AddNewCurrenciesTypeModal";
//  section
import SectionDataTable from "../../../components/section/Datatable";
import AddNewSectionModal from "../../../components/section/AddNewSectionModal";
//  cost center
import CostCenterDataTable from "../../../components/costcenter/Datatable";
import AddNewCostCenterModal from "../../../components/costcenter/AddNewCostCenterModal";
//  cost center
import PercentageDataTable from "../../../components/percentage/Datatable";
import AddNewPercentageModal from "../../../components/percentage/AddNewPercentageModal";
// evaluation type
import EvaluationTypeDataTable from "../../../components/evaluationtype/Datatable";
import AddNewEvaluationTypeModal from "../../../components/evaluationtype/AddNewEvaluationTypeModal";

//Session
import SessionDataTable from "../../../components/session/Datatable";
import AddNewSessionModal from "../../../components/session/AddNewSessionModal";

//CompanySchedule
import CompanyScheduleDataTable from "../../../components/companyschedule/Datatable";
import AddNewCompanyScheduleModal from "../../../components/companyschedule/AddNewCompanyScheduleModal";
// GosiSubscription
import GosiSubscriptionDataTable from "../../../components/gosisubsubscription/Datatable";
import AddNewGosiSubscriptionModal from "../../../components/gosisubsubscription/AddNewGosiSubscriptionModal";
// GosiSubscription
import CompanyDataTable from "../../../components/company/Datatable";
import AddNewCompanyModal from "../../../components/company/AddNewCompanyModal";

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownSplitOpen: false,
      countrymodalOpen: false,
      citymodalOpen: false,
      activeTab: "23",
      displayOptionsIsOpen: false,
      religionmodalOpen: false,
      evaluationcompentenciesmodaOpen: false,
      educationmodalOpen: false,
      documenttypemodalOpen: false,
      displayOptionsIsOpen: false,
      beneficiary_typemodalOpen: false,
      leavevacationtypemodalOpen: false,
      positiondesignationmodalOpen: false,
      sponsormodalOpen: false,
      earningsbenefitsmodalOpen: false,
      deductionmodalOpen: false,
      modificationtypemodalOpen: false,
      currenciestypemodalOpen: false,
      sectionmodalOpen: false,
      costcentermodalOpen: false,
      percentagemodalOpen: false,
      evaluationtypemodalOpen: false,
      sessionmodalOpen: false,
      companyschedulemodalOpen: false,
      gosisubscriptionmodalOpen: false,
      companymodalOpen: false,
    };
  }
  toggle = (tab) => {
    if (this.activeTab !== tab) this.setState({ activeTab: tab });
  };
  componentDidMount() {
    this.props.getCountryList();
    this.props.getCityList();
    this.props.getReligionList();
    this.props.getEvaluationcompentenciesList();
    this.props.getEducationList();
    this.props.getDocumenttypeList();
    this.props.getBeneficiary_typeList();
    this.props.getLeaveVacationTypeList();
    this.props.getPositionDesignationList();
    this.props.getSponsorList();
    this.props.getEarningsBenefitsList();
    this.props.getDeductionList();
    this.props.getModificationTypeList();
    this.props.getCurrenciesTypeList();
    this.props.getSectionList();
    this.props.getCostCenterList();
    this.props.getPercentageList();
    this.props.getEvaluationTypeList();
    this.props.getSessionList();
    this.props.getCompanyScheduleList();
    this.props.getGosiSubscriptionList();
    this.props.getCompanyList();
  }

  toggleModal = () => {
    this.setState({
      countrymodalOpen: !this.state.countrymodalOpen,
    });
  };
  citytoggleModal = () => {
    this.setState({
      citymodalOpen: !this.state.citymodalOpen,
    });
  };
  religiontoggleModal = () => {
    this.setState({
      religionmodalOpen: !this.state.religionmodalOpen,
    });
  };

  evaluationcompentenciestoggleModal = () => {
    this.setState({
      evaluationcompentenciesmodalOpen: !this.state
        .evaluationcompentenciesmodalOpen,
    });
  };
  educationtoggleModal = () => {
    this.setState({
      educationmodalOpen: !this.state.educationmodalOpen,
    });
  };

  documenttypetoggleModal = () => {
    this.setState({
      documenttypemodalOpen: !this.state.documenttypemodalOpen,
    });
  };

  beneficiary_typetoggleModal = () => {
    this.setState({
      beneficiary_typemodalOpen: !this.state.beneficiary_typemodalOpen,
    });
  };
  leaveVacationtypetoggleModal = () => {
    this.setState({
      leavevacationtypemodalOpen: !this.state.leavevacationtypemodalOpen,
    });
  };
  positiondesignationtoggleModal = () => {
    this.setState({
      positiondesignationmodalOpen: !this.state.positiondesignationmodalOpen,
    });
  };
  sponsortoggleModal = () => {
    this.setState({
      sponsormodalOpen: !this.state.sponsormodalOpen,
    });
  };
  earningsbenefitstoggleModal = () => {
    this.setState({
      earningsbenefitsmodalOpen: !this.state.earningsbenefitsmodalOpen,
    });
  };

  deductiontoggleModal = () => {
    this.setState({
      deductionmodalOpen: !this.state.deductionmodalOpen,
    });
  };
  modificationtypetoggleModal = () => {
    this.setState({
      modificationtypemodalOpen: !this.state.modificationtypemodalOpen,
    });
  };
  currenciestypetoggleModal = () => {
    this.setState({
      currenciestypemodalOpen: !this.state.currenciestypemodalOpen,
    });
  };

  sectiontoggleModal = () => {
    this.setState({
      sectionmodalOpen: !this.state.sectionmodalOpen,
    });
  };
  costcentertoggleModal = () => {
    this.setState({
      costcentermodalOpen: !this.state.costcentermodalOpen,
    });
  };
  percentagetoggleModal = () => {
    this.setState({
      percentagemodalOpen: !this.state.percentagemodalOpen,
    });
  };

  evaluationtypetoggleModal = () => {
    this.setState({
      evaluationtypemodalOpen: !this.state.evaluationtypemodalOpen,
    });
  };
  sessiontoggleModal = () => {
    this.setState({
      sessionmodalOpen: !this.state.sessionmodalOpen,
    });
  };
  companyscheduletoggleModal = () => {
    this.setState({
      companyschedulemodalOpen: !this.state.companyschedulemodalOpen,
    });
  };
  gosisubscriptiontoggleModal = () => {
    this.setState({
      gosisubscriptionmodalOpen: !this.state.gosisubscriptionmodalOpen,
    });
  };
  companytoggleModal = () => {
    this.setState({
      companymodalOpen: !this.state.companymodalOpen,
    });
  };
  render() {
    const { countryItems, loading, error } = this.props.countryApp;
    const { cityItems, cityloading, cityerror } = this.props.cityApp;
    const {
      countrymodalOpen,
      citymodalOpen,
      religionmodalOpen,
      evaluationcompentenciesmodalOpen,
      educationmodalOpen,
      documenttypemodalOpen,
      beneficiary_typemodalOpen,
      leavevacationtypemodalOpen,
      positiondesignationmodalOpen,
      sponsormodalOpen,
      earningsbenefitsmodalOpen,
      deductionmodalOpen,
      modificationtypemodalOpen,
      currenciestypemodalOpen,
      sectionmodalOpen,
      costcentermodalOpen,
      percentagemodalOpen,
      evaluationtypemodalOpen,
      sessionmodalOpen,
      companyschedulemodalOpen,
      gosisubscriptionmodalOpen,
      companymodalOpen,
    } = this.state;
    const {
      evaluationcompentenciesItems,
      evaluationcompentenciesloading,
      evaluationcompentencieserror,
    } = this.props.evaluationcompentenciesApp;

    const {
      educationItems,
      educationloading,
      educationerror,
    } = this.props.educationTrainingTypeApp;
    const {
      documenttypeItems,
      documenttypeerror,
      documenttypeloading,
    } = this.props.documenttypeApp;
    const {
      religionItems,
      religionloading,
      religionerror,
    } = this.props.religionApp;
    const {
      beneficiary_typeItems,
      beneficiary_typeloading,
      beneficiary_typeerror,
    } = this.props.beneficiary_typeApp;
    const {
      leavevacationtypeItems,
      leavevacationtypeloading,
      leavevacationtypeerror,
    } = this.props.leavevacationtypeApp;
    const {
      positiondesignationItems,
      positiondesignationloading,
      positiondesignationerror,
    } = this.props.positiondesignationApp;
    const {
      sponsorItems,
      sponsorloading,
      sponsorerror,
    } = this.props.sponsorApp;

    const {
      earningsbenefitsItems,
      earningsbenefitsloading,
      earningsbenefitserror,
    } = this.props.earningsbenefitsApp;
    const {
      deductionItems,
      deductionloading,
      deductionerror,
    } = this.props.deductionApp;
    const {
      modificationtypeItems,
      modificationtypeloading,
      modificationtypeerror,
    } = this.props.modificationtypeApp;
    const {
      currenciestypeItems,
      currenciestypeloading,
      currenciestypeerror,
    } = this.props.currenciestypeApp;
    const {
      sectionItems,
      sectionloading,
      sectionerror,
    } = this.props.sectionApp;
    const {
      costcenterItems,
      costcenterloading,
      costcentererror,
    } = this.props.costcenterApp;
    const {
      percentageItems,
      percentageloading,
      percentageerror,
    } = this.props.percentageApp;
    const {
      evaluationtypeItems,
      evaluationtypeloading,
      evaluationtypeerror,
    } = this.props.evaluationtypeApp;
    const {
      sessionItems,
      sessionloading,
      sessionerror,
    } = this.props.sessionApp;
    const {
      companyscheduleItems,
      companyscheduleloading,
      companyscheduleerror,
    } = this.props.companyscheduleApp;
    const {
      gosisubscriptionItems,
      gosisubscriptionloading,
      gosisubscriptionerror,
    } = this.props.gosisubscriptionApp;
    const {
      companyItems,
      companyloading,
      companyerror,
    } = this.props.companyApp;


    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.masters" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <div className="row">
          <Colxx xxs="12" xs="12" md="2" lg="2">
            <div
              className=" card  fade shadow p-2  show nav flex-column nav-pills nav-pills-custom "
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "1",
                })}
                onClick={() => {
                  this.toggle("1");
                }}
                to="#"
              >
                <IntlMessages id="country.countries"></IntlMessages>
              </NavLink>

              <NavLink
                className={classnames({
                  active: this.activeTab === "2",

                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "2",
                })}
                onClick={() => {
                  this.toggle("2");
                }}
                to="#"
              >
                <IntlMessages id="city.city" />
              </NavLink>
              <NavLink
                className={classnames({
                  active: this.activeTab === "3",
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "3",
                })}
                onClick={() => {
                  this.toggle("3");
                }}
                to="#"
              >
                <IntlMessages id="religion.religion" />
              </NavLink>

              <NavLink
                className={classnames({
                  active: this.activeTab === "4",
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "4",
                })}
                onClick={() => {
                  this.toggle("4");
                }}
                to="#"
              >
                <IntlMessages id="evalutioncompentencies.evalutioncompentencies" />
              </NavLink>

              <NavLink
                className={classnames({
                  active: this.activeTab === "5",
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "5",
                })}
                onClick={() => {
                  this.toggle("5");
                }}
                to="#"
              >
                <IntlMessages id="education.education"></IntlMessages>
              </NavLink>
              <NavLink
                className={classnames({
                  active: this.activeTab === "6",
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "6",
                })}
                onClick={() => {
                  this.toggle("6");
                }}
                to="#"
              >
                <IntlMessages id="documenttypes.documenttype"></IntlMessages>
              </NavLink>
              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "7",
                })}
                onClick={() => {
                  this.toggle("7");
                }}
                to="#"
              >
                <IntlMessages id="beneficiarytypes.beneficiary" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "8",
                })}
                onClick={() => {
                  this.toggle("8");
                }}
                to="#"
              >
                <IntlMessages id="leavevacationtypes.leavevacationtype" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "9",
                })}
                onClick={() => {
                  this.toggle("9");
                }}
                to="#"
              >
                Position/Designation
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "10",
                })}
                onClick={() => {
                  this.toggle("10");
                }}
                to="#"
              >
                <IntlMessages id="sponsor.sponsor" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "11",
                })}
                onClick={() => {
                  this.toggle("11");
                }}
                to="#"
              >
                <IntlMessages id="earnings_benefits.earnings_benefits" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "12",
                })}
                onClick={() => {
                  this.toggle("12");
                }}
                to="#"
              >
                <IntlMessages id="deduction.deduction" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "13",
                })}
                onClick={() => {
                  this.toggle("13");
                }}
                to="#"
              >
                <IntlMessages id="modificationtypes.modificationtype" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "14",
                })}
                onClick={() => {
                  this.toggle("14");
                }}
                to="#"
              >
                <IntlMessages id="currencies_types.currencytype" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "15",
                })}
                onClick={() => {
                  this.toggle("15");
                }}
                to="#"
              >
                <IntlMessages id="section.section" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "16",
                })}
                onClick={() => {
                  this.toggle("16");
                }}
                to="#"
              >
                <IntlMessages id="costcenter.costcenter" />
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "17",
                })}
                onClick={() => {
                  this.toggle("17");
                }}
                to="#"
              >
                <IntlMessages id="percentage.percentage" />
              </NavLink>
              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "18",
                })}
                onClick={() => {
                  this.toggle("18");
                }}
                to="#"
              >
                Evaluation / Types
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "19",
                })}
                onClick={() => {
                  this.toggle("19");
                }}
                to="#"
              >
                Sessions
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "20",
                })}
                onClick={() => {
                  this.toggle("20");
                }}
                to="#"
              >
                Company Schedules
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "22",
                })}
                onClick={() => {
                  this.toggle("22");
                }}
                to="#"
              >
                Gosi Subscriptions
              </NavLink>

              <NavLink
                className={classnames({
                  "nav-link": true,
                  " mb-2": true,
                  "p-2": true,
                  shadow: true,
                  "text-center": true,
                  active: this.state.activeTab === "23",
                })}
                onClick={() => {
                  this.toggle("23");
                }}
                to="#"
              >
                Company
              </NavLink>


            </div>
          </Colxx>
          <Colxx xxs="12" xs="12" md="10" lg="10">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="1">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="country.nationality_Info"></IntlMessages>
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.toggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {error ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {error}
                    </div>
                  ) : (
                    [
                      loading ? (
                        <DataTable item={countryItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="2">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="city.city_Info"></IntlMessages>
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.citytoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {cityerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {cityerror}
                    </div>
                  ) : (
                    [
                      cityloading ? (
                        <CityDataTable item={cityItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="3">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="religion.religion_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.religiontoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {religionerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {religionerror}
                    </div>
                  ) : (
                    [
                      religionloading ? (
                        <ReligionDataTable item={religionItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="4">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="evaluationcompentencies.evaluationcompentencies_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.evaluationcompentenciestoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {evaluationcompentencieserror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {evaluationcompentencieserror}
                    </div>
                  ) : (
                    [
                      evaluationcompentenciesloading ? (
                        <EvaluationCompentenciesDataTable
                          item={evaluationcompentenciesItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="5">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="education.education_Info"></IntlMessages>
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.educationtoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {educationerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {educationerror}
                    </div>
                  ) : (
                    [
                      educationloading ? (
                        <EducationDataTable item={educationItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="6">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="documenttypes.documenttype_Info"></IntlMessages>
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.documenttypetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {documenttypeerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {documenttypeerror}
                    </div>
                  ) : (
                    [
                      documenttypeloading ? (
                        <AddNewDocumenttypeDataTable
                          item={documenttypeItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="7">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="beneficiarytypes.beneficiary_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.beneficiary_typetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {beneficiary_typeerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {beneficiary_typeerror}
                    </div>
                  ) : (
                    [
                      beneficiary_typeloading ? (
                        <Beneficiary_typeDataTable
                          item={beneficiary_typeItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="8">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="leavevacationtypes.leavevacation_info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.leaveVacationtypetoggleModal}
                    />
                  </div>
                </div>

                <Row>
                  {leavevacationtypeerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {leavevacationtypeerror}
                    </div>
                  ) : (
                    [
                      leavevacationtypeloading ? (
                        <LeaveVacationTypeDataTable
                          item={leavevacationtypeItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="9">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="position_designations.designation_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.positiondesignationtoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {positiondesignationerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {positiondesignationerror}
                    </div>
                  ) : (
                    [
                      positiondesignationloading ? (
                        <PositionDesignationDataTable
                          item={positiondesignationItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="10">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="sponsor.sponsor_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.sponsortoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {sponsorerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {sponsorerror}
                    </div>
                  ) : (
                    [
                      sponsorloading ? (
                        <SponsorDataTable item={sponsorItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="11">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="earnings_benefits.earnings_benefits_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.earningsbenefitstoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {earningsbenefitserror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {earningsbenefitserror}
                    </div>
                  ) : (
                    [
                      earningsbenefitsloading ? (
                        <EarningsBenefitsDataTable
                          item={earningsbenefitsItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="12">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="deduction.deduction_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.deductiontoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {deductionerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {deductionerror}
                    </div>
                  ) : (
                    [
                      deductionloading ? (
                        <DeductionDataTable item={deductionItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="13">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="modificationtypes.modificationtype_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.modificationtypetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {modificationtypeerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {modificationtypeerror}
                    </div>
                  ) : (
                    [
                      modificationtypeloading ? (
                        <ModificationTypeDataTable
                          item={modificationtypeItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="14">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="currencies_types.currencies_types_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.currenciestypetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {currenciestypeerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {currenciestypeerror}
                    </div>
                  ) : (
                    [
                      currenciestypeloading ? (
                        <CurrenciesTypeDataTable
                          item={currenciestypeItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="15">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="section.section_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.sectiontoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {sectionerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {sectionerror}
                    </div>
                  ) : (
                    [
                      sectionloading ? (
                        <SectionDataTable item={sectionItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="16">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="costcenter.costcenter_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.costcentertoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {costcentererror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {costcentererror}
                    </div>
                  ) : (
                    [
                      costcenterloading ? (
                        <CostCenterDataTable item={costcenterItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="17">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="percentage.percentage_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.percentagetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {percentageerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {percentageerror}
                    </div>
                  ) : (
                    [
                      percentageloading ? (
                        <PercentageDataTable item={percentageItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="18">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="evaluationtype.evaluationtype_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.evaluationtypetoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {evaluationtypeerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {evaluationtypeerror}
                    </div>
                  ) : (
                    [
                      evaluationtypeloading ? (
                        <EvaluationTypeDataTable
                          item={evaluationtypeItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="19">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="session.session_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.sessiontoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {sessionerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {sessionerror}
                    </div>
                  ) : (
                    [
                      sessionloading ? (
                        <SessionDataTable item={sessionItems} key="1" />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="20">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="companyschedule.companyschedule_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.companyscheduletoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {companyscheduleerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {companyscheduleerror}
                    </div>
                  ) : (
                    [
                      companyscheduleloading ? (
                        <CompanyScheduleDataTable
                          item={companyscheduleItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="22">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="gosisubscription.gosisubscription_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.gosisubscriptiontoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {gosisubscriptionerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {gosisubscriptionerror}
                    </div>
                  ) : (
                    [
                      gosisubscriptionloading ? (
                        <GosiSubscriptionDataTable
                          item={gosisubscriptionItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="card  fade shadow   show  p-3" tabId="23">
                <h4 className="font-italic mb-4">
                  <IntlMessages id="company.company_Info" />
                </h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <Buttons
                      color="primary"
                      size="lg"
                      value={<IntlMessages id="general.add_new"></IntlMessages>}
                      styleClass="float-xs-right  top-right-button btn btn-primary btn-sm float-md-right mr-1 mb-1 align-top"
                      onClick={this.companytoggleModal}
                    />
                  </div>
                </div>
                <Row>
                  {companyerror ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {companyerror}
                    </div>
                  ) : (
                    [
                      companyloading ? (
                        <CompanyDataTable
                          item={companyItems}
                          key="1"
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                </Row>
              </TabPane>
            </TabContent>


          </Colxx>
        </div>

        <AddNewCountryModal
          toggleModal={this.toggleModal}
          modalOpen={countrymodalOpen}
        />
        <AddNewCityModal
          toggleModal={this.citytoggleModal}
          modalOpen={citymodalOpen}
        />
        <AddNewReligionModal
          toggleModal={this.religiontoggleModal}
          modalOpen={religionmodalOpen}
        />
        <AddNewevaluationcompentenciesModal
          toggleModal={this.evaluationcompentenciestoggleModal}
          modalOpen={evaluationcompentenciesmodalOpen}
        />
        <AddNewEducationModal
          toggleModal={this.educationtoggleModal}
          modalOpen={educationmodalOpen}
        />

        <AddNewDocumenttypeModal
          toggleModal={this.documenttypetoggleModal}
          modalOpen={documenttypemodalOpen}
        />

        <AddNewBeneficiary_typeModal
          toggleModal={this.beneficiary_typetoggleModal}
          modalOpen={beneficiary_typemodalOpen}
        />
        <AddNewLeaveVacationTypeModal
          toggleModal={this.leaveVacationtypetoggleModal}
          modalOpen={leavevacationtypemodalOpen}
        />
        <AddNewPositionDesignationModal
          toggleModal={this.positiondesignationtoggleModal}
          modalOpen={positiondesignationmodalOpen}
        />
        <AddNewSponsorModal
          toggleModal={this.sponsortoggleModal}
          modalOpen={sponsormodalOpen}
        />
        <AddNewEarningsBenefitsModal
          toggleModal={this.earningsbenefitstoggleModal}
          modalOpen={earningsbenefitsmodalOpen}
        />

        <AddNewDeductionModal
          toggleModal={this.deductiontoggleModal}
          modalOpen={deductionmodalOpen}
        />

        <AddNewModificationTypeModal
          toggleModal={this.modificationtypetoggleModal}
          modalOpen={modificationtypemodalOpen}
        />
        <AddNewCurrenciesTypeModal
          toggleModal={this.currenciestypetoggleModal}
          modalOpen={currenciestypemodalOpen}
        />
        <AddNewSectionModal
          toggleModal={this.sectiontoggleModal}
          modalOpen={sectionmodalOpen}
        />
        <AddNewCostCenterModal
          toggleModal={this.costcentertoggleModal}
          modalOpen={costcentermodalOpen}
        />
        <AddNewPercentageModal
          toggleModal={this.percentagetoggleModal}
          modalOpen={percentagemodalOpen}
        />
        <AddNewEvaluationTypeModal
          toggleModal={this.evaluationtypetoggleModal}
          modalOpen={evaluationtypemodalOpen}
        />

        <AddNewSessionModal
          toggleModal={this.sessiontoggleModal}
          modalOpen={sessionmodalOpen}
        />
        <AddNewCompanyScheduleModal
          toggleModal={this.companyscheduletoggleModal}
          modalOpen={companyschedulemodalOpen}
        />
        <AddNewGosiSubscriptionModal
          toggleModal={this.gosisubscriptiontoggleModal}
          modalOpen={gosisubscriptionmodalOpen}
        />

        <AddNewCompanyModal
          toggleModal={this.companytoggleModal}
          modalOpen={companymodalOpen}
        />

      </Fragment>

      
    );
  }
}

const mapStateToProps = ({
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
}) => {
  return {
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
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    getCountryList,
    getCityList,
    getReligionList,
    getEvaluationcompentenciesList,
    getEducationList,
    getDocumenttypeList,
    getBeneficiary_typeList,
    getLeaveVacationTypeList,
    getPositionDesignationList,
    getSponsorList,
    getEarningsBenefitsList,
    getDeductionList,
    getModificationTypeList,
    getCurrenciesTypeList,
    getSectionList,
    getCostCenterList,
    getPercentageList,
    getEvaluationTypeList,
    getSessionList,
    getCompanyScheduleList,
    getGosiSubscriptionList,
    getCompanyList,
  })(Master)
);
