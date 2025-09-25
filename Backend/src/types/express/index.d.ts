import * as Express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; username: string };
    }
  }
}
