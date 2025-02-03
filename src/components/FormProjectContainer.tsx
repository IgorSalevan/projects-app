import { useStore } from '@/store';
import { IProject } from '@/types';
import { getRequestData } from '@/utils/api';
import { ROUTES } from '@/utils/routes';
import { useRouter } from 'next/router';
import React, { FC, ReactElement } from 'react';
import { toast } from 'react-toastify';

interface IProps {
  children: ReactElement<{project?: IProject}>;
}

export const FormProjectContainer: FC<IProps> = ({
  children,
}) => {
  const router = useRouter();
  const { projectId } = router.query;
  const { projects, setProjects } = useStore();

  const project = projects.data.find((p) => p.id === projectId);

  if (projectId && !project) {
    getRequestData(`projects/${projectId}`)
      .then((response) => {
        if (!response.ok) {
          toast.error('Project not found');
          return router.push(ROUTES.projects);
        }
        return response.json();
      })
      .then((data) => {
        setProjects([data]);
      });
  }

  if (!project) {
    return null;
  }

  return React.isValidElement(children)
    ? React.cloneElement(children, {project})
    : children;
};
