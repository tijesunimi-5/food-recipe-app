// pages/api/spoonacular.js
import axios from "axios";

export default async function handler(req, res) {
  const { query } = req.query;
  const apiKey = "7760048b98e04ef8b12239fd5beb4092"; // your API key

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          apiKey: apiKey,
          query: query,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipes" });
  }
}
