import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const populerItems = data.filter(item=> item.category === 'popular');
            setMenu(populerItems)
        })
    }, [])
    return (
        <section className="mb-16">
            <SectionTitle
                subHeading="Popular Itmes"
                heading="From Our Menu"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    menu.map(item=> <MenuItem item={item}>
                    </MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;