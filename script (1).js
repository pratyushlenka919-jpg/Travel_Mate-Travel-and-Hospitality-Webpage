// Sample itinerary data
const sampleItineraries = {
    "Adventure": {
        "Day 1": ["Morning hike to scenic viewpoint", "Afternoon zip-lining", "Evening campfire storytelling"],
        "Day 2": ["Rock climbing session", "Rafting on river rapids", "Wildlife safari"],
        "Day 3": ["Mountain biking trail", "Caving exploration", "Stargazing night"]
    },
    "Relaxation": {
        "Day 1": ["Spa morning treatment", "Beach yoga session", "Sunset meditation"],
        "Day 2": ["Private beach time", "Massage therapy", "Romantic dinner"],
        "Day 3": ["Hot spring soaking", "Nature walk", "Wellness workshop"]
    },
    "Culture": {
        "Day 1": ["Visit local museum", "Historical site tour", "Traditional cooking class"],
        "Day 2": ["Art gallery exploration", "Cultural performance", "Local market visit"],
        "Day 3": ["Ancient ruins exploration", "Photography workshop", "Farewell dinner"]
    },
    "Food": {
        "Day 1": ["Food market tour", "Cooking masterclass", "Street food tasting"],
        "Day 2": ["Vineyard visit", "Wine tasting", "Farm-to-table dinner"],
        "Day 3": ["Dessert making workshop", "Restaurant hopping", "Culinary farewell"]
    },
    "Nature": {
        "Day 1": ["National park exploration", "Wildlife observation", "Nature photography"],
        "Day 2": ["Hiking trails", "Bird watching", "Camping under stars"],
        "Day 3": ["Lake activities", "Forest bathing", "Nature conservation talk"]
    },
    "City": {
        "Day 1": ["City center walking tour", "Architecture highlights", "Local cafe hopping"],
        "Day 2": ["Museum district", "Urban park visit", "Street art exploration"],
        "Day 3": ["Neighborhood discovery", "Shopping district", "City lights dinner"]
    }
};

function planTrip() {
    const destination = document.getElementById("destination").value.trim();
    const interest = document.getElementById("interest").value;

    // Validation
    if (!destination) {
        alert("Please enter a destination!");
        return;
    }

    if (!interest) {
        alert("Please select an interest!");
        return;
    }

    // Show loading state
    const resultSection = document.getElementById("result");
    resultSection.innerHTML = `
        <div class="container">
            <div class="loading">
                <h2>Planning your trip to ${destination}...</h2>
                <div class="spinner"></div>
            </div>
        </div>
    `;

    // Simulate API call delay
    setTimeout(() => {
        const itinerary = sampleItineraries[interest];

        if (itinerary) {
            resultSection.innerHTML = `
                <div class="container">
                    <h2>Your Luxury Itinerary for ${destination} ✈️</h2>
                    <p class="itinerary-intro">Based on your interest in ${interest.toLowerCase()}</p>
                    <div class="itinerary-container">
                        ${Object.entries(itinerary).map(([day, activities]) => `
                            <div class="itinerary-day">
                                <h3>${day}</h3>
                                <ul>
                                    ${activities.map(activity => `<li><i class="fas fa-check-circle"></i> ${activity}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                    <div class="booking-section">
                        <button class="book-btn" onclick="bookTrip('${destination}', '${interest}')">
                            <i class="fas fa-calendar-check"></i> Book This Trip
                        </button>
                    </div>
                </div>
            `;

            // Scroll to results
            resultSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            resultSection.innerHTML = `
                <div class="container">
                    <h2>Sorry, we couldn't generate an itinerary for that combination.</h2>
                    <p>Please try a different destination or interest.</p>
                </div>
            `;
        }
    }, 1500);
}

function bookTrip(destination, interest) {
    alert(`Booking feature coming soon! Your trip to ${destination} with ${interest} focus has been saved to your wishlist.`);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading spinner styles dynamically
const style = document.createElement('style');
style.textContent = `
    .loading {
        text-align: center;
        padding: 50px 0;
    }

    .spinner {
        border: 4px solid #333;
        border-top: 4px solid #FFD700;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
        margin: 20px auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .itinerary-container {
        display: grid;
        gap: 30px;
        margin: 40px 0;
    }

    .itinerary-day {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 30px;
        border: 1px solid rgba(255, 215, 0, 0.1);
    }

    .itinerary-day h3 {
        color: #FFD700;
        margin-bottom: 20px;
        font-size: 24px;
    }

    .itinerary-day ul {
        list-style: none;
        padding: 0;
    }

    .itinerary-day li {
        padding: 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .itinerary-day li:last-child {
        border-bottom: none;
    }

    .itinerary-day li i {
        color: #FFD700;
        font-size: 18px;
    }

    .itinerary-intro {
        text-align: center;
        font-size: 18px;
        color: #ccc;
        margin-bottom: 40px;
    }

    .booking-section {
        text-align: center;
        margin-top: 50px;
    }

    .book-btn {
        background: #FFD700;
        color: #333;
        border: none;
        padding: 15px 30px;
        border-radius: 50px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }

    .book-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
        background: #ffcc00;
    }
`;
document.head.appendChild(style);

// Hotel Preview Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');

function showSlide(index) {
    if (carousel) {
        carousel.style.transform = `translateX(-${index * 33.333}%)`;
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto slide
setInterval(nextSlide, 5000);

function setVibe(vibe) {
    // Remove active class from all buttons
    document.querySelectorAll('.vibe-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Filter rooms based on vibe (placeholder logic)
    console.log('Selected vibe:', vibe);
    // In a real app, this would filter the carousel images
}

function toggleCompare() {
    const compareRooms = document.getElementById('compare-rooms');
    const toggle = document.getElementById('compare-toggle');
    
    if (toggle.checked) {
        compareRooms.style.display = 'flex';
    } else {
        compareRooms.style.display = 'none';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});

// Destination Data
const destinations = {
    "Maldives": {
        title: "Maldives",
        description: "Paradise islands with crystal clear waters",
        about: "The Maldives is a tropical paradise consisting of 26 coral atolls in the Indian Ocean. Known for its stunning beaches, luxury resorts, and vibrant marine life, it's the perfect destination for honeymooners and those seeking ultimate relaxation.",
        bestTime: "November to April (dry season)",
        activities: ["Snorkeling", "Scuba diving", "Beach relaxation", "Water sports", "Spa treatments", "Sunset cruises"],
        hotels: [
            {
                name: "Luxury Beach Resort",
                image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop",
                description: "Overwater bungalows with private pools",
                rating: 5,
                price: "500/night"
            },
            {
                name: "Ocean View Villa",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=250&fit=crop",
                description: "Secluded villa with direct beach access",
                rating: 4.5,
                price: "1000/night"
            },
            {
                name: "Island Paradise Resort",
                image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop",
                description: "All-inclusive resort with water activities",
                rating: 4,
                price: "2800/night"
            }
        ]
    },
    "India": {
        title: "India",
        description: "The city of love and lights",
        about: "India is a land of diverse cultures, ancient history, and vibrant traditions. From the bustling streets of Mumbai to the serene backwaters of Kerala, India offers an incredible mix of experiences for every traveler.",
        bestTime: "October to March (winter season)",
        activities: ["Taj Mahal visit", "Golden Temple tour", "Backwater cruises", "Wildlife safaris", "Yoga retreats", "Street food tours"],
        hotels: [
            {
                name: "Heritage Palace Hotel",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop",
                description: "Luxury hotel with traditional architecture",
                rating: 4.5,
                price: "200/night"
            },
            {
                name: "Modern City Resort",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
                description: "Contemporary hotel in city center",
                rating: 4,
                price: "1500/night"
            },
            {
                name: "Boutique Heritage Stay",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop",
                description: "Charming boutique hotel with local art",
                rating: 4.5,
                price: "180/night"
            }
        ]
    },
    "Switzerland": {
        title: "Switzerland",
        description: "Alpine beauty and pristine landscapes",
        about: "Switzerland is renowned for its stunning Alps, pristine lakes, and charming villages. Whether you're skiing in winter or hiking in summer, Switzerland offers breathtaking natural beauty and world-class hospitality.",
        bestTime: "June to September (summer) or December to March (winter)",
        activities: ["Alpine hiking", "Skiing", "Lake cruises", "Chocolate tours", "Cable car rides", "Mountain biking"],
        hotels: [
            {
                name: "Alpine Luxury Resort",
                image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=250&fit=crop",
                description: "Mountain resort with panoramic views",
                rating: 5,
                price: "5000/night"
            },
            {
                name: "Lakeview Chalet",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop",
                description: "Cozy chalet by crystal clear lake",
                rating: 4.5,
                price: "3000/night"
            },
            {
                name: "City Center Boutique",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
                description: "Modern hotel in Zurich city center",
                rating: 4,
                price: "250/night"
            }
        ]
    },
    "Japan": {
        title: "Japan",
        description: "Ancient traditions meet modern innovation",
        about: "Japan seamlessly blends ancient traditions with cutting-edge technology. From the serene temples of Kyoto to the neon lights of Tokyo, Japan offers a unique cultural experience unlike any other.",
        bestTime: "March to May (cherry blossoms) or September to November (autumn leaves)",
        activities: ["Temple visits", "Cherry blossom viewing", "Sushi making classes", "Hot spring bathing", "Mount Fuji hiking", "Shopping in Tokyo"],
        hotels: [
            {
                name: "Traditional Ryokan",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
                description: "Authentic Japanese inn with tatami rooms",
                rating: 4.5,
                price: "1000/night"
            },
            {
                name: "Modern Tokyo Hotel",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop",
                description: "Contemporary hotel with city views",
                rating: 4,
                price: "2200/night"
            },
            {
                name: "Mountain Onsen Resort",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
                description: "Hot spring resort in the mountains",
                rating: 4.5,
                price: "5250/night"
            }
        ]
    },
    "Italy": {
        title: "Italy",
        description: "Art, history, and delicious cuisine",
        about: "Italy is a treasure trove of art, history, and culinary delights. From the Renaissance masterpieces of Florence to the romantic canals of Venice, Italy captivates with its rich heritage and passionate culture.",
        bestTime: "April to June or September to October",
        activities: ["Colosseum tours", "Wine tasting", "Cooking classes", "Art gallery visits", "Amalfi Coast drives", "Vatican City exploration"],
        hotels: [
            {
                name: "Historic Palazzo Hotel",
                image: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=400&h=250&fit=crop",
                description: "Luxury hotel in historic building",
                rating: 5,
                price: "$350/night"
            },
            {
                name: "Tuscan Villa Resort",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop",
                description: "Countryside villa with vineyards",
                rating: 4.5,
                price: "$280/night"
            },
            {
                name: "Rome City Center Hotel",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop",
                description: "Modern hotel near ancient sites",
                rating: 4,
                price: "$200/night"
            }
        ]
    },
    "New Zealand": {
        title: "New Zealand",
        description: "Adventure and natural wonders",
        about: "New Zealand is a paradise for adventure seekers and nature lovers. With its dramatic landscapes, from fjords to volcanoes, and friendly locals, it's the ultimate destination for outdoor enthusiasts.",
        bestTime: "December to March (Southern Hemisphere summer)",
        activities: ["Bungee jumping", "Skydiving", "Glacier hiking", "Whale watching", "Lord of the Rings tours", "Hot pool relaxation"],
        hotels: [
            {
                name: "Adventure Lodge",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
                description: "Rustic lodge for outdoor adventurers",
                rating: 4,
                price: "$150/night"
            },
            {
                name: "Luxury Eco Resort",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
                description: "Sustainable resort with spa facilities",
                rating: 4.5,
                price: "$300/night"
            },
            {
                name: "City Boutique Hotel",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop",
                description: "Modern hotel in Auckland CBD",
                rating: 4,
                price: "$180/night"
            }
        ]
    }
};

function showDestinationDetails(destinationName) {
    const destination = destinations[destinationName];
    if (!destination) return;

    // Hide destinations and hotels sections and show details
    document.getElementById('destinations').style.display = 'none';
    document.getElementById('hotels').style.display = 'none';
    document.getElementById('destination-details').style.display = 'block';

    // Scroll to top
    window.scrollTo(0, 0);

    // Populate destination info
    document.getElementById('destination-title').textContent = destination.title;
    document.getElementById('destination-description').textContent = destination.description;
    document.getElementById('destination-about').textContent = destination.about;
    document.getElementById('destination-best-time').textContent = destination.bestTime;

    // Populate activities
    const activitiesList = document.getElementById('destination-activities');
    activitiesList.innerHTML = '';
    destination.activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activitiesList.appendChild(li);
    });

    // Populate hotels
    const hotelCards = document.getElementById('hotel-cards');
    hotelCards.innerHTML = '';
    destination.hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        hotelCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <div class="hotel-card-content">
                <h4>${hotel.name}</h4>
                <p>${hotel.description}</p>
                <div class="hotel-rating">
                    <span class="stars">${'★'.repeat(Math.floor(hotel.rating))}</span>
                    <span>${hotel.rating}</span>
                </div>
                <div class="hotel-price">${hotel.price}</div>
            </div>
        `;
        hotelCards.appendChild(hotelCard);
    });
}

function hideDestinationDetails() {
    document.getElementById('destination-details').style.display = 'none';
    document.getElementById('destinations').style.display = 'block';
    document.getElementById('hotels').style.display = 'block';
}