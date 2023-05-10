import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function ProductDetail({
  product, 
  initialSelectedColor, 
  initialSelectedSize, 
  initialSelectedImageIndex,
  handleAddToCart
}) {
  
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
  const colorButtonElements = colorButtons?.map((button) => (
    <button
      key={button.color}
      className={selectedColor === button.color ? 'color-clicked': 'color-unclicked'}
      onClick={() => handleColorClick(button.color)}
    >
      {button.color}
    </button>
  ));

  const sizeButtons = product["sizes"].map(x => ({"size": x}));
  const sizeButtonElements = sizeButtons?.map((button) => (
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
        {
          product.map(item => (
            <div className='details' key={item._id}>

              <div className='images'>
                <div className='big-img'>
                  <img 
                    src={item.images[selectedColorIndex].urls[selectedImageIndex]} 
                    alt=""
                  />
                </div>
                <div className='thumb'>
                    {
                      item.images[selectedColorIndex].urls.map((img, index) => (
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
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>
                  <div className='colors'>
                    {/* {
                      item.colors.map((color, index) => (
                        <button
                          className={colorClassName} 
                          // style={{colorClassName}} 
                          key={index}
                          onClick={() => handleColorClick(color, index)}
                        >
                        {color}
                        </button>
                      ))
                    } */}
                    {colorButtonElements}
                  </div>
                  <div className='sizes'>
                    {/* {
                      item.sizes.map((size, index) => (
                        <button key={index}>{size}</button>
                      ))
                    } */}
                    {sizeButtonElements}
                  </div>
                  <div className='description-container'>
                    <p className='description'>{item.description}</p>
                  </div>
                  
                  <div className='addtocart-container'>
                    <button 
                      className='addtocart'
                      onClick={() => handleAddToCart(
                        item.title,
                        selectedColor,
                        selectedSize,
                        item.price
                      )}
                    >
                    Add to cart  &nbsp;&nbsp;<FontAwesomeIcon icon={faCartPlus}/>
                    </button>
                  </div>
              </div>


            </div>
          ))
        }
    </div>
  );
}

export default ProductDetail;
