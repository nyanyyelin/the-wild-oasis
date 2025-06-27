// import Uploader from '../data/Uploader';
import Logo from './Logo';
import MainNav from './MainNav';

const Sidebar = () => {
  return (
    <aside className="row-span-full border-r-1 border-r-gray-100 bg-gray-50 px-4 py-3">
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </aside>
  );
};

export default Sidebar;
