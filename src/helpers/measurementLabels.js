export const getMeasurementLabel = (quantity, measurement) => {
    if (measurement === "Cups") {
        return quantity === "1" ? "Cup" : "Cups";
    }
    if (measurement === "Tbsps") {
        return quantity === "1" ? "Tbsp" : "Tbsps";
    }
    if (measurement === "Tsps") {
        return quantity === "1" ? "Tsp" : "Tsps";
    }
    if (measurement === "Grams") {
        return quantity === "1" ? "Gram" : "Grams";
    }
    return measurement;
};