import { Appointments } from "./Appointments.js"
import { Doctors } from "./Doctors.js"
import { Patients } from "./Patients.js"
import { Rooms } from "./Rooms.js"

//export a function that builds the html for the page
export const html = () => {
    //create a section with divs for
        // patients
        // doctors
        // rooms
    //create a section for appointments
    return `
        <h1>Doctor's Office</h1>

        <article class="mainSection">
            <section class="patients">
                <h2>Patients</h2>
                ${Patients()}
            </section>
            <section class="doctors">
                <h2>Doctors</h2>
                ${Doctors()}
            </section>
            <section class="rooms">
                <h2>Rooms</h2>
                ${Rooms()}
            </section>
        </article>
        
        <article>
            <button id="appointmentButton">Make Appointment</button>
        </article>

        <article class="appointments">
        <h2>Today's Appointments</h2>
        <section class="appointments">
       ${Appointments()}
        </section>
        </article>
    `
}