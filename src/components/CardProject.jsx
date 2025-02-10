function CardProject(props) {
  return (
    <div className="rounded-lg shadow-md w-auto">
      <img
        src={props.img}
        alt=""
        className="w-full rounded-t-lg object-cover"
      />
      <div className="p-3 flex flex-col gap-5">
        <h1 className="text-xl font-bold">{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default CardProject;
