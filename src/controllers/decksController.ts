import { Request, Response } from "express";
import Deck from "../models/deck";
import { where } from "sequelize";

//----------  GET All -----------
export const getAllDecks = async (req: Request, res: Response) => {
  try {
    const decks = await Deck.findAll();
    res.json(decks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch decks" });
  }
};
//----------  GET One -----------
export const getOneDeck = async (req: Request, res: Response) => {
  try {
    const deckId = req.params.id;
    const deck = await Deck.findOne({ where: { id: deckId } });
    res.json(deck);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch decks" });
  }
};

//----------  POST  -----------
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
    return res.status(500).json({
      error: "An error occurred while creating the deck",
      details: error.message,
    });
  }
};

//----------  PUT  -----------
export const updateDeck = async (req: Request, res: Response) => {
  try {
    const deckId = req.params.id;
    const { title, level, language, length } = req.body;
    // Validate required fields
    if (!title || !level || !language || !length) {
      return res
        .status(400)
        .json({ error: "Title, level, length and language are required" });
    }

    const updateDeck = await Deck.update(
      { title, level, language, length },
      { where: { id: deckId } }
    );
    if (updateDeck) {
      res.status(200).json({
        message: `Deck with ID ${deckId} has been successfully updated.`,
      });
    } else {
      res.status(404).json({ error: `Deck with ID ${deckId} not found.` });
    }
  } catch (error: any) {
    console.error("Error updating deck:", error);
    return res.status(500).json({
      error: "An error occurred while updating the deck",
      details: error.message,
    });
  }
};

//----------  DELETE  -----------
export const deleteDeck = async (req: Request, res: Response) => {
  try {
    const deckId = req.params.id;

    const deleteDeck = await Deck.destroy({
      where: { id: deckId },
    });

    if (deleteDeck) {
      res
        .status(200)
        .json({ message: `Deck with ID ${deckId} deleted successfully.` });
    } else {
      res.status(404).json({ error: `Deck with ID ${deckId} not found.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting the deck." });
  }
};
