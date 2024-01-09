import AdminLayout from "../../Layouts/AdminLayout";
import OrdersTable from "./OrdersTable";

AdminLayout;
const Dashboard = () => {
  return (
    <AdminLayout>
      <OrdersTable></OrdersTable>
    </AdminLayout>
  );
};

export default Dashboard;
