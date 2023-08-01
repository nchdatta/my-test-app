import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { toast } from "react-hot-toast";

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}


export const useAuth = () => {
    return useContext(authContext);
};


function useProvideAuth() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState(true);

    // handle user login
    // const login = useMutation(data => getloginUser(data), {
    //     onSuccess: (data) => {
    //         if (data.success) {
    //             localStorage.setItem('accessToken', data.response_data.accessToken);
    //             const decodedToken = jwtDecode(data.response_data.accessToken);
    //             queryClient.clear();
    //             setUser(decodedToken);
    //             toast.success(data.message);
    //             navigate('/dashboard');
    //         } else {
    //             toast.error(data.message)
    //         }
    //     }
    // });


    // handle user logout
    const logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
        setUser(null);

        // invalidate any existing query data
        queryClient.clear();
    };

    // get the user data from local storage
    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            const decodedToken = jwtDecode(storedToken);
            setUser(decodedToken);
            setIsLoading(false);
        }
        setIsLoading(false);
    }, []);


    return {
        user,
        logout,
        isLoading,
    };
}; 