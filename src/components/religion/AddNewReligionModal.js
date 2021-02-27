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
import { addReligionItem } from "../../redux/actions";
const religionSchema = Yup.object().shape({
  religion_name_eng: Yup.string().required(
    "Religion name in english is required!"
  ),
  religion_name_arab: Yup.string().required(
    "Religion name in arabic is required!"
  ),
});
class AddNewReligionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addReligionItem(values);
    this.props.toggleModal();
  }

  render() {
    const { modalOpen, toggleModal } = this.props;
    const { companyItems, loading, error } = this.props.companyApp;

    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="religion.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            religion_name_eng: "",
            religion_name_arab: "",
          }}
          validationSchema={religionSchema}
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
                    <IntlMessages id="company.countries" />
                  </Label>
                  {error ? (
                    <div key="0" style={{ color: "red" }}>
                      ERROR: {error}
                    </div>
                  ) : (
                    [
                      loading ? (
                        <FormikReactSelect
                          key="2"
                          name="company"
                          id="company"
                          value={values.company}
                          options={companyItems.map((value) => ({
                            value: value.id,
                            label:
                              value.company_name_eng +
                              "/" +
                              value.company_name_arab,
                          }))}
                          onChange={setFieldValue}
                          onBlur={setFieldTouched}
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                  {errors.company && touched.company ? (
                    <div className="invalid-feedback d-block">
                      {errors.company}
                    </div>
                  ) : null}
                </FormGroup>

                

                <FormGroup>
                  <Label>
                    <IntlMessages id="religion.religion_name_eng" />
                  </Label>
                  <Field className="form-control" name="religion_name_eng" />
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
                  <Field className="form-control" name="religion_name_arab" />
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
const mapStateToProps = ({companyApp, religionApp }) => {
  return {
    companyApp,
    religionApp,
  };
};
export default connect(mapStateToProps, {
  addReligionItem,
})(AddNewReligionModal);
