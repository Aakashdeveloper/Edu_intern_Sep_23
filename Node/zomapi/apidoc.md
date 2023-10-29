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
# (GET) Menu of Selected Restaurant

// Page4
# (GET) Details of menu selected
# (POST) Place Order

// Page5
# (GET) List of all orders wrt to user
# (PUT) Update Order details
# (DELETE) Delete Orders