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
      key: "deduction_desc_arab",
      text: <IntlMessages id="deduction.deduction_desc_arab"></IntlMessages>,
      sortable: true,
    },

    {
      key: "deduction_desc_eng",
      text: <IntlMessages id="deduction.deduction_desc_eng"></IntlMessages>,
      sortable: true,
    },

    {
      key: "printable",
      text: <IntlMessages id="deduction.printable"></IntlMessages>,
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
      text: <IntlMessages id="deduction.parentbenefit"></IntlMessages>,
    },
    {
      key: "request",
      text: <IntlMessages id="deduction.request"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.request}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "mb",
      text: <IntlMessages id="deduction.mb"></IntlMessages>,
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
      key: "gl_id",
      text: <IntlMessages id="deduction.gl_id"></IntlMessages>,
    },
    {
      key: "credit_gl_id",
      text: <IntlMessages id="deduction.credit_gl_id"></IntlMessages>,
    },
    {
      key: "show_in_report",
      text: <IntlMessages id="deduction.show_in_report"></IntlMessages>,
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
