export default function Footer() {
    return (
        <>
                          <div className="container-fluid custom-section w-100" style={{ padding: "20px", backgroundColor: "#4D7B6B", margin: "0" }}>
            <div className="d-flex align-items-start justify-content-around">
                <div className="position-relative d-flex flex-column align-items-center justify-content-center" style={{ height: "220px" }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vTQQKswoaJXT5OQWWVtvyH9GKBoKlxMk1g&s"
                        alt="Little Lemon vertical logo"
                        className="img-fluid rounded"
                        style={{
                            height: "160px",
                            width: "100px",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <ul className="list-unstyled">
                        <h4 style={{ marginTop: "25px" }}>Doormat Navigation</h4>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About</li>
                        <li>Reservations</li>
                        <li>Online menu</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <ul className="list-unstyled">
                        <h4 style={{ marginTop: "25px" }}>Contact</h4>
                        <li>Address</li>
                        <li>Email</li>
                        <li>Phone number</li>
                    </ul>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <ul className="list-unstyled">
                        <h4 style={{ marginTop: "25px" }}>Social media links</h4>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Snapchat</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}