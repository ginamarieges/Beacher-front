import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { tokenMock } from "../../mocks/userMocks";
import { UserTokenStructure } from "../../store/user/types";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the decoded token", () => {
      const token = tokenMock;
      const expectedUserData: UserTokenStructure = {
        id: "6470de574da09294395a6eaa",
        name: "gina",
        token: tokenMock,
      };

      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const userData = getTokenData(token);

      expect(userData).toStrictEqual(expectedUserData);
    });
  });
});
