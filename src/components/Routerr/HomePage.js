import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("denis");

  return (
    <Box sx={{ width: "100%" }}>
      HOME
      <Button
        variant="contained"
        onClick={() =>
          navigate("/team", {
            state: {
              name,
            },
          })
        }
      >
        Go to Team
      </Button>
    </Box>
  );
}
