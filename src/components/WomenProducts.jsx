import "./../App.css";
import StickyBar from "./StickyBar";
import ProductDetail from "./ProductDetail";

function WomenProducts() {
  const productsData = {
    "fiora": {
      _id: "101",
      title: "Fiora Crossback Medium Support Sports Bra with removable pads",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/9y1ZPG3/DSC02419-PG-II.jpg",
            "https://i.ibb.co/L17Z6md/DSC02412-PG-II.jpg",
            "https://i.ibb.co/25r3JsM/DSC02401-PG-II.jpg",
            "https://i.ibb.co/pjhGfxQ/womens-sport-bra-size-chart.jpg",
          ],
        },
        {
          color: "Wine Red",
          urls: [
            "https://i.ibb.co/LzLw0kH/DSC00759-PG-II.jpg",
            "https://i.ibb.co/n3xcLNR/DSC00754-PG-II.jpg",
            "https://i.ibb.co/X2XVq52/DSC00758-PG-II.jpg",
            "https://i.ibb.co/pjhGfxQ/womens-sport-bra-size-chart.jpg",
          ],
        },
      ],
      description: [
        "93% Polyester, 7% Elastane", 
        "Medium Support Sports Bra Strategic support", 
        "Removable pads provide extra structure & coverage", 
        "Soft, elastic, 4-way stretchy, moisture wicking and super breathable, sliping seamlessly under your favorite tank or t-shirt", 
        "Built for high/medium-impact activity and all-day comfort", 
        "Lightweight, buttery-soft fabric wicks sweat and four-way stretch for a move-with-you feel", 
        "Criss-cross back straps and chafe-resistant flat lock seams let you twist with ease during your workout",
      ],
      price: 10,
      colors: ["Black", "Wine Red"],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    "embodi": {
      _id: "102",
      title: "Embodi Ventback Medium Support Sports Bra with removable pads",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/4KX66yJ/DSC04653-G.jpg",
            "https://i.ibb.co/Mp8pVn5/DSC04665-G.jpg",
            "https://i.ibb.co/23xnrSV/DSC04692-G.jpg",
            "https://i.ibb.co/pjhGfxQ/womens-sport-bra-size-chart.jpg",
          ],
        },
        {
          color: "Salmon Pink",
          urls: [
            "https://i.ibb.co/Vp1TphK/DSC05045-G2-II.jpg",
            "https://i.ibb.co/DY7s85d/DSC05116-G-II.jpg",
            "https://i.ibb.co/hBfXWzk/DSC05033-G-II.jpg",
            "https://i.ibb.co/pjhGfxQ/womens-sport-bra-size-chart.jpg",
          ],
        },
      ],
      description: [
        "93% Polyester, 7% Elastane", 
        "Medium Support Sports Bra, Removable pads provide extra structure & coverage", 
        "Soft, elastic, 4-way stretchy, moisture wicking", 
        "Built for high/medium-impact activity and all-day comfort", 
        "Ventilated back handles the hot steam and keep you cool and comfort during your active workout", 
        "Lightweight, chafe-resistant flat lock seams with buttery-soft fabric wicks sweat and four-way stretch for a move-with-you feel.",
      ],
      price: 10,
      colors: ["Black", "Salmon Pink"],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    "vaya": {
      _id: "103",
      title: "Vaya Women's Quick Dry Tank Top",
      images: [
        {
          color: "Ivory White",
          urls: [
            "https://i.ibb.co/sqXLgkj/DSC00908-G-II.jpg",
            "https://i.ibb.co/PZ7gxfZ/DSC00893-G-II.jpg",
            "https://i.ibb.co/JFxByHS/DSC00894-G-II.jpg",
            "https://i.ibb.co/jwnLhrp/DSC00896-G-II.jpg",
            "https://i.ibb.co/HFp4MwW/DSC00898-G-II.jpg",
            "https://i.ibb.co/NYjnc49/womens-vaya-tanktop-size-chart.jpg"
          ],
        },
        {
          color: "Flamingo Pink",
          urls: [
            "https://i.ibb.co/qn3vTLT/DSC02509-G2-II.jpg",
            "https://i.ibb.co/1LnQ0N0/DSC02528-G-II.jpg",
            "https://i.ibb.co/yp8TJSZ/DSC02513-G-II.jpg",
            "https://i.ibb.co/qJb63h0/DSC02519-G-II.jpg",
            "https://i.ibb.co/cT5tSRJ/DSC02506-G-II.jpg",
            "https://i.ibb.co/NYjnc49/womens-vaya-tanktop-size-chart.jpg",
          ],
        },
      ],
      description: [
        "91% Polyester, 9% Elastane", 
        "Soft, elastic, 4-way stretchy, moisture wicking", 
        "Made with a quick-dry fabric, designed to wick moisture fast",
        "Model in the photos – 5’3″, Bust 31.5″, Waist 26.7″, wears size S", 
      ],
      price: 10,
      colors: ["Ivory White", "Flamingo Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "ventup": {
      _id: "104",
      title: "Vent Up Women's Ventilated Quick Dry Tank Top",
      images: [
        {
          color: "Celeste Blue",
          urls: [
            "https://i.ibb.co/kgQzZHd/DSC00875-G-II.jpg",
            "https://i.ibb.co/B2f1ZGV/DSC00863-G-II.jpg",
            "https://i.ibb.co/1GYLgss/DSC00872-G-II.jpg",
            "https://i.ibb.co/r67VNNw/DSC00870-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/WcfrSTB/DSC05337-G-II.jpg",
            "https://i.ibb.co/sQgn8Cm/DSC05339-G-II.jpg",
            "https://i.ibb.co/Hx9QTvf/DSC05280-G-II.jpg",
            "https://i.ibb.co/k5L5nsy/DSC05306-G-II.jpg",
            "https://i.ibb.co/tC514Xw/DSC05299-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
      ],
      description: [
        "90% Polyester, 10% Elastane", 
        "Special Mesh design on the upper bust helps heat ventilation",
        "Soft, elastic, 4-way stretchy, moisture wicking", 
        "Made with a quick-dry fabric, designed to wick moisture fast",
        "Model for Black – 5’10”, Bust 33″, Waist 27″, wears size S", 
        "Model for Celeste Blue – 5’3″, Bust 31.5″, Waist 26.7″, wears size S", 
      ],
      price: 10,
      colors: ["Celeste Blue", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "epitome": {
      _id: "105",
      title: "Epitome Women's Stretchy Quick Dry Tank Top",
      images: [
        {
          color: "Slate Grey",
          urls: [
            "https://i.ibb.co/8D4Gc06/DSC05199-G-II.jpg",
            "https://i.ibb.co/7nCK1jY/DSC05230-G-II.jpg",
            "https://i.ibb.co/R4C0rhT/DSC05234-G-II.jpg",
            "https://i.ibb.co/6FVzJP9/DSC05263-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/gjW43sC/DSC05127-G-II.jpg",
            "https://i.ibb.co/0qP9svx/DSC05155-G-II.jpg",
            "https://i.ibb.co/XjZ3D0Y/DSC05188-G-II.jpg",
            "https://i.ibb.co/Cz9Ggd2/DSC05166-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
      ],
      description: [
        "90% Polyester, 10% Elastane", 
        "Special Mesh design on the upper bust helps heat ventilation",
        "Soft, elastic, 4-way stretchy, moisture wicking", 
        "Made with a quick-dry fabric, designed to wick moisture fast",
        "Model for Black – 5’10”, Bust 33″, Waist 27″, wears size S", 
        "Model for Celeste Blue – 5’3″, Bust 31.5″, Waist 26.7″, wears size S", 
      ],
      price: 10,
      colors: ["Slate Grey", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "essence": {
      _id: "106",
      title: "Essence Women's Stretchy Quick Dry Tank Top",
      images: [
        {
          color: "Peach Pink",
          urls: [
            "https://i.ibb.co/Tk6hByc/DSC05406-G-II.jpg",
            "https://i.ibb.co/G5C88bp/DSC05356-G-II.jpg",
            "https://i.ibb.co/0KRVVKB/DSC05375-G2-II.jpg",
            "https://i.ibb.co/wdDnqwK/DSC05391-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
      ],
      description: [
        "93% Polyester, 7% Elastane", 
        "Next-to-skin fit", 
        "Racerback design provides full range of motion", 
        "Soft, elastic, 4-way stretchy, moisture wicking", 
        "Made with a quick-dry fabric, designed to wick moisture fast",
        "Model in the photos – 5’10″, Bust 33″, Waist 27″, wears size S", 
      ],
      price: 10,
      colors: ["Peach Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "airstripe": {
      _id: "107",
      title: "Air Stripe Breathable Women's Short Sleeve Tee",
      images: [
        {
          color: "White",
          urls: [
            "https://i.ibb.co/0tthPRR/DSC05459-G-II.jpg",
            "https://i.ibb.co/gRV61d5/DSC05447-G-II.jpg",
            "https://i.ibb.co/XCSsXL3/DSC05443-G-II.jpg",
            "https://i.ibb.co/VMgs8Zd/DSC05424-G-II.jpg",
            "https://i.ibb.co/TbYxb7Z/DSC05460-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
        {
          color: "Salmon Pink",
          urls: [
            "https://i.ibb.co/nMVMtWH/DSC02503-G-II.jpg",
            "https://i.ibb.co/8Pp7KWb/DSC02495-G-II.jpg",
            "https://i.ibb.co/cy7yjf6/DSC02490-G2-II.jpg",
            "https://i.ibb.co/1RpP3hn/DSC02485-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
      ],
      description: [
        "86% Polyester, 14% Elastane", 
        "Ultra lightweight, soft touch and silky feel to give you 100% comfort",
        "Soft, elastic, 4-way stretchy, moisture wicking", 
        "Big curved v-neck for ultra comfort with 100% motion freedom and style with curved hem on the back", 
        "Reflective emblems for better visibility at low-light surroundings",
        "Made with a quick-dry fabric, designed to wick moisture fast",
        "Model for White – 5'10″, Bust 33″, Waist 27″, wears size S", 
        "Model for Salmon Pink – 5'3″, Bust 31.5″, Waist 26.7″, wears size S.", 
      ],
      price: 10,
      colors: ["White", "Salmon Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "distinct": {
      _id: "108",
      title: "Distinct Women's Short Sleeve Tee",
      images: [
        {
          color: "Celeste Blue",
          urls: [
            "https://i.ibb.co/bzpLD1q/DSC05621-G-II.jpg",
            "https://i.ibb.co/JrHrkhq/DSC05646-G-II.jpg",
            "https://i.ibb.co/R3Mffwx/DSC05680-G-II.jpg",
            "https://i.ibb.co/DrN3KR9/DSC05622-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/LvsZ57C/DSC05600-G1-II.jpg",
            "https://i.ibb.co/hXc36PG/DSC05580-G-II.jpg",
            "https://i.ibb.co/6nz360r/DSC05561-G-II.jpg",
            "https://i.ibb.co/G2hcCTr/DSC05587-G-II.jpg",
            "https://i.ibb.co/mXp0K8W/DSC05600-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
      ],
      description: [
        "80% Nylon, 20% Elastane, Silky feel, high quality Nylon fabric",
        "Big scoop neck design for flattering style, Reflective emblems for better visibility at low-light surroundings",
        "4-way stretchy, moisture wicking",
        "Model in the photos – 5’10″, Bust 33″, Waist 27″, wears size S"
      ],
      price: 10,
      colors: ["Celeste Blue", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "ava": {
      _id: "109",
      title: "Ava Women's Short Sleeve Tee",
      images: [
        {
          color: "Tiffany Blue",
          urls: [
            "https://i.ibb.co/2Kxyddc/DSC05488-G-II.jpg",
            "https://i.ibb.co/GHvd2sX/DSC05545-G-II.jpg",
            "https://i.ibb.co/fDWQLbq/DSC05496-G-II.jpg",
            "https://i.ibb.co/rZGPLwZ/DSC05534-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
        {
          color: "Pink",
          urls: [
            "https://i.ibb.co/C6Vgyx4/DSC02449-G-II.jpg",
            "https://i.ibb.co/QnnHQVB/DSC02435-G2-II.jpg",
            "https://i.ibb.co/R6xNWGW/DSC02433-G2-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
      ],
      description: [
        "93% Polyester, 7% Elastane",
        "Deep V neck for flattering style", 
        "Reflective emblems for better visibility at low-light surroundings",
        "4-way stretchy, moisture wicking",
        "Model for Tiffany Blue – 5’10″, Bust 33″, Waist 27″, wears size S",
        "Model for Pink –5’3″, Bust 31.5″, Waist 26.7″, wears size S",
      ],
      price: 10,
      colors: ["Tiffany Blue", "Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "express": {
      _id: "110",
      title: "Express Ventilated Women's Short Sleeve Tee",
      images: [
        {
          color: "Peach Pink",
          urls: [
            "https://i.ibb.co/LrVNLgR/DSC02384-G-II.jpg",
            "https://i.ibb.co/SwGHWTg/DSC02391-G-II.jpg",
            "https://i.ibb.co/v4GJq83/DSC02393-G-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/xX64wLX/DSC00734-PG-II.jpg",
            "https://i.ibb.co/ySS6N1x/DSC00738-PG-II.jpg",
            "https://i.ibb.co/CnjK9d5/DSC00736-PG-II.jpg",
            "https://i.ibb.co/YDDRhTM/womens-tanktop-size-chart.jpg",
          ],
        },
      ],
      description: [
        "93% Polyester, 7% Elastane",
        "Next-to-skin fit", 
        "Big scoop neck for thorough comfort", 
        "Developed mesh-structured material helps heat ventilation significantly", 
        "Reflective emblems for better visibility at low-light surroundings",
        "4-way stretchy, moisture wicking",
        "Model – 5'3″, Bust 31.5″, Waist 26.7″, wears size S",
      ],
      price: 10,
      colors: ["Peach Pink", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "agility": {
      _id: "111",
      title: "Agility 3″ Women's Running Short with Liner, Zipped Pocket",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/tKtQ2xb/DSC00998-G-II.jpg",
            "https://i.ibb.co/n84Sjyr/DSC06144-G-II.jpg",
            "https://i.ibb.co/MGvTbWn/DSC06151-G-II.jpg",
            "https://i.ibb.co/cgXn5Pn/DSC06182-G-II.jpg",
            "https://i.ibb.co/CzXtLM3/womens-shorts-size-chart.jpg",
          ],
        },
      ],
      description: [
        "Body: 100% Polyester, Liner: 93% Polyester/7% Elastane",
        "Soft & comfortable inner liner with Developed Draw string", 
        "Ultra lightweight, Breathable and moisture wicking to accelerate sweat removal and keep your body cool and dry", 
        "Hidden waistband drop pocket", 
        "Zipped pocket on the back keeps your essentials secure",
        "4-way stretchy, moisture wicking",
      ],
      price: 15,
      colors: ["Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "unwind": {
      _id: "112",
      title: "Unwind Lightweight Lounge Women's Pajama/Beach Short 2.5″",
      images: [
        {
          color: "Cloud Grey",
          urls: [
            "https://i.ibb.co/vZNkck0/DSC06124-G-II.jpg",
            "https://i.ibb.co/0G1KFZ1/DSC06097-G-III.jpg",
            "https://i.ibb.co/Pw34Qfj/DSC06124-G1-II.jpg",
            "https://i.ibb.co/CzXtLM3/womens-shorts-size-chart.jpg",
          ],
        },
      ],
      description: [
        "95% Polyester / 5% Elastane", 
        "Relaxed Fit, Ultra soft & comfortable, lounge-worthy",
        "Super soft and ightweight, Moisture wicking, Breathable & lightweight",
        "Enclosed elastic waistband",
        "4-way stretch construction provides ultimate free from limitation in all directions",
        "Designed for totally unlimted moves and comfortable for casual wears, sleepwear, pajamas or bathing suit coverups",
      ],
      price: 10,
      colors: ["Cloud Grey"],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      count: 1,
    },
    "liberty": {
      _id: "113",
      title: "Liberty Active Women's Quarter Zipped Long Sleeve Pullover with Thumb Holes",
      images: [
        {
          color: "Grey",
          urls: [
            "https://i.ibb.co/M54VVPW/DSC05700-G-II.jpg",
            "https://i.ibb.co/S5C7xrL/DSC05767-G22-II.jpg",
            "https://i.ibb.co/Lp1mrf0/DSC05797-G-II.jpg",
            "https://i.ibb.co/7VH2bs4/DSC05752-G-II.jpg",
            "https://i.ibb.co/GxqGbzj/DSC05825-G1.jpg",
            "https://i.ibb.co/fq5ByP2/womens-long-sleeve-tee-size-chart.jpg",
          ],
        },
      ],
      description: [
        "92% Polyester, 8% Elastane",
        "Stand up collar, fabric flap on top of zipper for a smooth feel on your chin",
        "Thumbholes design for extended coverage and keep the sleeves from shifting or flapping in the wind",
        "Ultra lightweight and Ultra soft to deliver 100% comfor",
        "Super soft and ightweight, Moisture wicking, Breathable & lightweight",
        "quarter zip design lets you adjust for the right amount of ventilation, while allowing you to keep covered when you transition to post-run plans",
        "4-way stretch construction provides ultimate free from limitation in all directions",
        "Stand up collar, fabric flap on top of zipper for a smooth feel on your chin",
      ],
      price: 23,
      colors: ["Grey"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "outline": {
      _id: "114",
      title: "Outline Women's Ultra Soft Lightweight Full Zip Jacket with Zipper Pockets and Thumb Holes",
      images: [
        {
          color: "Heather Blue",
          urls: [
            "https://i.ibb.co/BqjJXCz/DSC05991-G-II.jpg",
            "https://i.ibb.co/Y89TjLk/DSC05888-G-II.jpg",
            "https://i.ibb.co/rcY28Sk/DSC05863-G-II.jpg",
            "https://i.ibb.co/yft1B7y/DSC06053-G-II.jpg",
            "https://i.ibb.co/Tks2qDQ/DSC05953-G-II.jpg",
            "https://i.ibb.co/zx9rZv3/DSC05995-G-II.jpg",
            "https://i.ibb.co/fq5ByP2/womens-long-sleeve-tee-size-chart.jpg",
          ],
        },
      ],
      description: [
        "92% Polyester, 8% Elastane",
        "Thumb hole design to increase hand coverage and warmth and a side pocket where you can stash your belongings while running or working out",
        "Super lightweight so you can wear as an outer-layer for spring/fall or mid-layer for winter",
        "Soft fluffy texture on inner surface keeps you warm and provides you with a super soft layer of warmth without overheating or preventing ventilation",
        "Model – 5’10″, Bust 33″, Waist 27″, wears size S.",
      ],
      price: 27,
      colors: ["Heather Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "stream": {
      _id: "115",
      title: "Stream Compression High-Rise Zipped Pocket Women's Leggings 26″",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/6JxmTTB/DSC04780-G2-II.jpg",
            "https://i.ibb.co/XYyhFv1/DSC04738-G2-II.jpg",
            "https://i.ibb.co/34nHJxT/DSC04722-G2-II.jpg",
            "https://i.ibb.co/5W7czW7/DSC04764-G-II.jpg",
            "https://i.ibb.co/BGVVvNr/DSC04702-G-II.jpg",
            "https://i.ibb.co/Byc7VCr/womens-leggings-size-chart.jpg",
          ],
        },
      ],
      description: [
        "75% Polyester/25% Elastane",
        "High-Rise, Inseam 26″",
        "Soft, comfortable & lightweight to let you focus on your activities",
        "High-waisted design provides additional coverage for more thorough support", 
        "Next-to-skin hug follows your every move",
        "Zipper back pocket designed into waistband",
        "Hidden waistband pocket on the front provides a handy storage space for small items",
        "Reflective emblem for better visibility at low-light surroundings",
      ],
      price: 15,
      colors: ["Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "outreach": {
      _id: "116",
      title: "Outreach Performance Compression High-Rise Zipped Pocket Women's Leggings 26″",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/fG2yn8f/DSC04976-G-II.jpg",
            "https://i.ibb.co/CW9QX3M/DSC04918-PG-II.jpg",
            "https://i.ibb.co/C7vN363/DSC04940-PG-II.jpg",
            "https://i.ibb.co/zNHWs3f/DSC05000-G-II.jpg",
            "https://i.ibb.co/1bm5rTV/DSC04897-G-II.jpg",
            "https://i.ibb.co/J31JYFh/DSC05021-G-II.jpg",
            "https://i.ibb.co/Byc7VCr/womens-leggings-size-chart.jpg",
          ],
        },
      ],
      description: [
        "70% Nylon/30% Elastane",
        "High-Rise, Inseam 26″",
        "Locked-in compression let you feel supported through every move",
        "Draw string provides double security",
        "High-waisted design provides additional coverage for more thorough support", 
        "No see-thru guaranteed so that you can move without worries",
        "Side stash pockets provide additional storage space",
        "Zipper back pocket designed into waistband",
        "Hidden waistband pocket on the front provides a handy storage space for small items",
        "Reflective emblem for better visibility at low-light surroundings",
      ],
      price: 15,
      colors: ["Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "fusion": {
      _id: "117",
      title: "Fusion Compression Performance Mid-Rise Zipped Pocket Women's Crops 24″",
      images: [
        {
          color: "Black",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97220591_2946387365475038_371774666949263360_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=bXaBa4LMZf8AX8N8sdM&_nc_ht=scontent-lax3-1.xx&oh=00_AfBwrKRRZjJAsaU-YCca07VtwQYg1l3Csf6ZZNe90pNBfw&oe=645FF124",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97041966_2942329669207403_6233115281670012928_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=QeKLni2mUGoAX9jDOxZ&_nc_ht=scontent-lax3-2.xx&oh=00_AfDYIDSyx4yHx3d-d1D09iVq9tG5bbnInnU19IIolykTFg&oe=64619624",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97232142_4409939865698216_3762193336123785216_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=woy9puIc66kAX-OZ8G1&_nc_ht=scontent-lax3-2.xx&oh=00_AfDuGFncbFLtGIBEeHfB1wG27W-xFweLo27KfTO4CAwGrA&oe=646198C0",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97130436_3389450037749023_1036079178471964672_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=hH3th35m3UkAX-FmM9a&_nc_ht=scontent-lax3-1.xx&oh=00_AfAit4xLLrkDPLBDYzugs-9a-JYxoiOxRDL0PyLK6JSN5g&oe=645FF42C",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97215794_3001924736595194_7232829161025306624_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=mqPtsZiZbCAAX_gbDbS&_nc_ht=scontent-lax3-2.xx&oh=00_AfC04oEkQK3sQvxZxhNx0c_7YQrNTX05mNP9UYSTfc-9zQ&oe=646109F2",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97146503_3876953655680657_1865584972765593600_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=qEAfRP2_2_AAX_7y_1v&_nc_ht=scontent-lax3-2.xx&oh=00_AfB783adLilLKnrqzLXI_SEwhiDWJXy6hU8z5zEo0Vdhpw&oe=64605D6B",
          ],
        },
      ],
      description: [
        "70% Nylon/30% Elastane",
        "Mid-Rise, Inseam 24″",
        "Locked-in compression let you feel supported through every move",
        "Draw string provides double security",
        "No see-thru guaranteed so that you can move without worries",
        "Zipper back pocket designed into waistband",
        "Hidden waistband pocket on the front provides a handy storage space for small items",
        "4-way stretch, moisture wicking",
        "Reflective emblem for better visibility at low-light surroundings",
      ],
      price: 14,
      colors: ["Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
    "spark": {
      _id: "118",
      title: "Spark Compression Performance High-Rise Zipped Pocket Women's Crops 21″",
      images: [
        {
          color: "Black",
          urls: [
            "https://i.ibb.co/mX9Dzkm/DSC00655-P2-G-II.jpg",
            "https://i.ibb.co/cN6gxyT/DSC00644-PG-II.jpg",
            "https://i.ibb.co/jWLvjhy/DSC00666-G2-II.jpg",
            "https://i.ibb.co/GTGczCR/DSC00664-PG.jpg",
            "https://i.ibb.co/rMTP4JV/DSC04879-PG.jpg",
            "https://i.ibb.co/Byc7VCr/womens-leggings-size-chart.jpg",
          ],
        },
      ],
      description: [
        "70% Nylon/30% Elastane",
        "High-Rise, Inseam 21″",
        "Locked-in compression let you feel supported through every move",
        "High-waisted design provides additional coverage for more thorough support",
        "Draw string provides double security",
        "No see-thru guaranteed so that you can move without worries",
        "Zipper back pocket designed into waistband",
        "Hidden waistband pocket on the front provides a handy storage space for small items",
        "4-way stretch, moisture wicking",
        "Reflective emblem for better visibility at low-light surroundings",
      ],
      price: 14,
      colors: ["Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      count: 1,
    },
  };

  return (
    <>
      <StickyBar />
      <ProductDetail
        product={productsData["fiora"]}
        initialSelectedColor={productsData["fiora"].colors[0]}
        initialSelectedSize={productsData["fiora"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["embodi"]}
        initialSelectedColor={productsData["embodi"].colors[0]}
        initialSelectedSize={productsData["embodi"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["vaya"]}
        initialSelectedColor={productsData["vaya"].colors[0]}
        initialSelectedSize={productsData["vaya"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["ventup"]}
        initialSelectedColor={productsData["ventup"].colors[0]}
        initialSelectedSize={productsData["ventup"].sizes[0]}
        initialSelectedImageIndex={0}
      />  
      <ProductDetail
        product={productsData["epitome"]}
        initialSelectedColor={productsData["epitome"].colors[0]}
        initialSelectedSize={productsData["epitome"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["essence"]}
        initialSelectedColor={productsData["essence"].colors[0]}
        initialSelectedSize={productsData["essence"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["airstripe"]}
        initialSelectedColor={productsData["airstripe"].colors[0]}
        initialSelectedSize={productsData["airstripe"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["distinct"]}
        initialSelectedColor={productsData["distinct"].colors[0]}
        initialSelectedSize={productsData["distinct"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["ava"]}
        initialSelectedColor={productsData["ava"].colors[0]}
        initialSelectedSize={productsData["ava"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["express"]}
        initialSelectedColor={productsData["express"].colors[0]}
        initialSelectedSize={productsData["express"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["agility"]}
        initialSelectedColor={productsData["agility"].colors[0]}
        initialSelectedSize={productsData["agility"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["unwind"]}
        initialSelectedColor={productsData["unwind"].colors[0]}
        initialSelectedSize={productsData["unwind"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["liberty"]}
        initialSelectedColor={productsData["liberty"].colors[0]}
        initialSelectedSize={productsData["liberty"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["outline"]}
        initialSelectedColor={productsData["outline"].colors[0]}
        initialSelectedSize={productsData["outline"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["stream"]}
        initialSelectedColor={productsData["stream"].colors[0]}
        initialSelectedSize={productsData["stream"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["outreach"]}
        initialSelectedColor={productsData["outreach"].colors[0]}
        initialSelectedSize={productsData["outreach"].sizes[0]}
        initialSelectedImageIndex={0}
      />
      <ProductDetail
        product={productsData["spark"]}
        initialSelectedColor={productsData["spark"].colors[0]}
        initialSelectedSize={productsData["spark"].sizes[0]}
        initialSelectedImageIndex={0}
      />
    </>
  );
}

export default WomenProducts;
