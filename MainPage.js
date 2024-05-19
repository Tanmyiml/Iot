import React from 'react';
import './MainPage.css'; // Assuming you have moved your CSS to this file

const MainPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const departure = document.getElementById("departure").value;
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;
        const passengers = document.getElementById("passengers").value;

        if (departure.trim() === "") {
            alert("Please enter departure city.");
            return;
        }

        if (destination.trim() === "") {
            alert("Please enter destination city.");
            return;
        }

        if (date.trim() === "") {
            alert("Please select date.");
            return;
        }

        if (passengers.trim() === "" || isNaN(passengers) || passengers <= 0) {
            alert("Please enter a valid number of passengers.");
            return;
        }
        const bookingUrl = `trainbooking.html?departure=${departure}&destination=${destination}&date=${date}&passengers=${passengers}`;
        window.location.href = bookingUrl;
    };

    return (
        <div>
            <header>
                <a href="login2.html">
                    <img
                        src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                        alt="profile"
                        style={{ width: "5%", height: "5%", float: "right", borderRadius: "100%", marginRight: "1%" }}
                    />
                </a>
                <h1>ExpressTickets</h1>
                <p>Your Destination for Hassle-Free Train Ticket Booking</p>
            </header>

            <main>
                <section id="search">
                    <h2 className="glow">Book Your Train Tickets with Ease</h2>
                    <form id="booking-form" onSubmit={handleSubmit}>
                        <input type="text" id="departure" placeholder="Departure City" />
                        <input type="text" id="destination" placeholder="Destination City" />
                        <input type="date" id="date" placeholder="Date" />
                        <input type="number" id="passengers" placeholder="Number of Passengers" />
                        <button type="submit">Search</button>
                    </form>
                </section>

                <section id="why-choose">
                    <h2 className="glow">Why Choose ExpressTickets?</h2>
                    <ul>
                        <li>Convenience: Book your tickets online from the comfort of your home.</li>
                        <li>Wide Coverage: We offer tickets for trains across various destinations.</li>
                        <li>Affordable Prices: Enjoy competitive prices and great deals on your bookings.</li>
                        <li>Secure Payments: Your transactions are safe and secure with us.</li>
                    </ul>
                </section>
            </main>

            <footer>
                <p>Terms of Service | Privacy Policy | © 2024 ExpressTickets</p>
            </footer>
        </div>
    );
};

export default MainPage;
