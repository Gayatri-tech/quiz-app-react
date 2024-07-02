import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import HomeContent from "./HomeContent";

const Home = () => {
  const API_KEY = "a0OIhGpCXjcifEC0OUBxLp0ubVVf8t2776U1k4Ps";
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Fetch quiz questions when the selected category changes
  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=10`;
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setQuizQuestions(data);
        setQuizCompleted(false);
      } catch (error) {
        setError("Error fetching quiz questions");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [selectedCategory]);

  // Function to reset quiz state
  const resetQuiz = () => {
    setQuizQuestions([]);
    setQuizCompleted(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      <Categories onSelectCategory={setSelectedCategory} />

      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && quizQuestions.length === 0 && (
        <div className="text-center">
          Please select a category to start the quiz.
        </div>
      )}
      {!loading && !error && quizQuestions.length > 0 && (
        <HomeContent
          questions={quizQuestions}
          resetQuiz={resetQuiz}
          setQuizCompleted={setQuizCompleted}
          quizCompleted={quizCompleted}
        />
      )}
    </div>
  );
};

export default Home;
