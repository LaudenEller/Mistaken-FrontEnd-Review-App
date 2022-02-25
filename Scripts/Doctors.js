//import doctros from database
import { getDoctors, setDoctor } from "./DataAccess.js";

//export html that produces a dropdown box poulated by the doctor names
export const Doctors = () => {
    
    const doctors = getDoctors()

    let html = `<select id="doctorSelectBox">
    <option value ="0">Choose a Doctor...</option`
    for (const doctor of doctors) {
        html += `<option value="doctor--${doctor.id}">${doctor.name}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (event) => {
            if (event.target.value.startsWith("doctor--")) {
                const [, doctorId] = event.target.value.split("--")
                setDoctor(parseInt(doctorId))
            }
        }
)