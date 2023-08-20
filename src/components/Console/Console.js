import React, { useState } from "react";
import { Box } from "@mui/material";
import Terminal from "react-console-emulator";

export default function Console({ translations }) {
  const [commands, setCommands] = useState({
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
      fn: (...args) => promptApi(args),
    },
  });

  const promptApi = async (text) => {
    try {
      const result = await fetch(process.env.REACT_APP_PROMPT_API_URL, {
        prompt: text,
        model: "text-davinci-003",
        max_tokens: 50,
        n: 1,
        stop: ".",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_PROMPT_API_KEY}`,
        },
      });
      //console.log("response", result.data.choices[0].text);
      return result.data.choices[0].text;
    } catch (error) {
      //console.log(e);
      return error;
    }
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
