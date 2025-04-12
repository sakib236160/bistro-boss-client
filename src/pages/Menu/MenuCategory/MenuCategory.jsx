import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {
                    items.map(item=> <MenuItem item={item}>
                    </MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;