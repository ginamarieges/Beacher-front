import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { mockBeaches } from "./beachesMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}/beaches`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ beaches: mockBeaches }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}/beaches`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
