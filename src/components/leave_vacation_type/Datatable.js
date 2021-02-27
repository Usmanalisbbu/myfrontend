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
      key: "status",
      text: <IntlMessages id="leavevacationtypes.status"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.status}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "leave_desc_eng",
      text: (
        <IntlMessages id="leavevacationtypes.leave_desc_eng"></IntlMessages>
      ),
      sortable: true,
    },

    {
      key: "leave_desc_arab",
      text: (
        <IntlMessages id="leavevacationtypes.leave_desc_arab"></IntlMessages>
      ),
      sortable: true,
    },
    {
      key: "leave_duration",
      text: (
        <IntlMessages id="leavevacationtypes.leave_duration"></IntlMessages>
      ),
      sortable: true,
    },

    {
      key: "with_pay",
      text: <IntlMessages id="leavevacationtypes.with_pay"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.with_pay}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "settlement",
      text: <IntlMessages id="leavevacationtypes.settlement"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.settlement}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "extra_leave_calc",
      text: (
        <IntlMessages id="leavevacationtypes.extra_leave_calc"></IntlMessages>
      ),
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.extra_leave_calc}
              readOnly
            />
          </Fragment>
        );
      },
    },
    {
      key: "request",
      text: <IntlMessages id="leavevacationtypes.request"></IntlMessages>,
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
      key: "require_visa",
      text: <IntlMessages id="leavevacationtypes.require_visa"></IntlMessages>,
      cell: (record, index) => {
        return (
          <Fragment>
            <CustomInput
              id={record.id}
              type="checkbox"
              checked={record.require_visa}
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
