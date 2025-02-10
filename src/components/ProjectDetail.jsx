import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      name: 'โปรเจค 1',
      description: 'รายละเอียดโปรเจค...',
    },
    {
      id: 2,
      name: 'โปรเจค 2',
      description: 'รายละเอียดโปรเจค...',
    },
    {
      id: 3,
      name: 'โปรเจค 3',
      description: 'รายละเอียดโปรเจค...',
    },
    {
      id: 4,
      name: 'โปรเจค 4',
      description: 'รายละเอียดโปรเจค...',
    },
    {
      id: 5,
      name: 'โปรเจค 5',
      description: 'รายละเอียดโปรเจค...',
    },
    {
      id: 6,
      name: 'โปรเจค 6',
      description: 'รายละเอียดโปรเจค...',
    },
    {
      id: 7,
      name: 'โปรเจค 7',
      description: 'รายละเอียดโปรเจค...',
    },
  ];

  const project = projects.find((proj) => proj.id === parseInt(id));

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};
export default ProjectDetail;
