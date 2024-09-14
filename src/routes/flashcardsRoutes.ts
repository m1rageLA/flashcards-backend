import { Router } from "express";
import { getFlashcards, createFlashcard } from "../controllers/flashCardsController";

const router = Router();

router.get('/flashcards', getFlashcards);
router.post('/flashcards', createFlashcard);

export default router;