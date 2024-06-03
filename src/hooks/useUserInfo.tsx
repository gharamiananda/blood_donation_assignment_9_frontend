import { useEffect, useState } from 'react';
import { getFromLocalStorage } from '@/utils/local-storage';
import { decodedToken } from '@/utils/jwt';
import { authKey } from '@/contants/authkey';
import { JwtPayload } from 'jwt-decode';
import { useGetMYProfileQuery } from '@/redux/api/myProfile';

const useUserInfo = (): any | string => {
   const [userInfo, setUserInfo] = useState<any | string>('');
   const[skipApi,setSkipAPi]=useState(true)
   const { data, isLoading } = useGetMYProfileQuery(undefined,{skip:skipApi});

   useEffect(() => {
      const fetchUserInfo = () => {
         const authToken = getFromLocalStorage(authKey);
         if (authToken) {
            setSkipAPi(false)
            const decodedData: JwtPayload & { role: any } = decodedToken(
               authToken
            ) as JwtPayload & {
               role: any;
            };
            const userInfo: any = {
               ...decodedData,
               role: decodedData.role?.toLowerCase() || '',
            };
            setUserInfo(userInfo);
         } else {
            setUserInfo('');
         }
      };

      fetchUserInfo();
   }, []);

   return {...userInfo,data};
};

export default useUserInfo;
