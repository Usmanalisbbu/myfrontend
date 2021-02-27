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
import { updateBeneficiary_typeItem } from "../../redux/actions";
const beneficiary_typeSchema = Yup.object().shape({
  beneficiary_desc_eng: Yup.string().required(
    "Beneficiary_type name in english is required!"
  ),
  beneficiary_desc_arab: Yup.string().required(
    "Beneficiary_type name in arabic is required!"
  ),
});
class EditBeneficiary_typeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateBeneficiary_typeItem(values);
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
          <IntlMessages id="beneficiarytypes.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            beneficiary_desc_eng: this.props.endpoint.beneficiary_desc_eng,
            beneficiary_desc_arab: this.props.endpoint.beneficiary_desc_arab,
          }}
          validationSchema={beneficiary_typeSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="beneficiarytypes.beneficiary_desc_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.beneficiary_desc_eng}
                    name="beneficiary_desc_eng"
                  />
                  {errors.beneficiary_desc_eng &&
                    touched.beneficiary_desc_eng && (
                      <div className="invalid-feedback d-block">
                        {errors.beneficiary_desc_eng}
                      </div>
                    )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="beneficiarytypes.beneficiary_desc_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.beneficiary_desc_arab}
                    name="beneficiary_desc_arab"
                  />
                  {errors.beneficiary_desc_arab &&
                    touched.beneficiary_desc_arab && (
                      <div className="invalid-feedback d-block">
                        {errors.beneficiary_desc_arab}
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

const mapStateToProps = ({ beneficiary_typeApp }) => {
  return {
    beneficiary_typeApp,
  };
};
export default connect(mapStateToProps, {
  updateBeneficiary_typeItem,
})(EditBeneficiary_typeModal);
