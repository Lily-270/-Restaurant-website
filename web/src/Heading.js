import './Heading.css';
export default function Header() {
    return (
<>
  <div
    className="container custom-section"
    style={{ padding: "20px", margin: "20px auto" }} 
  >
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1 className="fw-bold" style={{ marginBottom: "10px" }}>Little Lemon</h1>
        <h3 className="text-muted" style={{ marginBottom: "10px" }}>Chicago</h3>
        <p style={{ marginBottom: "15px" }}>
        Welcome to Little Lemon Restaurant!
        We offer a warm atmosphere and authentic Mediterranean cuisine. 
         Our charming decor and vibrant flavors promise a delightful dining 
         experience that transports you to the sunny shores of the Mediterranean.
          Join us for a memorable meal!
        </p>
        <button className="btn reserve-btn">Reserve a table</button>
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

    )
}