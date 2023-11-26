import "../styles/PropertyCard.css"
import { Property } from "../Interfaces"
import { MdOutlineBedroomParent,MdOutlineBathroom,MdOutlinePower,MdOutlineYard } from "react-icons/md";
import {GiResize} from "react-icons/gi"
import {GrDocumentLocked} from "react-icons/gr"
import {LuCat,LuDog} from "react-icons/lu"
import {TbSmoking} from "react-icons/tb"
import {PiGarage} from "react-icons/pi"
import {BsThermometerSnow} from "react-icons/bs"
import {Link} from "react-router-dom"

interface Props {
  data:Property
}

function PropertyCard({data} : Props) {

  return (
    <div className="property-card">
      <Link className="property-card-link" to='/property-details' state={data}>
        <div className="availability-container">
          <div className={data.available ? "available" : "unavailable"}></div>
          <p className="availability"> {data.available ? "Available" : "Unavailable"}</p>
        </div>
        <div className="property-cover-img-container">
          <img src={data.coverPhoto}/>
        </div>
        <div className="property-card-content-container">
          <div className="address-rent-container">
            <div>
              <h2> {data.address.street}</h2>
              <h4> {data.address.city} {data.address.state}, {data.address.zipCode}</h4>
            </div>
            <div>
              <h1 className="property-card-rent"> ${data.rent}</h1>
            </div>
          </div>

          <div className="property-card-details-container">
            <div>
              <p className="property-card-detail"> <MdOutlineBedroomParent className="icon"/> Bedrooms: <span className="property-info">{data.bedrooms}</span> </p>
              <p className="property-card-detail"> <MdOutlineBathroom className="icon"/> Bathrooms: <span className="property-info">{data.bathrooms}</span> </p>
              <p className="property-card-detail"> <GiResize className="icon" /> Square Feet: <span className="property-info">{data.squareFeet}</span> </p>
              <p className="property-card-detail"> <LuCat className="icon" /> Cats Allowed: <span className="property-info">{data.catsAllowed ? "Yes" : "No"}</span> </p>
              <p className="property-card-detail"> <LuDog className="icon"/> Dogs Allowed: <span className="property-info">{data.dogsAllowed ? "Yes" : "No"}</span> </p>
              <p className="property-card-detail"> <MdOutlineYard className="icon"/> Lawn Care: <span className="property-info">{data.lawnCareIncluded ? "Landlord" : "Tenant"}</span> </p>
            </div>
            <div>
              <p className="property-card-detail"> <MdOutlinePower className="icon"/> Utilites Included: <span className="property-info">{data.utilitiesIncluded ? "Yes" : "No"}</span> </p>
              <p className="property-card-detail"> <TbSmoking className="icon"/> Smoking Allowed: <span className="property-info">{data.smokingAllowed ? "Yes" : "No"}</span> </p>
              <p className="property-card-detail"> <PiGarage className="icon"/> Garage Included: <span className="property-info">{data.garageIncluded ? "Yes" : "No"}</span> </p>
              <p className="property-card-detail"> <BsThermometerSnow className="icon"/> Snow Removal: <span className="property-info">{data.snowRemovalIncluded ? "Landlord" : "Tenant"}</span> </p>
              <p className="property-card-detail"> <GrDocumentLocked className="icon"/> Lease Length: <span className="property-info">{data.leaseLength}</span> </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
  
export default PropertyCard
  