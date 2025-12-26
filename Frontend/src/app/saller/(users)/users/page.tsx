import React, { Fragment } from "react";
import UsersTable from "./Components/UsersTable";
import PageHeader from "@admin/components/PageHeader";
import { DashboardQucikActionSvgIcon } from "@admin/components/SvgIcons";
import AdminPagination from "../../components/Pagination";

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

export default function Users() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Users" />
         <UsersTable />
         <AdminPagination />
      </Fragment>
   );
}
