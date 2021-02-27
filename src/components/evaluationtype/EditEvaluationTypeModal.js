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
import { updateEvaluationTypeItem } from "../../redux/actions";
const evaluationtypeSchema = Yup.object().shape({
  evaluation_type_desc_eng: Yup.string().required(
    "EvaluationType name in english is required!"
  ),
  evaluation_type_desc_arab: Yup.string().required(
    "EvaluationType name in arabic is required!"
  ),
});
class EditEvaluationTypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateEvaluationTypeItem(values);
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
          <IntlMessages id="evaluationtype.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            evaluation_type_desc_eng: this.props.endpoint
              .evaluation_type_desc_eng,
            evaluation_type_desc_arab: this.props.endpoint
              .evaluation_type_desc_arab,
          }}
          validationSchema={evaluationtypeSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="evaluationtype.evaluation_type_desc_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.evaluation_type_desc_eng}
                    name="evaluation_type_desc_eng"
                  />
                  {errors.evaluation_type_desc_eng &&
                    touched.evaluation_type_desc_eng && (
                      <div className="invalid-feedback d-block">
                        {errors.evaluation_type_desc_eng}
                      </div>
                    )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="evaluationtype.evaluation_type_desc_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.evaluation_type_desc_arab}
                    name="evaluation_type_desc_arab"
                  />
                  {errors.evaluation_type_desc_arab &&
                    touched.evaluation_type_desc_arab && (
                      <div className="invalid-feedback d-block">
                        {errors.evaluation_type_desc_arab}
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

const mapStateToProps = ({ evaluationtypeApp }) => {
  return {
    evaluationtypeApp,
  };
};
export default connect(mapStateToProps, {
  updateEvaluationTypeItem,
})(EditEvaluationTypeModal);
