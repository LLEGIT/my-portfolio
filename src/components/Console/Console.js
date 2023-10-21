import { Box } from "@mui/material";
import Terminal from "react-console-emulator";

export default function Console({ translations }) {
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
        if (args && args.length > 0) {
          const result = promptApi(args.join(" "));

          return result;
        } else {
          return "Hello there, looks like you don't have anything to tell me !";
        }
      },
    },
  };

  const promptApi = async (text) => {
    try {
      const response = await fetch(process.env.REACT_APP_PROMPT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_PROMPT_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: text },
          ],
        }),
      });
  
      const result = await response.json();
  
      return result?.choices[0]?.message?.content; // Extract the assistant's reply.
    } catch (error) {
      return error?.error?.message;
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
