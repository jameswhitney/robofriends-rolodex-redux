import Card from "./card.component";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((robot, i) => {
        return (
          <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
      })}
    </>
  );
};

export default CardList;
