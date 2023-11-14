// DEV30 - PROJECT: Meal Maker

// step 1 -  meal object
let menu = {

  // step 2 - add empty courses object
  courses: {

    // Step 3 - Create three properties
    appetizers: [],
    mains: [],
    deserts: []
  },

  //Step 4 - Inside the menu object, we are going to create a method 

  addDishToCourse: function(courseName, dishName, dishPrice)

  //Step 5 - The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.

  { let dish = {
    name: dishName,
    price: dishPrice
    }


    if (courseName === 'appetizers') {
      menu.courses.appetizers.push(dish);
    } 
    if (courseName === 'mains') {
      menu.courses.mains.push(dish);
    }
    if (courseName === 'deserts') {
      menu.courses.deserts.push(dish);
    }

  },
  //Step 6 - get a random dish from a course on the menu
  getRandomDishFromCourse: function (courseName) {

    // Retrieve the array of the given course’s dishes from the menu‘s courses object and store in a variable called dishes.
    let randomDish = 0;
    let dishes;

    if (courseName === 'appetizers') {
       dishes =   menu.courses.appetizers;
    } 
    if (courseName === 'mains') {
       dishes =   menu.courses.mains;
    }
    if (courseName === 'deserts') {
       dishes =  menu.courses.deserts;

    }
    // Generate a random index based on length of array
    randomDish = Math.floor(Math.random() * dishes.length);

    //Return the dish 
    return dishes[randomDish];
    
  },

  // Step 8  - create a function which will automatically generate a three-course meal for us.

  generateRandomMeal: function () {

    
    let appetizer = menu.getRandomDishFromCourse('appetizers')
    let main = menu.getRandomDishFromCourse('mains')
    let desert = menu.getRandomDishFromCourse('deserts')
   
    let totalPrice = appetizer.price + main.price + desert.price;
    let order = appetizer.name + ' --- ' + main.name + ' --- ' + desert.name + ': Total Price: ' + totalPrice;
    return order;
    
  }
}

//Step 9 - Now that we’ve finished our menu, object, let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).

menu.addDishToCourse('appetizers', 'Chicken Soup', 5.99);
menu.addDishToCourse('appetizers', 'Tomato Soup', 4.99);
menu.addDishToCourse('appetizers', 'Prawn coctail', 6.99);

menu.addDishToCourse('mains', 'Lasagne', 8.99);
menu.addDishToCourse('mains', 'Pizza', 9.99);
menu.addDishToCourse('mains', 'Burger & Chips', 5.99);
menu.addDishToCourse('mains', 'All-day Breakfast', 5.99);
menu.addDishToCourse('mains', 'Curry', 7.99);

menu.addDishToCourse('deserts', 'Cheese', 4.99);
menu.addDishToCourse('deserts', 'Gelato', 4.99);
menu.addDishToCourse('deserts', 'Banoffee Pie', 4.99);
menu.addDishToCourse('deserts', 'Cheesecake', 4.99);


let meal = menu.generateRandomMeal();

console.log(meal);
