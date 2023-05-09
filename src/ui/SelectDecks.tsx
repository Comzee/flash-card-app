import { useContext, useState } from "react";
import { CardsContext } from "../context/CardsContext";
import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { Deck } from "../types";

export default function SelectDecks() {
  const { decks } = useContext(CardsContext);
  const [selectedDecks, setSelectedDecks] = useState<Deck[]>([]);

  function handleGetCards() {
    // todo: retrieve all cards for all selected decks
    // todo: shuffle the cards
    // todo: start displaying the cards
  }

  function handleCheck(deck: Deck) {
    if (selectedDecks.includes(deck)) {
      const filterDecks = selectedDecks.filter(
        (selectedDeck) => selectedDeck != deck
      );
      setSelectedDecks(filterDecks);
    } else {
      setSelectedDecks([...selectedDecks, deck]);
    }
  }

  console.log(JSON.stringify(selectedDecks, null, 2));

  return (
    <Flex direction={"column"} m={"auto"}>
      <Flex direction={"column"} m={"auto"} gap={"0.5rem"}>
        {decks.map((deck) => (
          <Flex key={deck.id}>
            {/* todo: attach checkboxes to selected decks */}

            <Checkbox pl={"0.5rem"} onChange={() => handleCheck(deck)}>
              {deck.deckName}
            </Checkbox>
          </Flex>
        ))}
      </Flex>

      <Button
        onClick={handleGetCards}
        w={"min-content"}
        mx={"auto"}
        marginTop={"2rem"}
      >
        get cards
      </Button>
    </Flex>
  );
}
