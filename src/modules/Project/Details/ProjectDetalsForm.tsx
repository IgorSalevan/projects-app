import { Box } from '@mui/material';
import { IProject } from '@/types';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { ProjectFormFields } from '@/components/ProjectFormFields';
import { Button } from '@/components/Buttons/Button';
import FavouriteButton from '@/components/Buttons/FavouriteButton';
import { EditButton } from '@/components/Buttons/EditButton';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import { ROUTES } from '@/utils/routes';
import { FormButtonsContainer } from '@/components/Buttons/FormButtonsContainer';

interface IProps {
  project?: IProject;
}

export const ProjectDetailsForm: FC<IProps> = ({
  project = {} as IProject,
}) => {
  const isMobile = useDetectMobile();
  const router = useRouter();
  const methods = useForm({
    defaultValues: project,
    disabled: true,
  });
  const { reset } = methods;

  useEffect(() => {
    reset(project);
  }, [project.id]);

  const handleBackClick = () => router.push(ROUTES.projects);

  return (
    <FormProvider {...methods}>
      <Box className="flex w-full">
        <Box component="form" className="w-full lg:w-10/12 pt-12">
          <ProjectFormFields mode="view" disabled />

          <FormButtonsContainer gap={2}>
            <Button type="button" onClick={handleBackClick}>
              Back
            </Button>
            <EditButton id={project.id} />
          </FormButtonsContainer>
        </Box>

        {!isMobile && (
          <Box className="mt-10">
            <FavouriteButton projectId={project.id} />
          </Box>
        )}
      </Box>
    </FormProvider>
  );
};
