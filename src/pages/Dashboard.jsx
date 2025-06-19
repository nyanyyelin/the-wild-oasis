import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';

function Dashboard() {
  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <h1 className="font-sans text-2xl">Dashboard</h1>
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
