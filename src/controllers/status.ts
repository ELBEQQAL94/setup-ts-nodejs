import { Request, Response } from "express";

export const defaultRest = (req: Request, res: Response) => {
  res.send("Hello, world");
};
