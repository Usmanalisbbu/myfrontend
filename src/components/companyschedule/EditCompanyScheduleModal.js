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
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import IntlMessages from "../../helpers/IntlMessages";
import { updateCompanyScheduleItem } from "../../redux/actions";
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
class EditCompanyScheduleModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateCompanyScheduleItem(values);
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
          <IntlMessages id="companyschedule.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            schedule_desc_eng: this.props.endpoint.schedule_desc_eng,
            schedule_desc_arab: this.props.endpoint.schedule_desc_arab,
            from_date: this.props.endpoint.from_date,
            from_date_h: this.props.endpoint.from_date_h,
            to_date: this.props.endpoint.to_date,
            to_date_h: this.props.endpoint.to_date_h,
            no_work: this.props.endpoint.no_work,
            for_schedule: this.props.endpoint.for_schedule,
            paid_overtime: this.props.endpoint.paid_overtime,
          }}
          validationSchema={companyscheduleSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="companyschedule.schedule_desc_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.schedule_desc_eng}
                    name="schedule_desc_eng"
                  />
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
                  <Field
                    className="form-control"
                    value={values.schedule_desc_arab}
                    name="schedule_desc_arab"
                  />
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
                  <Field
                    className="form-control"
                    value={values.from_date}
                    name="from_date"
                  />
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
                  <Field
                    className="form-control"
                    value={values.from_date_h}
                    name="from_date_h"
                  />
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
                  <Field
                    className="form-control"
                    value={values.to_date}
                    name="to_date"
                  />
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
                  <Field
                    className="form-control"
                    value={values.to_date_h}
                    name="to_date_h"
                  />
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
                  <Field
                    className="form-control"
                    value={values.no_work}
                    name="no_work"
                  />
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
                  <Field
                    className="form-control"
                    value={values.for_schedule}
                    name="for_schedule"
                  />
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
                  <Field
                    className="form-control"
                    value={values.paid_overtime}
                    name="paid_overtime"
                  />
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
  updateCompanyScheduleItem,
})(EditCompanyScheduleModal);
