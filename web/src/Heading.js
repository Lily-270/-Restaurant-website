import './Heading.css';
import { Link } from 'react-router-dom';
export default function Header() {

    return (
        <>
            <div
                className="container custom-section"
                style={{ padding: "20px", margin: "20px auto", backgroundColor: "#495E57" }}
            >
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="fw-bold" style={{ marginBottom: "10px", color: "white" }}>Little Lemon</h1>
                        <h3 className="fw-bold" style={{ marginBottom: "10px", color: "#E4C142" }}>Chicago</h3>
                        <p style={{ marginBottom: "15px", color: "white" }}>
                            Welcome to Little Lemon Restaurant!
                            We offer a warm atmosphere and authentic Mediterranean cuisine.
                            Our charming decor and vibrant flavors promise a delightful dining
                            experience that transports you to the sunny shores of the Mediterranean.
                            Join us for a memorable meal!
                        </p>
                        <Link to="/booking" className="btn reserve-btn">Reserve a table</Link>
                    </div>

                    <div className="col-md-6">
                        <img
                            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                            alt="Delicious food"
                            className="img-fluid rounded"
                            style={{
                                maxHeight: "250px",
                                width: "100%",
                                objectFit: "cover",
                                marginTop: "10px",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}