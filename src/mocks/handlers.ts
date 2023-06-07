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

  rest.delete(`${apiUrl}/beaches/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Beach deleted" }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}/beaches`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}/beaches/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
