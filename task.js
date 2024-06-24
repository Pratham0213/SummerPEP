//Question 1:
cardData = [
  {
    suit: 'heart',
    value: 7
  },
  {
    suit: 'club',
    value: 8
  },
  {
    suit: 'club',
    value: 2
  },
  {
    suit: 'diamond',
    value: 2
  },
  {
    suit: 'diamond',
    value: 5
  },
  {
    suit: 'club',
    value: 10
  },
]


function findCard(suit, value) {
  
}
/*
 * 1. complete the above function, it should return true /false if card is present/absent

 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
 *
 *
 *
 */
/**
 * 2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
 * 
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans =>
 * {
 *    heart:1,
 *    club:3,
 *    diamond:2,
 * }
 * 
 * 4. write a function which returns an object with the suits as its key and its available values as value
 * ans =>
 * {
 *    heart:[7],
 *    club:[8,2,10],
 *    diamond:[2,5],
 * }
 * 
 */

Question 2:

const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];
//Facebook profile lookup
function profileLookup(name, property) {
  //complete the code
}
// Task => complete the above function such that when it is called with 
// name and property, then it should return its value
// ex
// 1. if we pass Pritesh and number, then it should return his number
// 2. if name is not in the list, return "person does not exist"
// 3. if property is not present then return "no such property

