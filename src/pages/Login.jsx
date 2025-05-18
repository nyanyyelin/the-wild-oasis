import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

const Login = () => {
  return (
    <main className="grid min-h-screen grid-cols-[30rem] content-center justify-center gap-3 bg-gray-50">
      <Logo />
      <h4 className="text-center text-xl font-semibold">
        Log in to your account
      </h4>
      <LoginForm />
    </main>
  );
};
export default Login;

// const LoginLayout = styled.main`
//   min-height: 100vh;
//   display: grid;
//   grid-template-columns: 48rem;
//   align-content: center;
//   justify-content: center;
//   gap: 3.2rem;
//   background-color: var(--color-grey-50);
// `;

// function Login() {
//   return <LoginLayout>Login</LoginLayout>;
// }
