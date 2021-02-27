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
import { updateCityItem } from "../../redux/actions";
const citySchema = Yup.object().shape({
  city_name_eng: Yup.string().required("City name in english is required!"),
  city_name_arab: Yup.string().required("City name in arabic is required!"),

  country: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable()
    .required("Country is required!"),
});
class EditCityModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateCityItem(values);
  }
  validate(values) {
    let errors = {};

    if (values.is_capital) {
      // if (values.country.value !== this.props.endpoint.country_id) {
      const data = this.props.cityApp.cityItems.filter((x) => {
        if (x.country_id === values.country.value && x.is_capital === 1) {
          return x;
        }
      });
      if (data.length !== 0) {
        errors.is_capital = "This Country have alerdy Captail City";
      }
      //}
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
          <IntlMessages id="city.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            country: {
              value: this.props.endpoint.country_id,
              label:
                this.props.endpoint.country_name_eng +
                "/" +
                this.props.endpoint.country_name_arab,
            },
            city_name_eng: this.props.endpoint.city_name_eng,
            city_name_arab: this.props.endpoint.city_name_arab,
            region: this.props.endpoint.region,
            ticket_value: this.props.endpoint.ticket_value,
            is_capital: this.props.endpoint.is_capital,
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
                          key="edit"
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
                  <Field
                    className="form-control"
                    value={values.city_name_eng}
                    name="city_name_eng"
                  />
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
                  <Field
                    className="form-control"
                    value={values.city_name_arab}
                    name="city_name_arab"
                  />
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
                    value={values.ticket_value}
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

const mapStateToProps = ({ countryApp, cityApp }) => {
  return {
    countryApp,
    cityApp,
  };
};
export default connect(mapStateToProps, {
  updateCityItem,
})(EditCityModal);
