import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react';
import { CartItemsContext } from './CartItemsContext';


function ProductDetail({
  product, 
  initialSelectedColor, 
  initialSelectedSize, 
  initialSelectedImageIndex,
  // handleAddToCart
}) {

  const { handleAddToCart } = useContext(CartItemsContext);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(initialSelectedImageIndex) // array destructuring

  const [selectedColor, setSelectedColor] = useState(initialSelectedColor)
  const [selectedSize, setSelectedSize] = useState(initialSelectedSize)

  const findIndexByColor = (color) => {
    for (let i = 0; i < product.images.length; i++) {
      if (product.images[i].color === color) {
        return i
      }
    }
  }
  const selectedColorIndex = findIndexByColor(selectedColor)

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  }

  const colorButtons = product["colors"].map(x => ({"color": x}));
  const ColorButtonElements = colorButtons?.map((button) => (
    <button
      key={button.color}
      className={selectedColor === button.color ? 'color-clicked': 'color-unclicked'}
      onClick={() => handleColorClick(button.color)}
    >
      {button.color}
    </button>
  ));

  const sizeButtons = product["sizes"].map(x => ({"size": x}));
  const SizeButtonElements = sizeButtons?.map((button) => (
    <button
      key={button.size}
      className={selectedSize === button.size ? 'size-clicked': 'size-unclicked'}
      onClick={() => handleSizeClick(button.size)}
    >
      {button.size}
    </button>
  ))
  

  return (
    <div className="app">
        
            <div className='details' key={product._id}>

              <div className='images'>
                <div className='big-img'>
                  <img 
                    src={product.images[selectedColorIndex].urls[selectedImageIndex]} 
                    alt=""
                  />
                </div>
                <div className='thumb'>
                    {
                      product.images[selectedColorIndex]?.urls.map((img, index) => (
                      <img 
                        src={img} 
                        alt="" 
                        key={index}
                        onClick={() => handleImageClick(index)}
                      />
                      ))
                    }
                </div>
              </div>

              <div className='box'>
                  <div className='row'>
                    <h2>{product.title}</h2>
                    <span>${product.price}</span>
                  </div>
                  <div className='colors'>
                    {ColorButtonElements}
                  </div>
                  <div className='sizes'>
                    {SizeButtonElements}
                  </div>
                  <div className='description-container'>
                    <ul className='description'>
                      {product.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className='addtocart-container'>
                    <button 
                      className='addtocart'
                      onClick={() => handleAddToCart({
                        'title': product.title,
                        'color': selectedColor,
                        'size': selectedSize,
                        'price': product.price,
                        'url': product.images[selectedColorIndex].urls[0]
                      })}
                    >
                    Add to cart  &nbsp;&nbsp;<FontAwesomeIcon icon={faCartPlus}/>
                    </button>
                  </div>
              </div>


            </div>
    </div>
  );
}

export default ProductDetail;
