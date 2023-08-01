import { toast } from "react-hot-toast";
import api from "./setup";


// Login 
export const getloginUser = async (data) => {
    try {
        const response = await api.post('/api/auth/login', data);
        return response.data;
    } catch (err) {
        toast.error(err.message);
    }
}

// Forgot password


// Permission 
export const getPermissions = async (data) => {
    try {
        const response = await api.post('/api/permission/check-permission', data);
        return response.data;
    } catch (err) {
        toast.error(err.message);
    }
}