import axios from "axios";

export const saveProduct = async (jsonPayload) => {
    try {
        // Await the axios POST request
        const response = await axios.post("http://localhost:9000/saveProduct", jsonPayload);

        // Log the full response and data
        console.log("Product complete response:", response);
        console.log("Product only data response:", response.data);

        // Alert user that the product was saved successfully
        alert("Product saved successfully");
    } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error saving product:", error);
        alert("Error saving product. Please try again.");
    }
};

export const getProducts = async () => {
    try {
        const fetchResponse = await axios.get("http://localhost:9000/getProducts");
        console.log("Fetched products data:", fetchResponse.data);
        alert("Fetching data successfully...");

        return fetchResponse.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};