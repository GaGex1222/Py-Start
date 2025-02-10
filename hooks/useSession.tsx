import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { UserData } from '@/types/data';

const useSession = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const checkAuthentication = async () => {
    const token = await SecureStore.getItemAsync('userToken');
    console.log(token)
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
  
  useEffect(() => {
    checkAuthentication();

  }, []); 

  return { isAuthenticated, userData, checkAuthentication };
};

export default useSession;
