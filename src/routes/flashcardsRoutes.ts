import { Router } from "express";
import { createDeck, getAllDecks } from "../controllers/decksController";

const router = Router();

router.get("/decks", getAllDecks);
router.post("/decks", createDeck);

export default router;
