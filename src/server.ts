import { createServer } from "http";
import app from "./app.js";
import { setupSocket } from "./socket.js";
import { Request, Response } from "express";
// .js extension is crucial bruh
const PORT: number = parseInt(process.env.PORT || "3000");
const httpServer = createServer(app);
setupSocket(httpServer);

app.get("/test", (req: Request, res: Response) => {
  res.render("socket");
});

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
