import React, { useState, Fragment } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import DeleteConfirmModal from "./DeleteConfirmModal";
import IntlMessages from "../../helpers/IntlMessages";
import EditBeneficiary_typeModal from "./EditBeneficiary_typeModal";
import { canEdit, canDelete } from "../../permission/permission";

const ActionButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  const [editModalOpen, seteditModaldalOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const deleteToggleModal = () => setmodalOpen(!modalOpen);
  const editToggleModal = () => seteditModaldalOpen(!editModalOpen);
  const actions = (editToggleModal) => {
    if (canEdit("beneficiary_types")) {
      return (
        <DropdownItem>
          <a className="" onClick={editToggleModal}>
            <i className="iconsminds-edit-map p-2"></i>
            <IntlMessages id="general.edit" />
          </a>
        </DropdownItem>
      );
    }
  };
  const action = (deleteToggleModal) => {
    if (canDelete("beneficiary_types")) {
      return (
        <DropdownItem>
          <a className="text-danger " onClick={deleteToggleModal}>
            <i className="text-danger simple-icon-trash p-2"></i>
            <IntlMessages id="general.delete" />
          </a>
        </DropdownItem>
      );
    }
  };
  return (
    <Fragment>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          caret
          color="primary"
          className="dropdown-toggle-split btn-sm"
        >
          <IntlMessages id="general.action" />
        </DropdownToggle>
        <DropdownMenu>
          {actions(editToggleModal)}
          {action(deleteToggleModal)}
        </DropdownMenu>
      </ButtonDropdown>
      <DeleteConfirmModal
        toggleModal={deleteToggleModal}
        modalOpen={modalOpen}
        endpoint={props.endpoint}
        id={props.id}
      />
      <EditBeneficiary_typeModal
        toggleModal={editToggleModal}
        modalOpen={editModalOpen}
        endpoint={props.endpoint}
        id={props.id}
      />
    </Fragment>
  );
};
export default ActionButton;
