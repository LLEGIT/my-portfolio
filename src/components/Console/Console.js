import { Box } from "@mui/material";
import { useState } from "react";
import Terminal from "react-console-emulator";
import loremIpsumSentences from "./../../translations/lorem.json";

export default function Console({ translations }) {
  const [firstTimeGenius, setFirstTimeGenius] = useState(true);
  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    ls: {
      description: "List files and directories.",
      usage: "ls",
      fn: () => "Sorry, but you are not allowed to see this ;)",
    },
    askTheGenius: {
      description: "Get answers from the genius",
      usage: "askTheGenius <request>",
      fn: (...args) => {
        if (args) {
          const maxSentencesNumber = 28;
          let randomIndex = getRandomInt(maxSentencesNumber);

          if (firstTimeGenius) {
            setFirstTimeGenius(false);

            return (
              "Hi foreigner, before answering your wish, I must warn you: my language of predilection is the Lorem Ipsum. Here is your answer : " +
              loremIpsumSentences.sentences[randomIndex]
            );
          } else {
            return loremIpsumSentences.sentences[randomIndex];
          }
        } else {
          return "Hello there, looks like you don't have anything to tell me !";
        }
      },
    },
  };

  // Not implemented yet
  // const promptApi = async (text) => {
  //   try {
  //     const result = await fetch(process.env.REACT_APP_PROMPT_API_URL, {
  //       method: "POST",
  //       body: JSON.stringify({
  //         prompt: text,
  //         model: "text-davinci-003",
  //         max_tokens: 50,
  //         n: 1,
  //         stop: "."
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${process.env.REACT_APP_PROMPT_API_KEY}`,
  //       },
  //     });

  //     return result;
  //   } catch (error) {
  //     return error?.error?.message;
  //   }
  // };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <Box width="100%">
      <Terminal
        commands={commands}
        welcomeMessage={translations.console.firstMessage}
        promptLabel={"TechEnthusiast~"}
      />
    </Box>
  );
}
