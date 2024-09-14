const FoodList = () => {
  const foods = ["Apple", "Banana", "Potato", "Bread"];
  return (
    <>
      <div className=" pt-3">
        <ol className="text-center">
          {foods.map((food) => (
            <li key={food}>{food}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default FoodList;
