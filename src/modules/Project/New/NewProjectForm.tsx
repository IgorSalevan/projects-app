import { BaseSyntheticEvent } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { FormProvider, FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useStore } from '@/store';
import { IProject } from '@/types';
import { ROUTES } from '@/utils/routes';
import { Button } from '@/components/Buttons/Button';
import { ProjectFormFields } from '@/components/ProjectFormFields';
import { FormButtonsContainer } from '@/components/Buttons/FormButtonsContainer';

export const NewProjectForm = () => {
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
        <ProjectFormFields mode="create" />
        <FormButtonsContainer>
          <Button type="submit" disabled={isSubmitting}>
            Create Project
          </Button>
        </FormButtonsContainer>
      </Box>
    </FormProvider>
  );
};
