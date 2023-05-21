import Breadcrumb from '../components/Breadcrumb';
import DepartmentComponents from '../components/DeparmentComponent';
import KeyLogsComponents from '../components/KeyLogsComponents';
import DefaultLayout from '../layout/DefaultLayout';

const DepartmentsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="All Departments" />

      <div className="flex flex-col gap-10">
        <DepartmentComponents />
      </div>
    </DefaultLayout>
  );
};

export default DepartmentsPage;
