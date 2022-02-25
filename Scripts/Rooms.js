//import rooms from database
import { getRooms, setRoom } from "./DataAccess.js"

const rooms = getRooms()

//export html that produces a radio button list poulated by the room numbers
export const Rooms = () => {
    let html = ""
    const listRooms = rooms.map (room => {
        return `<input type ="radio" name="room" value="${room.id}"/> ${room.number}`
    })
    html += listRooms.join("")
    return html
}


document.addEventListener(
    "change",
    (event) => {
            if (event.target.name === "room") {
                setRoom(parseInt(event.target.value))
            }
        }
)