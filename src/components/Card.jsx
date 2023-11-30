import "./Card.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="hover-effect bg-success text-center col-11 col-sm-8 col-md-5 col-lg-3 col-xl-3 m-2">
      <img
        className="img-fluid"
        src={`https://robohash.org/${id}`}
        alt="robot_picture"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
