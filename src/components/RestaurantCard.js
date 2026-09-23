import { LOGO_URL } from "../utils/constants"

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={restaurant.image || LOGO_URL}
        alt={restaurant.name}
      />
      <div className="res-details">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.cuisines}</p>
        <p className="res-rating">{restaurant.rating} · {restaurant.deliveryTime}</p>
      </div>
    </div>
  )
}

export default RestaurantCard