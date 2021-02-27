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
import { updateGosiSubscriptionItem } from "../../redux/actions";
const gosisubscriptionSchema = Yup.object().shape({
  yearmonth_id_gr: Yup.string().required(
    "Year Month ID Gr  is required!"
  ),

  yearmonth_id_hi: Yup.string().required(
    "Year Month ID Hi is required!"
  ),

  gosi_saudi_employee: Yup.string().required(
    "Gosi Saudi Employee is required!"
  ),

  gosi_nonsaudi_employee: Yup.string().required(
    "Gosi None Saudi Employee is required!"
  ),

  gosi_saudi_company: Yup.string().required(
    "Gosi Saudi Company is required!"
  ),

  gosi_nonsaudi_company: Yup.string().required(
    "Gosi None Saudi Company is required!"
  ),

  current_flag: Yup.string().required(
    "Current Flag is required!"
  ),

  comments: Yup.string().required(
    "Comments is required!"
  ),



});
class EditGosiSubscriptionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateGosiSubscriptionItem(values);
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
          <IntlMessages id="gosisubscription.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            yearmonth_id_gr: this.props.endpoint.yearmonth_id_gr,
            yearmonth_id_hi: this.props.endpoint.yearmonth_id_hi,
            gosi_saudi_employee: this.props.endpoint.gosi_saudi_employee,
            gosi_nonsaudi_employee: this.props.endpoint.gosi_nonsaudi_employee,
            gosi_saudi_company: this.props.endpoint.gosi_saudi_company,
            gosi_nonsaudi_company: this.props.endpoint.gosi_nonsaudi_company,
            current_flag: this.props.endpoint.current_flag,
            comments: this.props.endpoint.comments,
          }}
          validationSchema={gosisubscriptionSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>

              <FormGroup>
                  <Label>
                    <IntlMessages id="gosisubscription.gosi_saudi_employee" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.gosi_saudi_employee}
                    name="gosi_saudi_employee"
                  />
                  {errors.gosi_saudi_employee && touched.gosi_saudi_employee && (
                    <div className="invalid-feedback d-block">
                      {errors.gosi_saudi_employee}
                    </div>
                  )}
                </FormGroup>
          
               <FormGroup>
                  <Label>
                    <IntlMessages id="gosisubscription.gosi_nonsaudi_employee" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.gosi_nonsaudi_employee}
                    name="gosi_nonsaudi_employee"
                  />
                  {errors.gosi_nonsaudi_employee && touched.gosi_nonsaudi_employee && (
                    <div className="invalid-feedback d-block">
                      {errors.gosi_nonsaudi_employee}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="gosisubscription.gosi_saudi_company" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.gosi_saudi_company}
                    name="gosi_saudi_company"
                  />
                  {errors.gosi_saudi_company && touched.gosi_saudi_company && (
                    <div className="invalid-feedback d-block">
                      {errors.gosi_saudi_company}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="gosisubscription.gosi_nonsaudi_company" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.gosi_nonsaudi_company}
                    name="gosi_nonsaudi_company"
                  />
                  {errors.gosi_nonsaudi_company && touched.gosi_nonsaudi_company && (
                    <div className="invalid-feedback d-block">
                      {errors.gosi_nonsaudi_company}
                    </div>
                  )}
                </FormGroup>


              <FormGroup>
                  <Label>
                    <IntlMessages id="gosisubscription.yearmonth_id_gr" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.yearmonth_id_gr}
                    name="yearmonth_id_gr"
                  />
                  {errors.yearmonth_id_gr && touched.yearmonth_id_gr && (
                    <div className="invalid-feedback d-block">
                      {errors.yearmonth_id_gr}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="gosisubscription.yearmonth_id_hi" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.yearmonth_id_hi}
                    name="yearmonth_id_hi"
                  />
                  {errors.yearmonth_id_hi && touched.yearmonth_id_hi && (
                    <div className="invalid-feedback d-block">
                      {errors.yearmonth_id_hi}
                    </div>
                  )}
                </FormGroup>

                
               
                <FormGroup>
                  <Label>
                    <IntlMessages id="gosisubscription.current_flag" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.current_flag}
                    name="current_flag"
                  />
                  {errors.current_flag && touched.current_flag && (
                    <div className="invalid-feedback d-block">
                      {errors.current_flag}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="gosisubscription.comments" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.comments}
                    name="comments"
                  />
                  {errors.comments && touched.comments && (
                    <div className="invalid-feedback d-block">
                      {errors.comments}
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

const mapStateToProps = ({ gosisubscriptionApp }) => {
  return {

    gosisubscriptionApp,
  };
};
export default connect(mapStateToProps, {
  updateGosiSubscriptionItem,
})(EditGosiSubscriptionModal);
