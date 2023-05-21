import Breadcrumb from '../components/Breadcrumb';
import WorkersComponent from '../components/TableOne';
import TableOne from '../components/TableOne';
import DefaultLayout from '../layout/DefaultLayout';

const WorkersPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Key Handling Workers" />

      <div className="flex flex-col gap-10">
        <WorkersComponent />
      </div>
    </DefaultLayout>
  );
};

export default WorkersPage;
