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
      key: "gosi_saudi_employee",
      text: <IntlMessages id="gosisubscription.gosi_saudi_employee"></IntlMessages>,
      sortable: true,
    },
    
    {
      key: "gosi_nonsaudi_employee",
      text: <IntlMessages id="gosisubscription.gosi_nonsaudi_employee"></IntlMessages>,
      sortable: true,
    },

    {
      key: "gosi_saudi_company",
      text: <IntlMessages id="gosisubscription.gosi_saudi_company"></IntlMessages>,
      sortable: true,
    },
  
    {
      key: "gosi_nonsaudi_company",
      text: <IntlMessages id="gosisubscription.gosi_nonsaudi_company"></IntlMessages>,
      sortable: true,
    },

    {
      key: "yearmonth_id_gr",
      text: <IntlMessages id="gosisubscription.yearmonth_id_gr"></IntlMessages>,
      sortable: true,

    },

    {
      key: "yearmonth_id_hi",
      text: <IntlMessages id="gosisubscription.yearmonth_id_hi"></IntlMessages>,
      sortable: true,
    },

    

    {
      key: "current_flag",
      text: <IntlMessages id="gosisubscription.current_flag"></IntlMessages>,
      sortable: true,
    },

    {
      key: "comments",
      text: <IntlMessages id="gosisubscription.comments"></IntlMessages>,
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
