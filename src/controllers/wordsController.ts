import { Request, Response } from "express";
import Words from "../models/words";

//----------  GET All -----------
export const getAllWords = async (req: Request, res: Response) => {
    try {
      const decks = await Words.findAll();
      res.json(decks);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch decks" });
    }
  };
//----------  GET All By ID -----------
export const getOneword = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    const word = await Words.findAll({ where: { id: id } });
    res.json(word);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch words", details: error.message });
  }
};
//----------  GET All By LEVEL -----------
export const getAllwordsByLevel = async (req: Request, res: Response) => {
  try {
    let level = req.params.level;
    level = level.toUpperCase();
    const words = await Words.findAll({ where: { level: level } });
    res.json(words);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch words", details: error.message });
  }
};

//----------  POST -----------
export const createWord = async (req: Request, res: Response) => {
  try {
    const words = req.body;
    if (Array.isArray(words)) {
      for (const word of words) {
        const { frontSide, backSide, level, language } = word;
        if (!level || !language || !frontSide || !backSide) {
          return res.status(400).json({
            error:
              "Each word object must have title, level, frontSide, backSide and language",
          });
        }
        const createdWords = await Words.bulkCreate(words);
        return res.status(201).json(createdWords);
      }
    } else if (
      typeof words === "object" &&
      words !== null &&
      !Array.isArray(words)
    ) {
      const { frontSide, backSide, level, language } = req.body;

      // Validate required fields
      if (!level || !language || !frontSide || !backSide) {
        return res
          .status(400)
          .json({
            error:
              "Title, level, length, frontSide, backSide and language are required",
          });
      }

      const word = await Words.create({ frontSide, level, language, backSide});

      return res.status(201).json(word);
    }
  } catch (error: any) {
    console.error("Error creating word:", error); // Log the error for debugging
    return res.status(500).json({
      error: "An error occurred while creating the word",
      details: error.message,
    });
  }
};
