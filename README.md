This Swiggy Clone application is customized for Warangal and shows food items and restaurants relevant to this location.
1 - Navigation Component
2 - Whats on your mind
3 - Top restaurants
4 - All restaurants
5 - Places
6 - Cuisines
8 - Search
9 - Cart
10 - Favorites
11 - SignIn
12 - Footer
13 - Food Details - In detail info Whats on your mind Component
14 - Restaurant Menus - In detail info of All restaurants Component

Services used are :

-> About the Navigation Component
    "Navigation Component includes the search functionality ,SignIn functionality , Cart functionality and Favorites functionality"
    > Search Functionality : It will enable the users to search an item - results obtained are based on the search
        For ease of use the item to be searched is converted to lower case to give results better.
    > Cart Functionality : The user can add to cart from 2 components  
        1 - From Whats on Your Mind component
        2 - Restaurant Menus component
        The cart items are being stored in local storage and displayed when clicked on cart button
    > Favorites Functionality : It is same as the cart one. One can add items into favorites from 
        Whats on Your Mind component and Restaurant Menus component
-> Whats on you mind Component
    > Allows users to browse through images of popular items.
    > On clicking an item’s image, it opens the Food Details Component, where users can view more in-depth information about the dish.
-> Top Restaurants Component
    > This will recommend some restaurants from the place warangal.
    > Includes the restaurant name , location and etc.
-> All Restaurants Component
    > Apart from top restaurants all the restaurants are displayed.
    > The first 2 restaurants are clickable and when clicked will navigate to restaurant menus component.
    > Has the cart and favorites buttons on the items
    > Includes options to add specific restaurant dishes to the cart or favorites directly, offering convenience to users who find items they want to save or purchase later.
-> Restaurant Menus Component
    > 2 Restaurant menus with each of 2 items are displayed.
    > Detailed description of menu and ratings
-> Food Details Component
    > All the items from Whats on Your mind component will have their food details.
    > Short description of item along with price is mentioned.
-> Places Component
    > Helps users refine their search or choose restaurants and food items based on specific locations.
-> Cuisines Component
    > Lists available cuisines, allowing users to filter food items based on their preferences.
    > Enhances user experience by enabling targeted searches for food items based on specific cuisines like Indian, Chinese, Continental, etc.
-> Search Component
    > Allows users to search for specific food items or restaurants.
    > Search queries are converted to lowercase to improve search accuracy and ensure that case differences do not affect results.
->SignIn Component
    > Manages user authentication.
    > Allows users to sign in to access personalized features like cart and favorites.
-> Footer Component
    > Provides links to additional information, contact details, and social media.
    > Enhances navigation and offers users easy access to frequently needed information.