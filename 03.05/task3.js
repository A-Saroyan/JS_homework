const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
.then(response => response.json())
.then(data => console.log(data[0].title));