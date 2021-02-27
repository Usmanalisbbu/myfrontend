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
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import IntlMessages from "../../helpers/IntlMessages";
import { updateEarningsBenefitsItem } from "../../redux/actions";
const earningsbenefitsSchema = Yup.object().shape({
  benefit_desc_eng: Yup.string().required(
    "EarningsBenefits name in english is required!"
  ),
  benefit_desc_arab: Yup.string().required(
    "EarningsBenefits name in arabic is required!"
  ),
});
class EditEarningsBenefitsModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateEarningsBenefitsItem(values);
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
          <IntlMessages id="earnings_benefits.update-title" />
        </ModalHeader>

        <Formik
          initialValues={{
            benefit_desc_eng: this.props.endpoint.benefit_desc_eng,
            benefit_desc_arab: this.props.endpoint.benefit_desc_eng,
            money_value_flag: this.props.endpoint.money_value_flag,
            printable: this.props.endpoint.printable,
            show_in_report: this.props.endpoint.show_in_report,
            mulfactor: this.props.endpoint.mulfactor,
            parcent_frsalary: this.props.endpoint.parcent_frsalary,
            mb: this.props.endpoint.mb,

            // parentbenefit: this.props.endpoint.parentbenefit,
            // modify_flag: this.props.endpoint.modify_flag,
            // gl_id: this.props.endpoint.gl_id,
            // credit_gl_id: this.props.endpoint.credit_gl_id,
            //holiday_flag: this.props.endpoint.holiday_flag,
            //final_set_flag: this.props.endpoint.final_set_flag,
          }}
          validationSchema={earningsbenefitsSchema}
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
                        <IntlMessages id="earnings_benefits.earnings_benefits_desc_eng" />
                      </Label>
                      <Field className="form-control" name="benefit_desc_eng" />
                      {errors.benefit_desc_eng && touched.benefit_desc_eng && (
                        <div className="invalid-feedback d-block">
                          {errors.benefit_desc_eng}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="earnings_benefits.earnings_benefits_desc_arab" />
                      </Label>
                      <Field
                        className="form-control"
                        name="benefit_desc_arab"
                      />
                      {errors.benefit_desc_arab &&
                        touched.benefit_desc_arab && (
                          <div className="invalid-feedback d-block">
                            {errors.benefit_desc_arab}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="money_value_flag"
                        name="money_value_flag"
                        value={values.money_value_flag}
                        label={
                          <IntlMessages id="earnings_benefits.money_value_flag" />
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.money_value_flag && touched.money_value_flag ? (
                        <div className="invalid-feedback d-block">
                          {errors.money_value_flag}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="mulfactor"
                        name="mulfactor"
                        value={values.mulfactor}
                        label={
                          <IntlMessages id="earnings_benefits.mulfactor" />
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.mulfactor && touched.mulfactor ? (
                        <div className="invalid-feedback d-block">
                          {errors.mulfactor}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="printable"
                        name="printable"
                        value={values.printable}
                        label={
                          <IntlMessages id="earnings_benefits.printable" />
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.printable && touched.printable ? (
                        <div className="invalid-feedback d-block">
                          {errors.printable}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="mb"
                        name="mb"
                        value={values.mb}
                        label={<IntlMessages id="earnings_benefits.mb" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.mb && touched.mb ? (
                        <div className="invalid-feedback d-block">
                          {errors.mb}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  {/* <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="require_visa"
                        name="require_visa"
                        value={values.require_visa}
                        label={
                          <IntlMessages id="earnings_benefits.require_visa" />
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
                  </Col> */}
                </Row>
                <FormGroup>
                  <Label>
                    <IntlMessages id="earnings_benefits.parcent_frsalary" />
                  </Label>
                  <Field
                    className="form-control"
                    type="number"
                    name="parcent_frsalary"
                    min="0"
                    step="1"
                    value={values.parcent_frsalary}
                  />
                  {errors.parcent_frsalary && touched.parcent_frsalary && (
                    <div className="invalid-feedback d-block">
                      {errors.parcent_frsalary}
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

const mapStateToProps = ({ countryApp, cityApp, earningsbenefitsApp }) => {
  return {
    countryApp,
    cityApp,
    earningsbenefitsApp,
  };
};
export default connect(mapStateToProps, {
  updateEarningsBenefitsItem,
})(EditEarningsBenefitsModal);
