import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
const CabinTableOperation = () => {
  return (
    <div className="flex items-center gap-4">
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'with-discount', label: 'With discount' },
          { value: 'no-discount', label: 'No discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-dec', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low-first)' },
          { value: 'regular-dec', label: 'Sort by price (high first)' },
          { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
          { value: 'maxCapacity-dec', label: 'Sort by capacity (high first)' },
        ]}
      />
    </div>
  );
};

export default CabinTableOperation;
