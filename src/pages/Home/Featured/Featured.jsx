import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className="mb-16">
            <section className="featured-item bg-fixed text-white py-20">
                <SectionTitle 
                    subHeading="Check it Out"
                    heading="Featured Item"
                ></SectionTitle>
                <div className="md:flex justify-center items-center bg-slate-500/40 pb-20 pt-12 px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where Can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur ratione delectus itaque quaerat quam similique a reprehenderit ex at, ducimus totam pariatur nesciunt, quae repellat maiores nisi. Id harum officiis nemo fugiat odit reprehenderit fugit maxime? Eius aperiam, fugit, quidem nam nostrum quis ipsum omnis facilis numquam ad provident.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;