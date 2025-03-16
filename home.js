document.addEventListener("DOMContentLoaded", () => {
    const bookGigBtn = document.getElementById("bookGigBtn");
    const gigList = document.getElementById("gigList");

    bookGigBtn.addEventListener("click", () => {
        alert("Booking new gig...");
    });


    gigs.forEach(gig => {
        const gigItem = document.createElement("div");
        gigItem.classList.add("gig-item");
        gigItem.innerHTML = `<h4>${gig.title}</h4><p>Status: ${gig.status}</p>`;
        gigList.appendChild(gigItem);
    });

    // Navigation Highlight
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".nav-item").forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
