import Breadcrumb from '../components/Breadcrumb';
import KeyComponents from '../components/KeyComponents';
import KeyLogsComponents from '../components/KeyLogsComponents';
import DefaultLayout from '../layout/DefaultLayout';

const KeysPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="All Key" />

      <div className="flex flex-col gap-10">
        <KeyComponents />
      </div>
    </DefaultLayout>
  );
};

export default KeysPage;
