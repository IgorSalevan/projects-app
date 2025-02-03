import { IProject } from '@/types';
import { ROUTES } from '@/utils/routes';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, FC, useEffect } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { ProjectFormFields } from '@/components/ProjectFormFields';
import { Button } from '@/components/Buttons/Button';
import { toast } from 'react-toastify';
import { useStore } from '@/store';
import { FormButtonsContainer } from '@/components/Buttons/FormButtonsContainer';

interface IProps {
  project?: IProject;
}

export const EditProjectForm: FC<IProps> = ({ project = {} as IProject }) => {
  const router = useRouter();
  const updateProject = useStore((state) => state.updateProject);
  const methods = useForm({
    defaultValues: project,
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(project);
  }, [project]);

  const onSubmit = async (data: FieldValues, e?: BaseSyntheticEvent) => {
    e?.preventDefault();

    if (JSON.stringify(project) === JSON.stringify(data)) {
      toast.warning('Nothing to update');
      return router.push(ROUTES.projects);
    }

    const response = await updateProject(data as IProject);
    if (response.ok) {
      toast.success(`Project ${data.id} updated`);
      return router.push(ROUTES.projects);
    }
    const error = await response.json();
    toast.error(error.error);
  };

  return (
    <FormProvider {...methods}>
      <Box className="flex w-full">
        <Box
          component="form"
          className="w-full lg:w-10/12 pt-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ProjectFormFields mode="edit" />

          <FormButtonsContainer>
            <Button type="submit">Update</Button>
          </FormButtonsContainer>
        </Box>
      </Box>
    </FormProvider>
  );
};
