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
  Row,
  Col,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import IntlMessages from "../../helpers/IntlMessages";
import { updateLeaveVacationTypeItem } from "../../redux/actions";
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
const leavevacationtypeschema = Yup.object().shape({
  leave_desc_eng: Yup.string().required(
    "Leave Vacation Type name in english is required!"
  ),
  leave_desc_arab: Yup.string().required(
    "Leave Vacation Type name in arabic is required!"
  ),
});
class EditLeaveVacationTypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateLeaveVacationTypeItem(values);
  }

  render() {
    const { modalOpen, toggleModal } = this.props;

    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        //className="modal-lg"
        wrapClassName="modal-center "
        //backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="leavevacationtypes.update-title" />
        </ModalHeader>

        <Formik
          initialValues={{
            leave_desc_eng: this.props.endpoint.leave_desc_eng,
            leave_desc_arab: this.props.endpoint.leave_desc_arab,
            status: this.props.endpoint.status,
            with_pay: this.props.endpoint.with_pay,
            settlement: this.props.endpoint.settlement,
            extra_leave_calc: this.props.endpoint.extra_leave_calc,
            request: this.props.endpoint.request,
            require_visa: this.props.endpoint.require_visa,
            leave_duration: this.props.endpoint.leave_duration,
          }}
          validationSchema={leavevacationtypeschema}
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
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="leavevacationtypes.leave_desc_eng" />
                      </Label>
                      <Field className="form-control" name="leave_desc_eng" />
                      {errors.leave_desc_eng && touched.leave_desc_eng && (
                        <div className="invalid-feedback d-block">
                          {errors.leave_desc_eng}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="leavevacationtypes.leave_desc_arab" />
                      </Label>
                      <Field className="form-control" name="leave_desc_arab" />
                      {errors.leave_desc_arab && touched.leave_desc_arab && (
                        <div className="invalid-feedback d-block">
                          {errors.leave_desc_arab}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="status"
                        name="status"
                        value={values.status}
                        label={<IntlMessages id="leavevacationtypes.status" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.status && touched.status ? (
                        <div className="invalid-feedback d-block">
                          {errors.status}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="with_pay"
                        name="with_pay"
                        value={values.with_pay}
                        label={
                          <IntlMessages id="leavevacationtypes.with_pay" />
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.with_pay && touched.with_pay ? (
                        <div className="invalid-feedback d-block">
                          {errors.with_pay}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="settlement"
                        name="settlement"
                        value={values.settlement}
                        label={
                          <IntlMessages id="leavevacationtypes.settlement" />
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.settlement && touched.settlement ? (
                        <div className="invalid-feedback d-block">
                          {errors.settlement}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="extra_leave_calc"
                        name="extra_leave_calc"
                        value={values.extra_leave_calc}
                        label={
                          <IntlMessages id="leavevacationtypes.extra_leave_calc" />
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.extra_leave_calc && touched.extra_leave_calc ? (
                        <div className="invalid-feedback d-block">
                          {errors.extra_leave_calc}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="request"
                        name="request"
                        value={values.request}
                        label={<IntlMessages id="leavevacationtypes.request" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.request && touched.request ? (
                        <div className="invalid-feedback d-block">
                          {errors.request}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="require_visa"
                        name="require_visa"
                        value={values.require_visa}
                        label={
                          <IntlMessages id="leavevacationtypes.require_visa" />
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.require_visa && touched.require_visa ? (
                        <div className="invalid-feedback d-block">
                          {errors.require_visa}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label>
                    <IntlMessages id="leavevacationtypes.leave_duration" />
                  </Label>
                  <Field
                    className="form-control"
                    type="number"
                    name="leave_duration"
                    min="0"
                    step="1"
                    value={values.leave_duration}
                  />
                  {errors.leave_duration && touched.leave_duration && (
                    <div className="invalid-feedback d-block">
                      {errors.leave_duration}
                    </div>
                  )}
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={toggleModal}>
                  <IntlMessages id="general.cancel" />
                </Button>
                <Button color="primary" type="submit">
                  <IntlMessages id="general.update" />
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

const mapStateToProps = ({ countryApp, cityApp, leavevacationtypeApp }) => {
  return {
    countryApp,
    cityApp,
    leavevacationtypeApp,
  };
};
export default connect(mapStateToProps, {
  updateLeaveVacationTypeItem,
})(EditLeaveVacationTypeModal);
