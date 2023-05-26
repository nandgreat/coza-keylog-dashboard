import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layout/AuthLayout';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../features/auth/authActions';

import { useForm } from 'react-hook-form'
import { useAppSelector } from '../../app/hook';
import useLocalStorage from '../../hooks/useLocalStorage';
import { User } from '../../models/user';
import LoginImage from '../../images/brand/login-image.svg'
import FormInput from '../../components/FormInput';
import { EmailIcon, LockIcon } from '../../icons/icons';
import CustomButton from '../../components/CustomButton';
import AlertComponent from '../../components/Alerts';

type LoginType = {
  email: string, password: string
}

const SignIn = () => {

  const { loading, userInfo, error } = useAppSelector((state: any) => state.auth)
  const dispatch = useDispatch()
  const [showAlert, setShowAlert] = useState<{ isVisible: boolean, message: string, type: "error" | "success" | "" }>({ isVisible: false, message: "", type: "" });

  const { register, handleSubmit } = useForm<LoginType>()

  const [user, setUser] = useLocalStorage<User>('user_data', { name: "", token: "" });

  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {

    if (userInfo || user.name != "") {
      if (userInfo) {
        var payload: User = { name: userInfo.data.name, token: userInfo.data.token }
        setUser((previousUser) => ({ ...previousUser, ...payload }))
        setShowAlert({ isVisible: true, message: "Login Successful", type: 'success' });
        setTimeout(() => navigate('/dashboard'), 1000);
      } else {
        navigate('/')
      }

    }
  }, [userInfo])

  useEffect(() => {
    if (error) {
      console.log(error);

      setShowAlert({ isVisible: true, message: error, type: "error" });
    }
  }, [error])

  useEffect(() => {
    return () => {
      setShowAlert({ isVisible: false, message: "", type: '' });
    }
  }, [])


  const submitForm = (data: LoginType) => {
    dispatch(userLogin(data))
  }

  return (
    <AuthLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <h3 className='text-3xl'>COZA Key Log Dashboard</h3>
              </Link>

              <p className="2xl:px-20">
                {user.name}
              </p>

              <span className="mt-15 inline-block">
                <img src={LoginImage} alt="Brand" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In
              </h2>

              <AlertComponent isVisible={showAlert.isVisible} message={showAlert.message} type={showAlert.type} />
              <form onSubmit={handleSubmit(submitForm)}>

                <FormInput name={'email'} label={'Email'} placeholder={'Enter Email'} register={register} icon={EmailIcon} type={'email'} />
                <FormInput name={'password'} label={'Password'} placeholder={'Enter Password'} register={register} icon={LockIcon} type={'password'} />


                <div className="mb-5">
                  <CustomButton label={'Sign In'} isLoading={loading} type={'submit'} />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
