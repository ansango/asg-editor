// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
// type Data = {
//   name?: string;
//   message?: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const session = await unstable_getServerSession(req, res, authOptions);
//   if (!session) {
//     return res.status(401).json({ message: "You must be logged in." });
//   }

//   res.status(200).json({ name: "John Doe" });
// }

import { createRouter, expressWrapper } from "next-connect";
import cors from "cors";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(expressWrapper(cors())) // express middleware are supported if you wrap it with expressWrapper
  .use(async (req, res, next) => {
    const start = Date.now();
    await next(); // call next in chain
    const end = Date.now();
    console.log(`Request took ${end - start}ms`);
  })
  .get(async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(403).end("You must be logged in.");
    }
    res.status(200).json({ session });
  });

// create a handler from router with custom
// onError and onNoMatch
export default router.handler({
  onError: (err, req, res) => {
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
