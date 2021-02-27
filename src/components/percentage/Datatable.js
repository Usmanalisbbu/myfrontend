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
      key: "percent_desc_arab",
      text: <IntlMessages id="percentage.percent_desc_arab"></IntlMessages>,
      sortable: true,
    },
 

    {
      key: "percent_desc_eng",
      text: <IntlMessages id="percentage.percent_desc_eng"></IntlMessages>,
      sortable: true,
    },
    
    {
      key: "percent_fr",
      text: <IntlMessages id="percentage.percent_fr"></IntlMessages>,
      sortable: true,
    },

    {
      key: "percent_to",
      text: <IntlMessages id="percentage.percent_to"></IntlMessages>,
      sortable: true,
    },

    {
      key: "percent_value",
      text: <IntlMessages id="percentage.percent_value"></IntlMessages>,
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
