import { Router } from "express";
import { createDeck, deleteDeck, getAllDecks } from "../controllers/decksController";

const router = Router();

router.get("/decks", getAllDecks);
router.post("/decks", createDeck);
router.delete("/decks/:id", deleteDeck);

export default router;
