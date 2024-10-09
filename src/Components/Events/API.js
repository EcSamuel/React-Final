import axios from "axios";

const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;
const gameURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Game`;

/**
 * Async function to fetch a list of events from the API.
 * Uses Axios to send a GET request to the eventURL.
 * 
 * @returns {Object} res - The Axios response object, or logs an error if the request fails.
 */
  const grabEvents = async () => {
      try {
        const res = await axios.get(eventURL);
        console.log("res in API: ", res)
        return res;
      } catch (error) {
        console.error('Error calling events at useEffect', error);;
      }
    };

/**
 * Function to fetch a list of games from the API.
 * Uses Axios to send a GET request to the gameURL.
 * 
 * This uses promises with `.then()` and `.catch()` instead of async/await.
 */
  const grabGames = async () => {
    axios
      .get(gameURL)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error Adding connection at useEffect', error);
      });
  };

/**
 * Async function to delete an event by its ID.
 * Uses Axios to send a DELETE request to the API.
 * 
 * @param {Number} id - The ID of the event to be deleted
 */
    const deleteEvent = async (id) => {
      try {
        console.log(`Attempting to delete event with ID: ${id} at URL: ${eventURL}/${id}`);
        await axios.delete(`${eventURL}/${id}`);
        // onRemove(id);
        
      } catch (error) {
        console.error('Error removing event!', error);
        alert(`Error removing event: ${error.message}`);
      }
    };

export {grabEvents, grabGames, deleteEvent};
