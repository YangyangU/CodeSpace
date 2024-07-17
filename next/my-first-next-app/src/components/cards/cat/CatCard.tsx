type CatProps = {
  name: string;
  age: number;
  color: string;
};


const CatCard: React.FC<CatProps> = ({name,age,color}) => {
  return (
    <div>
      <h1>CatCard</h1>
      {name} |
      {age} |
      {color}
    </div>
  );
};

export default CatCard;

