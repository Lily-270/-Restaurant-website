export default function Specials() {
    return (
        <>
            <div className="container custom-section" style={{ padding: "20px" , margin: "0" }}>
                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-md-3">
                        <h1 className="fw-bold" style={{ align:"left"}} >Specials</h1>
                    </div>
                    <div className="col-md-9 text-end">
                        <button className="btn reserve-btn" style={{align:"right"}}>Online Menu</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="card mx-3" style={{ width: "18rem" }}>
                        <img src="https://www.177milkstreet.com/assets/site/Recipes/Eventide-Green-Salad-Nori-Vinaigrette.jpg" className="card-img-top" alt="Green salad" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card mx-3" style={{ width: "18rem" }}>
                        <img src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/vtuwpigr/9c562cba-d847-4366-b6b5-717288229f90.jpg" className="card-img-top" alt="Bruchatta dish" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card mx-3" style={{ width: "18rem" }}>
                        <img src="https://passthesushi.com/wp-content/uploads/2012/04/Lemon_drop_cake_0309.jpg" className="card-img-top" alt="Lemon cake dish" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}