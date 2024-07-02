import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Travel Agency</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Tours</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <div class="hero">
        <div class="hero-content">
            <h2><i>Welcome to Your Dream Vacation</i></h2>
            <p><i>Explore the world with our amazing travel packages.</i></p>
            <a href="#" class="btn"><b>Explore Now</b></a>
        </div>
    </div>

    <div class="container">
        <section class="destinations">
            <h2>Popular Destinations</h2>
            <div class="card">
                <img src="images/destination1.jpg" alt="Destination 1" />
                <div class="card-content">
                    <h3>Destination 1</h3>
                    <p>Description of Destination 1.</p>
                </div>
            </div>
            {/* <!-- Repeat for other destinations --> */}
        </section>

        <section class="tours">
            <h2>Featured Tours</h2>
            <div class="card">
                <img src="images/destination2.jpg" alt="Destination 2" />
                <div class="card-content">
                    <h3>Destination 2</h3>
                    <p>Description of Destination 2.</p>
                </div>
            </div>
            {/* <!-- Repeat for other tours --> */}
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Travel Agency. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
