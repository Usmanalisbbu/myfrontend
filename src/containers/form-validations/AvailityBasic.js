import React, { Component } from "react";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { Button, Label, Card, CardBody } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";

class AvailityBasic extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, errors, values) {
    if (errors.length === 0) {
      const newItem = {
        country_name_arab: values.country_name_arab,
        nationality_arab: values.nationality_arab,
        country_name_eng: values.country_name_eng,
        nationality_eng: values.nationality_eng,
      };
      this.props.addCountryItem(newItem);
      this.props.toggleModal();
    }
  }

  render() {
    return (
      <Card className="mb-5">
        <CardBody>
          <AvForm
            className="av-tooltip tooltip-label-right"
            onSubmit={this.handleSubmit}
          >
            <AvGroup>
              <Label className="mt-4">
                <IntlMessages id="country.country_name_arab" />
              </Label>
              <AvInput required type="text" name="country_name_arab" />
              <AvFeedback>Name is required!</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label className="mt-4">
                <IntlMessages id="country.nationality_arab" />
              </Label>
              <AvInput required type="text" name="nationality_arab" />
              <AvFeedback>Name is required!</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label className="mt-4">
                <IntlMessages id="country.country_name_eng" />
              </Label>
              <AvInput required type="text" name="country_name_eng" />
              <AvFeedback>Name is required!</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label className="mt-4">
                <IntlMessages id="country.nationality_eng" />
              </Label>
              <AvInput required type="text" name="nationality_eng" />
              <AvFeedback>Name is required!</AvFeedback>
            </AvGroup>
            <Button color="primary">Submit</Button>
          </AvForm>
        </CardBody>
      </Card>
    );
  }
}

export default AvailityBasic;
