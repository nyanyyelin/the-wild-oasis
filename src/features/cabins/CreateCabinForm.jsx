import { FormProvider, useForm } from 'react-hook-form';

import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import FormRow from '../../ui/FormRow';
import Form from '../../ui/Form';
import useCreateCabin from './useCreateCabin';
import useEditCabin from './useEditCabin';

const CreateCabinForm = ({ cabinToEdit = {}, onCloseModal }) => {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const methods = useForm({ defaultValues: isEditSession ? editValues : {} });
  const { register, handleSubmit, reset, getValues, formState } = methods;
  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin(reset);
  const { isEditing, editCabin } = useEditCabin(reset);

  const isWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isEditSession) {
      // mutate functions
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createCabin({ ...data, image: data.image[0] });
    }
    console.log(data);
  };

  const onError = (errors) => {
    console.log(errors); // just logging, not really doing anything
    // error is coming from formState
  };
  return (
    // need our own function to call handleSubmit
    // FormProvider is not really necessary here
    // <FormProvider {...methods}>
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
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

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        {/* <FileInput isEditSession={isEditSession} /> */}
        <FileInput
          isEditSession={isEditSession}
          {...register('image', {
            required: isEditSession ? false : 'This field is required',
          })}
        />
      </FormRow>

      <div className="grid grid-cols-2">
        <div className="col-start-2 col-end-3 ml-[5rem] flex justify-center gap-[3rem]">
          <button
            className="cursor-pointer rounded-md bg-gray-50 px-3 py-2 text-base text-black shadow-md duration-300 hover:bg-gray-400"
            type="reset"
            onClick={() => onCloseModal?.()} // call only onCloseModal() exists
          >
            Cancel
          </button>
          <Button disabled={isWorking} size="medium" variation="primary">
            {isEditSession ? 'Edit Cabin' : 'Create Cabin'}
          </Button>
        </div>
      </div>
    </Form>
    // </FormProvider>
  );
};

export default CreateCabinForm;
