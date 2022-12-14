import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter,  } from "next-connect";
import { corsMiddleware, customErrors, sessionMiddleware } from "../../lib/api";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(corsMiddleware)
  .use(sessionMiddleware)
  .use(async (req, res, next) => {
    const start = Date.now();
    await next(); // call next in chain
    const end = Date.now();
    console.log(`Request took ${end - start}ms`);
  })
  
export default router.handler(customErrors);
