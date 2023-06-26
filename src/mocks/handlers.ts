import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { mockBeaches, mockedAddBeach, twentyBeaches } from "./beachesMocks";

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

  rest.post(`${apiUrl}/beaches`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ newBeach: mockedAddBeach }));
  }),

  rest.get(`${apiUrl}/beaches/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ beach: mockedAddBeach }));
  }),

  rest.put(`${apiUrl}/beaches`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Beach updated" }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}/beaches`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.delete(`${apiUrl}/beaches/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.post(`${apiUrl}/beaches`, (_req, res, ctx) => {
    return res(ctx.status(400));
  }),

  rest.get(`${apiUrl}/beaches/:id`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.put(`${apiUrl}/beaches`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];

export const buttonsHandlers = [
  rest.get(`${apiUrl}/beaches`, (req, res, ctx) => {
    const searchParams = req.url.searchParams;
    searchParams.set("page", "3");

    return res(
      ctx.status(200),
      ctx.json({ beaches: twentyBeaches, length: twentyBeaches.length })
    );
  }),
];
