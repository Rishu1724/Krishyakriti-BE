export const getMulticropping = (req, res) => {
  res.json({
    title: "Multicropping",
    description:
      "Growing two or more crops in the same field in a season...",
    combinations: [
      "Rice + Pulses",
      "Maize + Beans",
      "Wheat + Mustard",
    ],
  });
};

export const getAgroforestry = (req, res) => {
  res.json({
    title: "Agroforestry",
    description: "Integrating trees with crops...",
    types: ["Silvopasture", "Alley Cropping", "Forest Farming"],
  });
};

export const getMarketInfo = (req, res) => {
  res.json({
    title: "Market Information",
    sources: [
      "APMC",
      "Agmarknet",
      "Farmer Producer Organizations",
    ],
  });
};
