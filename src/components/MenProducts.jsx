import "./../App.css";
import StickyBar from "./StickyBar";
import ProductDetail from "./ProductDetail";

function MenProducts() {
  const productsData = {
    asaki: {
      _id: "1",
      title: "Asaki Stretchy Men's Tank Top",
      images: [
        {
          color: "Slate Grey",
          urls: [
            "https://m.media-amazon.com/images/I/81sCIPP-3UL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81aG1ktz3+L._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91gjBw4+f5L._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81J6Af5sFEL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71T4SstZBjL._AC_UL1500_.jpg",
          ],
        },
        {
          color: "Anchor Grey",
          urls: [
            "https://m.media-amazon.com/images/I/912DeR7RkJL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/81I8wrYmlAL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/91c1N4j4cLL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/81Xx+C6ix+L._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/71T4SstZBjL._AC_UX679_.jpg",
          ],
        },
      ],
      description: [
        "92% Polyester, 8% Elastane", 
        "Super Light Weight, Stretchable", 
        "4-way stretch construction provides ultimate flexibility and maximum mobility in all directions", 
        "Breathable & Moisture wicking fabric accelerates sweat removal and keeps your body cool and dry",
      ],
      price: 10,
      colors: ["Slate Grey", "Anchor Grey"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    ascent: {
      _id: "2",
      title: "Ascent Vent Performance Cool Men's Tank Top",
      images: [
        {
          color: "Teal Green",
          urls: [
            "https://i.ibb.co/1RqwmGY/DSC02688-WB-II.jpg",
            "https://i.ibb.co/JFBkchT/DSC03634-WB-II.jpg",
            "https://i.ibb.co/wMZJS83/DSC03652-G-CUTOUT.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
        {
          color: "Yale Blue",
          urls: [
            "https://i.ibb.co/BcM7zwb/DSC00274-2-PG-R80-II.jpg",
            "https://i.ibb.co/RbZxmNL/DSC00262-PP-R80-II.jpg",
            "https://i.ibb.co/M9QhnTK/DSC00266-PG31-II.jpg",
            "https://i.ibb.co/FWWSLPC/DSC00273-PG3-II.jpg",
            "https://i.ibb.co/5Wvt8KX/DSC04423-G-R80-II.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
      ],
      description: [
        "44% Nylon, 43% Polyester, 13% Elastane", 
        "Made with fast-drying fabric, designed to wick moisture from your skin", 
        "Stay dry and comfortable during high intensity exercise and never cut that workout short because of sweat.",
      ],
      price: 10,
      colors: ["Teal Green", "Yale Blue"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    sprintin: {
      _id: "3",
      title: "Sprintin Men's Quick Dry V-Neck Tee",
      images: [
        {
          color: "Oxford Blue",
          urls: [
            "https://i.ibb.co/SmwG9rq/DSC01130-G-II.jpg",
            "https://i.ibb.co/bKGY6wQ/DSC01132-G-II.jpg",
            "https://i.ibb.co/pZQRMRQ/DSC01139-G-II.jpg",
            "https://i.ibb.co/VtpJFfj/DSC01146-G.jpg",
            "https://i.ibb.co/T1h2xHc/DSC01147-G-II.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/YL1prHx/DSC04303-G-II.jpg",
            "https://i.ibb.co/5WPq8zY/DSC04292-G-II.jpg",
            "https://i.ibb.co/kqny9KB/DSC04289-G-II.jpg",
            "https://i.ibb.co/hVXvT92/DSC04290-G-II.jpg",
            "https://i.ibb.co/XXB8cgG/DSC04299-G-II.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
      ],
      description: [
        "87% Nylon, 13% Elastane, Quick Dry Tech, Regular Fit, V-neck",
        "Dry-Fit Tech Material is cool and soft to skin",
        "Moisture wicking fabric is quick-drying, ultra-soft & has a soft feel, keeping you comfortable through any athletic activity."
      ],
      price: 10,
      colors: ["Oxford Blue", "Black"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    unlock: {
      _id: "4",
      title: "Unlock Athletic Men's Featherweight Power Cool Tee",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/w0NF54w/DSC04509-G-II.jpg",
            "https://i.ibb.co/4s6ckVL/DSC04510-G-II.jpg",
            "https://i.ibb.co/Hd6vjjX/DSC04527-G-II.jpg",
            "https://i.ibb.co/T4b2tPf/DSC04517-G-II.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
        {
          color: "Midnight Blue",
          urls: [
            "https://i.ibb.co/zNvg1wR/DSC00276-P2-G-II.jpg",
            "https://i.ibb.co/2twzzPS/DSC00294-P2-G-II.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
      ],
      description: [
        "100% Polyester", 
        "Quick Dry Tech, Loose Fit, Crewneck", 
        "Breathable & Moisture wicking fabric accelerates sweat removal"
      ],
      price: 10,
      colors: ["Black", "Midnight Blue"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    mission: {
      _id: "5",
      title: "Mission Athletic Men's Running Short Ultra Lightweight with Zipped Pocket 8'",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/P5BqKRM/DSC00430-PG3-II.jpg",
            "https://i.ibb.co/r248tqj/DSC00421-PG3-II.jpg",
            "https://i.ibb.co/yWB8ws9/DSC00417-PG3-II.jpg",
            "https://i.ibb.co/XJ50szz/DSC01152-G3-II.jpg",
            "https://i.ibb.co/YZpK5Cr/DSC01158-G3-II.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
        {
          color: "Prussian Blue",
          urls: [
            "https://i.ibb.co/WxWk898/DSC00406-PG3-II.jpg",
            "https://i.ibb.co/MChP8Qd/DSC00403-PG3-II.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
      ],
      description: [
        "Zipper closure",
        "8' inseam, Encased draw string, ultra lightweight",
        "Breathable & Moisture wicking fabric accelerates sweat removal and keeps your body cool and dry",
        "Developed soft waistband keeps you comfort",
        "open hand pocket with one-sided zipped pocket to keep you handy and have your essentials secure amid intense activities",
        "Reflective elements for better visibility at low-light surroundings"
      ],
      price: 10,
      colors: ["Black", "Prussian Blue"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    classic: {
      _id: "6",
      title: "Classic Athletic Men's Training Short 8.5'",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/gw3yzZ9/DSC04274-G-II.jpg",
            "https://i.ibb.co/ckry2WV/DSC04282-G-II.jpg",
            "https://i.ibb.co/NSS1shN/DSC04277-G-II.jpg",
            "https://i.ibb.co/ZVfX4q6/DSC04271-G-II.jpg",
            "https://i.ibb.co/vjBwGnX/DSC04256-G-II.jpg",
            "https://i.ibb.co/nC7G8cW/mens-tank-top-size-chart.jpg",
          ],
        },
      ],
      description: [
        "90% Polyester, 10% Elastane",
        "8.5' inseam, Encased draw string",
        "Breathable & Moisture wicking fabric accelerates sweat removal and keeps your body cool and dry",
        "Developed soft waistband keeps you comfort",
        "Open hand Power Mesh Cooling pockets providing perfect ventelation cooling system",
        "Reflective elements for better visibility at low-light surroundings"
      ],
      price: 10,
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    crossoverSSS: {
      _id: "7",
      title: "Crossover Performance Compression Men's Short Sleeve Shirt",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/wpPRSJ6/DSC00147-PG3-II.jpg",
            "https://i.ibb.co/Lkmcf70/DSC00139-PG3-II.jpg",
            "https://i.ibb.co/Js34QgK/DSC00138-PG3-II.jpg",
            "https://i.ibb.co/hY5q4xp/DSC02821-G-II.jpg",
            "https://i.ibb.co/t8zghVF/mens-compression-size-chart.jpg",
          ],
        },
      ],
      description: [
        "88% Polyester, 12% spandex",
        "Designed to hug the body snugly to compress core muscles from vibration, regulate body temperature and aid recovery", 
        "High-performance Compression for Body shaping",
        "Locked-down compression let you feel supported through every move",
        "Breathable & Moisture wicking fabric, 4-way stretch"
      ],
      price: 10,
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    crossoverLSS: {
      _id: "8",
      title: "Crossover Performance Compression Men's Long Sleeve Shirt",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/QbJfYxG/DSC00194-PG3-B-III.jpg",
            "https://i.ibb.co/dDGDvcR/DSC00199-P-G3-III.jpg",
            "https://i.ibb.co/bLJcvwM/DSC00196-P-G3-III.jpg",
            "https://i.ibb.co/1KLk8tW/DSC02815-G-II.jpg",
            "https://i.ibb.co/t8zghVF/mens-compression-size-chart.jpg",
          ],
        },
      ],
      description: [
        "88% Polyester, 12% spandex",
        "Designed to hug the body snugly to compress core muscles from vibration, regulate body temperature and aid recovery", 
        "High-performance Compression for Body shaping",
        "Locked-down compression let you feel supported through every move",
        "Breathable & Moisture wicking fabric, 4-way stretch"
      ],
      price: 10,
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    crossoverT: {
      _id: "9",
      title: "Crossover Performance Compression 25' Men's Tights",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/mBNGFJY/DSC00346-G3-II.jpg",
            "https://i.ibb.co/XJKkghN/DSC00353-G3-II.jpg",
            "https://i.ibb.co/k28QZQ3/DSC00357-G3-II.jpg",
            "https://i.ibb.co/X744QmS/DSC00359-G3-II.jpg",
            "https://i.ibb.co/ck0qN8J/mens-compression-tights-size-chart.jpg",
          ],
        },
      ],
      description: [
        "Inseam 25″, 88% Polyester/12% Elastane", 
        "Smooth chafe-free flatlock seam and tagless design help move better and reduce irritation",
        "Developed soft waistband keeps you comfort",
        "Designed to hug the body snugly to compress core muscles from vibration, regulate body temperature and aid recovery", 
        "High-performance Compression for Body shaping",
        "Locked-down compression let you feel supported through every move",
        "Breathable & Moisture wicking fabric, 4-way stretch"
      ],
      price: 10,
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    motion: {
      _id: "10",
      title: "Motion Performance Compression 21' Men's Tights",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/N6yXCYD/DSC00467-PG3-II.jpg",
            "https://i.ibb.co/JR1hbVP/DSC00454-P2-G3-II.jpg",
            "https://i.ibb.co/DMC846v/DSC00460-P-G3-II.jpg",
            "https://i.ibb.co/nPN7Kbj/DSC00458-PG3-II.jpg",
            "https://i.ibb.co/ck0qN8J/mens-compression-tights-size-chart.jpg",
          ],
        },
      ],
      description: [
        "Inseam 21″, 88% Polyester/12% Elastane", 
        "Smooth chafe-free flatlock seam and tagless design help move better and reduce irritation",
        "Developed soft waistband keeps you comfort",
        "Designed to hug the body snugly to compress core muscles from vibration, regulate body temperature and aid recovery", 
        "High-performance Compression for Body shaping",
        "Locked-down compression let you feel supported through every move",
        "Breathable & Moisture wicking fabric, 4-way stretch"
      ],
      price: 10,
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    rapid: {
      _id: "11",
      title: "Rapid Men's Active Quick Dry Running Performance Quarter Zipped Long Sleeve Top",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/BcQkVVs/DSC04311-GPP.jpg",
            "https://i.ibb.co/CJSFrB7/DSC04314-GPP.jpg",
            "https://i.ibb.co/6tc1GSm/DSC04321-GPP.jpg",
            "https://i.ibb.co/WD7xDLm/DSC04326-GPP.jpg",
            "https://i.ibb.co/jMDtRrR/mens-long-sleeve-size-chart.jpg",
          ],
        },
      ],
      description: [
        "100% Polyester, Zipper closure", 
        "This dry fit pullovers are made from high quality 100% Polyester quality fabric that wicks moisture away from your skin to keep you dry even on high performance activities.",
        "Featured thermal long sleeves and crew neck that provide more coverage from the heat of the sun or the coolness of the wind.",
        "Smooth and stretchy polyester fabric features a quarter zipper front for added ventilation as you go outdoors.", 
        "Thumbhole design to provide extended coverage",
        "Breathable & Moisture wicking fabric, 4-way stretch"
      ],
      price: 20,
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    touch: {
      _id: "12",
      title: "Touch Comfort Quick Dry Pullover Tri-Blend Long Sleeve Shirt",
      images: [
        {
          color: "Grey",
          urls: [
            "https://i.ibb.co/6R2MgTT/DSC00322-PG3-II.jpg",
            "https://i.ibb.co/4J6vgdc/DSC00324-PG3-II.jpg",
            "https://i.ibb.co/KxgL8CZ/DSC00336-PG3-II.jpg",
            "https://i.ibb.co/yVmnND7/DSC00331-PG3-II.jpg",
            "https://i.ibb.co/Ny1m5WM/DSC00333-G3-II.jpg",
            "https://i.ibb.co/jMDtRrR/mens-long-sleeve-size-chart.jpg",
          ],
        },
      ],
      description: [
        "29% Cotton, 66% Polyester, 5% Elastane",
        "Lightweight cotton blend provides premium softness",
        "Quick-Dry moisture wicking technology keeps you cool and dry",
        "Odor protection helps to keep fabric fresh",
        "Tag free for comfort, UPF 30+ provides protection from harmful UV rays",
      ],
      price: 15,
      colors: ["Grey"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      count: 1,
    },
  };

  return (
    <>
      <StickyBar />
      <ProductDetail
        product={productsData["asaki"]}
        initialSelectedColor={productsData["asaki"].colors[0]}
        initialSelectedSize={productsData["asaki"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["ascent"]}
        initialSelectedColor={productsData["ascent"].colors[0]}
        initialSelectedSize={productsData["ascent"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["sprintin"]}
        initialSelectedColor={productsData["sprintin"].colors[0]}
        initialSelectedSize={productsData["sprintin"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["unlock"]}
        initialSelectedColor={productsData["unlock"].colors[0]}
        initialSelectedSize={productsData["unlock"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["mission"]}
        initialSelectedColor={productsData["mission"].colors[0]}
        initialSelectedSize={productsData["mission"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["classic"]}
        initialSelectedColor={productsData["classic"].colors[0]}
        initialSelectedSize={productsData["classic"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["crossoverSSS"]}
        initialSelectedColor={productsData["crossoverSSS"].colors[0]}
        initialSelectedSize={productsData["crossoverSSS"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["crossoverLSS"]}
        initialSelectedColor={productsData["crossoverLSS"].colors[0]}
        initialSelectedSize={productsData["crossoverLSS"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["crossoverT"]}
        initialSelectedColor={productsData["crossoverT"].colors[0]}
        initialSelectedSize={productsData["crossoverT"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["motion"]}
        initialSelectedColor={productsData["motion"].colors[0]}
        initialSelectedSize={productsData["motion"].sizes[0]}
        initialSelectedImageIndex={0}
      />     
      <ProductDetail
        product={productsData["rapid"]}
        initialSelectedColor={productsData["rapid"].colors[0]}
        initialSelectedSize={productsData["rapid"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["touch"]}
        initialSelectedColor={productsData["touch"].colors[0]}
        initialSelectedSize={productsData["touch"].sizes[0]}
        initialSelectedImageIndex={0}
      />    
    </>
  );
}

export default MenProducts;
