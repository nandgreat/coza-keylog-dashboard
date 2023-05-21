import Breadcrumb from '../components/Breadcrumb';
import KeyLogsComponents from '../components/KeyLogsComponents';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Key Logs" />

      <div className="flex flex-col gap-10">
        <KeyLogsComponents />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
