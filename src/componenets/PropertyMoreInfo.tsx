import { useLocation } from "react-router-dom"
import { Property } from "../Interfaces"
import "../styles/PropertyMoreInfo.css"

function PropertyMoreInfo() {

    const location = useLocation()
    const data : Property = location.state
    

    return (
      <div className="property-more-info">
          <img src={data.coverPhoto} />
          <div className="property-more-info-address-rent-container">
              <div>
                <h2> {data.address.street}</h2>
                <h4> {data.address.city} {data.address.state}, {data.address.zipCode}</h4>
              </div>
              <div>
                <h1 > ${data.rent}</h1>
              </div>
          </div>
      </div>
    )
  }
  
export default PropertyMoreInfo