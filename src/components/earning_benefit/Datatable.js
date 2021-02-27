import React, { Fragment } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import ActionButton from "./ActionButtons";
import IntlMessages from "../../helpers/IntlMessages";
import { Card, CustomInput } from "reactstrap";

import { Colxx } from "../common/CustomBootstrap";

const Datatable = ({ item }) => {
  const config = {
    page_size: 10,
    show_filter: true,
    show_pagination: true,
    pagination: "advance",
  };
  const columns = [
    {
      key: "benefit_desc_arab",
      text: (
        <IntlMessages id="earnings_benefits.earnings_benefits_desc_arab"></IntlMessages>
      ),
      sortable: true,
    },

    {
      key: "benefit_desc_eng",
      text: (
        <IntlMessages id="earnings_benefits.earnings_benefits_desc_eng"></IntlMessages>
      ),
      sortable: true,
    },
    {
      key: "final_set_flag",
      text: <IntlMessages id="earnings_benefits.final_set_flag"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.final_set_flag}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "money_value_flag",
      text: (
        <IntlMessages id="earnings_benefits.money_value_flag"></IntlMessages>
      ),
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.money_value_flag}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "holiday_flag",
      text: <IntlMessages id="earnings_benefits.holiday_flag"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.holiday_flag}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "printable",
      text: <IntlMessages id="earnings_benefits.printable"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.printable}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "parentbenefit",
      text: <IntlMessages id="earnings_benefits.parentbenefit"></IntlMessages>,
    },
    {
      key: "modify_flag",
      text: <IntlMessages id="earnings_benefits.modify_flag"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.modify_flag}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "gl_id",
      text: <IntlMessages id="earnings_benefits.gl_id"></IntlMessages>,
    },
    {
      key: "credit_gl_id",
      text: <IntlMessages id="earnings_benefits.credit_gl_id"></IntlMessages>,
    },
    {
      key: "show_in_report",
      text: <IntlMessages id="earnings_benefits.show_in_report"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.show_in_report}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "mulfactor",
      text: <IntlMessages id="earnings_benefits.mulfactor"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.mulfactor}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "parcent_frsalary",
      text: (
        <IntlMessages id="earnings_benefits.parcent_frsalary"></IntlMessages>
      ),
    },
    {
      key: "mb",
      text: <IntlMessages id="earnings_benefits.mb"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.mb}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "action",
      text: "Action",
      cell: (record, index) => {
        return (
          <Fragment>
            <ActionButton id={record.id} endpoint={record} />
          </Fragment>
        );
      },
    },
  ];

  return (
    <Colxx xxs="12">
      <Card className="card d-flex mb-3">
        <ReactDatatable config={config} records={item} columns={columns} />
      </Card>
    </Colxx>
  );
};

export default React.memo(Datatable);
