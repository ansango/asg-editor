import {
  corsMiddleware,
  sessionMiddleware,
  router,
  customErrors,
} from "../../../lib/api/";
router
  .use(corsMiddleware)
  .use(sessionMiddleware)
  .get(async (req, res) => {
    res.status(200).json({ message: "Hello World" });
  });

export default router.handler(customErrors);
