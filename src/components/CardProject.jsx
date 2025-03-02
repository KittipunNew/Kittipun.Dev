function CardProject(props) {
  return (
    <div className="rounded-lg shadow-md w-auto h-auto md:h-[400px] lg:hover:scale-110 duration-200">
      <img
        src={props.img}
        alt=""
        className="w-full h-48 rounded-t-lg object-cover"
      />
      <div className="p-3 flex flex-col gap-5 bg-white rounded-b-lg font-montserrat">
        <h1 className="text-xl font-bold">{props.name}</h1>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
}
export default CardProject;
