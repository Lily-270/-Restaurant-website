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
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
          <div className="card-body text-center">
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Person Logo" className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
            <h5 className="card-title">John Doe</h5>
            <p className="card-text">Rating: 4.5/5</p>
            <div className="star-rating">
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star-half-alt" style={starStyle}></span>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
          <div className="card-body text-center">
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Person Logo" className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
            <h5 className="card-title">Melissa</h5>
            <p className="card-text">Rating: 5/5</p>
            <div className="star-rating">
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
          <div className="card-body text-center">
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Person Logo" className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
            <h5 className="card-title">Steve557</h5>
            <p className="card-text">Rating: 4/5</p>
            <div className="star-rating">
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
          <div className="card-body text-center">
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Person Logo" className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
            <h5 className="card-title">Gary Waterson</h5>
            <p className="card-text">Rating: 4.5/5</p>
            <div className="star-rating">
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
              <span className="fa fa-star" style={starStyle}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}