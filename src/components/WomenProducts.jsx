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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/98297374_3888743947834612_3522284477378199552_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=0cIZj6JSh64AX9NzBFg&_nc_ht=scontent-lax3-1.xx&oh=00_AfBqBKjFBjZxa4ZVdBsn6i0IYDCCuXUyFdlwPqx9gpgleQ&oe=645D4C0C",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95524194_2724958644281791_7741528673861238784_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=T4jEhwHOLwoAX8_AKAc&_nc_ht=scontent-lax3-1.xx&oh=00_AfDOkaBiJmdEdk2KuFFvEsDtursmymx42KeXrMzRUq9iRg&oe=645DF97D",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97976176_2778672202254724_887465007858581504_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=M1ot0hc485oAX-v02iu&_nc_ht=scontent-lax3-2.xx&oh=00_AfA6YthUxurO4jY6CH2H9b2YkwpY3t-COyPr8Hyoxx5eGw&oe=645DD718",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95587684_2813069275466795_7542227773121626112_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=BUIj4aLqfS0AX_wFwgw&_nc_ht=scontent-lax3-1.xx&oh=00_AfCpQjNJrNlF9K58Gh-B4Lqfj1BupVHKOrlxKY4j4_lEZw&oe=645D7D7E",
          ],
        },
        {
          color: "Wine Red",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96687115_3083458535043592_7893539149993476096_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=dnG9623tDr0AX_7StO7&_nc_ht=scontent-lax3-1.xx&oh=00_AfCMxBI5gQcif6VMtudXEuDSdcxmFqgzscWfJt0TrQaOiA&oe=6463A659",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96511660_2979873255461674_2281180649870065664_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=D2CFq-4bpNYAX-QcnCc&_nc_ht=scontent-lax3-1.xx&oh=00_AfBLM92E4lyKCuwfCvaMBT8GTXzo_Mbkb5wK7u97_gYirQ&oe=64623F20",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96537434_4371822869510066_1169390762861789184_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=hTLYtbuLRq4AX_mX2IU&_nc_oc=AQn_Pxrd62E67fupj6oIzH7B2shKtv8Zt4hoZ_lPzW6rlvnb3c7MA0-3MhKZZ_Z51ImODp7OA4dLwzGyq9CAWISG&_nc_ht=scontent-lax3-2.xx&oh=00_AfAP5OFChXQtwc-ySXSuIzbBG8GEqZRF_X554YQK64eQcQ&oe=6463073F",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95587684_2813069275466795_7542227773121626112_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=BUIj4aLqfS0AX_wFwgw&_nc_ht=scontent-lax3-1.xx&oh=00_AfCpQjNJrNlF9K58Gh-B4Lqfj1BupVHKOrlxKY4j4_lEZw&oe=645D7D7E",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95586084_2919732678140710_8402380701692854272_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=TKzUkSUyogYAX-AxU_N&_nc_ht=scontent-lax3-2.xx&oh=00_AfBU-d45jdBfQ5zM96F_KhUzF1wsd4Sv6Zg8ZYI0IIZznA&oe=645DDD5F",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96231433_2713264755468320_8471556544473858048_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=0KNBYQMBb9kAX9kUv_5&_nc_ht=scontent-lax3-2.xx&oh=00_AfBVPJVugkGtQbX6Pbi-GJk97QQiXuwnJ3Mh1vKvRTv3lw&oe=645DDC17",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95489821_3068344726521432_4204557942361423872_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=bQGhz-SjQpIAX-U38Vg&_nc_oc=AQlmzYgyvNqH3jNlLJHpHZaan2mlqiE7GnB24GBw6HKc6s6k9FtexUsN28YIA-_6pEMFJqNxZh3goBNU4PHi7ILD&_nc_ht=scontent-lax3-2.xx&oh=00_AfDiUIpsJ8f5w01lJHNheDUaQgRCGN7gd32FiRhtgqZHgA&oe=645DBF5E",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95587684_2813069275466795_7542227773121626112_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=BUIj4aLqfS0AX_wFwgw&_nc_ht=scontent-lax3-1.xx&oh=00_AfCpQjNJrNlF9K58Gh-B4Lqfj1BupVHKOrlxKY4j4_lEZw&oe=645D7D7E",
          ],
        },
        {
          color: "Salmon Pink",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97249937_3235536643164615_6272503181201113088_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=8dRtfCb6cckAX81MP_A&_nc_ht=scontent-lax3-1.xx&oh=00_AfDxbS7owHNzepdKHV4LRMcCSBaYw24OfqTOwSiC_FnFQw&oe=64620E18",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97174967_3011622752191756_9156716631206920192_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=t2xdIaGR5iQAX9XIczJ&_nc_ht=scontent-lax3-2.xx&oh=00_AfBpU4B4SsjKwBWkwuKlZx-xQCNGolv8FJWWg9thHwrtmg&oe=6463C67C",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97947321_3784990898209880_3079555219827195904_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=1q0gKHL8I5sAX_YYsQI&_nc_ht=scontent-lax3-2.xx&oh=00_AfB5ee6AkDsIi7l4gTHsGy6TaR2kTX0GihfQPZIpzCA4sw&oe=6462A44B",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95587684_2813069275466795_7542227773121626112_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=BUIj4aLqfS0AX_wFwgw&_nc_ht=scontent-lax3-1.xx&oh=00_AfCpQjNJrNlF9K58Gh-B4Lqfj1BupVHKOrlxKY4j4_lEZw&oe=645D7D7E",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97027688_3083154511742566_3931324054409052160_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GuEORN0mlhoAX-E6mTx&_nc_ht=scontent-lax3-1.xx&oh=00_AfDdM7ORoQ22ZCEu0JPA3kyPvuY8Gjj3Bs0Op5C4_TjCRw&oe=64611A90",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95898832_4063177327056397_4914313434192936960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=2eJDb5H04EQAX-EpXL-&_nc_ht=scontent-lax3-1.xx&oh=00_AfCsiwIJpTmEK4YZ5hO-0VvKfqk706U7EHYZ9TlYF-WxDQ&oe=6460C446",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97062891_2992759144103228_6525326426785185792_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=jNBwZSRq944AX9tFVA7&_nc_ht=scontent-lax3-1.xx&oh=00_AfBmKLsKNHVy9j1HeBVBCkmt75jJNwfc3tSOzfCpiNjf8Q&oe=64609E00",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96424001_2655951424514845_5076726733432946688_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Ndg8-FLf--4AX_9FCFe&_nc_ht=scontent-lax3-2.xx&oh=00_AfAHmHoJSrvo0wIXxkzSgqbLAuV2bk5Bknv4UG07mJIlyQ&oe=645F880E",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96766556_2955701131140100_6874156751373991936_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=0aEjSAwCSbkAX8rRrkB&_nc_ht=scontent-lax3-1.xx&oh=00_AfCVhdX1sBK3FT1x4eH94SMGh3UMBbPKySRL-U2Qb8n_vg&oe=6460A2A6",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96551849_3139773856084139_7581789472799326208_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=xlIC9hDFhasAX_NXf0D&_nc_ht=scontent-lax3-1.xx&oh=00_AfCZxswKHOycihWy2bWbZppdK-BJQl8hlJKNUrXlxvb8lA&oe=645F9402",
          ],
        },
        {
          color: "Flamingo Pink",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96671848_2658292280942954_8299740509555916800_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=1GrnY3Rwo7kAX9Z1ZMg&_nc_ht=scontent-lax3-1.xx&oh=00_AfCQeRccRqszEfjDr9OCUn-e5L1oTtsGiGKOXySJNmS8Og&oe=6465EB9D",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96231419_2992806524135775_3563728631156965376_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9ab401&_nc_ohc=CuTGNYEN8isAX8XmO8H&_nc_ht=scontent-lax3-2.xx&oh=00_AfBrvw4kND-7tRthvV89zo-E4flc2VBCxioACpkYEgQfZQ&oe=6465465E",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96512950_2948985561814426_576199678421368832_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EiG4EqMCTFYAX-TLQYL&_nc_ht=scontent-lax3-1.xx&oh=00_AfBvmfknEJcSN1Dtjf2YPHzJXHB6c9If5Ok-XB7h7lEZpg&oe=64606295",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95797036_2724152837693378_3641014634913202176_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=PPqaOPrBsyQAX9-3acx&_nc_oc=AQkS_wrXbzvI0AQUkWccSM6bz9RZ5oLdd563HJB1sJ1BKSmfCULk6HSOw9iVT3hfDdZ3aRaljfeMrC7mcY0C0OvB&_nc_ht=scontent-lax3-1.xx&oh=00_AfDI8kgTDLRODqaMxXde2zBmfVLTJgz-P8tc2CkKbJeftQ&oe=64653AB8",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96551849_3139773856084139_7581789472799326208_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=xlIC9hDFhasAX_NXf0D&_nc_ht=scontent-lax3-1.xx&oh=00_AfCZxswKHOycihWy2bWbZppdK-BJQl8hlJKNUrXlxvb8lA&oe=645F9402",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96292383_2710673379059577_8661316879740043264_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=9m1FOm3c9-4AX8GAA9l&_nc_ht=scontent-lax3-2.xx&oh=00_AfBcMDxGQNK17w9hZPn7pSWZlPR7iGo6HjAOuZNbqkEZYA&oe=6460F109",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96593781_2555648721208068_8406685328370302976_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=M3xEkHIqqLYAX8qEkS_&_nc_ht=scontent-lax3-2.xx&oh=00_AfCXTNqUtyic3YlA0hkk5swrEMQlI2U-P2X7dqG86eYxZg&oe=6460CCE7",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96238607_2945214895515760_8954723387268136960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=kE-EBKxUXfAAX9Cek6v&_nc_ht=scontent-lax3-1.xx&oh=00_AfDp7Qlgq-5hpswypYiZ63A6hWfx9T0d3BULL0rjwV6x3w&oe=64607748",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96827535_2732029153572093_857732220578693120_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=taWj265GY2sAX_K0xTr&_nc_ht=scontent-lax3-2.xx&oh=00_AfBvTJTO3M8SX7t_cd-GJD-LsWZolut11nCk6zAiTV3N8Q&oe=64604D82",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97021671_2761915160587362_5241440155163688960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EFbu3PDZ6WoAX82OTmI&_nc_ht=scontent-lax3-1.xx&oh=00_AfAmiuX2pJ6jLmOVX9-dpiAhHYO1n6nZ-BhDqUjEvXp21g&oe=646022BC",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96540602_2936430849786723_5211584634898350080_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=tOu2kAri1G4AX8Q9cI6&_nc_ht=scontent-lax3-2.xx&oh=00_AfAFE0oI63bsz8IWl6tkjHvX-bZ5vppEVg5MYF_9F-aX-w&oe=64613C1A",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97283784_2793397570758571_7988735072884752384_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=c48759&_nc_ohc=O8ot7KJLQM8AX9T9WnS&_nc_ht=scontent-lax3-2.xx&oh=00_AfDvQ0xr2R0ITEziAbvNPjlf0vmSozIHZcvukRQ7s44Igg&oe=64656BA8",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96225966_3151844408210579_568978777539870720_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9ab401&_nc_ohc=lSTlPSsXiDIAX-slnik&_nc_ht=scontent-lax3-2.xx&oh=00_AfDg5HYrQWLvhxSGvBa0P30TgJyFXpXsYvctWKn26Rt2mg&oe=6460B075",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96712700_3787201624684539_4545137072133898240_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=PazX1iFS9fsAX84jMiy&_nc_ht=scontent-lax3-1.xx&oh=00_AfBe6EmA32Nui8h6lzfCKA6h3bJ7x6eziaTNy5Pfy7gC2w&oe=64613F58",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96818114_2485684901532588_4634598277382144000_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=_JIoWoLHvUQAX9eEwGe&_nc_ht=scontent-lax3-1.xx&oh=00_AfDMRyYWEmo7ye-PV464UxGPTg5vx2Wj_aV3DtmjaEjxlA&oe=646028C7",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97064730_3488395764524229_4355405641997615104_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=TM0DsywnEC4AX9OouWc&_nc_ht=scontent-lax3-1.xx&oh=00_AfBv9TbyeEhN_uJ1ZkyPIyCPN8fguvcGNjCS_-S6Ux9NTQ&oe=6460DAE2",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96741669_3089590944396397_4674619598690058240_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=mu-vFoSjvtMAX8MJ6V8&_nc_ht=scontent-lax3-1.xx&oh=00_AfDeqrlkNkvvJblAhIfQV70bqPf-fiE79tT2vfbI_jKneQ&oe=64604F70",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97348855_3239142599429452_7024959813415075840_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Pz5T0JOtyOYAX9U4Oix&_nc_ht=scontent-lax3-2.xx&oh=00_AfDx8AmzCuvBZn1m7nuBVgjxZa6eaDK-Hn_9bDRZAbbc-Q&oe=6460F226",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95913367_4079088822102023_5680976018630770688_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=xNqI5Aw48O4AX8VhIQ8&_nc_ht=scontent-lax3-2.xx&oh=00_AfCsvjc9InOTRrdUKU30jEBeBy_y5O2EaHcZMOpURXzv1A&oe=645FC706",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97021671_2761915160587362_5241440155163688960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EFbu3PDZ6WoAX82OTmI&_nc_ht=scontent-lax3-1.xx&oh=00_AfAmiuX2pJ6jLmOVX9-dpiAhHYO1n6nZ-BhDqUjEvXp21g&oe=646022BC",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96216499_2954993884585878_570844103311360_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=jt5jhPlWvhIAX_v_ZWG&_nc_ht=scontent-lax3-1.xx&oh=00_AfCnp1_VXZ3ykuqCjxNn1GDxWG57ltOV0wGZZ1Wsvbf5mg&oe=6465F0B7",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95757469_2974453475953283_4267898745653297152_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=O8JKV7_VV3oAX92sYpp&_nc_ht=scontent-lax3-2.xx&oh=00_AfBfUsbpTS3y4xwSoJulCLbhfrgdSDQ-EAsrxTXQ7QW5cA&oe=6460722C",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96760860_2975060049229368_2910335544179294208_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=xYGVXen0u5cAX9cTHAn&_nc_ht=scontent-lax3-2.xx&oh=00_AfCeXf194-0Pa8g5aZ4B4tYvqTVDggtT_NKl_zj0paniOA&oe=6460D132",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95491897_2836886079763589_1284247933637623808_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=APJg91Jz3icAX9s---h&_nc_ht=scontent-lax3-1.xx&oh=00_AfD4T6k-TEWFWaEin7EWzRIVtU0o9xnh0owZKVxenEIQAw&oe=6460AADB",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96511545_3029553537067774_6160365257299591168_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=fLAYveVY_54AX9n6KIC&_nc_ht=scontent-lax3-1.xx&oh=00_AfDGlsozqJjTu6DqGVxLonX_DM7T76fNpEUDKpda71ANIw&oe=6460EBFC",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97053191_2938664322921759_4807931324813803520_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=z5p8cjS5Ua4AX-jp7Sw&_nc_ht=scontent-lax3-1.xx&oh=00_AfAn_yMYnEcxhPKErwM1NaxGaCzpTD7PJtBY51CBVLkqkQ&oe=64605B28",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97060774_3001836383243478_586147531348508672_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=FGnSGseFavMAX-GM6Bm&_nc_ht=scontent-lax3-1.xx&oh=00_AfB52IQYsbNywF7LsAdNqhDkufN8jXa4yBU8WqTT5iskXQ&oe=64607667",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97021671_2761915160587362_5241440155163688960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EFbu3PDZ6WoAX82OTmI&_nc_ht=scontent-lax3-1.xx&oh=00_AfAmiuX2pJ6jLmOVX9-dpiAhHYO1n6nZ-BhDqUjEvXp21g&oe=646022BC",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96216266_2762825193816308_6999350151789674496_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=PjcqLf6VfQcAX_aTDdK&_nc_ht=scontent-lax3-1.xx&oh=00_AfCnasr8qjHFXI8sNsW4WFiS6qeWhCeL3xL0YUf5oRiewA&oe=6460DCE1",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96580746_3478802612147042_20607570913787904_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=umBQpqAhH3sAX9TV9BC&_nc_ht=scontent-lax3-2.xx&oh=00_AfB_bYZgxBYrQ1lnwFEqWX-q4sViPoVcz870CJtZcrHoTA&oe=64602AE2",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96548873_2943837872380052_227610696634859520_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GqOQ_D4Y1UkAX9gjXwX&_nc_ht=scontent-lax3-1.xx&oh=00_AfDugg7HmRLgHEAmnmAvFX69lKqC7hqgU48Jt8z7lqpeTA&oe=64607732",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96236790_2554244408008938_8970952256203522048_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=qzHuNJHHeUwAX8BqRTu&_nc_ht=scontent-lax3-1.xx&oh=00_AfBW4BuQTAA9YePSclHSY7kYXT29dgKj8zJ82dlV3qDRzg&oe=6460CDA8",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96725994_2984667868265463_4192797209508446208_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=sih6BOSpRh4AX_Tq_ou&_nc_ht=scontent-lax3-1.xx&oh=00_AfBloR5woC5NY0y_EomyNU6iKeU0Dpz2UbIgHbjOEYch3g&oe=64605703",
          ],
        },
        {
          color: "Salmon Pink",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96237749_2635622893208238_5375760580126703616_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=j8oD15-wv7kAX_rP-jZ&_nc_ht=scontent-lax3-1.xx&oh=00_AfAJ-u0HwG9sDE_kUh74Z8WXXBgYgIMeC_wDMScKRdUVzQ&oe=6460A88D",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96511446_2992905477431856_7126114170205896704_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=hE1D5FumRm0AX_-Oodo&_nc_ht=scontent-lax3-1.xx&oh=00_AfCZ8O08fP8KxdgmFkBt0pDCyYHHvDzj_SDHaET4fRXTcg&oe=64615A5E",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96537435_3047151222058439_5525295858016321536_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=zzXZ7WrxqfQAX8m8SxW&_nc_ht=scontent-lax3-2.xx&oh=00_AfD_T4iWpQHriSyYX5CMkTIZQVtaR0vvLoIYSXj6AuH7gA&oe=646038DE",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96368795_2784518111676846_1302402309426249728_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9ab401&_nc_ohc=fRV6YjLQMaQAX_0pm9t&_nc_ht=scontent-lax3-2.xx&oh=00_AfBP-snaZGUnMjH5ECs06hONXGnbeDiHzBcOTkjcJer3dw&oe=6460CF68",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97021671_2761915160587362_5241440155163688960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EFbu3PDZ6WoAX82OTmI&_nc_ht=scontent-lax3-1.xx&oh=00_AfAmiuX2pJ6jLmOVX9-dpiAhHYO1n6nZ-BhDqUjEvXp21g&oe=646022BC",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96663666_2714400575355933_1188721921034813440_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=HYgnsaWDymoAX9JH_td&_nc_ht=scontent-lax3-2.xx&oh=00_AfD6k0j5HCodZqO7t-vznr90qWx1-OSHH9omYh55IwzEHA&oe=6460CECC",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96659513_2611922472247423_7790885737947201536_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=82DwZxtaJegAX-0qqMl&_nc_ht=scontent-lax3-2.xx&oh=00_AfAKLUVepHfT1I4YdAw3pU-4DuK2spkuJfWgrFPol4NxuQ&oe=64616224",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97162424_2943348109082996_8761689634087370752_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=J9qCwCGb-3IAX_WkBG_&_nc_ht=scontent-lax3-1.xx&oh=00_AfDumrtrXwSe7huZSxsaXSiay4Iv04v6G8ikS7lGPuEK6A&oe=6460D1CD",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97200692_3904642789605817_821549045255241728_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=nwKsKY0d-4cAX8Vfz9z&_nc_ht=scontent-lax3-1.xx&oh=00_AfBGBbQqHrYrW8MGmrjww7nYk0s0CJNpo-uL6zx7t0C6MA&oe=64604DCC",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97021671_2761915160587362_5241440155163688960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EFbu3PDZ6WoAX82OTmI&_nc_ht=scontent-lax3-1.xx&oh=00_AfAmiuX2pJ6jLmOVX9-dpiAhHYO1n6nZ-BhDqUjEvXp21g&oe=646022BC",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97060066_2378837422219402_678645789576134656_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=XZZROiMDqJIAX8B4L-H&_nc_ht=scontent-lax3-1.xx&oh=00_AfA3T7vrPszzFIfBAzQ7Ari2HulV5xaidd0X-g5gr5xA3g&oe=64602748",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96199860_2988833171193906_7205062382140260352_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=tw-l-36yS1MAX8EEQOT&_nc_ht=scontent-lax3-2.xx&oh=00_AfDl2BtrYKYhPojrhx9-DWkKTz-n1Oenw31qW1pn6S856w&oe=64606FA6",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96082122_2915450575242751_8957946377971695616_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=_1R7T-lXmhAAX_dDq61&_nc_ht=scontent-lax3-1.xx&oh=00_AfC3j00s6wwijYOSIz2Oo4Y_zmjTK3VEyZya9vcTPMHM7g&oe=64617D55",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96081567_2969923923088033_2676664124703768576_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=0MIfXbIhAUkAX9YD-1F&_nc_oc=AQk9E0VO7d7xyyiKGRKNoG3ZFQe9jQ8uFeAiheKoWHjijIRBXnYxi-ZJAxd5fdySFABXVcPe4lN0CaA-_v7vTmPJ&_nc_ht=scontent-lax3-1.xx&oh=00_AfB2FaRWx26lhHCugwoR3nW9yjYEX5y8-977xglYMrzpMg&oe=646066D4",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96372030_3296154680417708_4703855771786412032_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=0BvtLMHnSDIAX_YsRG5&_nc_ht=scontent-lax3-1.xx&oh=00_AfDM0IyrhEt2Kulm3weOLvp0WfagNmQhiZmPGFH3wABZZw&oe=64616AEC",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97134508_3260348177350281_1473425940057948160_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=0KbpGHz8O28AX8MHxtF&_nc_ht=scontent-lax3-2.xx&oh=00_AfCMTOLoJF2btGmjEKRhG6tfn4EULYhXx8sKD1t76kjHgg&oe=64617DC5",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97052534_2963510583726717_8346230743101341696_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=D54XPGCzDVMAX8lqGWI&_nc_ht=scontent-lax3-1.xx&oh=00_AfAQmhTtpr1l6kdUOLONpKjQLZHKxKnCnds0yMRbQFm2hw&oe=6460D3DF",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97111383_2957262664350451_1049903913693609984_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=9Z8-DJuh5rgAX-IcMMc&_nc_ht=scontent-lax3-1.xx&oh=00_AfDX8W9pWn5swQvcajICwh1SXA2ppKUI_s4fAkjHG2f_Iw&oe=64611915",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97145401_4408080619217340_8818927224427118592_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=wB7L5zMyZeQAX-8E5qn&_nc_ht=scontent-lax3-1.xx&oh=00_AfBFpoW6HsrOfwoWuyFKX4ryRWjRqDxzV04pheSm_SPahA&oe=6461A170",
          ],
        },
        {
          color: "Pink",
          urls: [
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97136358_2954791177946768_7857543703395565568_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=TZ3wdGWH-TMAX8RQe1f&_nc_oc=AQk6r0CW3oo0ODoHlimo-yUZGIaMNlsaUIPNs8JdgAGCE4Rl1BY13zFSm3q35i7Ue2qiUuu9VblVtOoSmnhJ8FfV&_nc_ht=scontent-lax3-1.xx&oh=00_AfA4JaOsGWI5-LSZAVdnlxEfZvma_UCWVpkApLZdzZVYfg&oe=64606428",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97034907_3057995544268548_8445748652927877120_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=W5_b9dw5oKsAX8CY-yj&_nc_ht=scontent-lax3-1.xx&oh=00_AfCi6eGjW5rSk8P4Eg4lA6SGIAOUHv8qiMblurMGE81oEg&oe=646029E8",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97141129_3118666694862970_2493077697551400960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=WFn4wqPbDWwAX9wtjdT&_nc_ht=scontent-lax3-2.xx&oh=00_AfC7iua9HUplQFKGAUl74Df9REK7sCfZJREraPPvgO0LWQ&oe=646010B9",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97021671_2761915160587362_5241440155163688960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EFbu3PDZ6WoAX82OTmI&_nc_ht=scontent-lax3-1.xx&oh=00_AfAmiuX2pJ6jLmOVX9-dpiAhHYO1n6nZ-BhDqUjEvXp21g&oe=646022BC",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97202183_2998482326894863_5259416474493124608_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=9ab401&_nc_ohc=n2sM7n1KgEAAX-KpMXJ&_nc_ht=scontent-lax3-1.xx&oh=00_AfBCEP2kfv4EPiqf8PqERSAcuSXjHVBilvU0VPJuqXmFvA&oe=6460EF94",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96421437_2655878407857120_8956035113230008320_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=5r9ycOJpn48AX_mxaUZ&_nc_ht=scontent-lax3-2.xx&oh=00_AfDCjPVwC0nC6OChYLIdY4x-Y8ESwYv1nr81kpMBStJU5A&oe=6461A98D",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97035983_2904576049660610_3928245804103368704_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Vc2q-HRP4BoAX85PeaQ&_nc_ht=scontent-lax3-2.xx&oh=00_AfDlXERv5g2KyTLsamA5Hq4CD9i_bmHetMY_kbKLl3jrHw&oe=64602681",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96237739_2679034345553404_4480356385351008256_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=In_ObTYAPgYAX-D_yk4&_nc_ht=scontent-lax3-1.xx&oh=00_AfCf1xCWDrDz1gSPUKsXcYCdvxo96SblsV_OxY47CN9emQ&oe=64600D31",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97021671_2761915160587362_5241440155163688960_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EFbu3PDZ6WoAX82OTmI&_nc_ht=scontent-lax3-1.xx&oh=00_AfAmiuX2pJ6jLmOVX9-dpiAhHYO1n6nZ-BhDqUjEvXp21g&oe=646022BC",
          ],
        },
        {
          color: "Black",
          urls: [
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97030965_3076769219053686_8853923116171132928_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Uh5GMIVSUAsAX-MC8ks&_nc_ht=scontent-lax3-2.xx&oh=00_AfBPL4cPE6oQseWWI1Gc5PeP6DNRGiDdvZ-zSYPhD1Ruzw&oe=646152C5",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97482243_3609499812410409_7897736801920483328_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=xzzPoWH7qqgAX8l5RAm&_nc_ht=scontent-lax3-2.xx&oh=00_AfBsbU2TLlxA92Gljb5i4i092CtRpQYDSReYrE7Jlu1rzQ&oe=645FDE9C",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96806236_3779362225470682_7900884317163749376_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Hni3GljBShwAX8a9bgy&_nc_ht=scontent-lax3-2.xx&oh=00_AfAEWp8iRwutVxnWo-1IC1x1h7N6RoiNzpSoMgVtbped6A&oe=64619F9F",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96697046_2982604991788103_3754224483867557888_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=bnnCakcjPQgAX-xo7vi&_nc_ht=scontent-lax3-1.xx&oh=00_AfDSLxFId3UU9fXHyDJTRN5_5xDKCONaZQav7ZJiO7Uryw&oe=645FFE15",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/346269723_1383077762545530_1195222716723743663_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ofiKCtvWqXsAX9gCOFK&_nc_ht=scontent-lax3-2.xx&oh=00_AfDVFqL2JRa8Bs1zD1NZH2GmGAUhx1y7KLe6fxiVtZ04rA&oe=646191EF",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/346090361_975259453660913_4026455197337875530_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=Z5DLTwBDzlkAX_ne6-7&_nc_ht=scontent-lax3-1.xx&oh=00_AfDfgND61JX6hg2LJA9__pAw_X9MDyc-CCKaEl5iaUgh-w&oe=64614BE5",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/345926444_6562515210427560_153553080141260654_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=HVCHS5ivuL8AX8Ej1HE&_nc_ht=scontent-lax3-2.xx&oh=00_AfB0b0-VKYJtBhjjtPlidxco61qdLE7OePWCVtjNSHpLsw&oe=6461A30E",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/345897186_3361181970771973_1165488796502376050_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=jk1QbBITIeEAX8u48ip&_nc_ht=scontent-lax3-1.xx&oh=00_AfCJgO6G6rXjT0zY8GoQGzmAD_-0fQHmoeUL76ztGwwqPg&oe=6461A8AD",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/346078669_9256566701052223_7233050624615461162_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=6VKCORLkk7UAX_qrw44&_nc_ht=scontent-lax3-2.xx&oh=00_AfB345qq7J9hxpFM-TjHS5Xr2zytN7pKjgCp0334m-S4FQ&oe=64606EF8",
            "https://m.media-amazon.com/images/I/71cXYsgj41L._AC_UX679_.jpg"
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95602125_3179378195440221_1574339808744964096_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=hOIOuAIT_OcAX9Zs9I9&_nc_ht=scontent-lax3-1.xx&oh=00_AfBdXI7m-558w7vy7P-RsPPMKHrK1PNX8ukNzzP0OIrfpw&oe=6460F99E",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95774228_3809553405786130_5980305500808413184_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=L4uaAo_bXzIAX8yjzfb&_nc_ht=scontent-lax3-2.xx&oh=00_AfDwgcS5yta7_04lUwBN_IUlAOeDt1qnfVZaKGRk5LkL7Q&oe=645FE789",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96204650_3087032104680989_5808868724387610624_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=XjRmldyoBhgAX8a-Nxv&_nc_ht=scontent-lax3-1.xx&oh=00_AfAUbjjRs2DFc_6js1JwMVgFJumO6FSOek2HlpguZwiCfQ&oe=64604A64",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97279322_3258044817547375_2297357790219337728_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=iyNT__4KXdAAX93mrrZ&_nc_ht=scontent-lax3-1.xx&oh=00_AfAv_3oU2EJlNshTl2d19RtaRwnGdnAFp6K85v_WkY_B1w&oe=6461202A",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97017855_2931842763565687_334688126859476992_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=jhIUdYa3qx0AX8DY9Nl&_nc_ht=scontent-lax3-1.xx&oh=00_AfCDmCROhJlSjkD9JT8lRDcAbZb48-ScuWIOVxhr7w8i-w&oe=6461B0BE",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96341174_3133976856654571_2674172618470326272_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=FkXkYJz-LdYAX-6azg1&_nc_ht=scontent-lax3-2.xx&oh=00_AfC2x4HslsnEHWex4H4ZIciJslGKbW4C2GmF0yFsvv491g&oe=6460A024",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97135004_2968367483232128_2868239899696300032_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=iOvhrT7326EAX87ON3D&_nc_ht=scontent-lax3-2.xx&oh=00_AfASgtjiiGHNI6Zfwwqd7CqIUZ3D8rfmJYhFbGtRkI8Hdw&oe=64609807",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96225451_3005224789516943_864380658154209280_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=EgABz8TFyKMAX8DwIOB&_nc_ht=scontent-lax3-1.xx&oh=00_AfC750aM1MAa5ErBEULEvj-eVAcZdcgJg6uSFCvzJOUn9g&oe=64616F6E",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96681584_2908650922554224_3928755324663627776_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=ksuW9t_JTikAX8zB2Tt&_nc_ht=scontent-lax3-1.xx&oh=00_AfBxMy6-YGfSkV-Xdg93D_KiE2Ax6DPeVl4neLi6U60OPQ&oe=64608A1A",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96756660_3088295807925303_1788665136446177280_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9ab401&_nc_ohc=sdew-DGHz7EAX8gFUYj&_nc_ht=scontent-lax3-1.xx&oh=00_AfBh6pet9sQUooigwLeVIwPvmlftbV8sG9grdfmkFGKoIg&oe=6460304C",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95608415_2992395640849368_1743003964732866560_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=65mP6fkH-TYAX-JAOjh&_nc_ht=scontent-lax3-1.xx&oh=00_AfBAO_MM6o6hk6TdP5QbhPkyFKytRLqF-swTgGy_flVgOw&oe=64616877",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96749207_2800600106655767_6133659953811947520_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=c48759&_nc_ohc=Ws3pL0wq3qQAX8eWIGS&_nc_ht=scontent-lax3-2.xx&oh=00_AfDEyU6qPtJ-FnNx8DW553t5r86vkTE8aB8TaLdclEpK3g&oe=64612ED2",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97136360_2397134963722170_1576384002724462592_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_ohc=yHbDCONLSF0AX-g2Vtl&_nc_ht=scontent-lax3-1.xx&oh=00_AfBE8SjEknOicwmIK46-vGlgFMsPSaJRI8GxRomN22WwGg&oe=6460E2C4",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/95913366_3058036850924840_4299902758883950592_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_ohc=zkKIz4cjbcEAX_D6YOK&_nc_ht=scontent-lax3-1.xx&oh=00_AfC7yojR7FEFdOf0_Ylfd86sofigvhZW-ps8kQ_XpJ6_3w&oe=645FE14C",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/96807661_4030421186975564_5419748947977568256_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_ohc=214YgSVU7uoAX_p71gC&_nc_ht=scontent-lax3-2.xx&oh=00_AfDl3g5hrKi012DaC5vntkCF1SBie05yQJj0giaGGREo8Q&oe=6460B76D",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96785346_3879890998749853_9069732329303310336_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_ohc=SUBMBgGArfoAX-Oseeo&_nc_ht=scontent-lax3-1.xx&oh=00_AfBBzEkVkqx9lp_5_HZYHKxyipW5530x5Q4XXet2iIqfRQ&oe=6460FC8F",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96756660_3088295807925303_1788665136446177280_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_ohc=sdew-DGHz7EAX8gFUYj&_nc_ht=scontent-lax3-1.xx&oh=00_AfBh6pet9sQUooigwLeVIwPvmlftbV8sG9grdfmkFGKoIg&oe=6460304C",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96666738_3200384866659207_5721321674394042368_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9ab401&_nc_ohc=dw-EFdW7Gw8AX-mkpIt&_nc_ht=scontent-lax3-1.xx&oh=00_AfAuhtD8GBV1ZhunIvBqUOD02TladsCrAe1DlfLQUiMT6w&oe=6460E4BC",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97184289_1938742482916990_5334277827476848640_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Ijllbh05fgAAX-z00hh&_nc_ht=scontent-lax3-2.xx&oh=00_AfBifTrSnvGXHvh5fHe20koIuXTNI3241lDpEwIQND05xw&oe=6461BEA9",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95500068_2953693651415023_2080918183262289920_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=Z9lz_A_v83AAX_7ltzg&_nc_ht=scontent-lax3-2.xx&oh=00_AfC_uJ_8u-nbYgfHLABgetSyCTw44IOrb340Ez7mBb1rbw&oe=6460E4E5",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/66695877_2469481186449705_6104138577707270144_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_ohc=sDda_Qo2JvYAX94TXdq&_nc_ht=scontent-lax3-1.xx&oh=00_AfDK8gr3oPpO4F9jHEuKOLWqkWhZEQ9v1ggIKRYRiBMm_g&oe=6465BAFA",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97129972_2976958729063940_927377365846196224_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=7KnmOVGPMzsAX9QK2n3&_nc_ht=scontent-lax3-1.xx&oh=00_AfAlpdAicRiUGv9kslV4T3vCa5dg6U_4mBoc43JKCdxWoQ&oe=6460B0E7",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97146503_3876953655680657_1865584972765593600_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=qEAfRP2_2_AAX_7y_1v&_nc_ht=scontent-lax3-2.xx&oh=00_AfB783adLilLKnrqzLXI_SEwhiDWJXy6hU8z5zEo0Vdhpw&oe=64605D6B",
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
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97788851_4357979044216146_1545133060469555200_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=5u3SQB3YjGwAX86k34-&_nc_ht=scontent-lax3-1.xx&oh=00_AfAcOGigNHr-EKSCCnXBJhh-jo--sBdeG2zVvCIfiMX4Kg&oe=6465C054",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97615885_3153311268035725_624335799269195776_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=uEId8NrC7N0AX-jjw0l&_nc_ht=scontent-lax3-1.xx&oh=00_AfDHtJTz_4tLfydK-aRrfRyfKIwKuMPUG-G-g6EbJi3K0Q&oe=6461B9C4",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/97061583_2920232854771808_7974086764799197184_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9ab401&_nc_ohc=NA0DZ9cyQqgAX-Vyww8&_nc_ht=scontent-lax3-1.xx&oh=00_AfCxohPSaK91_pxzThk7QuapW-AUTQAawaDVdluR0yqHRw&oe=6460CE57",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/96292384_2607100532727794_8093556038961201152_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=9ab401&_nc_ohc=GDOMUPhsFzMAX8tRPSy&_nc_ht=scontent-lax3-1.xx&oh=00_AfAFayUMJvSoT9vjOEovi6OAGDvIAbT1iTIO70Bv_vHF6A&oe=646120BF",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97501926_2934438090002168_1055929306133299200_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=9ab401&_nc_ohc=9QQJHsjhCXwAX9cDZpM&_nc_ht=scontent-lax3-2.xx&oh=00_AfD9ZNnTcHOcGUfiJKhRyAuqoLxy8-KxgliTILLgzhqe0g&oe=64603DB7",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97146503_3876953655680657_1865584972765593600_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=qEAfRP2_2_AAX_7y_1v&_nc_ht=scontent-lax3-2.xx&oh=00_AfB783adLilLKnrqzLXI_SEwhiDWJXy6hU8z5zEo0Vdhpw&oe=64605D6B",
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
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95861989_3245905628753347_374815838802280448_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=cVRn7jc9_boAX-Jcu4b&_nc_ht=scontent-lax3-2.xx&oh=00_AfDRhELmoCxDQhayWen0l3bwBIuUoLuv84v1LNyvRxVCwg&oe=6460A306",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/95794970_3659555574064673_5214645735399620608_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9ab401&_nc_ohc=x2l2zoRxTIYAX-BwvDg&_nc_ht=scontent-lax3-2.xx&oh=00_AfBRbCxwrrQe38K2bPDbNTtj8ZxW1k5V12lZHAEf0MWIGg&oe=646157F3",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97272500_2949648538464944_3276378225084727296_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9ab401&_nc_ohc=F6wD4wivwmUAX_FZkh-&_nc_ht=scontent-lax3-2.xx&oh=00_AfA3J9E23unisFmX36OW2j3IRpZbW5NGZFSPcqdQMx0g5w&oe=64617374",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/81362996_3216019578414909_218910548887076864_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=9ab401&_nc_ohc=sF5CP2Kuh9cAX-5f1bm&_nc_ht=scontent-lax3-2.xx&oh=00_AfBPFsu1Nl6jB-hC-bVKFbnMZvylxwtwCjLmhxLukOnvQQ&oe=6460F505",
            "https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/81264246_2558971397471405_1143298518711009280_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9ab401&_nc_ohc=-H_IZEsjiTwAX-E7mzF&_nc_oc=AQmxxoXeHofjjtpy51nPHHXZbjRd-uO7pXLsgQd9ORLzJ0zupKOytTe7XtJ7r87QGK5uXHVHbaXu1c-bVYtHbJRJ&_nc_ht=scontent-lax3-1.xx&oh=00_AfAPRtcNKSp5IHX63K8_NF9KkYMKARKDQ0SE2Ai2Mjr1fQ&oe=64615929",
            "https://scontent-lax3-2.xx.fbcdn.net/v/t45.5328-4/97146503_3876953655680657_1865584972765593600_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=9ab401&_nc_ohc=qEAfRP2_2_AAX_7y_1v&_nc_ht=scontent-lax3-2.xx&oh=00_AfB783adLilLKnrqzLXI_SEwhiDWJXy6hU8z5zEo0Vdhpw&oe=64605D6B",
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
