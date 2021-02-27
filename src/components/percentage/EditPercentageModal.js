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
import { updatePercentageItem } from "../../redux/actions";
const percentageSchema = Yup.object().shape({
  percent_desc_eng: Yup.string().required(
    "Percentage name in english is required!"
  ),
  percent_desc_arab: Yup.string().required(
    "Percentage name in arabic is required!"
  ),
  // percent_fr: Yup.string().required(
  //   "Percentage From is required!"
  // ),
  // percent_to: Yup.string().required(
  //   "Percentage To is required!"
  // ),
  percent_value: Yup.string().required("Percentage Value is required!"),
});
class EditPercentageModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updatePercentageItem(values);
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
          <IntlMessages id="percentage.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            percent_desc_eng: this.props.endpoint.percent_desc_eng,
            percent_desc_arab: this.props.endpoint.percent_desc_arab,
            percent_fr: this.props.endpoint.percent_fr,
            percent_to: this.props.endpoint.percent_to,
            percent_value: this.props.endpoint.percent_value,
          }}
          validationSchema={percentageSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_desc_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.percent_desc_eng}
                    name="percent_desc_eng"
                  />
                  {errors.percent_desc_eng && touched.percent_desc_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_desc_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_desc_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.percent_desc_arab}
                    name="percent_desc_arab"
                  />
                  {errors.percent_desc_arab && touched.percent_desc_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_desc_arab}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_fr" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.percent_fr}
                    name="percent_fr"
                    type="number"
                    min="0"
                    step="1"
                  />
                  {errors.percent_fr && touched.percent_fr && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_fr}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_to" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.percent_to}
                    name="percent_to"
                    type="number"
                    min="0"
                    step="1"
                  />
                  {errors.percent_to && touched.percent_to && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_to}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="percentage.percent_value" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.percent_value}
                    name="percent_value"
                    type="number"
                    min="0"
                    step="1"
                  />
                  {errors.percent_value && touched.percent_value && (
                    <div className="invalid-feedback d-block">
                      {errors.percent_value}
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

const mapStateToProps = ({ percentageApp }) => {
  return {
    percentageApp,
  };
};
export default connect(mapStateToProps, {
  updatePercentageItem,
})(EditPercentageModal);
