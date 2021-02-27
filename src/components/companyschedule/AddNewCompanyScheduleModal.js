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
import { addCompanyScheduleItem } from "../../redux/actions";
const companyscheduleSchema = Yup.object().shape({
  schedule_desc_eng: Yup.string().required(
    "CompanySchedule name in english is required!"
  ),
  schedule_desc_arab: Yup.string().required(
    "CompanySchedule name in arabic is required!"
  ),
  from_date: Yup.string().required(
    "From Date is required!"
  ),

  from_date_h: Yup.string().required(
    "From Date Hour is required!"
  ),

  to_date: Yup.string().required(
    "To Date is required!"
  ),
  
  to_date_h: Yup.string().required(
    "TO Date Hour is required!"
  ),

  no_work: Yup.string().required(
    "No Work is required!"
  ),
  
  for_schedule: Yup.string().required(
    "For Schedule is required!"
  ),
  
  paid_overtime: Yup.string().required(
    "Paid Over Time is required!"
  ),
  
});
class AddNewCompanyScheduleModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addCompanyScheduleItem(values);
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
          <IntlMessages id="companyschedule.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            schedule_desc_eng: "",
            schedule_desc_arab: "",
            from_date: "",
            from_date_h: "",
            to_date: "",
            to_date_h: "",
            no_work: "",
            for_schedule: "",
            paid_overtime: "",
          }}
          validationSchema={companyscheduleSchema}
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
                    <IntlMessages id="companyschedule.schedule_desc_eng" />
                  </Label>
                  <Field className="form-control" name="schedule_desc_eng" />
                  {errors.schedule_desc_eng && touched.schedule_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.schedule_desc_eng}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.schedule_desc_arab" />
                  </Label>
                  <Field className="form-control" name="schedule_desc_arab" />
                  {errors.schedule_desc_arab && touched.schedule_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.schedule_desc_arab}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.from_date" />
                  </Label>
                  <Field className="form-control" name="from_date" />
                  {errors.from_date && touched.from_date && (
                    <div className="invalid-feedback d-block">
                      {errors.from_date}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.from_date_h" />
                  </Label>
                  <Field className="form-control" name="from_date_h" />
                  {errors.from_date_h && touched.from_date_h && (
                    <div className="invalid-feedback d-block">
                      {errors.from_date_h}
                    </div>
                  )}
                </FormGroup>
                  
                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.to_date" />
                  </Label>
                  <Field className="form-control" name="to_date" />
                  {errors.to_date && touched.to_date && (
                    <div className="invalid-feedback d-block">
                      {errors.to_date}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.to_date_h" />
                  </Label>
                  <Field className="form-control" name="to_date_h" />
                  {errors.to_date_h && touched.to_date_h && (
                    <div className="invalid-feedback d-block">
                      {errors.to_date_h}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.no_work" />
                  </Label>
                  <Field className="form-control" name="no_work" />
                  {errors.no_work && touched.no_work && (
                    <div className="invalid-feedback d-block">
                      {errors.no_work}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.for_schedule" />
                  </Label>
                  <Field className="form-control" name="for_schedule" />
                  {errors.for_schedule && touched.for_schedule && (
                    <div className="invalid-feedback d-block">
                      {errors.for_schedule}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.paid_overtime" />
                  </Label>
                  <Field className="form-control" name="paid_overtime" />
                  {errors.paid_overtime && touched.paid_overtime && (
                    <div className="invalid-feedback d-block">
                      {errors.paid_overtime}
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
const mapStateToProps = ({  companyscheduleApp }) => {
  return {
    
    companyscheduleApp,
  };
};
export default connect(mapStateToProps, {
  addCompanyScheduleItem,
})(AddNewCompanyScheduleModal);
