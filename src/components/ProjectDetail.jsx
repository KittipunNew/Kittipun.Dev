import { useParams, Link } from 'react-router-dom';
import ProjectDetail1 from '../projectpage/ProjectDetail1';
import ProjectDetail2 from '../projectpage/ProjectDetail2';

const ProjectDetail = () => {
  const { id } = useParams();

  if (id === '1') {
    return <ProjectDetail1 />;
  } else if (id === '2') {
    return <ProjectDetail2 />;
  } else if (id === '3') {
    return <ProjectDetail3 />;
  } else {
    return <p>ไม่พบข้อมูลโปรเจค</p>; // กรณีไม่พบ id ที่ตรงกัน
  }
};

export default ProjectDetail;
