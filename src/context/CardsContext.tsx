import { ReactNode, createContext, useEffect, useState } from "react";
import { Card, CardsContextType, Deck } from "../types";

export const CardsContext = createContext<CardsContextType>({
  decks: [],
  getCards: () => [],
  shuffle: () => null,
  cards: [],
  submitAnswer: () => "",
});

export const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  function getCards(decks: Deck[]): Card[] {
    return [];
  }

  function submitAnswer(card: Card): string {
    return "";
  }

  function shuffle() {}

  // onmount retrieve decks
  useEffect(() => {
    fetch("http://localhost:3399/deck/")
      .then((response) => response.json())
      .then(setDecks)
      .catch((error) => console.error(error));
  }, []);

  return (
    <CardsContext.Provider
      value={{
        decks,
        getCards,
        shuffle,
        cards,
        submitAnswer,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
