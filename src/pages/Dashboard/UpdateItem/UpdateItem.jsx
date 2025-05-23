import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const {name,category,recipe,price,_id} = useLoaderData();
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    });
    if(res.data.success){
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      // 
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if(menuRes.data.modifiedCount > 0){
        // reset();
        // show seccess popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is Updated to the menu!`,
          showConfirmButton: false,
          timer: 1500
        });
        
      }
    }
    console.log("With image Url",res.data);
  };
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refresh Info"></SectionTitle>
            <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control w-full my-6">
                        <label className="label">
                          <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={name}
                          placeholder="Type Here"
                          {...register("name", { required: true})}
                          required
                          className="input input-bordered w-full"
                        />
                      </div>
            
                      <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                          <label className="label">
                            <span className="label-text">Category*</span>
                          </label>
                          <select defaultValue={category}
                            {...register("category", { required: true})}
                            className="select select-bordered w-full"
                          >
                            <option disabled value="default">
                              Select a category
                            </option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                          </select>
                        </div>
            
                        {/* price */}
                        <div className="form-control w-full my-6">
                          <label className="label">
                            <span className="label-text">Price*</span>
                          </label>
                          <input
                            type="number"
                            placeholder="price"
                            defaultValue={price}
                            {...register("price", { required: true})}
                            className="input input-bordered w-full"
                          />
                        </div>
                       
                      </div>
            
                       {/* recepe details */}
                        <div className=" w-full">
                          <legend className="fieldset-legend">Recipe Details</legend>
                          <textarea defaultValue={recipe} {...register("recipe")} className="textarea h-24" placeholder="Bio"></textarea>
                        </div>
                        <div className="form-control w-full my-6">
                          <input {...register("image", { required: true})} type="file" className="file-input file-input-ghost" />
                        </div>
            
                      <button className="btn">
                        Update Menu Items <FaUtensils className="ml-4"></FaUtensils>
                      </button>
                    </form>
                  </div>
        </div>
    );
};

export default UpdateItem;