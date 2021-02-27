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
      key: "capital_arab",
      text: <IntlMessages id="country.capital_arab"></IntlMessages>,
      sortable: true,
    },
    {
      key: "nationality_arab",
      text: <IntlMessages id="country.nationality_arab"></IntlMessages>,
      sortable: true,
    },
    {
      key: "country_name_eng",
      text: <IntlMessages id="country.country_name_eng"></IntlMessages>,
      sortable: true,
    },
    {
      key: "capital_eng",
      text: <IntlMessages id="country.capital_eng"></IntlMessages>,
      sortable: true,
    },
    {
      key: "nationality_eng",
      text: <IntlMessages id="country.nationality_eng"></IntlMessages>,
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
