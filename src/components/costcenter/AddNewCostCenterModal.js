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
import { addCostCenterItem } from "../../redux/actions";
const costcenterSchema = Yup.object().shape({
  costcenter_name_eng: Yup.string().required(
    "CostCenter name in english is required!"
  ),
  costcenter_name_arab: Yup.string().required(
    "CostCenter name in arabic is required!"
  ),
  costcenter_status: Yup.string().required("CostCenter Status is required!"),
});
class AddNewCostCenterModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
    this.props.addCostCenterItem(values);
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
          <IntlMessages id="costcenter.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            costcenter_name_eng: "",
            costcenter_name_arab: "",
            costcenter_status: "",
            store_cc: "",
          }}
          validationSchema={costcenterSchema}
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
                    <IntlMessages id="costcenter.costcenter_name_eng" />
                  </Label>
                  <Field className="form-control" name="costcenter_name_eng" />
                  {errors.costcenter_name_eng &&
                    touched.costcenter_name_eng && (
                      <div className="invalid-feedback d-block">
                        {errors.costcenter_name_eng}
                      </div>
                    )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="costcenter.costcenter_name_arab" />
                  </Label>
                  <Field className="form-control" name="costcenter_name_arab" />
                  {errors.costcenter_name_arab &&
                    touched.costcenter_name_arab && (
                      <div className="invalid-feedback d-block">
                        {errors.costcenter_name_arab}
                      </div>
                    )}
                </FormGroup>

                <FormGroup className="error-l-150">
                  <FormikCustomCheckbox
                    id="costcenter_status"
                    name="costcenter_status"
                    value={values.costcenter_status}
                    label={<IntlMessages id="costcenter.costcenter_status" />}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    modal={true}
                  />
                  {errors.costcenter_status && touched.costcenter_status ? (
                    <div className="invalid-feedback d-block">
                      {errors.costcenter_status}
                    </div>
                  ) : null}
                </FormGroup>
                {/* <FormGroup>
                  <Label>
                    <IntlMessages id="costcenter.store_cc" />
                  </Label>
                  <Field className="form-control" name="store_cc" />
                  {errors.store_cc && touched.store_cc && (
                    <div className="invalid-feedback d-block">
                      {errors.store_cc}
                    </div>
                  )}
                </FormGroup> */}
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
const mapStateToProps = ({ costcenterApp }) => {
  return {
    costcenterApp,
  };
};
export default connect(mapStateToProps, {
  addCostCenterItem,
})(AddNewCostCenterModal);
