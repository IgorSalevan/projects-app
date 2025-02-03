import { BaseSyntheticEvent } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import {
  FormProvider,
  FieldValues,
  useForm,
  ValidationRule,
} from 'react-hook-form';
import { toast } from 'react-toastify';
import { useStore } from '@/store';
import { IProject } from '@/types';
import { ROUTES } from '@/utils/routes';
import FormFieldText from '@/components/Form/FormFieldText';
import { Button } from '@/components/Buttons/Button';
import FormFieldDatePicker from '@/components/Form/FormFieldDatePicker';

const validatorId: ValidationRule<RegExp> = {
  value: /^[a-zA-Z0-9]+$/,
  message: 'Only letters & numbers (no spaces)',
};

const NewProject = () => {
  const router = useRouter();
  const addProject = useStore((state) => state.addProject);
  const methods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FieldValues, e?: BaseSyntheticEvent) => {
    e?.preventDefault();
    const response = await addProject(data as IProject);
    if (response.ok) {
      toast.success(`Project ${data.id} created`);
      return router.push(ROUTES.projects);
    }
    const error = await response.json();
    toast.error(error.error);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="xs:w-full lg:w-10/12 pt-12"
      >
        <FormFieldText id="id" label="Project ID" validator={validatorId} />
        <FormFieldText id="name" label="Project Name" />
        <FormFieldText
          id="description"
          label="Description"
          required={false}
          multiline
          rows={4}
          fullWidth
        />
        <FormFieldDatePicker id="startDate" label="Start Date" />
        <FormFieldDatePicker id="endDate" label="End Date" />
        <FormFieldText id="manager" label="Manager" />

        <Box
          sx={{
            display: 'flex',
            mt: 3,
            ml: { md: '11.2rem' },
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Button type="submit" disabled={isSubmitting}>
            Create Project
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default NewProject;
