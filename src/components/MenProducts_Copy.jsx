import './../App.css';
import { useContext } from 'react';
import StickyBar from './StickyBar';
import CartItemsContext from './CartItemsContext';
import ProductDetail from './ProductDetail';

function MenProducts() {

  const {cartItems, setCartItems} = useContext(CartItemsContext);

  const handleAddToCart = (title, color, size, price) => {
    const newItem = {
      title,
      color,
      size,
      price
    };
    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
  }

  // console.log(cartItems)

  const productsData = {
    "asaki": [
      {
        "_id": "1",
        // "title": "Asaki Active Quick Dry Tech Featherweight Stretchy Men's Tank Top",
        "title": "Asaki Stretchy Men's Tank Top",
        "src": {
          "Slate Grey": [
            "https://m.media-amazon.com/images/I/81sCIPP-3UL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81aG1ktz3+L._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91gjBw4+f5L._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81J6Af5sFEL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71T4SstZBjL._AC_UL1500_.jpg",
          ],
          "Anchor Grey": [
            "https://m.media-amazon.com/images/I/912DeR7RkJL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/81I8wrYmlAL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/91c1N4j4cLL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/81Xx+C6ix+L._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/71T4SstZBjL._AC_UX679_.jpg",
          ]
        },
        "description": "92% Polyester, 8% Elastane, Super Light Weight, Stretchable, 4-way stretch construction provides ultimate flexibility and maximum mobility in all directions, Breathable & Moisture wicking fabric accelerates sweat removal and keeps your body cool and dry",
        "price": 10,
        "colors": ["Slate Grey", "Anchor Grey"],
        "sizes": ["S", "M", "L", "XL", "2XL"],
        "count": 1,
      }
    ],
    "ascent": [
      {
        "_id": "2",
        // "title": "Ascent Vent Active Performance Power Cool Men's Training Tank Top",
        "title": "Ascent Vent Cool Men's Tank Top",
        "src": {
          "Teal Green": [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96693873_2937507696341841_3407574344807743488_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=nspDnd_NPkYAX_tpu9e&_nc_ht=scontent-lax3-1.xx&oh=00_AfA5GD9_DygRjD5VcitT8Pearn4EVbP6Ifzt7lwmijaRoQ&oe=64573C52",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95913366_3961858833855455_2199711193348702208_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=q1s2FC1xVQ0AX8FkYuH&_nc_ht=scontent-lax3-1.xx&oh=00_AfAfaYVozlX2VwWlgB7wyB7J7HCSiWgLL76H4vvNo0Rang&oe=6456BB94",
            "https://m.media-amazon.com/images/I/71T4SstZBjL._AC_UL1500_.jpg",
          ],
          "Yale Blue": [
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96437039_3032061936840746_5139628784340697088_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=R1HsB7ANsdkAX8RufIC&_nc_ht=scontent-lax3-2.xx&oh=00_AfCe2uVs001FRUE9lIguU22V0laNvwxjPXgCnXUYZcQWmw&oe=64577BCA",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97125632_3712944292109544_7979737803594399744_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=tfRw61180wwAX9WI3cd&_nc_ht=scontent-lax3-1.xx&oh=00_AfAdnU4T9uYoytmt9TRHtR7_N6a6WmcSgPy5m1QN-X6LEw&oe=64560974",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97125632_3302060799805063_4177401345185153024_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=nSfi4CSbXQEAX9Ai4tY&_nc_ht=scontent-lax3-1.xx&oh=00_AfDTWfn4fJ_GOmVJ1xt7HYQIt2MdYxflsoL6LhGvxnFpXw&oe=64566A44",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95928787_2955160967936021_4095560936633401344_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=9TEtNkCuTCIAX_oXRQE&_nc_ht=scontent-lax3-2.xx&oh=00_AfCbhzTB1svFH9tnqRcvw71il2qYzx1xrdn5o7ZJGYdCSQ&oe=645603B3",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97163367_2876488079113394_1216841497123487744_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=06qQ6AhyEM8AX_QbAp3&_nc_ht=scontent-lax3-2.xx&oh=00_AfBxWysGXF-6MaXkEqKCLasW4A1aJH5kqbto41hZXqRFrA&oe=6456ACBE",
          ]
        },
        "description": "44% Nylon, 43% Polyester, 13% Elastane, made with fast-drying fabric, designed to wick moisture from your skin. Stay dry and comfortable during high intensity exercise and never cut that workout short because of sweat.",
        "price": 10,
        "colors": ["Teal Green", "Yale Blue"],
        "sizes": ["S", "M", "L", "XL", "2XL"],
        "count": 1,
      }      
    ]
  }
  
  return (
    <>
    <StickyBar />
    <ProductDetail  product={productsData["asaki"]}
                    initialSelectedColor={productsData["asaki"][0].colors[0]}
                    initialSelectedSize={productsData["asaki"][0].sizes[0]}
                    initialSelectedImageIndex={0}
                    handleAddToCart={handleAddToCart}
    />
    <ProductDetail  product={productsData["ascent"]}
                    initialSelectedColor={productsData["ascent"][0].colors[0]}
                    initialSelectedSize={productsData["ascent"][0].sizes[0]}
                    initialSelectedImageIndex={0}
                    handleAddToCart={handleAddToCart}
    />
    </>    
  );
}

export default MenProducts;
