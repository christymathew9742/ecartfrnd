import React, { useEffect, useState } from "react";
import { Select,Rate} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import 'react-slick';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import { getPendingSelector, getProductSelector } from "../../../redux/reducers/home/selectors";
import { fetchProductRequest } from "../../../redux/reducers/home/actions";
import ReactPaginate from 'react-paginate';
import CommonSkeleton from "../../components/Skeleton/skeleton";
import { constantsText } from "../../constant/constant";
import { fetchSortCategoryRequest } from "../../../redux/reducers/sortCategory/actions";
import { getSortCategorySelector } from "../../../redux/reducers/sortCategory/selectors";

const {
  ROUTES: {
    AllProducts,
    Popularproducts
  }
} = constantsText;

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const Products = useSelector(getProductSelector);
    const CategoryList = useSelector(getSortCategorySelector);
    const dataStatus = useSelector(getPendingSelector);
    const [ProductSearch, setProductSearch] = useState('');
    const [catSearch, setcatSearch] = useState("");
    const options = [...new Set(CategoryList?.sort)].map(cat => ({ value: cat, label: cat }));
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
        navigate(`productdetails/?mode=details&cat=${catSearch}&id=${elem?.id}`, {
            state: {
                productDetails: true
            }
        })
    } 
    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    useEffect(() => {
        const queryString = catSearch ? `category/${catSearch}` : "";
        dispatch(fetchProductRequest(queryString));
        dispatch(fetchSortCategoryRequest());
    }, [catSearch,dispatch]);

    const searchCat = (e) => {
        setcatSearch(e);
        setCurrentPage(0);
        handlePageClick({ selected: 0 });
    };

    const searchProduct = (e) => {
        setProductSearch(e.target.value);
        setCurrentPage(0);
        handlePageClick({ selected: 0 });
    };

    const filteredProducts = Products.filter((product) =>
      product?.title?.toLowerCase().includes(ProductSearch?.toLowerCase())
    );

    const offset = currentPage * itemsPerPage;  
    const currentItems =  filteredProducts?.length < 4 ? filteredProducts : 
    filteredProducts?.slice(offset, offset + itemsPerPage);

    return(
        <section className="w-full max-w-[98%] mx-auto mt-4 mb-8">
            {!dataStatus ? 
            ( 
                <>
                    <div className="mt-6 mb-8 w-full"><CommonSkeleton /></div>
                    <div className="mt-6 mb-8 w-full"><CommonSkeleton /></div>
                    <div className="mt-6 mb-8 w-full"><CommonSkeleton /></div>
                </>
            ): (
            <>
                <div className="border border-borderClr p-4">
                    <h2 className="font-extrabold text-2xl font-gilroy">{Popularproducts}</h2>
                    <Slider {...settings}>
                        {Products?.map((elem) => {
                            return (
                                <div 
                                    className="mt-6 flex flex-col justify-center items-center text-center border-none cursor-pointer"
                                    onClick={() => showProductDetailsl(elem)}
                                >
                                    <img 
                                        src={elem?.image} 
                                        alt={elem?.title}
                                        className="w-[150px] h-[150px] p-0  object-contain  bg-white"
                                    />
                                    <p className="mt-3 text-[16px] font-medium text-gray-500 float-left">
                                        {elem?.title?.split(" ").slice(0, 3).join(" ")}{elem?.title?.split(" ").length > 3 ? "..." : ""}
                                    </p>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <div className="mt-10 border border-borderClr p-4">
                    <h2 className="font-extrabold text-2xl font-gilroy">{AllProducts}</h2>
                    <div className="flex space-x-2 mt-4 mb-2">
                        <div>
                            <div>  
                                <Select
                                    defaultValue=""
                                    onChange={(e) => searchCat(e)}
                                    value={catSearch}
                                    style={{ width: '200px',
                                        height: '40px',
                                    }}
                                    options={[
                                        { value: "", label: "All Categories" },
                                        ...options
                                    ]}
                                    className="outline-none"
                                />
                            </div>
                        </div>
                        <div
                            class={`flex xl:w-96 max-lg:w-full lg:ml-10 px-6 py-2 rounded outline outline-transparent border border-gray-200`}
                        >
                            <input 
                                type='text' 
                                placeholder='Search Products...'
                                onChange={(e) => searchProduct(e)}
                                value={ProductSearch}
                                class='w-full text-sm bg-transparent rounded outline-none pr-2 !border-none ' 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                                class="cursor-pointer fill-gray-400">
                                <path
                                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h2 className="font-normal text-[20px] text-textHcolor mt-4">{catSearch && catSearch.toUpperCase() || 'ALL'}</h2>
                    <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4' }  ${isMobile ? 'grid-rows-2' : 'grid-rows-1' }   gap-4`}>
                        { currentItems?.map((elem)=>{
                            return (
                                <div 
                                    className="mt-6 border border-borderClr rounded-md p-4 cursor-pointer"
                                    onClick={() => showProductDetailsl(elem)}
                                >
                                    <img 
                                        src={elem?.image} 
                                        alt={elem?.title}
                                        className="w-[200px] h-[150px] p-0  object-contain  bg-white"
                                    />
                                    <h2 className="mt-3 font-medium text-lg leading-6 tracking-tight overflow-hidden text-gray-600">
                                        {elem?.title?.split(" ").slice(0, 3).join(" ")}{elem?.title?.split(" ").length > 3 ? "..." : ""}
                                    </h2>
                                    <div className="mt-2">
                                        <Rate allowHalf defaultValue={elem?.rating?.rate} style={{fontSize:"16px"}}/> <span className="text-red-800 ml-2">{elem?.rating?.rate}</span>
                                        <p className="mt-2 font-medium text-lg leading-none tracking-tight overflow-hidden text-textHcolor">Rs {elem.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {filteredProducts  && filteredProducts?.length > 4  && (
                        <div className="pt-6 pb-4">
                            <ReactPaginate
                                previousLabel={"<<"}
                                nextLabel={">>"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={Math.ceil(filteredProducts?.length / itemsPerPage)}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination flex float-right"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                                forcePage={currentPage}
                            />
                        </div>
                    )}
                </div>
            </>
            )}
        </section>
    )
}

export default Home;