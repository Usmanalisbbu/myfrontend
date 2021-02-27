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
      key: "company_name_arab",
      text: <IntlMessages id="company.company_name_arab"></IntlMessages>,
      sortable: true,
    },
 

    {
      key: "company_name_eng",
      text: <IntlMessages id="company.company_name_eng"></IntlMessages>,
      sortable: true,
    },

    {
      key: "company_name_reg_eng",
      text: <IntlMessages id="company.company_name_reg_eng"></IntlMessages>,
      sortable: true,
    },

    {
      key: "company_name_reg_arab",
      text: <IntlMessages id="company.company_name_reg_arab"></IntlMessages>,
      sortable: true,
    },

    {
      key: "incorporation_date",
      text: <IntlMessages id="company.incorporation_date"></IntlMessages>,
      sortable: true,
    },

    {
      key: "incorporation_date_hijri",
      text: <IntlMessages id="company.incorporation_date_hijri"></IntlMessages>,
      sortable: true,
    },
  
    {
      key: "type_of_business_eng",
      text: <IntlMessages id="company.type_of_business_eng"></IntlMessages>,
      sortable: true,
    },

    {
      key: "type_of_business_arab",
      text: <IntlMessages id="company.type_of_business_arab"></IntlMessages>,
      sortable: true,
    },

    {
      key: "no_br",
      text: <IntlMessages id="company.no_br"></IntlMessages>,
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
