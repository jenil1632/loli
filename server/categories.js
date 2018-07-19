let categories = {
  "products": {
    "home/ real estate": {
      "buy": ["residential", "commercial"],
      "on rent": ["residential", "commercial"],
      "pg & hostels": ["pg & hostels"]
    },
    "cars": {
      "used car": ["audi", "bmw", "chevrolet", "datsun", "ford", "honda", "hyundai", "mahindra", "maruti suzuki", "mercedes", "nissan", "renault", "skoda", "tata", "toyota", "wolkswagen"],
      "car accessories": ["car accessories"]
    },
    "electronics & appliances": {
      "laptop & accessories": ["laptops", "desktop/computers", "printers", "routers", "usb drives", "speakers", "mouse", "keyboard", "other accessories"],
      "television & gaming": ["tv/led/lcd", "music systems", "set-top box"],
      "camera": ["digicam", "dslr", "other accessories"],
      "home appliances": ["refridgerator/fridge", "washing machine", "air conditioner/ac", "air cooler", "water heater/ geyser", "vacuum cleaner", "sewing machine", "table fan", "ceiling fan", "iron", "air purifier", "room heaters"],
      "kitchen appliances": ["water purifier", "microwave oven", "mixer/juicer/grinder", "induction stove", "gas stove", "toaster/griller", "coffee maker", "roti maker", "electric kettle", "dish washer", "water dispenser"],
      "other appliances": ["other appliances"]
    },
    "furniture": ["bed sets", "wardrobe & cabinets", "sofa sets", "recliners", "tv stand", "dressing table", "mattresses", "dining set", "book shelves", "shoe racks", "chairs", "tables", "bean bags", "metal alimrahs"],
    "mobiles": ["acer", "apple", "asus", "blackberry", "coolpad", "gionee", "google", "hp", "htc", "honor", "huawei", "intex", "karbonn", "lg", "lava", "lenovo", "micromax", "microsoft", "motorola", "nokia", "one plus", "oppo", "panasonic", "philips", "reliance", "samsung", "sony", "videocon", "vivo", "xiaomi", "xolo", "mobile accessories"],
    "bikes": ["bajaj", "tvs", "honda", "ktm", "suzuki", "harley davidson", "hero motocorp", "royal enfield", "yamaha", "hero elecric", "bike accessories"],
    "books": ["literature & fiction", "children & young adult", "textbooks", "non-fiction", "business & economics", "other books"],
    "sports goods": ["fitness", "camping & hiking", "indoor games", "swimming", "cricket", "football", "tennis", "badminton", "pool & snooker", "table tennis", "other sports"],
    "fashion & clothing": {
      "kids": ["kids"],
      "men": ["casuals", "formals", "innerwear", "party wear", "ethinic wear"],
      "women": ["casuals", "formals", "innerwear", "party wear", "ethinic wear"],
      "clothing accessories": ["clothing accessories"]
    },
    "choclates & sweets": ["home-made choclates", "traditional sweets", "cakes & pastries", "ice-creams"],
    "kids & toys": {
      "baby & infant": ["prams/walkers/strollers", "cradles", "baby feeding items", "baby carriers", "baby oil"],
      "toys": ["games & puzzles", "soft toys", "toy vehicles", "remote-control toys", "educational toys", "kid bicycles", "lego"]
    },
    "decor": {
      "furnishing": ["bed lines", "cushions", "floor mats", "tiles", "window blinds", "sofa cover", "table linens", "towels", "vertical blinds", "curtains", "paintings", "flowers", "mirrors"],
      "lamps & lighting": ["decorative lights", "emergency lights", "lamps", "led bulbs", "tubelights"],
      "kitchen & dining": ["aprons", "glassware", "plasticware", "pressure cooker", "steelware"],
      "bath": ["bath accessories", "bathrobe", "bathroom fittings", "sanitary ware", "mirrors"],
      "housekeeping": ["hardware", "mosquito net", "led bulb", "umbrellas"]
    },
    "jewellery": {
      "artificial": ["bangles", "bracelets", "earrings", "necklaces", "pendants", "rings"],
      "gemstone": ["bangles", "bracelets", "earrings", "necklaces", "pendants", "rings"],
      "gold": ["bangles", "bracelets", "earrings", "necklaces", "pendants", "rings"],
      "plainum": ["bangles", "bracelets", "earrings", "necklaces", "pendants", "rings"],
      "silver": ["bangles", "bracelets", "earrings", "necklaces", "pendants", "rings"],
      "diamond": ["bangles", "bracelets", "earrings", "necklaces", "pendants", "rings"]
    },
    "food & beverages": ["home made farsan", "tiffin/dabba"],
    "hotels": ["nearby"],
    "lifestyle": ["wristwatches, sunglasses", "perfume", "shoes", "belts", "wallets", "purses", "school bags", "luggage bags", "music instruments"],
    "health": ["beauty parlours", "salons", "spa", "ayurvedic products", "face care creams", "trimmers", "deodrants", "hair creams", "supplements/diet food"],
    "daily needs": ["groceries", "chemists", "stationary"],
    "hand made products": ["hand made products"]
  },
  "services": {
    "anything on hire": ["car on hire", "costumes on hire", "wedding wear on hire", "mini-bus on hire", "tempo on hire"],
    "repair": ["car repair", "two wheeler repair", "ac service/repair", "computer/laptop repair", "mobile repair", "fridge/refridgerator repair", "washing machine repair", "water purifier repair", "camera repair", "cctv repair", "elevator repair", "gas stove repair", "inverter repair"],
    "babycare": ["babysitter", "baby massage"],
    "courier": ["international", "national", "local", "bulk"],
    "bakers": ["bakers"],
    "tiffin service": ["tiffin service"],
    "dance/music/drama": {
      "dance classes": ["bollywood dance", "classical", "hip-hop", "salsa"],
      "music classes": ["indian classical", "instrument music", "vocal", "western"],
      "drama": ["acting classes"]
    },
    "doctor": ["ayurvedic", "cardiologist", "dentist", "dermatalogist", "dietition", "ent", "eye", "general physician", "physiotherapy", "psychatrist", "sexologist"],
    "education": {
      "coaching classes/ home tution": ["school", "class 10", "class 12", "iit", "neet", "ca", "cs", "gate", "ias"],
      "arts & crafts": ["drawing classes", "painting classes", "craft and modelling classes", "photography classes", "cooking classes"],
      "language classes": ["english", "hindi", "french", "chinese", "spanish", "german", "japanese"],
      "training institute": ["engineering drawing", "programming languages", "multimedia and design"]
    },
    "entertainment": ["nearby"],
    "event organizer": {
      "caterers": ["veg", "non-veg", "wedding", "birthday party", "party", "corporate"],
      "banquets": ["ac halls", "lawn events"],
      "event planners": ["event planners"],
      "event photographers": ["event photographers"],
      "decorators": ["decorators"]
    },
    "fitness": {
      "fitness classes": ["zumba", "martial arts", "aerobics", "yoga"],
      "sports club": ["sports club"],
      "gym": ["gym"]
    },
    "housekeeping": {
      "cook": ["cook"],
      "maid": ["maid"],
      "driver": ["driver"],
      "gardener": ["gardener"],
      "laundry": ["laundry", "ironing"],
      "cleaning service": ["carpet clening", "sofa cleaning", "kitchen cleaning"],
      "pest control": ["pest control"]
    },
    "interior decorator": ["commercial", "residential"],
    "internet": ["internet service provider", "web designer/ developer", "mobile app developer"],
    "on demand services": ["carpenter", "electrician", "mason", "painter", "plumber", "towing service", "tailor"],
    "packers & movers": ["international", "national", "local", "for automobile", "for commercial"],
    "party": ["dj on hire", "party planner", "cateres", "playback singer", "photographers", "choreographer"],
    "personal care": ["bridal makeup", "bridgroom makeup", "massage for men", "massage for women", "accupuncture", "hairstyling & makeup"],
    "pet care": ["pet accessories", "pet food", "pet shop", "vet"],
    "playschool": ["nearby"],
    "resteraunts": ["nearby"],
    "security & legal": ["bodyguards", "cctv", "security service", "lawyers"],
    "sports coaching": ["athletics", "basketball", "badminton", "boxing", "chess", "cricket", "football", "gymnastics", "hockey", "judo", "karate", "squash", "swimming", "table tennis", "tennis", "skating", "volleyball"],
    "wedding": ["mehendi artist", "wedding planner", "photographer", "choreographer", "makeup artist", "caterer", "florists", "decorators", "fireworks", "banquets"],
    "business & taxes": ["ca/cs", "graphic designer", "gst services", "digital marketing", "advertising"]
  }
}

module.exports = {categories};
