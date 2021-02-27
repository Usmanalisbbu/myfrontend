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
import { updatePositionDesignationItem } from "../../redux/actions";
const positiondesignationSchema = Yup.object().shape({
  designation_desc_eng: Yup.string().required(
    "Position Designation name in english is required!"
  ),
  designation_desc_arab: Yup.string().required(
    "Position Designation name in arabic is required!"
  ),
});
class EditPositionDesignationModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updatePositionDesignationItem(values);
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
          <IntlMessages id="position_designations.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            designation_desc_eng: this.props.endpoint.designation_desc_eng,
            designation_desc_arab: this.props.endpoint.designation_desc_arab,
          }}
          validationSchema={positiondesignationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="position_designations.designation_desc_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.designation_desc_eng}
                    name="designation_desc_eng"
                  />
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
                    value={values.designation_desc_arab}
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

const mapStateToProps = ({ positiondesignationApp }) => {
  return {
    positiondesignationApp,
  };
};
export default connect(mapStateToProps, {
  updatePositionDesignationItem,
})(EditPositionDesignationModal);
