var categories = [{
        name: 'Tenderness',
        id: 'tenderness',
        description: 'Heirloom biodiesel quinoa mlkshk asymmetrical master cleanse affogato blog marfa chillwave semiotics gastropub',
        imgUrl: '',
        option: [{
                label: 'Crunchy',
                value: 'crunchy',
                imgUrl: '',
                completed: false
            },
            {
                label: 'Soft',
                value: 'soft',
                imgUrl: '',
                completed: false
            },
        ],
    },
    {
        name: 'Rise',
        id: 'rise',
        description: 'Offal waistcoat occupy humblebrag pinterest, pour-over food truck bitters.',
        imgUrl: '',
        option: [{
                label: 'Thick',
                value: 'thick',
                imgUrl: '',
                completed: false
            },
            {
                label: 'Thin',
                value: 'thin',
                imgUrl: '../src/assets/images/categorys-10.png',
                completed: false
            },
        ],
    },
    {
        name: 'Texture',
        id: 'texture',
        description: 'Banjo flannel pour-over fixie twee humblebrag.',
        imgUrl: '',
        option: [{
                label: 'Fudgy',
                value: 'fudgy',
                imgUrl: '',
                completed: false
            },
            {
                label: 'Cakey',
                value: 'cakey',
                imgUrl: '',
                completed: false
            },
        ],
    },
    {
        name: 'Chocolate',
        id: 'chocolate',
        description: 'Mixtape edison bulb tattooed blog, brunch seitan live-edge plaid forage',
        imgUrl: '',
        option: [{
                label: 'Small Chunks',
                value: 'small',
                imgUrl: '',
                completed: false
            },
            {
                label: 'Large Chunks',
                value: 'large',
                imgUrl: '',
                completed: false
            },
            {
                label: 'Swirled In',
                value: 'swirled',
                imgUrl: '',
                completed: false
            },
        ],
    },
    {
        name: 'Flavor',
        id: 'flavor',
        description: 'Sartorial single-origin coffee VHS green juice salvia.',
        imgUrl: '',
        option: [{
                label: 'Dark, toffee',
                value: 'dark',
                imgUrl: '',
                completed: false
            },
            {
                label: 'Light, milky',
                value: 'light',
                imgUrl: '',
                completed: false
            },
        ],
    }
]

var main = document.getElementById('main');
var row = document.getElementById('selectionRow')


function displayContent() {

    for (let i = 0; i < categories.length; i++) {

        var names = categories[i].name;
        var descriptions = categories[i].description;
        var options = categories[i].option;

        //div that holds each category
        var category = document.createElement('div');
        row.appendChild(category)
        category.classList.add('category');
        category.classList.add('col-md-4')

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
        var optionButtons = document.createElement('div');
        category.appendChild(optionButtons);
        optionButtons.classList.add('category-selection');

        //nested loop for option buttons
        for (let j = 0; j < options.length; j++) {

            var labels = options[j].label;
            var values = options[j].value;
            // var selections = options[j].selection;
            // console.log()

            //buttons
            var labelButton = document.createElement('button');
            labelButton.innerHTML = labels;
            optionButtons.appendChild(labelButton);
            labelButton.classList.add('category-button');
            labelButton.addEventListener('click', toggle);
            // labelButton.id = j;

        }
    };

}

function toggle() {
    if (options[j].completed === true) {
        labelButton.innerText = '[X] ' + options[j].label;
    } else {
        labelButton.innerText = '[ ] ' + options[j].label;
    }
    // var position = event.currentTarget.id;
}

toggle();
displayContent();


// function toggle(event) {
//     var position = event.currentTarget.id;
//     console.log(position, selections)
//     // position = selections;
//     // console.log(position)

//     // position = true;
//     // console.log(position)
//     event.currentTarget.classList.add('active-button');

// }