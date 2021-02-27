import React, { Fragment } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import ActionButton from "./ActionButtons";
import IntlMessages from "../../helpers/IntlMessages";
import { Card } from "reactstrap";

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
      key: "country_name_arab",
      text: <IntlMessages id="country.country_name_arab"></IntlMessages>,
      sortable: true,
    },
    {
      key: "city_name_arab",
      text: <IntlMessages id="city.city_name_arab"></IntlMessages>,
      sortable: true,
    },
    {
      key: "country_name_eng",
      text: <IntlMessages id="country.country_name_eng"></IntlMessages>,
      sortable: true,
    },
    {
      key: "city_name_eng",
      text: <IntlMessages id="city.city_name_eng"></IntlMessages>,
      sortable: true,
    },
    {
      key: "region",
      text: <IntlMessages id="city.region"></IntlMessages>,
      sortable: true,
    },
    {
      key: "ticket_value",
      text: <IntlMessages id="city.ticket_value"></IntlMessages>,
      sortable: true,
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
