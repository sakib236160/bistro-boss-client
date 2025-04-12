import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {

    const [menu] = UseMenu();
    const populer = menu.filter(item=> item.category === 'popular')
    
    return (
        <section className="mb-16">
            <SectionTitle
                subHeading="Popular Itmes"
                heading="From Our Menu"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    populer.map(item=> <MenuItem item={item}>
                    </MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;