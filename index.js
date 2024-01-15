import axios from 'axios';
import express from 'express';
const server = express();

//axios.get("http://localhost:8000/posts").then((res) => console.log(res.data));

server.get("/users", async (req, res) => {
    try {
        const { data } = await axios.get("http://localhost:8000/users");
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send("server error !!!");
    };

});

server.get("/posts", async (req, res) => {
    try {
        const { data } = await axios.get("http://localhost:8000/posts");
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send("server error !!!");
    };

});



server.listen(3000, () => {
    console.log('Server is running!');
});