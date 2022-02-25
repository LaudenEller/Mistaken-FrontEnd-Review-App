//import patients
import { getPatients, setPatient } from "./DataAccess.js";

//export html that produces a dropdown box poulated by the patient names
export const Patients = () => {
    
    const patients = getPatients()
    
    let html = `<select id="patientSelectBox">
    <option value ="0">Choose a Patient</option`
    for (const patient of patients) {
        html += `<option value="patient--${patient.id}">${patient.name}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (event) => {
            if (event.target.value.startsWith("patient--")) {
                const [, patientId] = event.target.value.split("--")
                setPatient(parseInt(patientId))
            }
        }
)

//export html that produces a form to add new patients