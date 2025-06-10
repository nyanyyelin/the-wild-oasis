// import Heading from '../../ui/Heading';
// import Row from '../../ui/Row';

import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';

// function Account() {
//   return (
//     <>
//       <Heading as="h1">Update your account</Heading>

//       <Row>
//         <Heading as="h3">Update user data</Heading>
//         <p>Update user data form</p>
//       </Row>

//       <Row>
//         <Heading as="h3">Update password</Heading>
//         <p>Update user password form</p>
//       </Row>
//     </>
//   );
// }

const Account = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl">Update user data</h3>
        <UpdateUserDataForm />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl">Update user password</h3>
        <UpdatePasswordForm />
      </div>
    </>
  );
};
export default Account;
