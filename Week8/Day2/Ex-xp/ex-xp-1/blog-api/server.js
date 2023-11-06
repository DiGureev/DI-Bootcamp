const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log(`running on port 5000`);
});

const data = [
    {
        id: '1',
        title: 'Title 1',
        content: 'New post'
    },
    {
        id: '2',
        title: 'Title 1',
        content: 'New post'
    },
    {
        id: '3',
        title: 'Title 1',
        content: 'New post'
    },
]

//GET /posts: Return a list of all blog posts.

app.get("/api/data", (req, res) => {
    res.json(data);
  });

//GET /posts/:id: Return a specific blog post based on its id.

app.get("/api/data/:id", (req, res) => {
    console.log("params=>", req.params);
    const { id } = req.params;
    const post = data.find((item) => item.id == id);
    if (!post) return res.status(404).json({ message: "Post Not Found" });
    res.json(post);
  });

//POST /posts: Create a new blog post.

app.post("/api/data", (req, res) => {
    console.log("body=>", req.body);
    const newPost = { id: data.length + 1, ...req.body, };
    data.push(newPost);
    res.status(201).json(data);
  });

//PUT /posts/:id: Update an existing blog post. //with id as params, data {name,price} body

app.put("/api/data/:id", (req, res) => {
    console.log("params=>", req.params)
    console.log("body=>", req.body);
    let {id} = req.params
    const post = data.find((item) => item.id == id);
    if (!post) return res.status(404).json({ message: "Post Not Found" });
    let {title, content} =  {...req.body} ;
    post.title = title;
    post.content = content;
    res.status(201).json(data);
  });

//DELETE /posts/:id: Delete a blog post.

app.delete("/api/data/:id", (req, res) => {
    const { id } = req.params;
    const indx = data.findIndex((item) => item.id == id);
    if (indx === -1) return res.status(404).json({ message: "Post not found" });
    data.splice(indx, 1);
    res.json(data)
  });

