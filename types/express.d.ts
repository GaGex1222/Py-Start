// express.d.ts
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // or replace `any` with a more specific type like `DecodedToken`
    }
  }
}
