import { Box } from '@mui/material';
import { IProject } from '@/types';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { ProjectFormFields } from '@/components/FormProjectFields';
import { Button } from '@/components/Buttons/Button';
import FavouriteButton from '@/components/Buttons/FavouriteButton';
import { ButtonEditProject } from '@/components/Buttons/ButtonEditProject';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import { ROUTES } from '@/utils/routes';

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
