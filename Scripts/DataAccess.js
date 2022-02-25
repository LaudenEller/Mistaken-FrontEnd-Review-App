import { database } from "./Database.js";

export const getPatients = () => {
    return database.patients.map(patient => ({...patient}))
}
export const getDoctors = () => {
    return database.doctors.map(doctor => ({...doctor}))
}
export const getRooms = () => {
    return database.rooms.map(room => ({...room}))
}
export const getAppointments = () => {
    return database.appointments.map(appointment => ({...appointment}))
}

export const setPatient = (id) => {
    database.appointmentBuilder.patientId = id
}
export const setDoctor = (id) => {
    database.appointmentBuilder.doctorId = id
}
export const setRoom = (id) => {
    database.appointmentBuilder.roomId = id
}

export const addAppointment = () => {
    // Copy the current state of user choices
    const newAppointment = {...database.appointmentBuilder}

    // Add a new primary key to the object
    const lastIndex = database.appointments.length - 1
    newAppointment.id = database.appointments[lastIndex].id + 1

    // Add the new order object to custom orders state
    database.appointments.push(newAppointment)

    // Reset the temporary state for user choices
    database.appointmentBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}