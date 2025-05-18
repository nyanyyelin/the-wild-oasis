// import Heading from '../../ui/Heading';
// import Row from '../../ui/Row';

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
      <h1>Update your account</h1>
      <div>
        <h3>Update user data</h3>
        <UpdateUserDataForm />
      </div>
      <div>
        <h3>Update user password</h3>
      </div>
    </>
  );
};
export default Account;
