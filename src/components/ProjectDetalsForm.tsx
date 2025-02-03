import { IProject } from '@/types';
import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ProjectFormFields } from './ProjectFormFields';
import { Box } from '@mui/material';
import { Button } from './Buttons/Button';
import { useRouter } from 'next/router';
import { ROUTES } from '@/utils/routes';
import FavouriteButton from './Buttons/FavouriteButton';
import { useDetectMobile } from '@/hooks/useDetectMobile';

interface IProps {
  project: IProject;
}

export const ProjectDetailsForm: FC<IProps> = ({ project }) => {
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

  const handleBackClick = () => router.back();

  const handleEditProject = (id: string) => () =>
    router.push(ROUTES.editProject(id));

  return (
    <FormProvider {...methods}>
      <Box display="flex">
        <Box component="form" className="xs:w-full lg:w-10/12 pt-12">
          <ProjectFormFields disabled />

          <Box
            sx={{
              display: 'flex',
              mt: 3,
              ml: { md: '11.2rem' },
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 2,
            }}
          >
            <Button type="button" onClick={handleBackClick}>
              Back
            </Button>
            <Button type="button" onClick={handleEditProject(project.id)}>
              Edit
            </Button>
          </Box>
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
