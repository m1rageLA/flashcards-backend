import { Request, Response } from "express";
import Flashcard from "../models/flashcard";

export const getFlashcards = async (req: Request, res: Response) => {
  try {
    const flashcards = await Flashcard.findAll();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch flashcards" });
    res.status(500).json({ error: "Failed to fetch flashcards" });
  }
};


export const createFlashcard = async (req: Request, res: Response) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) {
      return res
        .status(400)
        .json({ error: "Both question and answer are required" });
    }
    const flashcard = await Flashcard.create({ question, answer });
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Flashcard " });
  }
};
