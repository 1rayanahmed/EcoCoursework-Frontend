let products = [
    {
        _id: "67428bd23ec9bea87f963e40",
        id: 1001,
        title: "Reusable Bamboo Straws",
        description: "Set of 6 eco-friendly bamboo straws with a cleaning brush. Perfect for reducing plastic waste.",
        price: 12.99,
        location: "London",
        image: "public/bs.jpg",
        availableInventory: 20,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 0.5, // CO2 saved in kg
        plasticReduced: 0.2 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e42",
        id: 1002,
        title: "Organic Cotton Tote Bag",
        description: "Durable and stylish organic cotton tote bag for shopping or daily use. Say no to plastic bags!",
        price: 15.99,
        location: "Liverpool",
        image: "public/cb.jpg",
        availableInventory: 30,
        rating: 5,
        sustainabilityRating: 5,
        co2Saved: 1.0, // CO2 saved in kg
        plasticReduced: 0.5 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e43",
        id: 1003,
        title: "Biodegradable Phone Case",
        description: "Eco-friendly phone case made from biodegradable materials. Compatible with most smartphones.",
        price: 19.99,
        location: "Manchester",
        image: "public/pc.jpg",
        availableInventory: 15,
        rating: 4,
        sustainabilityRating: 4,
        co2Saved: 0.3, // CO2 saved in kg
        plasticReduced: 0.1 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e44",
        id: 1004,
        title: "Solar-Powered Charger",
        description: "Portable solar-powered charger for your devices. Harness the power of the sun!",
        price: 49.99,
        location: "London",
        image: "public/sc.jpg",
        availableInventory: 10,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 2.0, // CO2 saved in kg
        plasticReduced: 0.0 // No plastic reduced
    },
    {
        _id: "67428c8c3ec9bea87f963e45",
        id: 1005,
        title: "Reusable Beeswax Wraps",
        description: "Set of 3 beeswax wraps for food storage. A sustainable alternative to plastic wrap.",
        price: 14.99,
        location: "Manchester",
        image: "public/bw.jpg",
        availableInventory: 25,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 0.4, // CO2 saved in kg
        plasticReduced: 0.3 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e46",
        id: 1006,
        title: "Compostable Trash Bags",
        description: "Pack of 20 compostable trash bags made from plant-based materials. Perfect for eco-friendly waste disposal.",
        price: 9.99,
        location: "Liverpool",
        image: "public/tb.jpg",
        availableInventory: 50,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 0.2, // CO2 saved in kg
        plasticReduced: 0.5 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e47",
        id: 1007,
        title: "Eco-Friendly Water Bottle",
        description: "Stainless steel water bottle with double-wall insulation. Keep your drinks hot or cold for hours.",
        price: 24.99,
        location: "London",
        image: "public/wb.jpg",
        availableInventory: 18,
        rating: 5,
        sustainabilityRating: 5,
        co2Saved: 1.5, // CO2 saved in kg
        plasticReduced: 0.8 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e48",
        id: 1008,
        title: "Organic Bamboo Toothbrush",
        description: "Biodegradable bamboo toothbrush with soft bristles. Comes in a pack of 4.",
        price: 8.99,
        location: "Manchester",
        image: "public/tc.jpg",
        availableInventory: 40,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 0.1, // CO2 saved in kg
        plasticReduced: 0.1 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e49",
        id: 1009,
        title: "Reusable Silicone Food Bags",
        description: "Set of 5 reusable silicone food bags for storing snacks, sandwiches, and more. Dishwasher safe.",
        price: 22.99,
        location: "Liverpool",
        image: "public/fbjpg.jpg",
        availableInventory: 12,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 0.6, // CO2 saved in kg
        plasticReduced: 0.4 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e4a",
        id: 1010,
        title: "Eco-Friendly Laundry Detergent",
        description: "Plant-based, biodegradable laundry detergent in a recyclable cardboard box. Safe for sensitive skin.",
        price: 17.99,
        location: "London",
        image: "public/ld.jpg",
        availableInventory: 22,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 0.8, // CO2 saved in kg
        plasticReduced: 0.2 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e4b",
        id: 1011,
        title: "Reusable Coffee Cup",
        description: "Insulated reusable coffee cup made from recycled materials. Perfect for your morning brew.",
        price: 16.99,
        location: "Manchester",
        image: "public/cc.jpg",
        availableInventory: 15,
        rating: 5,
        sustainabilityRating: 5,
        co2Saved: 1.2, // CO2 saved in kg
        plasticReduced: 0.3 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e4c",
        id: 1012,
        title: "Organic Cotton Napkins",
        description: "Set of 6 organic cotton napkins for a sustainable dining experience. Machine washable.",
        price: 18.99,
        location: "Liverpool",
        image: "public/cn.jpg",
        availableInventory: 20,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 0.3, // CO2 saved in kg
        plasticReduced: 0.1 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e4d",
        id: 1013,
        title: "Eco-Friendly Cleaning Kit",
        description: "All-natural cleaning kit with reusable spray bottles and biodegradable cleaning tablets.",
        price: 29.99,
        location: "London",
        image: "public/ck.jpg",
        availableInventory: 10,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 1.0, // CO2 saved in kg
        plasticReduced: 0.4 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e4e",
        id: 1014,
        title: "Reusable Produce Bags",
        description: "Set of 5 mesh produce bags for grocery shopping. Lightweight and washable.",
        price: 11.99,
        location: "Manchester",
        image: "public/pb.jpg",
        availableInventory: 35,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 0.5, // CO2 saved in kg
        plasticReduced: 0.3 // Plastic reduced in kg
    },
    {
        _id: "67428c8c3ec9bea87f963e4f",
        id: 1015,
        title: "Solar-Powered Garden Lights",
        description: "Set of 6 solar-powered garden lights for eco-friendly outdoor lighting.",
        price: 34.99,
        location: "Liverpool",
        image: "public/gl.jpg",
        availableInventory: 8,
        rating: 4,
        sustainabilityRating: 5,
        co2Saved: 2.5, // CO2 saved in kg
        plasticReduced: 0.0 // No plastic reduced
    }
];