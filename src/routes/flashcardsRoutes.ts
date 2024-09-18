import { Router } from "express";
import {
  createDeck,
  deleteDeck,
  getAllDecks,
  getAllDecksByLevel,
  getOneDeck,
  updateDeck,
} from "../controllers/decksController";
import { createWord, getAllWords, getAllwordsByLevel, getOneword } from "../controllers/wordsController";


const router = Router();

router.get("/decks", getAllDecks);
router.get("/decks/:id", getOneDeck);
router.get("/decks/level/:level", getAllDecksByLevel);
router.post("/decks", createDeck);
router.put("/decks/:id", updateDeck);
router.delete("/decks/:id", deleteDeck);

router.get("/words/level/:level", getAllwordsByLevel);
router.get("/words/:id", getOneword);
router.get("/words", getAllWords);
router.post("/words", createWord);
// router.put("words/:id", getAllwordsByLevel);
// router.delete("words/:id", getAllwordsByLevel);

export default router;
