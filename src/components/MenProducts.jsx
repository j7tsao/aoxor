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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96693873_2937507696341841_3407574344807743488_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=nspDnd_NPkYAX_tpu9e&_nc_ht=scontent-lax3-1.xx&oh=00_AfA5GD9_DygRjD5VcitT8Pearn4EVbP6Ifzt7lwmijaRoQ&oe=64573C52",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95913366_3961858833855455_2199711193348702208_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=q1s2FC1xVQ0AX8FkYuH&_nc_ht=scontent-lax3-1.xx&oh=00_AfAfaYVozlX2VwWlgB7wyB7J7HCSiWgLL76H4vvNo0Rang&oe=6456BB94",
            "https://m.media-amazon.com/images/I/71T4SstZBjL._AC_UL1500_.jpg",
          ],
        },
        {
          color: "Yale Blue",
          urls: [
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96437039_3032061936840746_5139628784340697088_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=R1HsB7ANsdkAX8RufIC&_nc_ht=scontent-lax3-2.xx&oh=00_AfCe2uVs001FRUE9lIguU22V0laNvwxjPXgCnXUYZcQWmw&oe=64577BCA",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97125632_3712944292109544_7979737803594399744_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=tfRw61180wwAX9WI3cd&_nc_ht=scontent-lax3-1.xx&oh=00_AfAdnU4T9uYoytmt9TRHtR7_N6a6WmcSgPy5m1QN-X6LEw&oe=64560974",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97125632_3302060799805063_4177401345185153024_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=nSfi4CSbXQEAX9Ai4tY&_nc_ht=scontent-lax3-1.xx&oh=00_AfDTWfn4fJ_GOmVJ1xt7HYQIt2MdYxflsoL6LhGvxnFpXw&oe=64566A44",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95928787_2955160967936021_4095560936633401344_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=9TEtNkCuTCIAX_oXRQE&_nc_ht=scontent-lax3-2.xx&oh=00_AfCbhzTB1svFH9tnqRcvw71il2qYzx1xrdn5o7ZJGYdCSQ&oe=645603B3",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97163367_2876488079113394_1216841497123487744_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=06qQ6AhyEM8AX_QbAp3&_nc_ht=scontent-lax3-2.xx&oh=00_AfBxWysGXF-6MaXkEqKCLasW4A1aJH5kqbto41hZXqRFrA&oe=6456ACBE",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/98012334_2885414281536766_287747188035944448_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=1ipuipYz_aQAX8uA0fI&_nc_oc=AQm__lHtsEKsANE9Z_c7czm-UQIyW3JGS49dxyye_2n_CbkEQzSJrJdwavZNFvZpr37fYRQum9lX9uOseqr-Ce_C&_nc_ht=scontent-lax3-2.xx&oh=00_AfDznrd9OFslO26sYEspLBdNXVkMe00wYaT_BALrUujmJA&oe=6460DE62",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96493174_4137102689641188_7671481085863133184_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=YTWNHtJH_-oAX_R4nW6&_nc_ht=scontent-lax3-2.xx&oh=00_AfBJ70vBzbs1lNtJzw47NdX9CQkEEgq5Owcpwk7hQ4-kWg&oe=64611851",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95707657_2888750537829339_5296028412106768384_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=BclSrOT-zBAAX8Q1Q6x&_nc_ht=scontent-lax3-1.xx&oh=00_AfBqIrzgKooEfUPDpVfy9HlP3s87JhPNo3E1cl5QmmbThA&oe=645FE650",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96418768_2963740557038175_7979551333294276608_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=1LAKFXNh-RkAX_AojwR&_nc_ht=scontent-lax3-2.xx&oh=00_AfA6K1fC3WBLlzAtWrsAVObxa7kqYTVYRp7XD5yXDj2cDQ&oe=646033E7",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95820515_2921611867961754_6322912559519236096_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GMyexsCRlkAAX9US3DU&_nc_ht=scontent-lax3-2.xx&oh=00_AfAA012I57UXcNbSGypf2S-jP4L66va4_bT6p-D5Wkh10Q&oe=6460DA38",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97150444_2979457652135594_7542662376567341056_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=q8nrrgwTC6QAX9SUoaa&_nc_ht=scontent-lax3-2.xx&oh=00_AfCW22WeccwZF_J-u-Q300fQYwyjhWj1WvjCrTdwk7Ktxg&oe=645F5A3C",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96942111_3832493490157386_260440176810000384_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=szP2xdi2lqQAX-IL2K6&_nc_ht=scontent-lax3-1.xx&oh=00_AfDSE0nSuycq1PT8tS0yT6-cEXLKyo-DuUZdkLbneLNlYQ&oe=6460DBD6",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96514428_4146038365421186_6669560516735664128_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9ab401&_nc_ohc=nCtD9SnRV20AX8b-KNl&_nc_ht=scontent-lax3-2.xx&oh=00_AfBRzGriijhJYOVJKHSncUSVePGo-cyqSOBR0mAsdhua_g&oe=6460F38C",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95898832_3015473135209309_6885496908144443392_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=DSfMwDHHyGYAX-YBlG7&_nc_ht=scontent-lax3-1.xx&oh=00_AfAuKmAsvZo_pRfxYJyYBQ_sJR5b_rSFHj7xyobFtS5BRQ&oe=64609FD9",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95820515_2921611867961754_6322912559519236096_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GMyexsCRlkAAX9US3DU&_nc_ht=scontent-lax3-2.xx&oh=00_AfAA012I57UXcNbSGypf2S-jP4L66va4_bT6p-D5Wkh10Q&oe=6460DA38",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96320921_2957851570970588_4708735365735776256_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=7jETzNmokfIAX8ZIJ-c&_nc_ht=scontent-lax3-1.xx&oh=00_AfDfWshoNL-wf6GZ9KpevTycVnUcOlbhcyjHlZ0RQ50lyw&oe=645F7895",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96341175_3083633751694569_4835300613065539584_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9ab401&_nc_ohc=3xJFpLiUhg0AX9v5E6_&_nc_ht=scontent-lax3-2.xx&oh=00_AfBluCHI7uzcYgL-ZBiuzxYu_k-_nImIlJBG3gs1Ciko-Q&oe=645F9162",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96821847_3082528191807467_7941375164296462336_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=dphaVrQuLhQAX_KL9zW&_nc_ht=scontent-lax3-2.xx&oh=00_AfDuAhG6ZnnCMAJiyWGPuzDtXv5fRrCNgMuPUmIhVE29_w&oe=64610A6D",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97815451_3854768164597447_8801886550838214656_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=jycWB1g4168AX9CMblG&_nc_ht=scontent-lax3-1.xx&oh=00_AfAt4F5aftyXhKgEntgAxSapqegmpFS3N56PjiwWjemezg&oe=64611BC5",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95820515_2921611867961754_6322912559519236096_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GMyexsCRlkAAX9US3DU&_nc_ht=scontent-lax3-2.xx&oh=00_AfAA012I57UXcNbSGypf2S-jP4L66va4_bT6p-D5Wkh10Q&oe=6460DA38",
          ],
        },
        {
          color: "Midnight Blue",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97781937_3080918128640335_6042695621679251456_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Oxf8Isow3ukAX-jjT2U&_nc_ht=scontent-lax3-1.xx&oh=00_AfDo7z3MwLTsLXFi2u-Hq494YX3CTaPDiDCQBA73KwZAgA&oe=646013EA",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96229875_3779126095492230_3910328733847781376_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9ab401&_nc_ohc=ZdxsrvOYSykAX-ZA0jb&_nc_ht=scontent-lax3-2.xx&oh=00_AfD72RuaAYaabeA6fVz0nJ262sOr69P6w4S3Kfng_W57Mg&oe=645F6492",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96214816_3007555772642091_756085694895489024_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=YbmuwueT4vEAX8HqEUI&_nc_ht=scontent-lax3-2.xx&oh=00_AfAOdx4cext5zqOFWsHNP0CdFtUe-jWruruRl69e4JwFxA&oe=6460BFA9",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96292161_3154280847924356_2078482838021210112_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=qds8-oEYdAQAX_lOJzZ&_nc_ht=scontent-lax3-1.xx&oh=00_AfB7DAe_Hyzsy1OiJMhDev2rOMxM_RLXSIzxqFBNDePIcQ&oe=6460A8BB",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96196959_3211410822226075_6003619261895933952_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=AzSuJeq5zqcAX8E6Vj6&_nc_ht=scontent-lax3-1.xx&oh=00_AfDLpDSjIXbFp9O61JxRXAItGekh3MvGtFwktRJECs04sw&oe=6460AE42",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96537435_3299771380047471_3944067462894452736_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=xmHXSaBLwBEAX-1jAuZ&_nc_ht=scontent-lax3-1.xx&oh=00_AfAswyaxsK3qC5JYr12HNt7B93vFLlJR0B9jurX_OsdjYw&oe=64601A91",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97775298_3251019908261675_490794305280016384_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=k-G3cXnu24MAX9lM0CK&_nc_ht=scontent-lax3-1.xx&oh=00_AfDZxxb7-aYqrxMOFdWDIusp4JCERRMKAoXJOkPN6_45Eg&oe=64610729",
          ],
        },
        {
          color: "Prussian Blue",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96793919_2846931188687396_2041154538517299200_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=CVF3o8I_y4IAX_FOdcs&_nc_ht=scontent-lax3-1.xx&oh=00_AfBMU2GigwFbrZ8CpEUOmAtAd4YSJW-94gPlkdpRm9aJQw&oe=6460B7B5",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96516027_3098956420184458_3498488241139482624_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=aR9SSwl20TQAX9hK17O&_nc_ht=scontent-lax3-1.xx&oh=00_AfAgr0o97V5Hgxo264deia3h50iy4g6l5kT2_c0apV2bag&oe=645FB67A",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95820515_2921611867961754_6322912559519236096_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GMyexsCRlkAAX9US3DU&_nc_ht=scontent-lax3-2.xx&oh=00_AfAA012I57UXcNbSGypf2S-jP4L66va4_bT6p-D5Wkh10Q&oe=6460DA38",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96081996_3028889933824449_4112185694179295232_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=1Akr8FgraoIAX8izLU5&_nc_ht=scontent-lax3-1.xx&oh=00_AfBL9O_E3WUDVbfB9jM-sI--ZWDDerMEK5yvLbRMOEOX2A&oe=6460FD38",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95102838_2875783185791430_661643409915641856_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Pf7gNOPXpxUAX-oWPn7&_nc_oc=AQkxl5tjY_ZcL0rnZeWKiIsrtUgqlFXwZEUC8Uj9CCWtebFtG_Cru1SD44WKgaMGBw9J_2rXuhZ4RLro9EuyUoye&_nc_ht=scontent-lax3-1.xx&oh=00_AfDCJtiNs3TFuEx3-xsaLmqWpKSZMwU8MXOgNucc32F8Sw&oe=645F94B1",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95897881_3479542102072971_2428482506111057920_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=yNRrLhwuhbsAX84WGqY&_nc_ht=scontent-lax3-2.xx&oh=00_AfCuIWAp-Sde79d_Urrx1x-v3-UcfroUpAHWwb69ijLsSA&oe=6460AFF3",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95695453_2874364919314632_2717164983405248512_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=us_OK2unXtUAX8FvVkZ&_nc_ht=scontent-lax3-1.xx&oh=00_AfBaIMS64LSXkrr4NAtsamepnPWcXnOjNUCMIUMzg2sd7w&oe=64603335",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95596944_3911055315602293_3257722063971942400_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=dCRmniNT0VMAX-1SjXL&_nc_ht=scontent-lax3-2.xx&oh=00_AfA2F8y1Ulx3IjnjRwLgThBsNadUAHi_GuH3B9tOH0Up9A&oe=64606712",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96670230_2922346014520038_458505157760516096_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=LlzVUuOYNnUAX9EvPNl&_nc_ht=scontent-lax3-2.xx&oh=00_AfB_U6y3RcpehsFkUc3wYMpcwQVpfgibZhLxYegihSCvZw&oe=646001A3",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96236792_2801955639930360_4417214799822192640_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Ze_--dgm-awAX8v2Jam&_nc_ht=scontent-lax3-1.xx&oh=00_AfCNCvS1BKdHbUBb9rH28RwMY4ST1PNnrlkK9Ram5jp0Ig&oe=6460DCD2",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95463590_2945301888889763_823583962105380864_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=4YajnR-vDjoAX9gX5-u&_nc_ht=scontent-lax3-2.xx&oh=00_AfCbr1TGBTsamrtSbAgBd3utLvaRxwuf9kyqyAqz4uoVjA&oe=646076DF",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96691826_3029232797152379_5017491210206445568_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=VaxzkYFAV8kAX-0qF1D&_nc_ht=scontent-lax3-2.xx&oh=00_AfAQ0_lthlyq_bZIEYcmUl29cy9GvdAdcRe6GCcbA3kaww&oe=645F6FAE",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96687708_3038344196248341_2786535237880905728_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=x7Xf0MB45-EAX9thYoV&_nc_ht=scontent-lax3-1.xx&oh=00_AfAub_4HE8L7ehCxtD_3csx6cWSgCvUH6Qrl48KuF2vy3A&oe=6460F806",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97199658_2740916816006641_5801592057650741248_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=uwX1L61H8KcAX-DpN_v&_nc_ht=scontent-lax3-1.xx&oh=00_AfAnK7mo2zTUf-7VgYhEf-zdw97qTJa3PAjxph3B9gzF2g&oe=6460BB95",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95729463_3500906816593011_6151273850916044800_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=rMLSSaFF-ckAX9Gfc83&_nc_ht=scontent-lax3-2.xx&oh=00_AfDhSecHjbxvNZGotBaXu9GoLu5O3WD-O13kSvAxgKOcSw&oe=64602633",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96229861_3332364140131639_2355564544224395264_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=YqlVFX77qdgAX_Xvp6g&_nc_ht=scontent-lax3-2.xx&oh=00_AfBNOx2Q0AEboQi-d465NlQl7HQ6UWo4X241iaRYeEat9A&oe=645F391C",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96646534_2976958072411474_7529610705394204672_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=nzXwNm1gDdoAX85_jpv&_nc_ht=scontent-lax3-1.xx&oh=00_AfAqjNXcwprytktEn5nomJgoMGNrehzmVUGyBJN8FoVjRg&oe=645FB816",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96687708_3038344196248341_2786535237880905728_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=x7Xf0MB45-EAX9thYoV&_nc_ht=scontent-lax3-1.xx&oh=00_AfAub_4HE8L7ehCxtD_3csx6cWSgCvUH6Qrl48KuF2vy3A&oe=6460F806",
            
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96238610_3066804166673576_7002481663984795648_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=jKh5PrCy_bgAX8CuPNj&_nc_ht=scontent-lax3-2.xx&oh=00_AfCIOCa1SJdiwGpcl1ihd_ppxz8I2-zjUpfPocRofoxXJA&oe=64600E7D",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96758945_3007524235957163_3728862938207879168_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=rsKc7PbUVEUAX_d6d03&_nc_ht=scontent-lax3-1.xx&oh=00_AfDZgZwBsrUuzm9UppgTUmfwh9BktARkCXt3TDUBVAmP_w&oe=64600EBC",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96354229_3931870196885096_2367789425603117056_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=XB9gRvJZliwAX-iuGm9&_nc_ht=scontent-lax3-2.xx&oh=00_AfAsRzXEoLEOZ-8LjFZZb_bJH_0__iLaAo1j7RkAoJ3Evg&oe=64606760",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97012899_3098399130216162_2971824748415156224_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GeG5mHTreB8AX-Uz8Ee&_nc_ht=scontent-lax3-1.xx&oh=00_AfCJuKqWV5GKU3_7wHORTxdZjEJiegVjg1GrdK8I4lQokw&oe=64604A55",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97577787_3221424977889458_9071736464122839040_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=gUjpqu2uO7kAX-7IV_I&_nc_ht=scontent-lax3-1.xx&oh=00_AfC4arqODF4hRG3TAS2xg9tG-RTi_POq4O4n3YTwwYRXTA&oe=645F53B9",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95608415_2823192971133801_4276318861533380608_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=sJfhFFIlly4AX8QZrnO&_nc_ht=scontent-lax3-2.xx&oh=00_AfDfxTiAhX0i_tpLyyBVCS5tgdSXB04opCgThuTTZDTpAw&oe=6460DB52",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95929994_2663389630432593_4417358015506677760_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=MtVMZgu1BuIAX_WdnsC&_nc_ht=scontent-lax3-1.xx&oh=00_AfBHh0wTe4KuE6ICPZQWhTWi4EOcT6bjFAZDl3Mfy82XbQ&oe=645F89BF",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95402088_2926498827435204_2291497152725123072_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=imY4_qnnWHUAX9fKRWi&_nc_ht=scontent-lax3-2.xx&oh=00_AfD36W31pxWQofvERgz4m5GN20HqMCoVjfxpMwBsIii1eA&oe=646026A3",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96217212_2864276946972393_3049541554571051008_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=JXL_rbpe1SkAX8A6rCG&_nc_ht=scontent-lax3-2.xx&oh=00_AfBsYGnA1pQLK0DYLFiqoA9NcsDWQk4D6bkk1-a2V7dVvg&oe=64605C9D",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97577787_3221424977889458_9071736464122839040_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=gUjpqu2uO7kAX-7IV_I&_nc_ht=scontent-lax3-1.xx&oh=00_AfC4arqODF4hRG3TAS2xg9tG-RTi_POq4O4n3YTwwYRXTA&oe=645F53B9",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97396942_2865288686921710_1856276558864449536_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=05sRKSBxDrEAX9FyvPL&_nc_ht=scontent-lax3-1.xx&oh=00_AfAmRRFYzQQwlwxkM4JvgKsY7RVSESrrZSdpWWa9XYBuog&oe=645F4C66",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96752964_3799396700134110_7496318515507363840_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GAgFlQSGpJUAX_WD9lM&_nc_ht=scontent-lax3-2.xx&oh=00_AfCQz9VUw6sNbusd4F3zumD6AEgyrJjut_NZzlwqFWeRew&oe=646064FD",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97141129_3222498941095559_4699426801510776832_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=dT1bHEbHFnwAX-O-ubk&_nc_ht=scontent-lax3-2.xx&oh=00_AfA62m17m__nIxnQ9lbJb2ucG5ZzqfXPE7J5z9UTIGvUVQ&oe=64612A74",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97130436_2980453732046560_4237036996154884096_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=lj0MNPrUiCMAX8WjCYG&_nc_ht=scontent-lax3-2.xx&oh=00_AfC7q5jJsuoqiQQBBA9EbZK0u9V4jKrMyeYVPcUxwXCjDg&oe=64602398",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97142870_3218460598187737_5677767291513602048_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=gJ5wQcx-UokAX_XqZGI&_nc_ht=scontent-lax3-1.xx&oh=00_AfCOPVCdZIdd0pD-X3MlB-EizxFxjINY6O7WOw5Xqo38wQ&oe=64605601",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95787719_3506804682667700_2120521415273742336_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=sHuhBWurLzwAX_hC_fA&_nc_ht=scontent-lax3-2.xx&oh=00_AfAQMGa_wpPyl58weE2G3eRlHZl66UpsLjYLSL-PJVCIlg&oe=64612CFE",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96532863_3315550101790631_1700322533955338240_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=wA21tH5FgVEAX87ziOF&_nc_ht=scontent-lax3-2.xx&oh=00_AfDL68XTWyNt6UTpZk1ZyrV2QBMQOf3Ix0uqovCHd2GEGg&oe=64613432",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96474948_4361819680510120_2676840914147606528_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=o0WchQEJXjQAX9yJJ_H&_nc_ht=scontent-lax3-2.xx&oh=00_AfD8_r4y5r5OFZTNLVTNZx3XLezIHROj7t797RGX0vn3Cg&oe=6460A2D7",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97003486_2899386463507904_2525599559283900416_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GAY2giJhiLYAX_5Uq4p&_nc_ht=scontent-lax3-2.xx&oh=00_AfDqNmjknCNLKQyCKhnrrIKgHDAg_pBnqyMFV8xECXE28Q&oe=6460371C",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96701230_3101686053221156_8116103865645924352_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=zX2y-qLAiZkAX-FvfWa&_nc_ht=scontent-lax3-1.xx&oh=00_AfAvYxqpp7hL-NBIDWE1vfT9smLtqn6dW93YeHUhtJN-NQ&oe=6461063E",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97458924_2844101252354509_6988648111195291648_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=jhG_zU9Ffu8AX-RTp_7&_nc_ht=scontent-lax3-2.xx&oh=00_AfBLE8Y2qETvgjBw_Ln2B9Amk1QATgQIcxkwDwR9WXv4BQ&oe=6460C57A",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95787719_3506804682667700_2120521415273742336_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=sHuhBWurLzwAX_hC_fA&_nc_ht=scontent-lax3-2.xx&oh=00_AfAQMGa_wpPyl58weE2G3eRlHZl66UpsLjYLSL-PJVCIlg&oe=64612CFE",
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
