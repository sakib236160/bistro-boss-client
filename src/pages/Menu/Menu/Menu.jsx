import { Helmet} from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = UseMenu();
    // const drinks = menu.filter(item=> item.category === 'drinks')
    const desserts = menu.filter(item=> item.category === 'dessert')
    const salad = menu.filter(item=> item.category === 'salad')
    const soup = menu.filter(item=> item.category === 'soup')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* Main Cover */}
            <SectionTitle
                heading="Today's Offer"
                subHeading="Don't Miss"
            ></SectionTitle>
            {/* Offerd Menu Item */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert menu item */}
            <MenuCategory
                items={desserts}
                title="Dessert"
                img={dessertImg}
            ></MenuCategory>
            {/* pizza menu item */}
            <MenuCategory
                items={pizza}
                title="Pizza"
                img={pizzaImg}
            ></MenuCategory>
            {/* salad menu item */}
            <MenuCategory
                items={salad}
                title="Salad"
                img={saladImg}
            ></MenuCategory>
            {/* soup menu item */}
            <MenuCategory
                items={soup}
                title="Soup"
                img={soupImg}
            ></MenuCategory>
           
        </div>
    );
};

export default Menu;