var express = require("express");
var router = express.Router();
const recipes_utils = require("./utils/recipes_utils");

router.get("/", (req, res) => res.send("im here"));


/**
 * This path returns 3 random preview recipes
 */
 router.get("/random", async (req, res, next) => {
  try {
    let random_3_recipes = await recipes_utils.getThreeRandomRecipes();
    res.send(random_3_recipes);
  } catch (error) {
    next(error);
  }
})


/**
 * This path returns a full details of a recipe by its id
 */
router.get("/:recipeId", async (req, res, next) => {
  try {
    const recipe = await recipes_utils.getRecipeDetails(req.params.recipeId);
    // TODO - show if user viewed the recipe
    // TODO - show if in favorites

    res.send(recipe);
  } catch (error) {
    next(error);
  }
});



module.exports = router;
