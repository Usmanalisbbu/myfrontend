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
import { updateReligionItem } from "../../redux/actions";
const religionSchema = Yup.object().shape({
  religion_name_eng: Yup.string().required(
    "Religion name in english is required!"
  ),
  religion_name_arab: Yup.string().required(
    "Religion name in arabic is required!"
  ),
});
class EditReligionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateReligionItem(values);
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
          <IntlMessages id="religion.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            religion_name_eng: this.props.endpoint.religion_name_eng,
            religion_name_arab: this.props.endpoint.religion_name_arab,
          }}
          validationSchema={religionSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="religion.religion_name_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.religion_name_eng}
                    name="religion_name_eng"
                  />
                  {errors.religion_name_eng && touched.religion_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.religion_name_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="religion.religion_name_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.religion_name_arab}
                    name="religion_name_arab"
                  />
                  {errors.religion_name_arab && touched.religion_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.religion_name_arab}
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

const mapStateToProps = ({ countryApp, cityApp, religionApp }) => {
  return {
    countryApp,
    cityApp,
    religionApp,
  };
};
export default connect(mapStateToProps, {
  updateReligionItem,
})(EditReligionModal);
