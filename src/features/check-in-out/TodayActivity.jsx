import { useTodayActivity } from './useTodayActivity';
import TodayItem from './TodayItem';

// const StyledToday = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   padding: 3.2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 2.4rem;
//   grid-column: 1 / span 2;
//   padding-top: 2.4rem;
// `;

// const TodayList = styled.ul`
//   overflow: scroll;
//   overflow-x: hidden;

//   /* Removing scrollbars for webkit, firefox, and ms, respectively */
//   &::-webkit-scrollbar {
//     width: 0 !important;
//   }
//   scrollbar-width: none;
//   -ms-overflow-style: none;
// `;

// const NoActivity = styled.p`
//   text-align: center;
//   font-size: 1.8rem;
//   font-weight: 500;
//   margin-top: 0.8rem;
// `;

const TodayActivity = () => {
  const { isPending, activities } = useTodayActivity();
  return (
    <div className="col-span-2 col-start-1 flex flex-col gap-3 rounded-md border border-gray-100 bg-gray-50 p-5 pt-2">
      <div className="flex">
        <h2>Today</h2>
      </div>
      {!isPending ? (
        activities?.length > 0 ? (
          <ul className="[scrollbar-width:none][&::-webkit-scrollbar]:!w-0 overflow-auto overflow-x-hidden [-ms-overflow-style:none]">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className="font-base mt-2 text-center font-semibold">
            No Activity Today.
          </p>
        )
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default TodayActivity;
