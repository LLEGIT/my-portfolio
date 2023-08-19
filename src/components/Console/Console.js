import { Box } from "@mui/material";
import Terminal from "react-console-emulator";

export default function Console() {
  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <Box width="100%">
      <Terminal
        commands={commands}
        welcomeMessage={"Welcome to the React terminal!"}
        promptLabel={"me@React:~$"}
      />
    </Box>
  );
}
