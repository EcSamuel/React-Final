import React from 'react'

function AddGame() {
    const gameURL=`https://664a82eaa300e8795d4227ab.mockapi.io/game`

    const handleAdd = async () => {
        try {
            await axios.push(${gameURL});
        } catch (error) {
            console.error('Error Adding Connection', error);
        }
    }
    // you left off here, you're looking to make a form to handle the data that would add to the API
    return (
    <div>
        
    </div>
  )
}

export default AddGame