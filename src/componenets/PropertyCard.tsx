import "../styles/PropertyCard.css"
import { Property } from "../Interfaces"

interface Props {
  data:Property
}

function PropertyCard({data} : Props) {


  return (
    <div className="property-card">
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
            <p className="property-card-detail"> Bedrooms: {data.bedrooms} </p>
            <p className="property-card-detail"> Bathrooms: {data.bathrooms} </p>
            <p className="property-card-detail"> Square Feet:{data.squareFeet} </p>
            <p className="property-card-detail"> Lease Length: {data.leaseLength} </p>
            <p className="property-card-detail"> Cats Allowed: {data.catsAllowed ? "Yes" : "No"} </p>
            <p className="property-card-detail"> Dogs Allowed: {data.dogsAllowed ? "Yes" : "No"} </p>
          </div>
          <div>
            <p className="property-card-detail"> Utilites Included {data.utilitiesIncluded ? "Yes" : "No"} </p>
            <p className="property-card-detail"> Lawn Care: {data.lawnCareIncluded ? "Landlord" : "Tenant"} </p>
            <p className="property-card-detail"> Snow Removal: {data.snowRemovalIncluded ? "Landlord" : "Tenant"} </p>
            <p className="property-card-detail"> Smoking Allowed: {data.smokingAllowed ? "Yes" : "No"} </p>
            <p className="property-card-detail"> Garage Included: {data.garageIncluded ? "Yes" : "No"} </p>
          </div>
        </div>


      </div>
    </div>
  )
}
  
export default PropertyCard
  