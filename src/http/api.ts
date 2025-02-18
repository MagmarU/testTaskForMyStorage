import axiosInstance from "./apiConfig"

export const getTaskList = async() => {
    try {
        const response = await axiosInstance.get('todos');
        return response.data;
    } catch (error) {
        console.error( error );
    }
}

export const getUsers = async() => {
    try {
        const response = await axiosInstance.get('users');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}