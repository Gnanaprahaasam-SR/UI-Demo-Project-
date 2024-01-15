import react, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHeart, FaStar, FaSearch, FaArrowRight, FaBorderNone } from "react-icons/fa";
import "./style.css";
import Avatar from '@mui/material/Avatar';
import cosmetics from "../image/cosmetics.png";
import Accessories from "../image/Accessories.png";
import ActiveWear from "../image/Active_wear.png";
import Bags from "../image/Bags.png";
import Boots from "../image/Boots.png";
import sneaker from "../image/sneaker's.png";
import Watches from "../image/watches.png";
import sweatshrit from "../image/sweatshrit.png";
import Grooming from "../image/Grooming.png";
import OuterWear from "../image/Outer_wear.png";
import popular1 from "../image/popular-p1.png";
import popular2 from "../image/popular-p2.png";
import popular3 from "../image/popular-p3.png";
import popular4 from "../image/popular-p4.png";
import heroSection from "../image/HeroSection_poster4.png";
import brand1 from "../image/brand1.png";
import brand2 from "../image/brand2.png";
import brand3 from "../image/brand3.png";
import brand4 from "../image/brand4.png";
import brand5 from "../image/brand5.png";
import brand6 from "../image/brand6.png";
import topRate2 from "../image/TopRate2.png";
import topRate3 from "../image/TopRate3.png"
import Nike from "../image/Nike_boot.png";
import bestSeller3 from "../image/BestSeller3.png";
import featured1 from "../image/featuredProduct1.png"
import featured2 from "../image/featuredProduct2.png"
import featured3 from "../image/featuredProduct3.png"
import featured4 from "../image/featuredProduct4.png"
import newArrival1 from "../image/NewArrival1.png";
import newArrival2 from "../image/NewArrival2.png";
import newArrival3 from "../image/NewArrival3.png";
import newArrival4 from "../image/NewArrival4.png";
import newArrival5 from "../image/NewArrival5.png";
import newArrival6 from "../image/NewArrival6.png";
import newArrival7 from "../image/NewArrival7.png";
import newArrival8 from "../image/NewArrival8.png";
import axios from "axios";
import Header from "../components/Nabar";


const Home = () => {
    // try {
    //     const api =  axios.get("http://amalan.us/shopping/admin/api", {
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Accept": "application/json"
    //         },
    //         withCredentials: true,
    //       });
    //     console.log(api)
    // }
    // catch(error)
    // {
    //     console.log("Bad Gate way!",error);
    // } 

    const [siteWidth, setWidth] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setWidth(false);
            } else {
                setWidth(true);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    const Brand = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    const BestSeller = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className=" home">
            <Header/>
            <div className=" m-5 home_section1 ">
                <div class="row  ">
                    <div class="col-md-6 d-flex text-start text-wrap">
                        <div class=" heroSection_poster1 shadow w-100" >
                            <div className="row " style={{ paddingTop: "20%" }}>
                                <div className="col-md-6 pe-5 my-3 text-wrap">
                                    <p>Fashion collection Summer sale</p>
                                    <h2 className="mb-2 f-bold">Prices Upto <br></br><span style={{ color: "#FEBB9D", fontWeight: "800" }}>-70% off!</span></h2>
                                    <p className="mb-3">Hurry! The offer is valid only until we run out of stock!</p>
                                    <button style={{ borderRadius: "20px", backgroundColor: "#FEBB9D", color: "white", outline: "none", border: "none" }}>Shop Now</button>
                                </div>
                                <div className="col-md-6 px-5"></div>
                            </div>

                        </div>
                    </div>

                    <div class="col-md-6 ">
                        <div className="row ">
                            <div className="col-md-6 col-sm-6">
                                <div class="heroSection_poster2  " >
                                    <h4 className="text-end me-2 " style={{ color: "rgba(13, 12, 12, 0.53)", fontWeight: "600" }} >70% off!</h4>
                                    <button style={{ backgroundColor: "white", color: "#9A6637", border: "2px solid #9A6637", borderRadius: "15px", marginTop: "110%", justifyContent: "center", marginBottom: "3%" }}>Shop Now</button>
                                    <p className=" pb-5" style={{ color: "#915D2E", }}>Fashion Collection Summer Sale</p>
                                </div>
                            </div>

                            <div className="col-md-6  col-sm-6 ">
                                <div className=" row mb-2  ">
                                    <div class="heroSection_poster3" >
                                        <div className="clearfix " style={{ color: "white", fontWeight: "600", fontSize: "20px", marginTop: "62%" }}>
                                            <p className="float-start">Show Now</p>
                                            <p className="float-end">70% off!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex row"  >
                                    <div style={{ backgroundColor: "#D2A893", color: "white", height: "35vh" }}>
                                        <div class="clearfix my-2 " >
                                            <div>
                                                <h4 className="float-start">Top Favorties</h4>
                                                <h4 className="float-end">70% off!</h4>
                                            </div>
                                            <div>
                                                <img className=" d-inline" src={heroSection} alt="heroSection4" />
                                                <div className="d-inline">
                                                    <button className=" me-4" style={{ border: "2px solid white", color: "white", backgroundColor: "transparent", borderRadius: "15px" }} >Shop Now</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>  
            </div>

            {/* search bar */}
            {/* {siteWidth &&
                <div className="m-5">
                    <div className="shadow home_search row p-2 " >
                        <div className="col-md-9 col-sm-12 px-1">
                            <input className="w-50  search_input" name="search" type="text" placeholder="Search products..." />
                            <select className="w-50   categories_input " name="categories"  >
                                <option> categories</option>
                            </select>
                        </div>
                        <div className="col-md-3 col-sm-6"> <button className="search_button ">Search <FaSearch /></button></div>
                    </div>
                </div>
            } */}

            <div className="text-center mb-3    ">
                <h2>All Categories</h2>
            </div>

            {/* home page category */}

            <div >
                <Carousel responsive={responsive} >
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="p-3 border bg-white"  >
                            <img src={cosmetics} alt="cosmetics" width="100%" height="100vh" />
                            <h6>Cosmetics</h6>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="p-3 border bg-white"  >
                            <img src={Bags} alt="cosmetics" width="100%" height="100vh" />
                            <h6>Bags</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="py-3 px-2 border bg-white"  >
                            <img src={Grooming} alt="cosmetics" width="90%" height="100vh" />
                            <h6>Grooming</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="p-3  border bg-white"  >
                            <img src={sweatshrit} alt="cosmetics" width="100%" height="100vh" />
                            <h6>SweatShrit</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="py-3 px-4 border bg-white"  >
                            <img src={Watches} alt="cosmetics" width="100%" height="100vh" />
                            <h6>Watches</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="py-3 px-4  border bg-white"  >
                            <img src={Boots} alt="cosmetics" width="100%" height="100vh" />
                            <h6>Boots</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="py-3 px-4 border bg-white"  >
                            <img src={ActiveWear} alt="cosmetics" width="100%" height="100vh" />
                            <h6>Active Wear</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="px-4 py-3 border bg-white"  >
                            <img src={Accessories} alt="cosmetics" width="100%" height="100vh" />
                            <h6>Accessories</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="py-3 px-4 border bg-white"  >
                            <img src={sneaker} alt="cosmetics" width="110%" height="100vh" />
                            <h6>Sneaker</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" >
                        <div class="py-3 px-2 border bg-white"  >
                            <img src={OuterWear} alt="cosmetics" width="100%" height="100vh" />
                            <h6>Outer Wear</h6>
                        </div>
                    </div>



                </Carousel>
            </div>

            {/* popular product */}

            <div className="clearfix m-5">
                <h3 className="float-start">Popular products</h3>
                <div className="float-end"> view more <FaArrowRight /></div>
            </div>
            <div className="m-5">
                <div className="row gy-2 d-flex justify-content-between">
                    <div className="col-md-3 ">
                        <div class="popular_product ">

                            <div className="clearfix">
                                <Avatar className="float-end shadow-lg me-2 mt-4" sx={{ width: 66, height: 66, color: "#EB6D20", backgroundColor: "white", fontSize: "14px", fontWeight: "800" }}>Get <br />65% off</Avatar>
                            </div>

                            <div className="text-start ps-4 mb-2" style={{ marginTop: "60%", fontWeight: "500" }}>
                                <span className="d-block">SweatShirt</span>
                                <span className="d-block">Dresses</span>
                                <span className="d-block">Bags</span>
                            </div>
                            <button className="mb-5" style={{ border: "none", outline: "none", color: "white", backgroundColor: "rgba(255, 199, 0, 0.90)", borderRadius: "15px", fontWeight: "600" }}>Explore Now</button>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className=" d-flex row gy-2">
                            <div className="col-sm-12">
                                <div class="p-3 border bg-white row d-flex felx-wrap" >
                                    <div className="col-md-4">
                                        <img src={popular1} alt="popular product1" width="110%" />
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <div className="row mb-2">
                                            <h5 className="col-10">GoSriKi Women's Chikankari</h5>
                                            <span className="col-2"><FaHeart size={20} color={true ? "#FF5572" : "#D9D9D9"} /></span>
                                        </div>
                                        <div className='mb-2'>
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={18}
                                                    color={starIndex < 4 ? "#ffc107" : "#999696"}
                                                    style={{ marginLeft: "4px" }}
                                                />
                                            ))}
                                        </div>
                                        <div className="mb-3 gx-2">
                                            <h6 className=" d-inline">&#8377;445</h6>
                                            <p className="d-inline text-decoration-line-through text-secondary">&#8377;1045</p> <h6 className="t-bold d-inline text-success">44% off</h6>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="rounded-pill w-50" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                            <button className="rounded-pill w-50    " style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div class="p-3 border bg-white row" >
                                    <div className="col-md-4">
                                        <img src={popular2} alt="popular product2" width="80%" />
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <div className="row mb-2">
                                            <h5 className="col-10">Allen Solly Men's Regular Fit Polo</h5>
                                            <span className="col-2"><FaHeart size={20} color={false ? "#FF5572" : "#D9D9D9"} /></span>
                                        </div>
                                        <div className='mb-2'>
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={18}
                                                    color={starIndex < 4 ? "#ffc107" : "#999696"}
                                                    style={{ marginLeft: "4px" }}
                                                />
                                            ))}
                                        </div>
                                        <div className=" mb-3">
                                            <h6 className="d-inline">&#8377;1099</h6>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                            <button className="rounded-pill w-50  flex-wrap" style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 ">
                        <div className=" row gy-2">
                            <div className="col-sm-12">
                                <div class="p-3 border bg-white row" >
                                    <div className="col-md-4">
                                        <img src={popular3} alt="popular product3" width="110%" />
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <div className="row mb-2">
                                            <h5 className="col-10 text-wrap">Lakme Primer + Matte Lipstick</h5>
                                            <span className="col-2"><FaHeart size={20} color={false ? "#FF5572" : "#D9D9D9"} /></span>
                                        </div>
                                        <div className='mb-2'>
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={18}
                                                    color={starIndex < 4 ? "#ffc107" : "#999696"}
                                                    style={{ marginLeft: "4px" }}
                                                />
                                            ))}
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="d-inline">&#8377;275</h6> <p className="d-inline text-decoration-line-through text-secondary">&#8377;500</p> <h6 className="t-bold d-inline text-success">45% off</h6>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div class="p-3 border bg-white row" >
                                    <div className="col-md-4">
                                        <img src={popular4} alt="popular product4" width="100%" />
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <div className="row mb-2">
                                            <h5 className="col-10">Womens Purses and Handbags</h5>
                                            <span className="col-2"><FaHeart size={20} color={true ? "#FF5572" : "#D9D9D9"} /></span>
                                        </div>
                                        <div className='mb-2'>
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={18}
                                                    color={starIndex < 4 ? "#ffc107" : "#999696"}
                                                    style={{ marginLeft: "4px" }}
                                                />
                                            ))}
                                        </div>
                                        <div className="mb-3">
                                            <h6 className=" d-inline">&#8377;8501</h6>
                                        </div>

                                        <div className="d-flex gap-3 ">
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Shop By Brands */}

            <div className="clearfix m-5">
                <h3 className="float-start">Shop By Brands</h3>
                <div className="float-end"> view more <FaArrowRight /></div>
            </div>
            <div className="mb-3">
                <Carousel responsive={Brand}>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="px-4 py-3 border bg-white"  >
                            <img src={brand1} lt="cosmetics" width="80%" height="100vh" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="py-3 px-3 border bg-white"  >
                            <img src={brand6} alt="cosmetics" width="90%" height="100vh" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="py-3 px-4 border bg-white"  >
                            <img src={brand2} alt="cosmetics" width="80%" height="100vh" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="px-4 py-3 border bg-white"  >
                            <img src={brand3} alt="cosmetics" width="100%" height="100vh" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="p-3 border bg-white"  >
                            <img src={brand4} alt="cosmetics" width="70%" height="100vh" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="p-3 border bg-white"  >
                            <img src={brand5} alt="cosmetics" width="100%" height="100vh" />
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* Top rate product */}

            <div className="clearfix m-5">
                <h3 className="float-start">Top Rated Products</h3>
                <div className="float-end"> view more <FaArrowRight /></div>
            </div>

            <div className="m-5 ">
                <div className="row  gx-5 gy-3">
                    <div className="col-md-4">
                        <div class="p-3 border bg-white row " >
                            <div className="col-md-4">
                                <img src={popular2} alt="rating product1" width="80%" />
                            </div>
                            <div className="col-md-8 text-start">
                                <div className="row mb-2">
                                    <h5 className="col-10">Allen Solly Men's Regular Fit Polo</h5>
                                    <span className="col-2"><FaHeart size={20} color={false ? "#FF5572" : "#D9D9D9"} /></span>
                                </div>
                                <div className='mb-2'>
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <FaStar
                                            key={starIndex}
                                            size={18}
                                            color={starIndex < 4 ? "#ffc107" : "#999696"}
                                            style={{ marginLeft: "4px" }}
                                        />
                                    ))}
                                </div>
                                <div className=" mb-3">
                                    <h6 className="d-inline">&#8377;1099</h6>
                                </div>
                                <div className="d-flex  gap-3">
                                    <button className="rounded-pill w-50 " style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                    <button className="rounded-pill w-50 " style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="p-3 border bg-white row d-flex " >
                            <div className="col-md-4 d-flex align-items-center">
                                <img src={topRate2} alt="rating product2" width="120%" />
                            </div>
                            <div className="col-md-8 text-start">
                                <div className="row mb-2">
                                    <h5 className="col-10">Allen Solly Men's Woolean Scarf</h5>
                                    <span className="col-2"><FaHeart size={20} color={true ? "#FF5572" : "#D9D9D9"} /></span>
                                </div>
                                <div className='mb-2'>
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <FaStar
                                            key={starIndex}
                                            size={18}
                                            color={starIndex < 4 ? "#ffc107" : "#999696"}
                                            style={{ marginLeft: "4px" }}
                                        />
                                    ))}
                                </div>
                                <div className="mb-3">
                                    <h6 className=" d-inline">&#8377;1099</h6>
                                </div>

                                <div className="d-flex  gap-3">
                                    <button className="rounded-pill w-50 " style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                    <button className="rounded-pill w-50 " style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="p-3 border bg-white row d-flex " >
                            <div className="col-md-4 d-flex align-items-center">
                                <img src={topRate3} alt="rating product3" width="125%" />
                            </div>
                            <div className="col-md-8 text-start">
                                <div className="row mb-2">
                                    <h5 className="col-10">Smart Apple <br />Watch</h5>
                                    <span className="col-2"><FaHeart size={20} color={true ? "#FF5572" : "#D9D9D9"} /></span>
                                </div>
                                <div className='mb-2'>
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <FaStar
                                            key={starIndex}
                                            size={18}
                                            color={starIndex < 4 ? "#ffc107" : "#999696"}
                                            style={{ marginLeft: "4px" }}
                                        />
                                    ))}
                                </div>
                                <div className="mb-3 gx-2">
                                    <h6 className=" d-inline">&#8377;1099</h6>
                                </div>

                                <div className="d-flex  gap-3">
                                    <button className="rounded-pill w-50" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                    <button className="rounded-pill w-50 " style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Best Sellers */}

            <div className="clearfix m-5">
                <h3 className="float-start">Best Sellers</h3>
                <div className="float-end"> view more <FaArrowRight /></div>
            </div>
            <div style={{ marginBottom: "5%" }}>
                <Carousel responsive={BestSeller}>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="px-5 py-4 border shadow bg-white " style={{ borderRadius: "15px" }}  >
                            <img src={Nike} alt="cosmetics" width="130vh" height="130vh" />
                            <h6>Nike Boots</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="px-5 py-4 border shadow bg-white " style={{ borderRadius: "15px" }}  >
                            <img src={Watches} alt="cosmetics" width="130vh" height="130vh" />
                            <h6>Rolex Watch</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <div class="px-5 py-4 border shadow bg-white " style={{ borderRadius: "15px" }}  >
                            <img src={bestSeller3} alt="cosmetics" width="130vh" height="130vh" />
                            <h6>Wool Hat</h6>
                        </div>
                    </div>
                </Carousel>
            </div>


            {/* featured products */}

            <div className="clearfix m-5">
                <h3 className="float-start">Featured products</h3>
                <div className="float-end"> view more <FaArrowRight /></div>
            </div>
            <div className="m-5">
                <div className="row gy-2 d-flex justify-content-between">
                    <div className="col-md-3 ">
                        <div class="featured_product ">
                            <div className="text-start ps-4 mb-2" style={{ paddingTop: "80%", fontWeight: "500" }}>
                                <span className="d-block">Featured Product</span>
                                <span className="d-block">Accessories</span>
                                <span className="d-block">LifeStyle</span>

                            </div>
                            <button className="mb-5" style={{ border: "none", outline: "none", color: "white", backgroundColor: "rgba(255, 199, 0, 0.90)", borderRadius: "15px", fontWeight: "600" }}>Explore Now</button>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className=" d-flex row gy-2">
                            <div className="col-sm-12">
                                <div class="p-3 border bg-white row d-flex felx-wrap" >
                                    <div className="col-md-4">
                                        <img src={featured1} alt="popular product1" width="90%" />
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <div className="row mb-2">
                                            <h5 className="col-10">Fossil Black Dial Men's Watch</h5>
                                            <span className="col-2"><FaHeart size={20} color={true ? "#FF5572" : "#D9D9D9"} /></span>
                                        </div>
                                        <div className='mb-2'>
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={18}
                                                    color={starIndex < 4 ? "#ffc107" : "#999696"}
                                                    style={{ marginLeft: "4px" }}
                                                />
                                            ))}
                                        </div>
                                        <div className="mb-3 gx-2">
                                            <h6 className=" d-inline">&#8377;14,420</h6>

                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="rounded-pill w-50" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                            <button className="rounded-pill w-50    " style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div class="p-3 border bg-white row" >
                                    <div className="col-md-4 d-flex justify-content-center">
                                        <img src={featured3} alt="popular product2" width="80%" />
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <div className="row mb-2">
                                            <h5 className="col-10">Nike Sneakers 0754</h5>
                                            <span className="col-2"><FaHeart size={20} color={false ? "#FF5572" : "#D9D9D9"} /></span>
                                        </div>
                                        <div className='mb-2'>
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={18}
                                                    color={starIndex < 4 ? "#ffc107" : "#999696"}
                                                    style={{ marginLeft: "4px" }}
                                                />
                                            ))}
                                        </div>
                                        <div className=" mb-3">
                                            <h6 className="d-inline">&#8377;1099</h6>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                            <button className="rounded-pill w-50  flex-wrap" style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 ">
                        <div className=" row gy-2">
                            <div className="col-sm-12">
                                <div class="p-3 border bg-white row" >
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        <img src={featured2} alt="popular product3" width="110%" className="p-2" />
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <div className="row mb-2">
                                            <h5 className="col-10 text-wrap">NIVEA Sunscreen 125ml SPF 30</h5>
                                            <span className="col-2"><FaHeart size={20} color={false ? "#FF5572" : "#D9D9D9"} /></span>
                                        </div>
                                        <div className='mb-2'>
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={18}
                                                    color={starIndex < 4 ? "#ffc107" : "#999696"}
                                                    style={{ marginLeft: "4px" }}
                                                />
                                            ))}
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="d-inline">&#8377;499</h6>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div class="p-3 border bg-white row" >
                                    <div className="col-md-4 d-flex justify-content-between">
                                        <img src={featured4} alt="popular product4" width="100%" />
                                    </div>
                                    <div className="col-md-8 text-start">
                                        <div className="row mb-2">
                                            <h5 className="col-10">Basket Ball Niva No 7</h5>
                                            <span className="col-2"><FaHeart size={20} color={true ? "#FF5572" : "#D9D9D9"} /></span>
                                        </div>
                                        <div className='mb-2'>
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={18}
                                                    color={starIndex < 4 ? "#ffc107" : "#999696"}
                                                    style={{ marginLeft: "4px" }}
                                                />
                                            ))}
                                        </div>
                                        <div className="mb-3">
                                            <h6 className=" d-inline">&#8377;1050</h6>
                                        </div>

                                        <div className="d-flex gap-3 ">
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                                            <button className="rounded-pill w-50 flex-wrap" style={{ border: "none", backgroundColor: "#FF5572", color: "white", outline: "none" }}>Buy</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* New Arrival */}
            <div className="clearfix m-5">
                <h3 className="float-start">New Arrival</h3>
            </div>
            <div className="m-5">
                <div className="  row  gx-5">
                    <div className="col-md-3 mb-3">
                        <div className="border">
                            <div className="d-flex pt-5 align-items-center justify-content-center" >
                                <img src={newArrival1} alt="newArrival1" width="50%" />
                            </div>
                            <h5 className="d-block">Lymio Hoodies</h5>
                            <p className="d-block text-secondary" style={{ fontSize: "12px" }} >Sweatshirt for Men || Men Hoodie </p>
                            <div className=" my-2  gx-5">
                                <p className=" d-inline me-2" style={{ fontWeight: "500", paddingTop: "1%" }}>&#8377;1299</p>
                                <button className="rounded-pill  d-inline  " style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 ">
                        <div className="border">
                            <div className="d-flex pt-5 align-items-center justify-content-center" >
                                <img src={newArrival2} alt="newArrival1" width="50%" />
                            </div>
                            <h5 className="d-block">Zilcon Women's Waffle</h5>
                            <p className="d-block text-secondary" style={{ fontSize: "12px" }} >Casual Long Sleeve Oversized Winter Tops</p>
                            <div className="  my-2  gx-5">
                                <p className="d-inline me-2" style={{ fontWeight: "500", paddingTop: "1%" }}>&#8377;1099</p>
                                <button className="rounded-pill " style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  mb-3 ">
                        <div className="border">
                            <div className=" mt-5 pt-4 d-flex  align-items-center justify-content-center" >
                                <img src={newArrival3} alt="newArrival1" width="70%" />
                            </div>
                            <h5 className="d-block mt-5">Beardo Grooming Kit</h5>
                            <p className="d-block text-secondary" style={{ fontSize: "12px" }} >Beardo 30 Days Grooming Kit For Bearded Men</p>
                            <div className=" my-2 gx-5">
                                <p className="me-2 d-inline" style={{ fontWeight: "500", paddingTop: "1%" }}>&#8377;3199</p>
                                <button className="rounded-pill d-inline " style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  mb-3 ">
                        <div className="border">
                            <div className="d-flex align-items-center justify-content-center" >
                                <img src={newArrival4} alt="newArrival1" width="60%" />
                            </div>
                            <h5 className="d-block">PA MAXIMA</h5>
                            <p className="d-block text-secondary" style={{ fontSize: "12px" }} >55772BMLR Water-Resistant Analogue Watch</p>
                            <div className=" my-2 gx-5">
                                <p className="me-2 d-inline" style={{ fontWeight: "500", paddingTop: "1%" }}>&#8377;1399</p>
                                <button className="rounded-pill  d-inline" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="  row  gx-5 mt-4">
                    <div className="col-md-3 mb-3">
                        <div className="border">
                            <div className="d-flex pt-5 align-items-center justify-content-center" >
                                <img src={newArrival5} alt="newArrival1" width="50%" />
                            </div>
                            <h5 className="d-block mt-3">TARMAK All Sports Basketballs</h5>
                            <p className="d-block text-secondary" style={{ fontSize: "12px" }} >Indoor · Outdoor · Rubber · Men's</p>
                            <div className=" my-2 gx-5">
                                <p className="d-inline me-2" style={{ fontWeight: "500", paddingTop: "1%" }}>&#8377;899</p>
                                <button className="rounded-pill  d-inline" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="border">
                            <div className="d-flex pt-5 align-items-center justify-content-center" >
                                <img src={newArrival6} alt="newArrival1" width="50%" />
                            </div>
                            <h5 className="d-block">LEE COOPER</h5>
                            <p className="d-block text-secondary" style={{ fontSize: "12px" }} >Casual Long Sleeve Oversized Winter Tops</p>
                            <div className=" my-2 gx-5">
                                <p className="d-inline me-2" style={{ fontWeight: "500", paddingTop: "1%" }}>&#8377;999</p>
                                <button className="rounded-pill  d-inline" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  mb-3 ">
                        <div className="border">
                            <div className=" pt-4 d-flex  align-items-center justify-content-center" >
                                <img src={newArrival7} alt="newArrival1" width="60%" />
                            </div>
                            <h5 className="d-block mt-4">Yellow Chimes Earrings</h5>
                            <p className="d-block text-secondary" style={{ fontSize: "12px" }} >Silver Rose Gold Plated Butterfly Shaped Earrings</p>
                            <div className=" my-2 ">
                                <p className="d-inline me-2" style={{ fontWeight: "500", paddingTop: "1%" }}>&#8377;3199</p>
                                <button className="rounded-pill  d-inline" style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 ">
                        <div className="border">
                            <div className=" pt-4 d-flex align-items-center justify-content-center" >
                                <img src={newArrival8} alt="newArrival1" width="60%" />
                            </div>
                            <h5 className="d-block">Shoetopia</h5>
                            <p className="d-block text-secondary" style={{ fontSize: "12px" }} >Women Pink Solid Stiletto Pumps</p>
                            <div className=" my-2 gx-5 ">
                                <p className="d-inline me-2" style={{ fontWeight: "500", paddingTop: "1%" }}>&#8377;1399</p>
                                <button className="rounded-pill  d-inline " style={{ border: "none", backgroundColor: "#3AAFF1", color: "white", outline: "none" }}>Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}


export default Home;