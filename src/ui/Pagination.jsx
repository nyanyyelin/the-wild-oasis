import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/constants';

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const next = currentPage !== pageCount ? currentPage + 1 : currentPage;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  };
  const prevPage = () => {
    const prev = currentPage != 1 ? currentPage - 1 : currentPage;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;
  return (
    <div className="flex w-full items-center justify-between px-2 py-1">
      <p className="ml-1 text-sm">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1} to </span>
        <span>
          {currentPage === pageCount ? currentPage : currentPage * PAGE_SIZE}
        </span>
        <span> of {count} </span>
        results
      </p>
      <div className="flex gap-0.5">
        <button
          className="flex items-center justify-center gap-0.5 rounded-sm border-0 px-1 py-2 text-sm font-semibold transition-all duration-300 enabled:hover:bg-violet-600 enabled:hover:text-violet-50"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft className="h-5 w-5" />
          <span className="pr-0.5">Previous</span>
        </button>

        <button
          className="flex items-center justify-center gap-0.5 rounded-sm border-0 px-1 py-2 text-sm font-semibold transition-all duration-300 enabled:hover:bg-violet-600 enabled:hover:text-violet-50"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span className="pl-0.5">Next</span>
          <HiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

// import styled from "styled-components";

// const StyledPagination = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const P = styled.p`
//   font-size: 1.4rem;
//   margin-left: 0.8rem;

//   & span { // this similar to p span { font-weight: 600 }'
//     font-weight: 600;
//   }
// `;

// const Buttons = styled.div`
//   display: flex;
//   gap: 0.6rem;
// `;

// const PaginationButton = styled.button`
//   background-color: ${(props) =>
//     props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
//   color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
//   border: none;
//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.4rem;
//   padding: 0.6rem 1.2rem;
//   transition: all 0.3s;

//   &:has(span:last-child) {
//     padding-left: 0.4rem;
//   }

//   &:has(span:first-child) {
//     padding-right: 0.4rem;
//   }

//   & svg {
//     height: 1.8rem;
//     width: 1.8rem;
//   }

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;
