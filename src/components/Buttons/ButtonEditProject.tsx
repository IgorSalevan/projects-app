import { FC } from 'react';
import { Button } from './Button';
import { useRouter } from 'next/router';
import { ROUTES } from '@/utils/routes';

interface IProps {
  id: string;
}

export const ButtonEditProject: FC<IProps> = ({ id }) => {
  const router = useRouter();

  const handleEditProject = () => router.push(ROUTES.editProject(id));

  return (
    <Button type="button" onClick={handleEditProject}>
      Edit
    </Button>
  );
};
