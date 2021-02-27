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
import { addCountryItem } from "../../redux/actions";

class AddNewCountryModal extends Component {
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
    const { modalOpen, toggleModal } = this.props;
    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="country.add-new-title" />
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
              <AvInput required type="text" name="country_name_arab" />
              <AvFeedback>
                <IntlMessages id="country.country_name_arab" />
                <IntlMessages id="general.required" />
              </AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label className="">
                <IntlMessages id="country.nationality_arab" />
              </Label>
              <AvInput required type="text" name="nationality_arab" />
              <AvFeedback>
                <IntlMessages id="country.nationality_arab" />
                <IntlMessages id="general.required" />
              </AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label className="">
                <IntlMessages id="country.country_name_eng" />
              </Label>
              <AvInput required type="text" name="country_name_eng" />
              <AvFeedback>
                <IntlMessages id="country.country_name_eng" />
                <IntlMessages id="general.required" />
              </AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label className="">
                <IntlMessages id="country.nationality_eng" />
              </Label>
              <AvInput required type="text" name="nationality_eng" />
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
              <IntlMessages id="general.save" />
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
  addCountryItem,
})(AddNewCountryModal);
