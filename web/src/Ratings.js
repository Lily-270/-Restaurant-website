export default function Ratings() {
    const starStyle = {
        color: 'orange',
    };
    return (
        <>
          <div className="container-fluid custom-section w-100" style={{ padding: "20px", backgroundColor: "#B5B682", margin: "0" }}>
                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-md-12">
                        <h1 className="fw-bold text-center">Testimonials</h1>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="card rating-card" style={{ width: '18rem', margin: '10px' }}>
                        <div className="card-body text-center">
                            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Person Logo" className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
                            <h5 className="card-title">John Doe</h5>
                            <div className="star-rating">
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star_half</span>
                            </div>
                            <p className="card-text">I loved the green salad and white pasta!</p>
                        </div>
                    </div>
                    <div className="card rating-card" style={{ width: '18rem', margin: '10px' }}>
                        <div className="card-body text-center">
                            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Person Logo" className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
                            <h5 className="card-title">Melissa</h5>
                            <div className="star-rating">
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                            </div>
                            <p className="card-text">This restaurant is so nice. The waiters are so friendly and the food is so delicious. Definitely going to come here again!</p>
                        </div>
                    </div>
                    <div className="card rating-card" style={{ width: '18rem', height: "12rem" , margin: '10px' }}>
                        <div className="card-body text-center">
                            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Person Logo" className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
                            <h5 className="card-title">Steve557</h5>
                            <div className="star-rating">
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                            </div>
                        </div>
                    </div>
                    <div className="card rating-card" style={{ width: '18rem', margin: '10px' }}>
                        <div className="card-body text-center">
                            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Person Logo" className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
                            <h5 className="card-title">Gary Waterson</h5>
                             <div className="star-rating">
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                                <span className="material-icons" style={starStyle}>star</span>
                            </div>
                            <p className="card-text">I came here with my family and had the best experience ever. My kids liked the french fries and pizza, and I liked the lemon cake the most. It was so fresh and yummy!</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .rating-card .card-text {
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                .rating-card:hover .card-text {
                    opacity: 1;
                }
            `}</style>
        </>
    )
}