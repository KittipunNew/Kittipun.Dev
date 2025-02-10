import NavbarProjectDetail from '../components/NavbarProjectDetail';

const layoutProjectDetail = ({ children }) => {
  return (
    <div>
      <NavbarProjectDetail />
      <div>{children}</div>
    </div>
  );
};
export default layoutProjectDetail;
