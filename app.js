const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// Set up an Express app
const app = express();

// Connect to MongoDB
const dburl =
  "mongodb+srv://<username><password>@cluster0.ctlax.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));

// Register view engine
app.set("view engine", "ejs");

// Middleware to serve static files and log requests
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Mongoose schema and model
const Schema = mongoose.Schema;
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Blog = mongoose.model("Blog", blogSchema);

// Routes

// Home route
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// About route
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { blogs: result, title: "All blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//POST Handler
app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create blog route
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//to delete blogs
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "./blogs" });
    })
    .catch(err);
  {
    console.log(err);
  }
});

// Sandbox route to add a blog to the database
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New Blog",
    snippet: "New Blog Snippet",
    body: "New Blog Body",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

//retrive all the blogs
app.get("/all-blogs", (req, res) => {
  Blog.find().then((result) => {
    res.send(result);
  });
});

//get a single blog
app.get("/single-blog", (req, res) => {
  Blog.findById("66b7159bcd851bfeaa020b5e").then((result) => {
    res.send(result);
  });
});

// 404 page (must be placed at the bottom of the file)
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
