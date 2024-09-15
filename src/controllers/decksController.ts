import { Request, Response } from "express";
import Deck from "../models/deck";

export const getAllDecks = async (req: Request, res: Response) => {
  try {
    const decks = await Deck.findAll();
    res.json(decks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch decks" });
  }
};

export const createDeck = async (req: Request, res: Response) => {
  try {
    const { title, level, language, length } = req.body;

    // Validate required fields
    if (!title || !level || !language || !length) {
      return res
        .status(400)
        .json({ error: "Title, level, length and language are required" });
    }

    // Create the deck using the destructured values
    const deck = await Deck.create({ title, level, language, length });

    // Respond with the newly created deck
    return res.status(201).json(deck);
  } catch (error: any) {
    console.error("Error creating deck:", error); // Log the error for debugging
    return res
      .status(500)
      .json({
        error: "An error occurred while creating the deck",
        details: error.message,
      });
  }
};

