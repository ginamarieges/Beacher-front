import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../../store/user/types";
import { useCallback } from "react";

const useToken = () => {
  const getTokenData = useCallback((token: string): UserTokenStructure => {
    const tokenData: { name: string; sub: string } = jwt_decode(token);
    const userData: UserTokenStructure = {
      id: tokenData.sub,
      name: tokenData.name,
      token,
    };

    return userData;
  }, []);

  return { getTokenData };
};

export default useToken;
