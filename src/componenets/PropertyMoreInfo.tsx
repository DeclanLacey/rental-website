import { Link, useLocation } from "react-router-dom"
import { Property } from "../Interfaces"
import { MdOutlineBedroomParent,MdOutlineBathroom,MdOutlinePower,MdOutlineYard } from "react-icons/md";
import {GiResize} from "react-icons/gi"
import {GrDocumentLocked} from "react-icons/gr"
import {LuCat,LuDog} from "react-icons/lu"
import {TbSmoking} from "react-icons/tb"
import {PiGarage} from "react-icons/pi"
import {BsThermometerSnow} from "react-icons/bs"
import {AiOutlineDollar} from "react-icons/ai"
import "../styles/PropertyMoreInfo.css"
import { JSX } from "react/jsx-runtime";
import { useEffect } from "react";

function PropertyMoreInfo() {

  const location = useLocation()
  const data : Property = location.state
  let curSlide = 17;
  let maxSlide = data.photos.length - 1;
  let carouselImageElements: JSX.Element[] = []

  function renderCarouselImages() {
    let carouselImagesArray = data.photos
    for (let i = 0; i < carouselImagesArray.length; i++) {
      carouselImageElements.push(
        <div key={i} className="slide">
          <img loading="lazy" src={`${carouselImagesArray[i]}`} alt="" />
        </div>
      )
      
    }
    return carouselImageElements
  }

  function goToPrevSlide() {
    const slides = document.querySelectorAll<HTMLElement>(".slide")

    if (curSlide === 0) {
      curSlide = maxSlide
    }else {
      curSlide--
    }
    
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  
  }

  function goToNextSlide() {
    let slides = document.querySelectorAll<HTMLElement>(".slide")

    if (curSlide === maxSlide) {
      curSlide = 0
    }else {
      curSlide++
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  }

  useEffect(() => {
    if (curSlide === 0) {

    }else {
      goToNextSlide()
    }
  }, [])
  
  return (
    <div className="property-more-info">
        <div className="property-img-container">
          <div className="slider">
              
              {renderCarouselImages()}

              <button onClick={goToPrevSlide} className="carousel-btn btn-prev"> {`<`} </button>
              <button onClick={goToNextSlide} className="carousel-btn btn-next"> {`>`}</button>
          </div>
        </div>
        <div className="property-more-info-address-rent-container">
            <div>
              <h2> {data.address.street}</h2>
              <h4> {data.address.city} {data.address.state}, {data.address.zipCode}</h4>
            </div>
            <div>
              <h1 className="property-more-info-rent"> ${data.rent}</h1>
            </div>
        </div>

        <p className="property-more-info-desc"> This cozy and ideally located home in the Merle Hay Neighborhood is exactly what you've been waiting for. Located at 3839 57th St, this two- bedroom, one-bathroom home offers 688 sqft of living space. The home features hardwood floors, central air and heating, and beautiful windows that allow ample sunlight throughout the home. </p>
        
        <p className="property-more-info-desc"> All appliances are included, such as a refrigerator/freezer, dishwasher, microwave, washer, oven, dryer, and electric range. The newly remodeled kitchen and bathroom will awe you, setting this home apart from the competition. It also comes with ample storage and parking on the property.  </p>
        
        <p className="property-more-info-desc"> As an added bonus, cats and dogs are allowed (with additonal deposit and pet rent), meaning your furry friends can come along! Don't miss out on this one-of-a-kind opportunity – set up a showing today! </p>
        <div className="property-more-info-detail-container">
          <div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <MdOutlineBedroomParent className="icon"/> Bedrooms: </p>
              <span className="property-detail-data">{data.bedrooms}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <MdOutlineBathroom className="icon"/> Bathrooms: </p>
              <span className="property-detail-data">{data.bathrooms}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <GiResize className="icon" /> Square Feet: </p>
              <span className="property-detail-data">{data.squareFeet}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <LuCat className="icon" /> Cats Allowed: </p>
              <span className="property-detail-data">{data.catsAllowed ? "Yes" : "No"}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <LuDog className="icon"/> Dogs Allowed: </p>
              <span className="property-detail-data">{data.dogsAllowed ? "Yes" : "No"}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <MdOutlinePower className="icon"/> Utilites Included: </p>
              <span className="property-detail-data">{data.utilitiesIncluded ? "Yes" : "No"}</span>
            </div>

          </div>
          <div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <TbSmoking className="icon"/> Smoking Allowed: </p>
              <span className="property-detail-data">{data.smokingAllowed ? "Yes" : "No"}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <PiGarage className="icon"/> Garage Included: </p>
              <span className="property-detail-data">{data.garageIncluded ? "Yes" : "No"}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <BsThermometerSnow className="icon"/> Snow Removal: </p>
              <span className="property-detail-data">{data.snowRemovalIncluded ? "Landlord" : "Tenant"}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <MdOutlineYard className="icon"/> Lawn Care: </p>
              <span className="property-detail-data">{data.lawnCareIncluded ? "Landlord" : "Tenant"}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <GrDocumentLocked className="icon"/> Lease Length: </p>
              <span className="property-detail-data">{data.leaseLength}</span>
            </div>

            <div className="property-more-info-flex-container">
              <p className="property-more-info-detail"> <AiOutlineDollar className="icon" /> Monthly Rent: </p>
              <span className="property-detail-data">${data.rent}/mo</span>
            </div>
          </div>
        </div>

        <div className="video-container">
          <h1 className="video-title"> Check out a video tour here! </h1>
          <iframe className="video" src="https://www.youtube.com/embed/5fx_YjByYDk?si=lwT7gVh1AGE_DcVB" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        
        <div className="tour-btn-container">
          <Link className="request-tour-btn" to="/request-tour" >Request Tour Now!</Link>

        </div>

    </div>
  )
  
}

  
export default PropertyMoreInfo

// ["src/images/57thstphotos/57thst18.webp', 'src/images/57thstphotos/57thst17.webp', 'src/images/57thstphotos/57thst16.webp', 'src/images/57thstphotos/57thst15.webp', 'src/images/57thstphotos/57thst14.webp', 'src/images/57thstphotos/57thst13.webp', 'src/images/57thstphotos/57thst12.webp', 'src/images/57thstphotos/57thst11.webp', 'src/images/57thstphotos/57thst10.webp', 'src/images/57thstphotos/57thst9.webp', 'src/images/57thstphotos/57thst8.webp', 'src/images/57thstphotos/57thst7.webp', 'src/images/57thstphotos/57thst6.webp', 'src/images/57thstphotos/57thst5.webp', 'src/images/57thstphotos/57thst4.webp', 'src/images/57thstphotos/57thst3.webp', 'src/images/57thstphotos/57thst2.webp', 'src/images/57thstphotos/57thstcoverphoto.webp']

// [ "src/images/57thstphotos/57thstcoverphoto.webp","src/images/57thstphotos/57thst2.webp","src/images/57thstphotos/57thst3.webp","src/images/57thstphotos/57thst4.webp","src/images/57thstphotos/57thst5.webp","src/images/57thstphotos/57thst6.webp","src/images/57thstphotos/57thst7.webp","src/images/57thstphotos/57thst8.webp","src/images/57thstphotos/57thst9.webp","src/images/57thstphotos/57thst10.webp","src/images/57thstphotos/57thst11.webp","src/images/57thstphotos/57thst12.webp","src/images/57thstphotos/57thst13.webp","src/images/57thstphotos/57thst14.webp","src/images/57thstphotos/57thst15.webp","src/images/57thstphotos/57thst16.webp","src/images/57thstphotos/57thst17.webp", "src/images/57thstphotos/57thst18.webp"