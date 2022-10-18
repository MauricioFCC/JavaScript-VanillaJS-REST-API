const tableBody = document.getElementById("table-body");

let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 302",
        gate: "A 01",
        remarks: "ON TIME"
    },

    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 302",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 302",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 302",
        gate: "A 01",
        remarks: "ON TIME"
    },
]

//create a rows in the Dom
function populateTable(){
    for(const flight of flights){
        const tableRow = document.createElement("tr");

        for(const flightDetail in flight){
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetail])

            for(const letter of word){
                const letterElement = document.createElement("div");
                letterElement.classList.add("flip");
                letterElement.textContent = letter;
                tableCell.append(letterElement);
            }

            tableRow.append(tableCell)
        }
        
        tableBody.append(tableRow);
    }
}

populateTable()