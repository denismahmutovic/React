import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TeamPage() {
  const { user } = React.useContext(UserContext);
  const [todos, setTodos] = React.useState([]);
  const navigate = useNavigate();

  const getNews = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    setTodos(res.data.splice(20, 30));
    console.log(res.data);
  };

  React.useEffect(() => {
    user.name !== "" && getNews();
    console.log("pali");
  }, [user.name]);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {todos.map((el, index) => (
        <Card key={index} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {el.title}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            COMPLETED: {el.completed.toString()}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                navigate(`/news/${el.id}`, {
                  state: {
                    todo: el,
                  },
                })
              }
            >
              Procitaj vise
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
