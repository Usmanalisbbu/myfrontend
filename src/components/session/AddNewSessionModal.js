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
import { addSessionItem } from "../../redux/actions";
const sessionSchema = Yup.object().shape({
  sched_name_eng: Yup.string().required(
    "Schedule Name in english is required!"
  ),
  sched_name_arab: Yup.string().required(
    "Schedule Name in arabic is required!"
  ),
  start_time: Yup.string().required("Start Time is required!"),
  end_time: Yup.string().required("End Time is required!"),
  early_minutes: Yup.string().required("Early Minutes is required!"),
  late_minutes: Yup.string().required("Late Minutes is required!"),
  check_in: Yup.string().required("ChecK In is required!"),
  check_out: Yup.string().required("ChecK out is required!"),
  overtime: Yup.string().required("Over Time is required!"),
  flex_time: Yup.string().required("Flex Time is required!"),
  hpd: Yup.string().required("HPD is required!"),
  day_off: Yup.string().required("Day Off is required!"),
  ignore_aw: Yup.string().required("ignore_aw is required!"),
  absent_factor: Yup.string().required("Absent Factor is required!"),
  in_begin: Yup.string().required("In Begin is required!"),
  in_end: Yup.string().required("In End is required!"),
  out_begin: Yup.string().required("Out Begin is required!"),
  out_end: Yup.string().required("Out End is required!"),
  extra_mins_overtime: Yup.string().required(
    "Extra Minutes Over Time required!"
  ),
  no_log_penality: Yup.string().required("No Log Penality required!"),
  no_late: Yup.string().required("No Late is required!"),
  no_absent: Yup.string().required("No Absent is required!"),
  no_ot: Yup.string().required("No OT is required!"),
  monthly_grace_period: Yup.string().required(
    "Monthly Grace Period is required!"
  ),
});
class AddNewSessionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addSessionItem(values);
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
          <IntlMessages id="session.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            sched_name_eng: "",
            sched_name_arab: "",
            start_time: "",
            end_time: "",
            late_minutes: "",
            early_minutes: "",
            check_in: "",
            check_out: "",
            overtime: "",
            flex_time: "",
            hpd: "",
            day_off: "",
            ignore_aw: "",
            absent_factor: "",
            in_begin: "",
            in_end: "",
            out_begin: "",
            out_end: "",
            extra_mins_overtime: "",
            no_log_penality: "",
            monthly_grace_period: "",
            no_late: "",
            no_absent: "",
            no_ot: "",
          }}
          validationSchema={sessionSchema}
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
                    <IntlMessages id="session.sched_name_eng" />
                  </Label>
                  <Field className="form-control" name="sched_name_eng" />
                  {errors.sched_name_eng && touched.sched_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.sched_name_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="session.sched_name_arab" />
                  </Label>
                  <Field className="form-control" name="sched_name_arab" />
                  {errors.sched_name_arab && touched.sched_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.sched_name_arab}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.start_time" />
                  </Label>
                  <Field className="form-control" name="start_time" />
                  {errors.start_time && touched.start_time && (
                    <div className="invalid-feedback d-block">
                      {errors.start_time}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.end_time" />
                  </Label>
                  <Field className="form-control" name="end_time" />
                  {errors.end_time && touched.end_time && (
                    <div className="invalid-feedback d-block">
                      {errors.end_time}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.late_minutes" />
                  </Label>
                  <Field className="form-control" name="late_minutes" />
                  {errors.late_minutes && touched.late_minutes && (
                    <div className="invalid-feedback d-block">
                      {errors.late_minutes}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.early_minutes" />
                  </Label>
                  <Field className="form-control" name="early_minutes" />
                  {errors.early_minutes && touched.early_minutes && (
                    <div className="invalid-feedback d-block">
                      {errors.early_minutes}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.check_in" />
                  </Label>
                  <Field className="form-control" name="check_in" />
                  {errors.check_in && touched.check_in && (
                    <div className="invalid-feedback d-block">
                      {errors.check_in}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.check_out" />
                  </Label>
                  <Field className="form-control" name="check_out" />
                  {errors.check_out && touched.check_out && (
                    <div className="invalid-feedback d-block">
                      {errors.check_out}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.overtime" />
                  </Label>
                  <Field className="form-control" name="overtime" />
                  {errors.overtime && touched.overtime && (
                    <div className="invalid-feedback d-block">
                      {errors.overtime}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.flex_time" />
                  </Label>
                  <Field className="form-control" name="flex_time" />
                  {errors.flex_time && touched.flex_time && (
                    <div className="invalid-feedback d-block">
                      {errors.flex_time}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.hpd" />
                  </Label>
                  <Field className="form-control" name="hpd" />
                  {errors.hpd && touched.hpd && (
                    <div className="invalid-feedback d-block">{errors.hpd}</div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.day_off" />
                  </Label>
                  <Field className="form-control" name="day_off" />
                  {errors.day_off && touched.day_off && (
                    <div className="invalid-feedback d-block">
                      {errors.day_off}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.ignore_aw" />
                  </Label>
                  <Field className="form-control" name="ignore_aw" />
                  {errors.ignore_aw && touched.ignore_aw && (
                    <div className="invalid-feedback d-block">
                      {errors.ignore_aw}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.absent_factor" />
                  </Label>
                  <Field className="form-control" name="absent_factor" />
                  {errors.absent_factor && touched.absent_factor && (
                    <div className="invalid-feedback d-block">
                      {errors.absent_factor}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.in_begin" />
                  </Label>
                  <Field className="form-control" name="in_begin" />
                  {errors.in_begin && touched.in_begin && (
                    <div className="invalid-feedback d-block">
                      {errors.in_begin}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.in_end" />
                  </Label>
                  <Field className="form-control" name="in_end" />
                  {errors.in_end && touched.in_end && (
                    <div className="invalid-feedback d-block">
                      {errors.in_end}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.out_begin" />
                  </Label>
                  <Field className="form-control" name="out_begin" />
                  {errors.out_begin && touched.out_begin && (
                    <div className="invalid-feedback d-block">
                      {errors.out_begin}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.out_end" />
                  </Label>
                  <Field className="form-control" name="out_end" />
                  {errors.out_end && touched.out_end && (
                    <div className="invalid-feedback d-block">
                      {errors.out_end}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.extra_mins_overtime" />
                  </Label>
                  <Field className="form-control" name="extra_mins_overtime" />
                  {errors.extra_mins_overtime &&
                    touched.extra_mins_overtime && (
                      <div className="invalid-feedback d-block">
                        {errors.extra_mins_overtime}
                      </div>
                    )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.no_log_penality" />
                  </Label>
                  <Field className="form-control" name="no_log_penality" />
                  {errors.no_log_penality && touched.no_log_penality && (
                    <div className="invalid-feedback d-block">
                      {errors.no_log_penality}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.monthly_grace_period" />
                  </Label>
                  <Field className="form-control" name="monthly_grace_period" />
                  {errors.monthly_grace_period &&
                    touched.monthly_grace_period && (
                      <div className="invalid-feedback d-block">
                        {errors.monthly_grace_period}
                      </div>
                    )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.no_late" />
                  </Label>
                  <Field className="form-control" name="no_late" />
                  {errors.no_late && touched.no_late && (
                    <div className="invalid-feedback d-block">
                      {errors.no_late}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.no_absent" />
                  </Label>
                  <Field className="form-control" name="no_absent" />
                  {errors.no_absent && touched.no_absent && (
                    <div className="invalid-feedback d-block">
                      {errors.no_absent}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.no_ot" />
                  </Label>
                  <Field className="form-control" name="no_ot" />
                  {errors.no_ot && touched.no_ot && (
                    <div className="invalid-feedback d-block">
                      {errors.no_ot}
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
const mapStateToProps = ({ sessionApp }) => {
  return {
    sessionApp,
  };
};
export default connect(mapStateToProps, {
  addSessionItem,
})(AddNewSessionModal);
