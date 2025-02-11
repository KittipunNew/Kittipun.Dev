import NavbarProjectDetail from '../page/projectdetailpage/NavbarProjectDetail';

const LayoutProjectDetail = ({ children }) => {
  return (
    <div>
      <NavbarProjectDetail />
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};
export default LayoutProjectDetail;
