import React, { useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import "antd/dist/reset.css";
import { 
    Button,
    Rate,
} from 'antd';
import 'react-slick';
import Slider from "react-slick";
import { getProductDetailsSelector } from "../../../redux/reducers/productDetails/selectors";
import { fetchProductDetailsRequest } from "../../../redux/reducers/productDetails/actions";
import { getProductSelector } from "../../../redux/reducers/home/selectors";
import { constantsText } from "../../constant/constant";
import { fetchProductRequest } from "../../../redux/reducers/home/actions";
import ErrorImg from '../../accets/Image/404.jpeg';


const {
  ROUTES: {
    PriceTag,
    Details,
    CheckOut,
  }
} = constantsText;

const ProductDetails = ()=> {
    const Product = useLocation();
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const searchParams = new URLSearchParams(Product.search);
    const currentId = searchParams.get('id');
    const navigate = useNavigate();
    
    const SingleProduct = useSelector(getProductDetailsSelector);
    const AllProducts = useSelector(getProductSelector);
    useEffect(() => {
        dispatch(fetchProductDetailsRequest(currentId));
        dispatch(fetchProductRequest());
    }, [currentId,dispatch]);

    const elem = SingleProduct?.details; 
    const tags = elem?.category;
    const rate = elem?.rating?.rate;
    const title = elem?.title;
    const price = elem?.price;    const description = elem?.description;
    const image = elem?.image;
    const count = elem?.rating?.count;
    const category = elem?.category?.toUpperCase();

    const settings = {
        dots: false, 
        infinite: true,
        speed: 1700,
        slidesToShow: isMobile ? 2 : 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        cssEase: "linear",
        pauseOnHover: true,
        draggable: true,
        swipe: true,
    };
    const showProductDetailsl = (elem) => {
        navigate(`?mode=details&id=${elem?.id}`, {
            state: { productDetails: true }
        });
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 500);
    };
    
    return title ? (
        <>
            <div className="mt-4 w-full max-w-[95%] mx-auto flex pt-10">
                <div className="w-2/5 h-full">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="w-3/5 justify-center ml-16">
                    <h2 className="font-extrabold text-2xl text-gray-400 mb-4">{category}</h2>
                    <h2 className="font-light text-2xl text-black">{title}</h2>
                    <p className="mt-2 font-medium text-lg leading-none tracking-tight text-textHcolor">
                        {PriceTag}
                    </p>
                    <p className="font-bold text-[40px]">₹{price}</p>
                    <div className="mt-2 flex gap-2">
                        <Rate allowHalf value={rate} style={{ fontSize: "16px" }} />
                        <span className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                            {rate}
                        </span>
                    </div>
                    <p className="mt-2 font-medium text-lg text-textHcolor">{count} Reviews</p>
                    <h2 className="font-normal text-2xl text-black">{Details}</h2>
                    <p className="mt-2">{description}</p>
                    <Button color="purple" variant="solid" className="mt-4">
                        {CheckOut}
                    </Button>
                </div>
            </div>
    
            <div className="border border-borderClr p-8 mt-14 mb-10 w-full max-w-[95%] mx-auto">
                <h2 className="font-extrabold text-2xl">Popular products</h2>
                <Slider {...settings}>
                    {AllProducts?.map((elem) => (
                        <div
                            key={elem?.id}
                            className="mt-6 ml-10 flex flex-col justify-center items-center text-center cursor-pointer"
                            onClick={() => showProductDetailsl(elem)}
                        >
                            <img
                                src={elem?.image}
                                alt={elem?.title}
                                className="w-[150px] h-[150px] object-contain bg-white"
                            />
                            <p className="mt-3 text-[16px] font-medium text-gray-500 float-left">
                                {elem?.title?.split(" ").slice(0, 3).join(" ")}
                                {elem?.title?.split(" ").length > 3 ? "..." : ""}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    ) : (
        <div className="w-full h-full">
            <img src={ErrorImg} alt={title} className="w-full h-full object-cover" />
        </div>
    );
}

export  default ProductDetails;