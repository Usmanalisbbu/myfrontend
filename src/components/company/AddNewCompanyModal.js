import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  CustomInput,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
import IntlMessages from "../../helpers/IntlMessages";
import { addCompanyItem } from "../../redux/actions";
const companySchema = Yup.object().shape({
  company_name_eng: Yup.string().required(
    "Company Name In English Is Required!"
  ),
  company_name_arab: Yup.string().required(
    "Company Name  In Arabic Is Required!"
  ),

  company_name_reg_arab: Yup.string().required(
    "Company Name Registration In Arabic Is Required!"
  ),

  company_name_reg_eng: Yup.string().required(
    "Company Name Registration In English Is Required!"
  ),

  /*incorporation_date: Yup.string().required(
    "Incorporation Date Is Required!"
  ),

  incorporation_date_hijri: Yup.string().required(
    "Incorporation Date In Hijri Is Required!"
  ),*/

  type_of_business_eng: Yup.string().required(
    "Type of Busniess In English Is Required!"
  ),

  type_of_business_arab: Yup.string().required(
    "Type of Busniess In Arab Is Required!"
  ),

  no_br: Yup.string().required(
    "No Br Is Required!"
  ),
  
});
class AddNewCompanyModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addCompanyItem(values);
    this.props.toggleModal();
  }

  render() {
    const { modalOpen, toggleModal } = this.props;
  
    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="company.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            company_name_eng: "",
            company_name_arab: "",
            company_name_reg_eng: "",
            company_name_reg_arab: "",
            incorporation_date: "",
            incorporation_date_hijri: "",
            type_of_business_eng: "",
            type_of_business_arab: "",
            no_br: "",
          }}
          validationSchema={companySchema}
          onSubmit={this.handleSubmit}
        >
          {({
            setFieldValue,
            setFieldTouched,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>

            
                <FormGroup>
                  <Label>
                    <IntlMessages id="company.company_name_eng" />
                  </Label>
                  <Field className="form-control" name="company_name_eng" />
                  {errors.company_name_eng && touched.company_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.company_name_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="company.company_name_arab" />
                  </Label>
                  <Field className="form-control" name="company_name_arab" />
                  {errors.company_name_arab && touched.company_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.company_name_arab}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="company.company_name_reg_eng" />
                  </Label>
                  <Field className="form-control" name="company_name_reg_eng" />
                  {errors.company_name_reg_eng && touched.company_name_reg_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.company_name_reg_eng}
                    </div>
                  )}
                </FormGroup>
                
                <FormGroup>
                  <Label>
                    <IntlMessages id="company.company_name_reg_arab" />
                  </Label>
                  <Field className="form-control" name="company_name_reg_arab" />
                  {errors.company_name_reg_arab && touched.company_name_reg_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.company_name_reg_arab}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="company.incorporation_date" />
                  </Label>
                  <Field className="form-control" name="incorporation_date" />
                  {errors.incorporation_date && touched.incorporation_date && (
                    <div className="invalid-feedback d-block">
                      {errors.incorporation_date}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="company.incorporation_date_hijri" />
                  </Label>
                  <Field className="form-control" name="incorporation_date_hijri" />
                  {errors.incorporation_date_hijri && touched.incorporation_date_hijri && (
                    <div className="invalid-feedback d-block">
                      {errors.incorporation_date_hijri}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="company.type_of_business_eng" />
                  </Label>
                  <Field className="form-control" name="type_of_business_eng" />
                  {errors.type_of_business_eng && touched.type_of_business_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.type_of_business_eng}
                    </div>
                  )}
                </FormGroup>
                
                <FormGroup>
                  <Label>
                    <IntlMessages id="company.type_of_business_arab" />
                  </Label>
                  <Field className="form-control" name="type_of_business_arab" />
                  {errors.type_of_business_arab && touched.type_of_business_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.type_of_business_arab}
                    </div>
                  )}
                </FormGroup>
                
                <FormGroup>
                  <Label>
                    <IntlMessages id="company.no_br" />
                  </Label>
                  <Field className="form-control" name="no_br" />
                  {errors.no_br && touched.no_br && (
                    <div className="invalid-feedback d-block">
                      {errors.no_br}
                    </div>
                  )}
                </FormGroup>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={toggleModal}>
                  <IntlMessages id="general.cancel" />
                </Button>
                <Button color="primary" type="submit">
                  <IntlMessages id="general.save" />
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}
const mapStateToProps = ({ companyApp }) => {
  return {
   
    companyApp,
  };
};
export default connect(mapStateToProps, {
  addCompanyItem,
})(AddNewCompanyModal);
