import PropertyCard from "./PropertyCard"
import propertyData from "../data/propertyData.json" 
import "../styles/Properties.css"

function Properties() : JSX.Element {

  const properties = propertyData.map((data, index) => {
    return (
      <PropertyCard key={index} data={data} />
    )
  })

  return (
    <div className="properties-container">
        {properties}
    </div>
  )
}
  
export default Properties