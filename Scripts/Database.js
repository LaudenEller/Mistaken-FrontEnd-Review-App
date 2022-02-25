export const database = {
    appointmentBuilder: {},
    patients: [
        { id: 1, name: "Bob Barker", age: "Elderly" },
        { id: 2, name: "Bob Abbot", age: "Adult" },
        { id: 3, name: "Bob Camarillo", age: "Child" },
        { id: 4, name: "Bobbie Dylan", age: "Adult" }
    ],
    doctors: [
        { id: 1, name: "Dr Pitt" },
        { id: 2, name: "Dr Jolie" },
        { id: 3, name: "Dr Aniston" }
    ],
    rooms: [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 }
    ],
    appointments: [
        {
            id: 1,
            patientId: 1,
            doctorId: 3,
            roomId: 1
        }
    ]
}