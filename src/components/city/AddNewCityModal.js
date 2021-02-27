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
import { addCityItem } from "../../redux/actions";
const citySchema = Yup.object().shape({
  city_name_eng: Yup.string().required("City name in english is required!"),
  city_name_arab: Yup.string().required("City name in arabic is required!"),
  // is_capital: Yup.bool().oneOf([true], "Must agree to something"),

  country: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable()
    .required("State is required!"),
});
class AddNewCityModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleSubmit(values) {
    this.props.addCityItem(values);
    this.props.toggleModal();
  }

  validate(values) {
    let errors = {};

    if (values.is_capital) {
      const data = this.props.cityApp.cityItems.filter((x) => {
        if (x.country_id === values.country.value && x.is_capital === 1) {
          return x;
        }
      });
      if (data.length !== 0) {
        errors.is_capital = "This Country have alerdy Captail City";
      }
    }
    return errors;
  }
  render() {
    const { modalOpen, toggleModal } = this.props;
    const { countryItems, loading, error } = this.props.countryApp;
    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="city.add-new-title" />
        </ModalHeader>
        <Formik
          key="1"
          initialValues={{
            country: null,
            city_name_eng: "",
            city_name_arab: "",
            region: "",
            ticket_value: 0.0,
            is_capital: false,
          }}
          validationSchema={citySchema}
          validate={this.validate}
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
                    <IntlMessages id="country.countries" />
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
                          name="country"
                          id="country"
                          value={values.country}
                          options={countryItems.map((value) => ({
                            value: value.id,
                            label:
                              value.country_name_eng +
                              "/" +
                              value.country_name_arab,
                          }))}
                          onChange={setFieldValue}
                          onBlur={setFieldTouched}
                        />
                      ) : (
                        <div key="2" className="loading" />
                      ),
                    ]
                  )}
                  {errors.country && touched.country ? (
                    <div className="invalid-feedback d-block">
                      {errors.country}
                    </div>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="city.city_name_eng" />
                  </Label>
                  <Field className="form-control" name="city_name_eng" />
                  {errors.city_name_eng && touched.city_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.city_name_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="city.city_name_arab" />
                  </Label>
                  <Field className="form-control" name="city_name_arab" />
                  {errors.city_name_arab && touched.city_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.city_name_arab}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="city.region" />
                  </Label>
                  <Field className="form-control" name="region" />
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="city.ticket_value" />
                  </Label>
                  <Field
                    className="form-control"
                    type="number"
                    name="ticket_value"
                  />
                </FormGroup>
                <FormGroup className="error-l-150">
                  <Label className="d-block">
                    <IntlMessages id="city.is_capital" />
                  </Label>
                  <FormikCustomCheckbox
                    id="is_capital"
                    name="is_capital"
                    value={values.is_capital}
                    label={<IntlMessages id="city.is_capital" />}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    modal={true}
                  />
                  {errors.is_capital && touched.is_capital ? (
                    <div className="invalid-feedback d-block">
                      {errors.is_capital}
                    </div>
                  ) : null}
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
const mapStateToProps = ({ countryApp, cityApp }) => {
  return {
    countryApp,
    cityApp,
  };
};
export default connect(mapStateToProps, {
  addCityItem,
})(AddNewCityModal);
