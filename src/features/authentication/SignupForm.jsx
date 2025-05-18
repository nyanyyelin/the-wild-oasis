import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import useSingup from './useSignup';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSingup();
  const { register, formState, getValues, handleSubmit, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { errors } = formState;

  const onSubmit = ({ fullName, email, password }) => {
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      },
    );
  };

  return (
    // Same as handleSubmit((data) => onSubmit(data));
    // handleSubmit handles all the validations and pass the data into the our onSubmit().
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <input
          type="text"
          id="fullName"
          disabled={isLoading}
          className="rounded-md border-1 bg-white px-2 py-2 text-base"
          {...register('fullName', { required: 'This field is required.' })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <input
          type="email"
          id="email"
          className="rounded-md border-1 bg-white px-2 py-2 text-base"
          {...register('email', {
            required: 'This field is required.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <input
          className="rounded-md border-1 bg-white px-2 py-2 text-base"
          type="password"
          id="password"
          disabled={isLoading}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters.',
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          className="rounded-md border-1 bg-white px-2 py-2 text-base"
          {...register('passwordConfirm', {
            required: 'This field is required.',
            validate: (value) =>
              value === getValues('password') || 'Passwords need to match.',
          })}
        />
      </FormRow>

      <div className="flex items-center justify-end gap-5">
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit">Create new user</Button>
      </div>
    </Form>
  );
}

export default SignupForm;
