import { Router } from "express";
import { createDeck, deleteDeck, getAllDecks, updateDeck } from "../controllers/decksController";

const router = Router();

router.get("/decks", getAllDecks);
router.post("/decks", createDeck);
router.put("/decks/:id", updateDeck);
router.delete("/decks/:id", deleteDeck);

export default router;
