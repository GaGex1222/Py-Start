import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { UserData } from '@/types/data';

const useSession = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await SecureStore.getItemAsync('userToken');
      if (token) {
        const userDataString = await SecureStore.getItemAsync('userData')
        const userData: UserData = JSON.parse(userDataString as string)
        setIsAuthenticated(true);
        setUserData(userData);
      } else {
        setIsAuthenticated(false);
        setUserData(null); 
      }
    };

    checkAuthentication();
  }, []); 

  return { isAuthenticated, userData };
};

export default useSession;
