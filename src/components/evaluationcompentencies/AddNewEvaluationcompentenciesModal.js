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
import { addEvaluationcompentenciesItem } from "../../redux/actions";
const evaluationcompentenciesSchema = Yup.object().shape({
  evaluation_desc_eng: Yup.string().required(
    "Evaluation Description  in english is required!"
  ),
  evaluation_desc_arab: Yup.string().required(
    "Evaluation Description  in arabic is required!"
  ),
});
class AddNewEvaluationcompentenciesModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addEvaluationcompentenciesItem(values);
    this.props.toggleModal();
  }

  render() {
    const { modalOpen, toggleModal } = this.props;
    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        // backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="evaluationcompentencies.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            evaluation_desc_eng: "",
            evaluation_desc_arab: "",
          }}
          validationSchema={evaluationcompentenciesSchema}
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
                    <IntlMessages id="evaluationcompentencies.evaluation_desc_eng" />
                  </Label>
                  <Field className="form-control" name="evaluation_desc_eng" />
                  {errors.evaluation_desc_eng &&
                    touched.evaluation_desc_eng && (
                      <div className="invalid-feedback d-block">
                        {errors.evaluation_desc_eng}
                      </div>
                    )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="evaluationcompentencies.evaluation_desc_arab" />
                  </Label>
                  <Field className="form-control" name="evaluation_desc_arab" />
                  {errors.evaluation_desc_arab &&
                    touched.evaluation_desc_arab && (
                      <div className="invalid-feedback d-block">
                        {errors.evaluation_desc_arab}
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
const mapStateToProps = ({ EvaluationcompentenciesApp }) => {
  return {
    EvaluationcompentenciesApp,
  };
};
export default connect(mapStateToProps, {
  addEvaluationcompentenciesItem,
})(AddNewEvaluationcompentenciesModal);
