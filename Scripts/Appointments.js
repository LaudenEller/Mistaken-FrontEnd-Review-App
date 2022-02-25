import { getAppointments, getDoctors, getPatients, getRooms, addAppointment } from "./DataAccess.js"

//add an event listener to the make appointment button, 
//that gets the values selected by the user to make a new object and push it to the database
//and announces a change in state to cause the DOM to rerender
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "appointmentButton") {
            addAppointment()
        }
    }
)

export const Appointments = () => {

    const appointments = getAppointments()
    const rooms = getRooms()
    const patients = getPatients()
    const doctors = getDoctors()

    let html = "<ul>"
    for (const appointment of appointments) {
        const foundPatient = patients.find(patient => {
            return patient.id === parseInt(appointment.patientId)
        })
        const foundRoom = rooms.find(room => {
            return room.id === appointment.roomId
        })
        const foundDoctor = doctors.find(doctor => {
            return doctor.id === parseInt(appointment.doctorId)
        })
        html += `<li> Appointment #${appointment.id} is in room #${foundRoom.number} for ${foundPatient.name} with ${foundDoctor.name}.</li>`
    }
    html += "</ul>"
    return html
}