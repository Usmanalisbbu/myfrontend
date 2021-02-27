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
import { addBeneficiary_typeItem } from "../../redux/actions";
const beneficiary_typeSchema = Yup.object().shape({
  beneficiary_desc_eng: Yup.string().required(
    "Beneficiary_type name in english is required!"
  ),
  beneficiary_desc_arab: Yup.string().required(
    "Beneficiary_type name in arabic is required!"
  ),
});
class AddNewBeneficiary_typeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addBeneficiary_typeItem(values);
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
          <IntlMessages id="beneficiarytypes.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            beneficiary_desc_eng: "",
            beneficiary_desc_arab: "",
          }}
          validationSchema={beneficiary_typeSchema}
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
                    <IntlMessages id="beneficiarytypes.beneficiary_desc_eng" />
                  </Label>
                  <Field className="form-control" name="beneficiary_desc_eng" />
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
const mapStateToProps = ({
  countryApp,
  cityApp,
  religionApp,
  beneficiary_typeApp,
}) => {
  return {
    countryApp,
    cityApp,
    religionApp,
    beneficiary_typeApp,
  };
};
export default connect(mapStateToProps, {
  addBeneficiary_typeItem,
})(AddNewBeneficiary_typeModal);
