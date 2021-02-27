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
import { updateCurrenciesTypeItem } from "../../redux/actions";
const currencies_typeschema = Yup.object().shape({
  currency_name_eng: Yup.string().required(
    "CurrenciesType name in english is required!"
  ),
  currency_name_arab: Yup.string().required(
    "CurrenciesType name in arabic is required!"
  ),
});
class EditCurrenciesTypeModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateCurrenciesTypeItem(values);
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
          <IntlMessages id="currencies_types.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            currency_name_eng: this.props.endpoint.currency_name_eng,
            currency_name_arab: this.props.endpoint.currency_name_arab,
            exchange_rate: this.props.endpoint.exchange_rate,
          }}
          validationSchema={currencies_typeschema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="currencies_types.currency_name_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.currency_name_eng}
                    name="currency_name_eng"
                  />
                  {errors.currency_name_eng && touched.currency_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.currency_name_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="currencies_types.currency_name_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.currency_name_arab}
                    name="currency_name_arab"
                  />
                  {errors.currency_name_arab && touched.currency_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.currency_name_arab}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="currencies_types.exchange_rate" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.exchange_rate}
                    name="exchange_rate"
                    type="number"
                    min="0"
                    step="1"
                  />
                  {errors.exchange_rate && touched.exchange_rate && (
                    <div className="invalid-feedback d-block">
                      {errors.exchange_rate}
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

const mapStateToProps = ({ countryApp, cityApp, currenciestypeApp }) => {
  return {
    countryApp,
    cityApp,
    currenciestypeApp,
  };
};
export default connect(mapStateToProps, {
  updateCurrenciesTypeItem,
})(EditCurrenciesTypeModal);
