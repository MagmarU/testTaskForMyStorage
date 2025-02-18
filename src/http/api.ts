import axiosInstance from "./apiConfig"

export const getTaskList = async() => {
    try {
        const response = await axiosInstance.get('todos');
        console.log( response );
    } catch (error) {
        console.error( error );
    }
}