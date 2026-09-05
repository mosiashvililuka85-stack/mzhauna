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
    id: "hot",
    ka: "ცხელი კერძები",
    en: "Hot dishes",
    items: [
      {
        ka: "შემწვარი ორაგული მეფურად",
        en: "Royal-style fried salmon",
        note: "Salmon, cream, caviar",
        price: "35 ₾",
      },
      { ka: "შემწვარი ბარაბულა", en: "Fried red mullet", price: "26 ₾" },
      {
        ka: "ორაგულის ხინკალი",
        en: "Salmon dumplings",
        note: "With shrimp and cream sauce",
        price: "35 ₾",
      },
      {
        ka: "ღორი თბილისურად კეცზე",
        en: "City-style pork on ketsi",
        note: "Pork with sulguni cheese, cream and vegetables",
        price: "27 ₾",
      },
      {
        ka: "კეცზე გამომცხვარი ბადრიჯანი",
        en: "Baked eggplant on ketsi",
        note: "With sulguni and tomatoes",
        price: "21 ₾",
      },
      { ka: "კარტოფილი რუახურად", en: "Homestyle potatoes", price: "15 ₾" },
      {
        ka: "კალმახი აჭარულად",
        en: "Acharuli-style trout",
        note: "With shrimp and sulguni cheese",
        price: "35 ₾",
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
        en: "\u201cMzhauna\u201d soup (seasonal)",
        note: "Sorrel in meat broth with egg and herbs",
        price: "17 ₾",
      },
    ],
  },
  {
    id: "pastries",
    ka: "ცომეული",
    en: "Pastries",
    items: [
      {
        ka: "ხინკალი ქალაქური (5 ცალი)",
        en: "City-style khinkali (5 pcs)",
        note: "Filled with beef, pork and fresh herbs",
        price: "12 ₾",
      },
      {
        ka: "ხინკალი მთიულური (5 ცალი)",
        en: "Mtiuluri khinkali (5 pcs)",
        note: "Filled with beef and pork, seasoned with Georgian spices",
        price: "12 ₾",
      },
      {
        ka: "ხაჭაპური თავადური",
        en: "Khachapuri Tavduri",
        note: "With three cheeses",
        price: "28 ₾",
      },
      {
        ka: "ხაჭაპური აჭარული",
        en: "Adjarian khachapuri",
        note: "Boat-shaped bread with cheese, egg and butter",
        price: "18 ₾",
      },
      { ka: "ხაჭაპური იმერული", en: "Imeretian khachapuri", price: "21 ₾" },
      {
        ka: "მჟაუნას საფირმო ლობიანი",
        en: "Mzhauna\u2019s signature lobiani",
        note: "With ham and sulguni cheese",
        price: "28 ₾",
      },
      {
        ka: "ღომი შებოლილი სულგუნით",
        en: "Ghomi with smoked cheese",
        note: "Stone-ground cornmeal, a Georgian classic",
        price: "16 ₾",
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
      { ka: "ბრუტი", en: "Brut sparkling", note: "150 ml / 0.75 L", price: "10 / 50 ₾" },
      { ka: "პროსეკო", en: "Prosecco sparkling", note: "150 ml / 0.75 L", price: "15 / 75 ₾" },
    ],
  },
  {
    id: "spirits",
    ka: "სპირტიანი",
    en: "Brandy & spirits",
    items: [
      { ka: "ასკანელი ძმები 5*", en: "Askaneli Brothers 5*", note: "50 ml / 0.5 L", price: "6.5 / 65 ₾" },
      { ka: "ასკანელი ძმები V.S.", en: "Askaneli Brothers V.S.", note: "50 ml / 0.5 L", price: "7.5 / 75 ₾" },
      { ka: "ჯეიმსონი", en: "Jameson Irish whiskey", note: "50 ml / 0.5 L", price: "10 / 150 ₾" },
      { ka: "ბალანტაინსი", en: "Ballantine\u2019s Scotch whisky", note: "50 ml / 0.5 L", price: "13.5 / 135 ₾" },
      { ka: "სან ხოსე სილვერი", en: "San Jose Silver tequila", note: "50 ml / 0.7 L", price: "10 / 140 ₾" },
      { ka: "თორნი", en: "Thorny gin", note: "50 ml / 0.7 L", price: "8.5 / 120 ₾" },
      { ka: "ელ გალიპოტე (შავი)", en: "El Galipote dark rum", note: "50 ml / 0.7 L", price: "10 / 140 ₾" },
      { ka: "ელ გალიპოტე (თეთრი)", en: "El Galipote white rum", note: "50 ml / 0.7 L", price: "10 / 140 ₾" },
      { ka: "კუანტრო", en: "Cointreau", note: "50 ml / 0.7 L", price: "16 / 235 ₾" },
      { ka: "კალუა", en: "Kahlua", note: "50 ml / 0.7 L", price: "19 / 275 ₾" },
      { ka: "ბეილისი", en: "Baileys Irish Cream", note: "50 ml / 0.7 L", price: "15 / 155 ₾" },
      { ka: "აპეროლი", en: "Aperol", note: "50 ml / 0.7 L", price: "12 / 165 ₾" },
      { ka: "იაგერმაისტერი", en: "J\u00e4germeister", note: "50 ml / 0.7 L", price: "14 / 140 ₾" },
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
