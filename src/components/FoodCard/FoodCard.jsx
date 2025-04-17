import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const { price, image, recipe, name } = item;
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = food =>{
      if(user && user.email){
        // TODO: send cart item to the database
      }
      else{
        Swal.fire({
          title: "You are not login!",
          text: "Plz Login Add to The Cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate("/login")
          }
        });
      }
    }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white">{price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {recipe}
        </p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
