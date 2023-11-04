// Page1
# (GET) List of city
> http://localhost:9120/location
# (GET) Rest Wrt City
> http://localhost:9120/restaurants?stateId=3

# (GET) List of Restaurants
> http://localhost:9120/location
# (GET) List of mealType
> http://localhost:9120/mealType

// Page2
# (GET) Restaurants wrt mealType
> http://localhost:9120/restaurants?mealId=3
> http://localhost:9120/restaurants?stateId=1&mealId=3

# (GET) Restaurants wrt mealType + Cuisine
> http://localhost:9120/filter/3?cuisineId=4
# (GET) Restaurants wrt mealType + Cost
> http://localhost:9120/filter/3?lcost=500&hcost=1500

// Page3
# (GET) Details of the restaurant
> http://localhost:9120/details/651394d817e34ede35314a4f
# (GET) Menu of Selected Restaurant
> http://localhost:9120/menu/3

// Page4
# (POST) Details of menu selected
> http://localhost:9120/menuDetails
{
	"id":[4,7,31]
}

# (POST) Place Order
> http://localhost:8771/placeOrder
 {
    "orderId": 2,
    "name": "Nikita",
    "email": "nikki@gmail.com",
    "address": "Hom 25",
    "phone": 8934645457,
    "cost": 166,
    "menuItem": [
      3,
      34,
      5
    ],
    "status": "Pending"
  }

// Page5
# (GET) List of all orders wrt to user
> http://localhost:9120/orders
> http://localhost:9120/orders?email=nikki@gmail.com
# (PUT) Update Order details
> http://localhost:9120/updateOrder
{
	"_id":"6546469a60e7bd27e4078b1d"
}
# (DELETE) Delete Orders
> http://localhost:9120/deleteOrder
{
	"_id":"6546469a60e7bd27e4078b1d"

}