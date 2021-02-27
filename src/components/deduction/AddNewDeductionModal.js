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
  Col,
  Row,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
import IntlMessages from "../../helpers/IntlMessages";
import { addDeductionItem } from "../../redux/actions";
const deductionSchema = Yup.object().shape({
  deduction_desc_eng: Yup.string().required(
    "Deduction name in english is required!"
  ),
  deduction_desc_arab: Yup.string().required(
    "Deduction name in arabic is required!"
  ),
});
class AddNewDeductionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addDeductionItem(values);
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
          <IntlMessages id="deduction.add-new-title" />
        </ModalHeader>

        <Formik
          initialValues={{
            deduction_desc_eng: "",
            deduction_desc_arab: "",
            printable: false,
            show_in_report: false,
            mb: false,
            request: false,

            // parentbenefit: "",
            // modify_flag: false,
            // gl_id: "",
            // credit_gl_id: "",
            //holiday_flag: false,
            //final_set_flag: false,
          }}
          validationSchema={deductionSchema}
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
                        <IntlMessages id="deduction.deduction_desc_eng" />
                      </Label>
                      <Field
                        className="form-control"
                        name="deduction_desc_eng"
                      />
                      {errors.deduction_desc_eng &&
                        touched.deduction_desc_eng && (
                          <div className="invalid-feedback d-block">
                            {errors.deduction_desc_eng}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="deduction.deduction_desc_arab" />
                      </Label>
                      <Field
                        className="form-control"
                        name="deduction_desc_arab"
                      />
                      {errors.deduction_desc_arab &&
                        touched.deduction_desc_arab && (
                          <div className="invalid-feedback d-block">
                            {errors.deduction_desc_arab}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="printable"
                        name="printable"
                        value={values.printable}
                        label={<IntlMessages id="deduction.printable" />}
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
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="mb"
                        name="mb"
                        value={values.mb}
                        label={<IntlMessages id="deduction.mb" />}
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
                  <Col md={4}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="request"
                        name="request"
                        value={values.request}
                        label={<IntlMessages id="deduction.request" />}
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
                </Row>
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
const mapStateToProps = ({ deductionApp }) => {
  return {
    deductionApp,
  };
};
export default connect(mapStateToProps, {
  addDeductionItem,
})(AddNewDeductionModal);
