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

import IntlMessages from "../../helpers/IntlMessages";
import { addEducationItem } from "../../redux/actions";
const educationSchema = Yup.object().shape({
  education_desc_eng: Yup.string().required(
    "Education Description in english is required!"
  ),
  education_desc_arab: Yup.string().required(
    "Education Description in arabic is required!"
  ),
});
class AddNewEducationModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addEducationItem(values);
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
          <IntlMessages id="education.add-new-title" />
        </ModalHeader>
        <Formik
          key="1"
          initialValues={{
            education_desc_eng: "",
            education_desc_arab: "",
          }}
          validationSchema={educationSchema}
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
                    <IntlMessages id="education.education_desc_eng" />
                  </Label>
                  <Field className="form-control" name="education_desc_eng" />
                  {errors.education_desc_eng && touched.education_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.education_desc_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="education.education_desc_arab" />
                  </Label>
                  <Field className="form-control" name="education_desc_arab" />
                  {errors.education_desc_arab &&
                    touched.education_desc_arab && (
                      <div className="invalid-feedback d-block">
                        {errors.education_desc_arab}
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
const mapStateToProps = ({ educationTrainingTypeApp }) => {
  return {
    educationTrainingTypeApp,
  };
};
export default connect(mapStateToProps, {
  addEducationItem,
})(AddNewEducationModal);
