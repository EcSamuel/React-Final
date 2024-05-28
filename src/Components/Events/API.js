import axios from "axios";



const eventURL = `https://664a82eaa300e8795d4227ab.mockapi.io/Event`;


    const grabEvents = async () => {

        try {
          const res = await axios.get(eventURL);
          console.log("res in API: ", res)
          return res;
        } catch (error) {
          console.error('Error calling events at useEffect', error);;
        }
      };

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



export {grabEvents, deleteEvent};