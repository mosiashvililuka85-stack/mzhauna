export type MenuItem = {
  ka: string;
  en: string;
  note?: string;
  price: string;
};

export type MenuSection = {
  id: string;
  ka: string;
  en: string;
  items: MenuItem[];
};

export const foodSections: MenuSection[] = [
  {
    id: "salads",
    ka: "სალათები და ცივი კერძები",
    en: "Salads & appetizers",
    items: [
      { ka: "კიტრისა და პომიდვრის სალათი", en: "Cucumber & tomato salad", price: "16 ₾" },
      {
        ka: "კიტრისა და პომიდვრის სალათი ნიგვზით",
        en: "Cucumber & tomato salad with walnuts",
        price: "19 ₾",
      },
      { ka: "ჯონჯოლის სალათი", en: "Jonjoli salad", price: "14 ₾" },
      { ka: "ცეზარის სალათი ქათმით", en: "Caesar salad with chicken", price: "26 ₾" },
      { ka: "ცეზარის სალათი კრევეტებით", en: "Caesar salad with shrimp", price: "33 ₾" },
      {
        ka: "მწვანე სალათი",
        en: "Green salad",
        note: "Iceberg lettuce, green apple, kiwi, cucumber and green bell pepper",
        price: "18 ₾",
      },
      { ka: "ბადრიჯანი ნიგვზით", en: "Eggplant with walnuts", price: "18 ₾" },
      {
        ka: "ორაგული ბაჟეს სოუსში",
        en: "Salmon in bazhe sauce",
        note: "Roasted salmon with walnut bazhe sauce",
        price: "35 ₾",
      },
      {
        ka: "ფხალის ასორტი",
        en: "Pkhali assortment",
        note: "Eggplant, bell pepper, spinach and beetroot with walnuts, mchadi and cheese",
        price: "38 ₾",
      },
      {
        ka: "ქართული ყველის დაფა",
        en: "Georgian cheese plate",
        note: "Sulguni, smoked sulguni, local cheese and jonjoli",
        price: "28 ₾",
      },
    ],
  },
  {
    id: "hot",
    ka: "ძირითადი კერძები",
    en: "Main dishes",
    items: [
      {
        ka: "ღორის სუკი თბილისურად",
        en: "Tbilisi-style roasted pork tenderloin",
        note: "With vegetables and sulguni",
        price: "29 ₾",
      },
      {
        ka: "ბადრიჯნის ნავები ხორცითა და სულგუნით",
        en: "Eggplant boats with meat and sulguni",
        note: "Stuffed with beef, pork and sulguni cheese",
        price: "38 ₾",
      },
      {
        ka: "კალმახი აჭარულად",
        en: "Adjarian-style trout",
        note: "With shrimp, salmon and sulguni in pomegranate sauce",
        price: "37 ₾",
      },
      { ka: "ღორის ნეკნები BBQ", en: "Pork ribs BBQ", price: "23 ₾" },
      {
        ka: "ღორის სტეიკი",
        en: "Pork steak",
        note: "With marinated onions, adjika and roasted potatoes or fries",
        price: "35 ₾",
      },
      {
        ka: "ოსტრი",
        en: "Ostri",
        note: "Spicy beef soup in tomato sauce with Georgian spices",
        price: "23 ₾",
      },
      { ka: "სოკო კეცზე", en: "Mushrooms on ketsi", note: "Traditional clay pot", price: "16 ₾" },
      { ka: "სოკო კეცზე სულგუნით", en: "Mushrooms on ketsi with sulguni", price: "20 ₾" },
      { ka: "ქათმის ღვიძლი კეცზე", en: "Chicken liver on ketsi", price: "21 ₾" },
      {
        ka: "ლობიო",
        en: "Bean stew",
        note: "With jonjoli, mchadi and local Georgian cheese",
        price: "21 ₾",
      },
      {
        ka: "ჩაშუშული ბატკანი (სეზონური)",
        en: "Braised lamb (seasonal)",
        note: "With sorrel, white wine and herbs",
        price: "44 ₾",
      },
      {
        ka: "მეგრული ხარჩო ღომით",
        en: "Megrelian kharcho with ghomi",
        note: "Beef stew in walnut sauce with ghomi",
        price: "42 ₾",
      },
      {
        ka: "ტოლმა ვაზის ფოთოლში",
        en: "Dolma in grape leaves",
        note: "Minced beef wrapped in grape leaves with garlic and mint sauce",
        price: "25 ₾",
      },
      {
        ka: "მეგრული კუპატი ღომით",
        en: "Megrelian kupati with ghomi",
        note: "Smoked homemade sausages with ghomi",
        price: "42 ₾",
      },
      {
        ka: "სამეფო გამომცხვარი ორაგული",
        en: "Royal baked salmon",
        note: "In cream and caviar sauce",
        price: "40 ₾",
      },
    ],
  },
  {
    id: "boards",
    ka: "ლუდის დაფა",
    en: "Beer boards",
    items: [
      {
        ka: "გამომცხვარი ღორის ნეკნები",
        en: "Baked pork ribs",
        note: "Served with sauce, pickled assortment and boiled potatoes",
        price: "105 ₾",
      },
      {
        ka: "შებოლილი ღორის ნეკნი",
        en: "Smoked pork ribs",
        note: "Served with mustard and boiled potatoes",
        price: "80 ₾",
      },
      { ka: "თხილეულის დაფა", en: "Nut board", price: "28 ₾" },
      {
        ka: "ღორის ნეკნის დაფა",
        en: "Pork ribs platter",
        note: "Roasted with adjika, baked potatoes, shoti bread, pickles and sauces",
        price: "120 ₾",
      },
      {
        ka: "შებოლილი ნეკნის დაფა",
        en: "Smoked pork ribs platter",
        note: "With baked potatoes, pickles, toasted shoti bread and sauces",
        price: "85 ₾",
      },
    ],
  },
  {
    id: "soups",
    ka: "წვნიანი",
    en: "Soups",
    items: [
      {
        ka: "ხარჩო",
        en: "Kharcho",
        note: "Beef soup with tomato sauce, rice and Georgian spices",
        price: "22 ₾",
      },
      {
        ka: "თათრიახნი პატარა ხინკლით",
        en: "Tatariakhni with mini khinkali",
        note: "Beef soup with garlic and herbs",
        price: "21 ₾",
      },
      { ka: "ჩიხირთმა", en: "Chikhirtma", note: "Traditional chicken soup", price: "16 ₾" },
      { ka: "სოკოს კრემ-სუპი", en: "Mushroom cream soup", price: "16 ₾" },
      {
        ka: "„მჟაუნას“ სუპი (სეზონური)",
        en: "Mzhauna soup (seasonal)",
        note: "Sorrel in meat broth with egg and herbs",
        price: "17 ₾",
      },
    ],
  },
  {
    id: "pastries",
    ka: "ქართული საცხობი და ხინკალი",
    en: "Georgian bakery & khinkali",
    items: [
      { ka: "ხაჭაპური იმერული", en: "Imeretian khachapuri", price: "21 ₾" },
      {
        ka: "ხაჭაპური აჭარული",
        en: "Adjarian khachapuri",
        note: "With Imeretian cheese, sulguni and egg",
        price: "21 ₾",
      },
      {
        ka: "სამეფო ხაჭაპური",
        en: "Royal khachapuri",
        note: "Dadiani recipe with sulguni and smoked sulguni cheese",
        price: "30 ₾",
      },
      {
        ka: "„მჟაუნას“ ლობიანი",
        en: "Mzhauna lobiani",
        note: "Filled with beans, smoked sulguni, sulguni and ham",
        price: "28 ₾",
      },
      { ka: "ლობიანი", en: "Lobiani", price: "21 ₾" },
      {
        ka: "ხინკალი ქალაქური (1 ცალი)",
        en: "Khinkali kalakuri (1 pc)",
        note: "With herbs",
        price: "2.6 ₾",
      },
      {
        ka: "ხინკალი მთიულური (1 ცალი)",
        en: "Khinkali mtiuluri (1 pc)",
        note: "Without herbs",
        price: "2.6 ₾",
      },
      {
        ka: "ორაგულის ხინკალი (5 ცალი)",
        en: "Salmon khinkali (5 pcs)",
        note: "With fried shrimp in spinach sauce",
        price: "38 ₾",
      },
    ],
  },
];

export const drinkSections: MenuSection[] = [
  {
    id: "wine",
    ka: "ღვინო",
    en: "Wine",
    items: [
      { ka: "რქაწითელი ქვევრი", en: "Rkatsiteli Qvevri, white dry", note: "150 ml / 0.75 L", price: "12 / 60 ₾" },
      { ka: "საფერავი", en: "Saperavi, red dry", note: "150 ml / 0.75 L", price: "13 / 65 ₾" },
      { ka: "მანავის მწვანე", en: "Manavi Mtsvane, white", note: "150 ml / 0.75 L", price: "18 / 90 ₾" },
      { ka: "რქაწითელი ქვევრი (დრაფტი)", en: "Rkatsiteli Qvevri, draft", note: "1 L", price: "12 ₾" },
    ],
  },
  {
    id: "sparkling",
    ka: "ცქრიალა ღვინო",
    en: "Sparkling wine",
    items: [
      { ka: "პროსეკო", en: "Prosecco", price: "90 ₾" },
      { ka: "ბრუტი", en: "Brut", price: "60 ₾" },
    ],
  },
  {
    id: "spirits",
    ka: "ძლიერი ალკოჰოლური სასმელები",
    en: "Strong alcoholic drinks",
    items: [
      {
        ka: "ასკანელი ძმები",
        en: "Askaneli Brothers chacha",
        note: "50 ml / 0.5 L",
        price: "6 / 60 ₾",
      },
      {
        ka: "ასკანელი ძმები პრემიუმი",
        en: "Askaneli Brothers Premium chacha",
        note: "50 ml / 0.5 L",
        price: "11 / 150 ₾",
      },
      { ka: "გრეი გუსი", en: "Grey Goose vodka", note: "50 ml / 0.5 L", price: "23 / 450 ₾" },
      { ka: "აბსოლუტი", en: "Absolut vodka", note: "50 ml / 0.5 L", price: "7 / 70 ₾" },
      { ka: "დანზკა", en: "Danzka vodka", note: "50 ml / 0.5 L", price: "7 / 70 ₾" },
      { ka: "სტოლიჩნაია", en: "Stolichnaya vodka", note: "50 ml / 0.5 L", price: "7 / 70 ₾" },
      { ka: "ჯეიმსონი", en: "Jameson whiskey", note: "50 ml", price: "16 ₾" },
      { ka: "ბალანტაინსი", en: "Ballantine’s whiskey", note: "50 ml", price: "12 ₾" },
      { ka: "ჩივას რეგალი", en: "Chivas Regal whiskey", note: "50 ml", price: "20 ₾" },
      {
        ka: "სარაჯიშვილი V.S.O.P",
        en: "Sarajishvili V.S.O.P brandy",
        note: "50 ml",
        price: "17 ₾",
      },
      { ka: "სარაჯიშვილი 5*", en: "Sarajishvili 5* brandy", note: "50 ml", price: "11 ₾" },
      {
        ka: "ასკანელი ძმები V.S.",
        en: "Askaneli Brothers V.S. brandy",
        note: "50 ml",
        price: "7 ₾",
      },
      { ka: "ასკანელი ძმები 5*", en: "Askaneli Brothers 5* brandy", note: "50 ml", price: "6 ₾" },
      { ka: "სან ხოსე", en: "San Jose tequila", note: "50 ml", price: "6 ₾" },
    ],
  },
  {
    id: "cocktails",
    ka: "კოქტეილები",
    en: "Cocktails",
    items: [
      { ka: "B-52", en: "B-52", note: "Baileys, Kahlua, Cointreau", price: "25 ₾" },
      { ka: "ჯინ ტონიკი", en: "Gin & tonic", note: "Gin, tonic, lemon", price: "15 ₾" },
      { ka: "კოსმოპოლიტენი", en: "Cosmopolitan", note: "Vodka, Cointreau, juice", price: "15 ₾" },
      { ka: "მარგარიტა", en: "Margarita", note: "Tequila, Cointreau", price: "15 ₾" },
      { ka: "ლონგ აილენდი", en: "Long Island", note: "Vodka, tequila, rum, gin, Cointreau", price: "15 ₾" },
      { ka: "აპეროლ შპრიცი", en: "Aperol spritz", note: "Aperol, sparkling wine, tonic", price: "15 ₾" },
    ],
  },
];

export const reviews = [
  {
    name: "Nino K.",
    origin: "Tbilisi",
    rating: 5,
    text: "The Adjarian khachapuri came out still bubbling and the courtyard smelled of tandoor bread. We stayed three hours.",
  },
  {
    name: "Andreas M.",
    origin: "Berlin",
    rating: 5,
    text: "Best khinkali of the whole trip \u2014 thin, juicy, properly peppered. The staff taught us how to eat them.",
  },
  {
    name: "\u10d2\u10d8\u10d5\u10d8 \u10da.",
    origin: "\u10e5\u10e3\u10d7\u10d0\u10d8\u10e1\u10d8",
    rating: 5,
    text: "\u10db\u10df\u10d0\u10e3\u10dc\u10d0\u10e1 \u10e1\u10e3\u10de\u10d8 \u10d6\u10e3\u10e1\u10e2\u10d0\u10d3 \u10d8\u10e1\u10d4\u10d7\u10d8\u10d0, \u10e0\u10d4\u10d7 \u10e1\u10d0\u10ee\u10da\u10e8\u10d8 \u10d0\u10db\u10d6\u10d0\u10d3\u10d4\u10d1\u10d4\u10dc. \u10e1\u10d0\u10e4\u10d8\u10e0\u10db\u10dd \u10da\u10dd\u10d1\u10d8\u10d0\u10dc\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0.",
  },
  {
    name: "Sofia R.",
    origin: "Warsaw",
    rating: 5,
    text: "We ordered the pork ribs platter for four and could not finish it. Qvevri wine by the litre, warm service, low prices.",
  },
  {
    name: "Levan T.",
    origin: "Batumi",
    rating: 4,
    text: "Ghomi with smoked sulguni is the dish I keep coming back for. Busy on weekends \u2014 call ahead.",
  },
];
