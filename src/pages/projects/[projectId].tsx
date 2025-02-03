import { ProjectDetailsForm } from '@/components/ProjectDetalsForm';
import { useStore } from '@/store';
import { getRequestData } from '@/utils/api';
import { ROUTES } from '@/utils/routes';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const ProjectDetails = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const { projects, setProjects } = useStore();

  const project = projects.data.find((p) => p.id === projectId);

  if (projectId && !project) {
    getRequestData(`projects/${projectId}`)
      .then((response) => {
        if (!response.ok) {
          toast.error('Project not found');
          router.push(ROUTES.projects);
        }
        return response.json();
      })
      .then((data) => {
        setProjects([data])
      });
  }

  if (!project) {
    return null;
  }

  return <ProjectDetailsForm project={project} />;
};

export default ProjectDetails;
