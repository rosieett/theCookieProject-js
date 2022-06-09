var categories = [{
        name: 'Tenderness',
        id: 'tenderness',
        description: 'Heirloom biodiesel quinoa mlkshk asymmetrical master cleanse affogato blog marfa chillwave semiotics gastropub',
        imgUrl: '',
        options: [{
                label: 'Crunchy',
                value: 'crunchy',
                imgUrl: '',
                selection: false
            },
            {
                label: 'Soft',
                value: 'soft',
                imgUrl: '',
                selection: false
            },
        ],
    },
    {
        name: 'Rise',
        id: 'rise',
        description: 'Offal waistcoat occupy humblebrag pinterest, pour-over food truck bitters.',
        imgUrl: '',
        options: [{
                label: 'Thick',
                value: 'thick',
                imgUrl: '',
                selection: false
            },
            {
                label: 'Thin',
                value: 'thin',
                imgUrl: '../src/assets/images/Cookies-10.png',
                selection: false
            },
        ],
    },
    {
        name: 'Texture',
        id: 'texture',
        description: 'Banjo flannel pour-over fixie twee humblebrag.',
        imgUrl: '',
        options: [{
                label: 'Fudgy',
                value: 'fudgy',
                imgUrl: '',
                selection: false
            },
            {
                label: 'Cakey',
                value: 'cakey',
                imgUrl: '',
                selection: false
            },
        ],
    },
    {
        name: 'Chocolate',
        id: 'chocolate',
        description: 'Mixtape edison bulb tattooed blog, brunch seitan live-edge plaid forage',
        imgUrl: '',
        options: [{
                label: 'Small Chunks',
                value: 'small',
                imgUrl: '',
                selection: false
            },
            {
                label: 'Large Chunks',
                value: 'large',
                imgUrl: '',
                selection: false
            },
            {
                label: 'Swirled In',
                value: 'swirled',
                imgUrl: '',
                selection: false
            },
        ],
    },
    {
        name: 'Flavor',
        id: 'flavor',
        description: 'Sartorial single-origin coffee VHS green juice salvia.',
        imgUrl: '',
        options: [{
                label: 'Dark, toffee',
                value: 'dark',
                imgUrl: '',
                selection: false
            },
            {
                label: 'Light, milky',
                value: 'light',
                imgUrl: '',
                selection: true
            },
        ],
    },
]

var main = document.getElementById('main');


function displayContent() {
    for (let i = 0; i < categories.length; i++) {
        // console.log(`Name: ${categories[i].name}`);

        var listOfNames = categories[i].name;
        var listOfDescriptions = categories[i].description;
        var listOfOptions = categories[i].options;
        // console.log(listOfOptions

        nameDiv = `<h3>${listOfNames}</h3>`
        descriptionDiv = `<h5>${listOfDescriptions}</h5>`

        main.innerHTML += nameDiv
        main.innerHTML += descriptionDiv

        for (let j = 0; j < listOfOptions.length; j++) {

            var listofLabels = listOfOptions[j].label;
            var idofLabels = listOfOptions[j].value;
            // console.log(listofLabels)
            optionsButton = `<button id="myBtn">${listofLabels}</button>`
            main.innerHTML += optionsButton

        }

    }

    console.log('working')
}

displayContent();

// var selectedButton = document.getElementById('myBtn');
// selectedButton.addEventListener('click', displayContent)
// console.log(selectedButton)







// let listOfOptions = categories[1].options[0];
// console.log(listOfOptions)
// for (let i = 0; i < listOfOptions.length; i++) {
//     console.log(listOfOptions[i])
// }

// function displayDescription() {
//     for (let i = 0; i < categories.length; i++) {
//         console.log(`Description: ${categories[i].description}`)
//     }
// }

// function displayOptions() {
//     for (let i = 0; i < categories.length; i++) {

//         optionList = categories[i]['options'];

//         for (let j = 0; j < optionList.length; j++) {
//             console.log(`Option Labels: ${optionList[j].label}`)
//         }
//     }
// }

// var displayNamesButton = document.getElementById('names');
// displayNamesButton.addEventListener('click', displayNames);

// var displayDescriptionsButton = document.getElementById('descriptions');
// displayDescriptionsButton.addEventListener('click', displayDescription);

// var displayOptionsButton = document.getElementById('options');
// displayOptionsButton.addEventListener('click', displayOptions);

// displayDescription();
// displayOptions();