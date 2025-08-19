import { axiosPrivate } from '../providers';
import { Token } from '../types/shared/Token';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const setToken = useAuth()?.setToken;

    const refresh = async () => {
        const response = await axiosPrivate.post('/api/RefreshToken', {},
            {
                withCredentials: true
            });

        if (!setToken) return null;
        
        setToken((prev: Token | null) => {
            if (!prev) return { token: response.data.token };

            return { ...prev, token: response.data.token };
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;