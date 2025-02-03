import { IProject } from '@/types';
import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ProjectFormFields } from './FormProjectFields';
import { Box } from '@mui/material';
import { Button } from './Buttons/Button';
import { useRouter } from 'next/router';
import { ROUTES } from '@/utils/routes';
import FavouriteButton from './Buttons/FavouriteButton';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import { ButtonEditProject } from './Buttons/ButtonEditProject';

interface IProps {
  project?: IProject;
}

export const FormProjectDetails: FC<IProps> = ({
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
          <ProjectFormFields mode='view' disabled />

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
            <ButtonEditProject id={project.id} />
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
