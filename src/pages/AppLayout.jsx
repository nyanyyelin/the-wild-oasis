import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import Header from '../ui/Header';

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-cols-[20rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="overflow-scroll bg-gray-100 px-12 py-10 dark:bg-gray-600">
        <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
