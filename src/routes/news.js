import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.query);
  const { category, q, sort } = req.query;
  if (sort) {
    if (sort !== "asc" && sort !== "desc") {
      return res
        .status(400)
        .json({ msg: "sort value can only be asc or desc" });
    }
  }
  let searchString = "";
  if (category) {
    searchString = searchString + `&category=${category}`;
  }
  if (q) {
    searchString = searchString + `&q=${q}`;
  }
  try {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in${searchString}&apiKey=07edd3d347614381b0fb9f73ad750ecb`
      )
      .then((response) => {
        console.log(new Date(response.data.articles[0].publishedAt));
        if (sort) {
          if (sort === "desc") {
            response.data.articles = response.data.articles.sort(
              (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
            );
          } else {
            response.data.articles = response.data.articles.sort(
              (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
            );
          }
        }
        res.send(response.data);
      });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
