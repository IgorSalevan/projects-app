import { useRouter } from 'next/router';

const ProjectDetails = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return <>Project ID {projectId}</>;
};

export default ProjectDetails;
