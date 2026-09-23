import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import restaurantData from "./restaurantData"

const Body = () => {
  const [showTopRated, setShowTopRated] = useState(false)
  const restaurantsToDisplay = showTopRated
    ? restaurantData.filter((restaurant) => parseFloat(restaurant.rating) >= 4.4)
    : restaurantData

  return (
    <div className="body">
      <div className="filter">
        <button
          className={`filter-btn${showTopRated ? " active" : ""}`}
          aria-pressed={showTopRated}
          onClick={() => setShowTopRated((isShowing) => !isShowing)}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantsToDisplay.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body