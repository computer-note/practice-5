import { type SetStateAction, type Dispatch } from 'react';

interface Props {
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
  itemsPerPage: number;
}

const PAGE_PER_PAGE_SECTION = 5;

function PageNavigation({
  currentPage,
  setPage,
  itemsPerPage,
  totalCount,
}: Props) {
  const totalPage = Math.floor(totalCount / itemsPerPage);

  const currentPageSectionStart =
    Math.floor((currentPage - 1) / PAGE_PER_PAGE_SECTION) *
      PAGE_PER_PAGE_SECTION +
    1;
  const currentPageSectionEnd =
    currentPageSectionStart + (PAGE_PER_PAGE_SECTION - 1);

  return (
    <section className='page-section'>
      <button
        onClick={() => setPage(prev => prev - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>

      {[...Array(PAGE_PER_PAGE_SECTION)].map((_, idx) => (
        <button
          key={currentPageSectionStart + idx}
          onClick={() => setPage(currentPageSectionStart + idx)}
          className={
            currentPage === currentPageSectionStart + idx
              ? 'font-bold bg-red-300'
              : ''
          }
        >
          {currentPageSectionStart + idx}
        </button>
      ))}

      <button
        onClick={() => setPage(prev => prev + 1)}
        disabled={currentPage === totalPage}
      >
        next
      </button>
    </section>
  );
}

export default PageNavigation;
