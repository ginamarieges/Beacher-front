import jwt_decode from "jwt-decode";
import { UserDataStructure } from "../../store/user/types";
import { useCallback } from "react";

const useToken = () => {
  const getTokenData = useCallback((token: string): UserDataStructure => {
    const tokenData: { name: string; sub: string } = jwt_decode(token);
    const userData: UserDataStructure = {
      id: tokenData.sub,
      name: tokenData.name,
    };

    return userData;
  }, []);

  return { getTokenData };
};

export default useToken;
