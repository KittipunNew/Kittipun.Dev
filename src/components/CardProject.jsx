function CardProject(props) {
  return (
    <div className="rounded-lg shadow-md w-auto h-[350px]">
      <img
        src={props.img}
        alt=""
        className="w-full rounded-t-lg object-cover"
      />
      <div className="p-3 flex flex-col gap-5">
        <h1 className="text-xl font-bold">{props.name}</h1>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
}
export default CardProject;
