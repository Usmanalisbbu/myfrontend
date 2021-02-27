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
  Row,
  Col,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
import IntlMessages from "../../helpers/IntlMessages";
import { addEarningsBenefitsItem } from "../../redux/actions";
const earningsbenefitsSchema = Yup.object().shape({
  benefit_desc_eng: Yup.string().required(
    "EarningsBenefits name in english is required!"
  ),
  benefit_desc_arab: Yup.string().required(
    "EarningsBenefits name in arabic is required!"
  ),
});
class AddNewEarningsBenefitsModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addEarningsBenefitsItem(values);
    this.props.toggleModal();
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
          <IntlMessages id="earnings_benefits.add-new-title" />
        </ModalHeader>

        <Formik
          initialValues={{
            benefit_desc_eng: "",
            benefit_desc_arab: "",
            money_value_flag: false,
            printable: false,
            show_in_report: false,
            mulfactor: false,
            parcent_frsalary: "",
            mb: false,

            // parentbenefit: "",
            // modify_flag: false,
            // gl_id: "",
            // credit_gl_id: "",
            //holiday_flag: false,
            //final_set_flag: false,
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
const mapStateToProps = ({ earningsbenefitsApp }) => {
  return {
    earningsbenefitsApp,
  };
};
export default connect(mapStateToProps, {
  addEarningsBenefitsItem,
})(AddNewEarningsBenefitsModal);
