import { Router } from "express";
import { createDeck, deleteDeck, getAllDecks, getAllDecksByLevel, getOneDeck, updateDeck } from "../controllers/decksController";

const router = Router();

router.get("/decks", getAllDecks);
router.get("/decks/:id", getOneDeck);
router.get("/decks/level/:level", getAllDecksByLevel);
router.post("/decks", createDeck);
router.put("/decks/:id", updateDeck);
router.delete("/decks/:id", deleteDeck);

export default router;
