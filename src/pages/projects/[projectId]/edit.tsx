import { useRouter } from 'next/router';

const EditProject = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return <>Edit Project ID {projectId}</>;
};

export default EditProject;
