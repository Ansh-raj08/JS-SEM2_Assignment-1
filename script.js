const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

let sampleEvent = [
    {
        title: "Web Dev Workshop",
        date: "2026-12-04",
        category: "Workshop",
        description: "Deep dive into CSS Grid and Flexbox."
    },
    {
        title: "Tech Conference 2026",
        date: "2026-12-05",
        category: "Conference",
        description: "Annual meetup for developers."
    }
];

function createEventCard(eventData) {
    const card = document.createElement("div");

    card.style.background = "rgba(255, 255, 255, 0.05)";
    card.style.padding = "15px";
    card.style.borderRadius = "8px";
    card.style.marginBottom = "10px";
    card.style.borderLeft = "4px solid var(--neon-blue)";
    card.style.position = "relative";

    card.innerHTML = `
        <button class="delete-btn" style="position:absolute; right:10px; top:10px; background:none; border:none; color:var(--neon-red); cursor:pointer; font-weight:bold;">X</button>
        <h3 style="color:white; margin-bottom:5px;">${eventData.title}</h3>
        <div style="color:var(--text-muted); font-size:0.9rem;">
            ${eventData.date} | <span style="color:var(--neon-green)">${eventData.category}</span>
        </div>
        <p style="margin-top:10px;">${eventData.description}</p>
    `;

    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        card.remove();
        if(eventContainer.children.length === 0) {
            eventContainer.innerHTML = `<div class="empty-state">No events yet.</div>`;
        }
    });

    return card;
}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) {
        emptyState.remove();
    }
    const newCard = createEventCard(eventData);
    eventContainer.appendChild(newCard);
}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newEvent = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };
    addEvent(newEvent);
    eventForm.reset();
});

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach((item) => {
        addEvent(item);
    });
});

clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `<div class="empty-state">No events yet.</div>`;
});

document.addEventListener('keydown', (e) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    demoContent.innerHTML = `
        <div style="text-align: center;">
            <h3 style="font-size: 2rem; color: rgb(${r},${g},${b});">
                Key: "${e.key}"
            </h3>
    `;
    
    demoContent.style.borderColor = `rgb(${r},${g},${b})`;
    demoContent.style.boxShadow = `0 0 15px rgba(${r},${g},${b}, 0.2)`;
});