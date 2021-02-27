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
import { addModificationTypeItem } from "../../redux/actions";
const modificationtypeSchema = Yup.object().shape({
  modification_desc_eng: Yup.string().required(
    "Modification Type Description in english is required!"
  ),
  modification_desc_arab: Yup.string().required(
    "Modification Type Descfiption in arabic is required!"
  ),
});
class AddNewModificationTypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addModificationTypeItem(values);
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
          <IntlMessages id="modificationtypes.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            modification_desc_eng: "",
            modification_desc_arab: "",
          }}
          validationSchema={modificationtypeSchema}
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
                    <IntlMessages id="modificationtypes.modification_desc_eng" />
                  </Label>
                  <Field className="form-control" name="modification_desc_eng" />
                  {errors.modification_desc_eng && touched.modification_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.modification_desc_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="modificationtypes.modification_desc_arab" />
                  </Label>
                  <Field className="form-control" name="modification_desc_arab" />
                  {errors.modification_desc_arab && touched.modification_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.modification_desc_arab}
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
const mapStateToProps = ({ modificationtypeApp }) => {
  return {

    modificationtypeApp,
  };
};
export default connect(mapStateToProps, {
  addModificationTypeItem,
})(AddNewModificationTypeModal);
