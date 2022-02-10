// This component creates a Card
// which displays an image, name, and email
// for a randomly generated robot from
// https://robohash.org

const Card = () => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Robot" src={`https://robohash.org/test/?size=200x200`} />
      <div>
        <h2>Name</h2>
        <p>Email</p>
      </div>
    </div>
  );
};

export default Card;
