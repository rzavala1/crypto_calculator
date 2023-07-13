function TableInvestment(props) {
  const { data } = props;

  const getImage = (name) => {
    const srcStr = name + ".png";
    return <img src={srcStr} alt={name} className="w-[40px]"/>;
  };

  return (
    <div>
      <div>
        {data.map((obj, index) => {
          return <div key={index}>{getImage(obj.name)}</div>;
        })}
      </div>
    </div>
  );
}

export default TableInvestment;
