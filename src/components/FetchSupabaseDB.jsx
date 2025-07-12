import { useEffect } from "react";
import { supabase } from "../supabaseClient"; // ✅ Make sure the path is correct

/**
 * Custom hook to fetch todo items from the Supabase "lists" table.
 * @param {Function} setTodos - The state setter function to update the todo list.
 */
function useFetchTodos(setTodos) {
  useEffect(() => {
    // Async function to fetch data from Supabase
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("lists") // ✅ Replace with your actual table name
          .select("*")
          .order("created_at", { ascending: false });

        // Handle API error
        if (error) {
          console.error("❌ Error fetching data from Supabase:", error.message);
          return;
        }

        // Transform the raw data into the format expected by the app
        const formattedData = data.map((item) => ({
          id: item.id,
          content: item.content,
          time: item.created_at,
          checked: item.is_completed,
        }));

        // Update state with the formatted data
        setTodos(formattedData);
      } catch (err) {
        // Handle unexpected runtime errors
        console.error("❌ Unexpected error during fetch:", err);
      }
    }

    // Trigger the fetch on component mount
    fetchData();
  }, [setTodos]); // Include setTodos in the dependency array
}

export default useFetchTodos;
