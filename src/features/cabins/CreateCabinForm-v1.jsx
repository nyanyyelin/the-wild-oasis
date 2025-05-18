import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import { creatCabin } from '../../services/apiCabins';
import FormRow from '../../ui/FormRow';
import Form from '../../ui/Form';

const CreateCabinForm = () => {
  const methods = useForm();
  const { register, handleSubmit, reset, getValues, formState } = methods;
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: creatCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      reset(); // from react-hook-form, only if successful
    },
    onError: (err) => toast.error(err.message),
  });
  const onSubmit = (data) => {
    // console.log(data);
    mutate({ ...data, image: data.image[0] });
  };
  const onError = (errors) => {
    console.log(errors); // just logging, not really doing anything
    // error is coming from formState
  };
  return (
    // need our own function to call handleSubmit
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="name" error={errors?.name?.message}>
          <input
            type="text"
            id="name"
            className="rounded-md border-2 border-gray-200 px-3 py-2"
            {...register('name', {
              required: 'This field is required.',
            })}
          />
        </FormRow>

        <FormRow label="maxCapacity" error={errors?.maxCapacity?.message}>
          <input
            type="number"
            id="maxCapacity"
            className="rounded-md border-2 border-gray-200 px-3 py-2"
            {...register('maxCapacity', {
              required: 'This field is required.',
              min: {
                value: 1,
                message: 'The capacity should be at least 1.',
              },
            })}
          />
        </FormRow>

        <FormRow label="regularPrice" error={errors?.regularPrice?.message}>
          <input
            type="text"
            id="regularPrice"
            className="rounded-md border-2 border-gray-200 px-3 py-2"
            {...register('regularPrice', {
              required: 'This field is required.',
              min: {
                value: 1,
                message: 'The price should be at least 1.',
              },
            })}
          />
        </FormRow>

        <FormRow label="discount" error={errors?.discount?.message}>
          <input
            type="number"
            id="discount"
            defaultValue={0}
            className="rounded-md border-2 border-gray-200 px-3 py-2"
            {...register('discount', {
              required: 'This field is required.',
              validate: (value) => {
                return (
                  parseInt(value) <= getValues().regularPrice ||
                  'Discount should be less than regular price.'
                );
              },
            })}
          />
        </FormRow>

        <FormRow label="description" error={errors?.description?.message}>
          <textarea
            id="description"
            className="h-[8rem] rounded-md border-2 border-gray-200 px-3 py-2"
            {...register('description', {
              required: 'This field is required.',
            })}
          />
        </FormRow>

        <FormRow label="Cabin photo">
          <FileInput />
        </FormRow>

        <div className="grid grid-cols-2">
          <div className="col-start-2 col-end-3 ml-[5rem] flex justify-center gap-[3rem]">
            <button
              className="cursor-pointer rounded-md bg-gray-50 px-3 py-2 text-base text-black shadow-md duration-300 hover:bg-gray-400"
              type="reset"
            >
              Cancel
            </button>
            <Button disabled={isPending}>Edit cabin</Button>
          </div>
        </div>
      </Form>
    </FormProvider>
  );
};

export default CreateCabinForm;
