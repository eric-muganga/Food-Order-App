import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
import MealItem from "./MealItem.jsx";
const requestConfig = {};

export default function Meals() {
  // useHttp Custom Hook: Fetches meals from the provided URL with the specified config and dependencies.
  // - loadedMeals: The data received from the HTTP request (array of meal objects).
  // - isLoading: Boolean indicating if the request is currently loading.
  // - error: Error message or null if no error occurred.
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  // Loading State: Display a loading message while the request is in progress.
  if (isLoading) {
    return <p className="center">Fetching meals....</p>;
  }

  // Error Handling: Display the error component with a title and error message if an error occurs during the fetch.
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
