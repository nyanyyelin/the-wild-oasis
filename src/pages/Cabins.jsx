import CabinTable from '../features/cabins/CabinTable';
import CabinTableOperation from '../features/cabins/CabinTableOperation';
import AddCabin from './AddCabin';

const Cabins = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        All Cabins
        <CabinTableOperation />
      </div>
      <CabinTable />
      <AddCabin />
    </>
  );
};

export default Cabins;
