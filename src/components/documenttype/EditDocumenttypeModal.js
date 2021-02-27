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
  Input,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
import IntlMessages from "../../helpers/IntlMessages";
import { updateDocumenttypeItem } from "../../redux/actions";
const documenttypeSchema = Yup.object().shape({
  document_desc_eng: Yup.string().required(
    "Documenttype name in english is required!"
  ),
  document_desc_arab: Yup.string().required(
    "Documenttype name in arabic is required!"
  ),
});
class EditDocumenttypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateDocumenttypeItem(values);
  }

  render() {
    const { modalOpen, toggleModal } = this.props;

    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-right"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="documenttypes.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            document_desc_eng: this.props.endpoint.document_desc_eng,
            document_desc_arab: this.props.endpoint.document_desc_arab,
            renew_flag: this.props.endpoint.renew_flag,
            is_company: this.props.endpoint.is_company,
            hijriflag: this.props.endpoint.hijriflag,
            substitution: this.props.endpoint.substitution,
            days_to_expire: this.props.endpoint.days_to_expire,
          }}
          validationSchema={documenttypeSchema}
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
                        <IntlMessages id="documenttypes.document_desc_eng" />
                      </Label>
                      <Field
                        className="form-control"
                        name="document_desc_eng"
                      />
                      {errors.document_desc_eng &&
                        touched.document_desc_eng && (
                          <div className="invalid-feedback d-block">
                            {errors.document_desc_eng}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="documenttypes.document_desc_arab" />
                      </Label>
                      <Field
                        className="form-control"
                        name="document_desc_arab"
                      />
                      {errors.document_desc_arab &&
                        touched.document_desc_arab && (
                          <div className="invalid-feedback d-block">
                            {errors.document_desc_arab}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="renew_flag"
                        name="renew_flag"
                        value={values.renew_flag}
                        label={<IntlMessages id="documenttypes.renew_flag" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.renew_flag && touched.renew_flag ? (
                        <div className="invalid-feedback d-block">
                          {errors.renew_flag}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="is_company"
                        name="is_company"
                        value={values.is_company}
                        label={<IntlMessages id="documenttypes.is_company" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.is_company && touched.is_company ? (
                        <div className="invalid-feedback d-block">
                          {errors.is_company}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="hijriflag"
                        name="hijriflag"
                        value={values.hijriflag}
                        label={<IntlMessages id="documenttypes.hijriflag" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.hijriflag && touched.hijriflag ? (
                        <div className="invalid-feedback d-block">
                          {errors.hijriflag}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="error-l-150">
                      <FormikCustomCheckbox
                        id="substitution"
                        name="substitution"
                        value={values.substitution}
                        label={<IntlMessages id="documenttypes.substitution" />}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        modal={true}
                      />
                      {errors.substitution && touched.substitution ? (
                        <div className="invalid-feedback d-block">
                          {errors.substitution}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label>
                    <IntlMessages id="documenttypes.days_to_expire" />
                  </Label>
                  <Field
                    className="form-control"
                    type="number"
                    name="days_to_expire"
                    min="0"
                    step="1"
                    value={values.days_to_expire}
                  />
                  {errors.days_to_expire && touched.days_to_expire && (
                    <div className="invalid-feedback d-block">
                      {errors.days_to_expire}
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

const mapStateToProps = ({ documenttypeApp }) => {
  return {
    documenttypeApp,
  };
};
export default connect(mapStateToProps, {
  updateDocumenttypeItem,
})(EditDocumenttypeModal);
