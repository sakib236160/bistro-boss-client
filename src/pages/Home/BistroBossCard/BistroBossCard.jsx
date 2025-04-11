import chefServiceImg from "../../../assets/home/chef-service.jpg";

const BistroBossCard = () => {
    return (
      <div
        className="bg-cover bg-center py-24 px-4 mb-16"
        style={{ backgroundImage: `url(${chefServiceImg})` }}
      >
        <div className="bg-white bg-opacity-90 max-w-4xl mx-auto text-center p-10 rounded shadow-lg">
          <h2 className="text-3xl font-serif uppercase mb-4">Bistro Boss</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
            libero accusamus laborum deserunt ratione dolor officiis praesentium! 
            Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus 
            incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    );
  };
  
  export default BistroBossCard;
  