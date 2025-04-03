import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "x-api-key": '87909682e6cd74208f41a6ef39fe4191',
        "Content-Type": "application/json",
    },
});

export const getProducts = async ({ search = "", limit = 20 }) => {
    let url = `/products?limit=${limit}`;

    if (search !== "") {
        url += `&search=${encodeURIComponent(search)}`;
    }

    const response = await apiClient.get(url);
    return response.data;
};

export const getProductById = async (id: string) => {
    try {
        const response = await apiClient.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return error;
    }
};
