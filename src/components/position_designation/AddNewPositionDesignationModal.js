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
import { addPositionDesignationItem } from "../../redux/actions";
const positiondesignationSchema = Yup.object().shape({
  designation_desc_eng: Yup.string().required(
    "position designation name in english is required!"
  ),
  designation_desc_arab: Yup.string().required(
    "position designation name in arabic is required!"
  ),
});
class AddNewPositionDesignationModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addPositionDesignationItem(values);
    this.props.toggleModal();
  }

  render() {
    const { modalOpen, toggleModal } = this.props;
    const { countryItems } = this.props.countryApp;
    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="position_designations.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            designation_desc_eng: "",
            designation_desc_arab: "",
          }}
          validationSchema={positiondesignationSchema}
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
                    <IntlMessages id="position_designations.designation_desc_eng" />
                  </Label>
                  <Field className="form-control" name="designation_desc_eng" />
                  {errors.designation_desc_eng &&
                    touched.designation_desc_eng && (
                      <div className="invalid-feedback d-block">
                        {errors.designation_desc_eng}
                      </div>
                    )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="position_designations.designation_desc_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    name="designation_desc_arab"
                  />
                  {errors.designation_desc_arab &&
                    touched.designation_desc_arab && (
                      <div className="invalid-feedback d-block">
                        {errors.designation_desc_arab}
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
const mapStateToProps = ({ countryApp, cityApp, positiondesignationApp }) => {
  return {
    countryApp,
    cityApp,
    positiondesignationApp,
  };
};
export default connect(mapStateToProps, {
  addPositionDesignationItem,
})(AddNewPositionDesignationModal);
