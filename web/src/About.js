export default function About() {
    return (
        <>
            <div
                className="container custom-section"
                style={{ padding: "20px", margin: "auto", backgroundColor: "#7C9885" }}
            >
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="fw-bold" style={{ marginBottom: "10px", color: "#021708" }}>About us</h1>
                        <p style={{ marginBottom: "15px", color: "#021708" , fontSize:"1.2rem"}}>
                        At Little Lemon, we specialize in authentic Mediterranean cuisine,
                         bringing the vibrant flavors of the Mediterranean to Chicago. 
                         Our menu is crafted with fresh ingredients, offering a delightful 
                         culinary experience. Enjoy our cozy ambiance and exceptional service, 
                         perfect for any occasion. Discover the taste of the Mediterranean with us!
                        </p>
                    </div>

                    <div className="col-md-6 position-relative d-flex flex-column align-items-center justify-content-center" style={{ height: "220px" }}>
                        <img
                            src="https://www.brandingidentitydesign.com/wp-content/uploads/2016/12/Restaurant-Interiors-01-700x466.jpg"
                            alt="Restaurant decor"
                            className="img-fluid rounded position-absolute"
                            style={{
                                maxHeight: "220px",
                                width: "220px",
                                objectFit: "cover",
                                top: "40px",
                                left: "40px",
                            }}
                        />
                        <img
                            src="https://media.istockphoto.com/id/1446478805/photo/a-chef-is-finishing-the-preparation-of-the-plate.jpg?s=612x612&w=0&k=20&c=OoFoYYJ0_eun72wlt-lDzlYjY-CaLwphDgUyIApDu_I="
                            alt="Chef preparing a dish"
                            className="img-fluid rounded position-absolute"
                            style={{
                                maxHeight: "220px",
                                width: "220px",
                                objectFit: "cover",
                                top: "60",
                                left: "300px",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}