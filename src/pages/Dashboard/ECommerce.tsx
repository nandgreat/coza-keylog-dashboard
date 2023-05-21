import { useEffect } from 'react';
import CardOne from '../../components/CardOne.tsx';
import { useDispatch, useSelector } from 'react-redux';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import DefaultLayout from '../../layout/DefaultLayout.tsx';
import { useAppSelector } from '../../app/hook.ts';
import { dashboardItems } from '../../features/dashboard/dashboardActions.ts';
import { KeyIcons, UsersIcons } from '../../icons/icons.tsx';

const ECommerce = () => {

  const dispatch = useDispatch()

  const {loading, dashboardCount, error} = useAppSelector((state: any) => state.dashboardSlice)

  // redirect authenticated user to profile screen
   useEffect(() => {
 
    console.log(dashboardCount, "ffffffffffffffffffff");
    
   }, [dashboardCount])
 

  useEffect(() => {
    dispatch(dashboardItems({}))

  }, [])

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne value={dashboardCount.workers_count} label={"No of Workers"} icon={UsersIcons} />
        <CardOne value={dashboardCount.keys_count} label={"No of Keys"} icon={KeyIcons} />
        <CardOne value={dashboardCount.workers_count} label={"No of Departments"} icon={UsersIcons} />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
