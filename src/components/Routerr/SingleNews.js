import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function SingleNews() {
  const { id } = useParams();
  const { state } = useLocation();

  const [singleTodo, setSingleTodo] = React.useState({});

  //FUNCKIJA ZA POZIVANJE SERVERA
  const getTodo = async (id) => {
    console.log("Server pozvan");
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    setSingleTodo(res.data);
  };

  useEffect(() => {
    getTodo(id);
  }, [id]);

  return (
    <div>
      {singleTodo ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {singleTodo?.title}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            COMPLETED: {singleTodo?.completed?.toString()}
          </CardContent>
          <CardActions></CardActions>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
