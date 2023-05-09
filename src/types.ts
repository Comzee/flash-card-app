export type Card = {
  id: number;
  idDeck: number;
  term: string;
  definition: string;
  userAnswer?: string;
  gptResponse?: string;
};

export type Deck = {
  deckName: string;
  id: number;
};

export type CardsContextType = {
  decks: Deck[];
  getCards: (decks: Deck[]) => Card[];
  shuffle: () => void;
  cards: Card[];
  submitAnswer: (card: Card) => string;
};
