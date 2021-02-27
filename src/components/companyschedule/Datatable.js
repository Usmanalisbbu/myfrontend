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
      key: "schedule_desc_arab",
      text: <IntlMessages id="companyschedule.schedule_desc_arab"></IntlMessages>,
      sortable: true,
    },
 

    {
      key: "schedule_desc_eng",
      text: <IntlMessages id="companyschedule.schedule_desc_eng"></IntlMessages>,
      sortable: true,
    },
  
    {
      key: "from_date",
      text: <IntlMessages id="companyschedule.from_date"></IntlMessages>,
      sortable: true,
    },

    {
      key: "from_date_h",
      text: <IntlMessages id="companyschedule.from_date_h"></IntlMessages>,
      sortable: true,
    },

    {
      key: "to_date",
      text: <IntlMessages id="companyschedule.to_date"></IntlMessages>,
      sortable: true,
    },

    {
      key: "to_date_h",
      text: <IntlMessages id="companyschedule.to_date_h"></IntlMessages>,
      sortable: true,
    },

    {
      key: "no_work",
      text: <IntlMessages id="companyschedule.no_work"></IntlMessages>,
      sortable: true,
    },

    {
      key: "for_schedule",
      text: <IntlMessages id="companyschedule.for_schedule"></IntlMessages>,
      sortable: true,
    },

    {
      key: "paid_overtime",
      text: <IntlMessages id="companyschedule.paid_overtime"></IntlMessages>,
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
