import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from "availity-reactstrap-validation";
import { updateCountryItem } from "../../redux/actions";

class EditCountryModal extends Component {
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
        id: this.props.endpoint.id,
      };
      this.props.updateCountryItem(newItem);
    }
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
          <IntlMessages id="country.update-title" />
        </ModalHeader>
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={this.handleSubmit}
        >
          <ModalBody>
            <AvGroup>
              <Label className="">
                <IntlMessages id="country.country_name_arab" />
              </Label>
              <AvInput
                required
                type="text"
                value={this.props.endpoint.country_name_arab}
                name="country_name_arab"
              />
              <AvFeedback>
                <IntlMessages id="country.country_name_arab" />
                <IntlMessages id="general.required" />
              </AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label className="">
                <IntlMessages id="country.nationality_arab" />
              </Label>
              <AvInput
                required
                type="text"
                value={this.props.endpoint.nationality_arab}
                name="nationality_arab"
              />
              <AvFeedback>
                <IntlMessages id="country.nationality_arab" />
                <IntlMessages id="general.required" />
              </AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label className="">
                <IntlMessages id="country.country_name_eng" />
              </Label>
              <AvInput
                required
                type="text"
                value={this.props.endpoint.country_name_eng}
                name="country_name_eng"
              />
              <AvFeedback>
                <IntlMessages id="country.country_name_eng" />
                <IntlMessages id="general.required" />
              </AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label className="">
                <IntlMessages id="country.nationality_eng" />
              </Label>
              <AvInput
                required
                type="text"
                name="nationality_eng"
                value={this.props.endpoint.nationality_eng}
              />
              <AvFeedback>
                <IntlMessages id="country.nationality_eng" />
                <IntlMessages id="general.required" />
              </AvFeedback>
            </AvGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal}>
              <IntlMessages id="general.cancel" />
            </Button>
            <Button color="primary">
              <IntlMessages id="general.update" />
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

const mapStateToProps = ({ countryApp }) => {
  return {
    countryApp,
  };
};
export default connect(mapStateToProps, {
  updateCountryItem,
})(EditCountryModal);
