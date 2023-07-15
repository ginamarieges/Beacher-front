import jwt_decode from "jwt-decode";
import { UserTokenDataStructure } from "../../store/user/types";
import { useCallback } from "react";

const useToken = () => {
  const getTokenData = useCallback((token: string): UserTokenDataStructure => {
    const tokenData: { name: string; sub: string } = jwt_decode(token);
    const userData: UserTokenDataStructure = {
      id: tokenData.sub,
      name: tokenData.name,
    };

    return userData;
  }, []);

  return { getTokenData };
};

export default useToken;
