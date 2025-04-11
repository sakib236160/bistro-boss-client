const MenuItem = ({ item }) => {
    const { price, image, recipe, name } = item;
  
    return (
      <div className="flex items-start gap-4">
        {/* Half-circle shaped image */}
        <div className="w-16 h-16 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full border-4 border-gray-400 object-cover"
            style={{borderRadius: '0 200px 200px 200px'}}
          />
        </div>
  
        {/* Text */}
        <div className="flex-1">
          <div className="flex justify-between items-center text-sm font-semibold text-gray-800 uppercase">
            <span className="whitespace-nowrap">
              {name}
              <span className="inline-block align-middle w-16 border-b border-dotted border-gray-400 ml-2"></span>
            </span>
            <span className="text-yellow-600">${price}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{recipe}</p>
        </div>
      </div>
    );
  };
  
  export default MenuItem;
  