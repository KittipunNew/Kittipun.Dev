const NavbarProjectDetail = () => {
  return (
    <nav className="p-10 flex justify-between">
      <h1 className="font-montserrat font-bold text-xl">{project.name}</h1>
      <Link to="/" className="btn btn-wide bg-black text-white">
        Back
      </Link>
    </nav>
  );
};
export default NavbarProjectDetail;
