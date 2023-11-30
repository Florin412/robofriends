import Card from "./Card";

const CardList = ({ robots }) => {
  const arrayOfRobots = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      ></Card>
    );
  });

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 flex-wrap justify-content-center align-items-stretch">
        {arrayOfRobots}
      </div>
    </div>
  );
};

export default CardList;
