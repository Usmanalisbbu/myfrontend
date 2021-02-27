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
      key: "sched_name_arab",
      text: <IntlMessages id="session.sched_name_arab"></IntlMessages>,
      sortable: true,
    },
 

    {
      key: "sched_name_eng",
      text: <IntlMessages id="session.sched_name_eng"></IntlMessages>,
      sortable: true,
    },
  
    {
      key: "start_time",
      text: <IntlMessages id="session.start_time"></IntlMessages>,
      sortable: true,
    },

    {
      key: "end_time",
      text: <IntlMessages id="session.end_time"></IntlMessages>,
      sortable: true,
    },

    {
      key: "early_minutes",
      text: <IntlMessages id="session.early_minutes"></IntlMessages>,
      sortable: true,
    },

    {
      key: "late_minutes",
      text: <IntlMessages id="session.late_minutes"></IntlMessages>,
      sortable: true,
    }, 

    

    {
      key: "check_in",
      text: <IntlMessages id="session.check_in"></IntlMessages>,
      sortable: true,
    },

    {
      key: "check_out",
      text: <IntlMessages id="session.end_time"></IntlMessages>,
      sortable: true,
    },

    {
      key: "overtime",
      text: <IntlMessages id="session.overtime"></IntlMessages>,
      sortable: true,
    },
    {
      key: "flex_time",
      text: <IntlMessages id="session.flex_time"></IntlMessages>,
      sortable: true,
    },

    {
      key: "hpd",
      text: <IntlMessages id="session.hpd"></IntlMessages>,
      sortable: true,
    },

    {
      key: "day_off",
      text: <IntlMessages id="session.day_off"></IntlMessages>,
      sortable: true,
    },

    {
      key: "ignore_aw",
      text: <IntlMessages id="session.ignore_aw"></IntlMessages>,
      sortable: true,
    },

    {
      key: "absent_factor",
      text: <IntlMessages id="session.absent_factor"></IntlMessages>,
      sortable: true,
    },

    {
      key: "in_begin",
      text: <IntlMessages id="session.in_begin"></IntlMessages>,
      sortable: true,
    },

    {
      key: "out_begin",
      text: <IntlMessages id="session.out_begin"></IntlMessages>,
      sortable: true,
    },

    {
      key: "in_end",
      text: <IntlMessages id="session.in_end"></IntlMessages>,
      sortable: true,
    },

    

    {
      key: "out_end",
      text: <IntlMessages id="session.out_end"></IntlMessages>,
      sortable: true,
    },

    {
      key: "extra_mins_overtime",
      text: <IntlMessages id="session.extra_mins_overtime"></IntlMessages>,
      sortable: true,
    },

    {
      key: "no_log_penality",
      text: <IntlMessages id="session.no_log_penality"></IntlMessages>,
      sortable: true,
    },
    
    {
      key: "monthly_grace_period",
      text: <IntlMessages id="session.monthly_grace_period"></IntlMessages>,
      sortable: true,
    },

    {
      key: "no_late",
      text: <IntlMessages id="session.no_late"></IntlMessages>,
      sortable: true,
    },

    {
      key: "no_absent",
      text: <IntlMessages id="session.no_absent"></IntlMessages>,
      sortable: true,
    },

    {
      key: "no_ot",
      text: <IntlMessages id="session.no_ot"></IntlMessages>,
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
