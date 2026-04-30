import React, { useState } from "react";
import "./DietPlanner.css";
import {
  FaUtensils,
  FaDrumstickBite,
  FaFish,
  FaLeaf,
  FaSeedling,
  FaFire,
} from "react-icons/fa";

// ✅ LOCAL IMAGES
import breakfastImg from "../Assets/breakfast.png";
import lunchImg from "../Assets/lunch.png";
import dinnerImg from "../Assets/dinner.png";
import snackImg from "../Assets/snack.jpg";
import defaultImg from "../Assets/fruits.jpg";

const diets = [
  "Anything",
  "Keto",
  "Mediterranean",
  "Paleo",
  "Vegan",
  "Vegetarian",
];

const DietPlanner = () => {
  const [selectedDiet, setSelectedDiet] = useState("Anything");
  const [calories, setCalories] = useState(1800);
  const [meals, setMeals] = useState(3);
  const [plan, setPlan] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // ICONS
  const getDietIcon = (diet) => {
    switch (diet) {
      case "Anything":
        return <FaUtensils />;
      case "Keto":
        return <FaDrumstickBite />;
      case "Mediterranean":
        return <FaFish />;
      case "Paleo":
        return <FaDrumstickBite />;
      case "Vegan":
        return <FaLeaf />;
      case "Vegetarian":
        return <FaSeedling />;
      default:
        return <FaUtensils />;
    }
  };

  // IMAGE BASED ON MEAL TYPE
  const getMealImage = (mealName) => {
    switch (mealName) {
      case "Breakfast":
        return breakfastImg;
      case "Lunch":
        return lunchImg;
      case "Dinner":
        return dinnerImg;
      case "Snack":
        return snackImg;
      case "Snack 2":
      default:
        return defaultImg;
    }
  };

  const foodOptions = {
    Anything: [
      "Oats + Milk + Fruits",
      "Rice + Dal + Veggies",
      "Chicken + Roti",
      "Paneer + Salad",
      "Smoothie + Nuts",
    ],
    Keto: ["Eggs + Avocado", "Grilled Chicken", "Paneer + Butter", "Cheese + Nuts"],
    Vegan: ["Oats + Almond Milk", "Tofu + Salad", "Quinoa + Veggies", "Fruits + Nuts"],
    Vegetarian: ["Poha + Milk", "Rice + Dal", "Paneer + Roti", "Veggies + Salad"],
    Paleo: ["Eggs + Fruits", "Chicken + Veggies", "Grilled Meat", "Nuts"],
    Mediterranean: ["Yogurt + Honey", "Fish + Salad", "Whole Grain + Veggies", "Nuts + Fruits"],
  };

  // 🔥 DETAILED RECIPES
  const generateRecipe = (food) => {
    const recipes = {
      "Oats + Milk + Fruits": `
1. Take 1/2 cup oats and cook in 1 cup milk.
2. Stir for 3–5 minutes until soft.
3. Add chopped fruits.
4. Add honey and nuts.
5. Serve warm.
`,

      "Rice + Dal + Veggies": `
1. Cook rice separately.
2. Boil dal with salt & turmeric.
3. Prepare tadka (oil, cumin, garlic).
4. Add veggies and cook lightly.
5. Serve hot.
`,

      "Chicken + Roti": `
1. Marinate chicken with spices.
2. Cook for 15–20 minutes.
3. Prepare roti dough.
4. Roast roti on tawa.
5. Serve together.
`,

      "Paneer + Salad": `
1. Cut paneer cubes.
2. Lightly fry or grill.
3. Chop veggies.
4. Mix with lemon & salt.
5. Serve fresh.
`,

      "Smoothie + Nuts": `
1. Add fruits & milk to blender.
2. Blend until smooth.
3. Pour in glass.
4. Add nuts on top.
5. Serve chilled.
`,

      "Eggs + Avocado": `
1. Boil or fry eggs.
2. Slice avocado.
3. Add salt & pepper.
4. Serve together.
`,

      "Grilled Chicken": `
1. Marinate chicken.
2. Grill for 20 minutes.
3. Flip evenly.
4. Serve hot.
`,

      "Cheese + Nuts": `
1. Cut cheese cubes.
2. Add nuts.
3. Serve as snack.
`,

      "Tofu + Salad": `
1. Cut tofu cubes.
2. Lightly sauté.
3. Mix with salad.
4. Add dressing.
5. Serve fresh.
`,

      "Quinoa + Veggies": `
1. Boil quinoa.
2. Sauté veggies.
3. Mix together.
4. Add spices.
5. Serve hot.
`,

      "Poha + Milk": `
1. Wash poha.
2. Cook with spices.
3. Serve with milk/tea.
`,

      "Paneer + Roti": `
1. Prepare paneer curry.
2. Make roti.
3. Serve hot.
`,

      "Yogurt + Honey": `
1. Take yogurt.
2. Add honey.
3. Mix and serve.
`,
    };

    return recipes[food] || "Healthy meal ready to serve!";
  };

  const generatePlan = () => {
    const foods = foodOptions[selectedDiet];

    let split =
      meals === 3
        ? [0.3, 0.4, 0.3]
        : meals === 4
        ? [0.25, 0.25, 0.25, 0.25]
        : [0.2, 0.2, 0.2, 0.2, 0.2];

    const mealNames =
      meals === 3
        ? ["Breakfast", "Lunch", "Dinner"]
        : meals === 4
        ? ["Breakfast", "Snack", "Lunch", "Dinner"]
        : ["Breakfast", "Snack", "Lunch", "Snack 2", "Dinner"];

    let generated = [];

    for (let i = 0; i < meals; i++) {
      const food = foods[Math.floor(Math.random() * foods.length)];

      generated.push({
        name: mealNames[i],
        food: food,
        img: getMealImage(mealNames[i]),
        calories: Math.floor(calories * split[i]),
        recipe: generateRecipe(food),
      });
    }

    setPlan(generated);
    setSelectedMeal(null);
  };

  return (
    <div className="diet-wrapper">
      <div className="diet-container">
        <h1 className="title">🤖 Smart AI Diet Planner</h1>

        {/* DIET OPTIONS */}
        <div className="diet-options">
          {diets.map((diet) => (
            <div
              key={diet}
              className={`diet-card ${selectedDiet === diet ? "active" : ""}`}
              onClick={() => setSelectedDiet(diet)}
            >
              <span className="diet-icon">{getDietIcon(diet)}</span>
              <span>{diet}</span>
            </div>
          ))}
        </div>

        {/* INPUTS */}
        <div className="input-group">
          <div className="input-box">
            <label>Calories</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
            />
          </div>

          <div className="input-box">
            <label>Meals</label>
            <select
              value={meals}
              onChange={(e) => setMeals(Number(e.target.value))}
            >
              <option value={3}>3 meals</option>
              <option value={4}>4 meals</option>
              <option value={5}>5 meals</option>
            </select>
          </div>
        </div>

        <button className="generate-btn" onClick={generatePlan}>
          ✨ Generate Plan
        </button>

        {/* MEAL CARDS */}
        {plan.length > 0 && (
          <div className="diet-plan">
            {plan.map((meal, index) => (
              <div
                className="meal-card"
                key={index}
                onClick={() => setSelectedMeal(meal)}
              >
                <div className="meal-header">
                  <FaUtensils />
                  <h2>{meal.name}</h2>
                </div>

                <p>🌿 {meal.food}</p>
                <p><FaFire /> {meal.calories} kcal</p>
              </div>
            ))}
          </div>
        )}

        {/* 🔥 DETAILS SECTION */}
        {selectedMeal && (
  <div className="meal-details">
    <h2 className="details-title">🍽️ {selectedMeal.name}</h2>

    <img src={selectedMeal.img} className="details-img" alt="meal" />

    <p><strong>Food:</strong> {selectedMeal.food}</p>
    <p><strong>Calories:</strong> {selectedMeal.calories} kcal</p>

    {/* ✅ NEW HEADING */}
    <h3 className="recipe-heading">📖 Recipe</h3>

    <pre className="recipe-text">{selectedMeal.recipe}</pre>

    <button className="close-btn" onClick={() => setSelectedMeal(null)}>
      Close
    </button>
  </div>
)}
      </div>
    </div>
  );
};

export default DietPlanner;