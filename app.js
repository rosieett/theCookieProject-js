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
                imgUrl: '../src/assets/images/categorys-10.png',
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

        var names = categories[i].name;
        var descriptions = categories[i].description;
        var choices = categories[i].options;

        //div that holds each category
        var category = document.createElement('div');
        main.appendChild(category)
        category.classList.add('category');

        //name within the category div
        var nameText = document.createElement('h3');
        nameText.innerHTML = names;
        category.appendChild(nameText);
        nameText.classList.add('category-name')

        //description below the name
        var descriptionText = document.createElement('h4');
        descriptionText.innerHTML = descriptions;
        category.appendChild(descriptionText)
        descriptionText.classList.add('category-description')


        //div that holds the option buttons
        var selection = document.createElement('div');
        category.appendChild(selection);
        selection.classList.add('category-selection');

        function buttons() {
            for (let j = 0; j < choices.length; j++) {
                var listOfLabels = choices[j].label;

                //buttons
                var labelButton = document.createElement('button');
                labelButton.innerHTML = listOfLabels;
                selection.appendChild(labelButton);
                labelButton.classList.add('category-button')
            }
        }
        buttons();
    }
}



displayContent();
// buttons();

// var selectedButton = document.getElementById('myBtn');
// selectedButton.addEventListener('click', displayContent)
// console.log(selectedButton)







// let options = categories[1].options[0];
// console.log(options)
// for (let i = 0; i < options.length; i++) {
//     console.log(options[i])
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