var categories = [{
        name: 'Tenderness',
        id: 'tenderness',
        description: 'Heirloom biodiesel quinoa mlkshk asymmetrical master cleanse affogato blog marfa chillwave semiotics gastropub',
        imgUrl: '',
        option: [{
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
        option: [{
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
        option: [{
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
        option: [{
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
        option: [{
                label: 'Dark, toffee',
                value: 'dark',
                imgUrl: '',
                selection: false
            },
            {
                label: 'Light, milky',
                value: 'light',
                imgUrl: '',
                selection: false
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
            var selections = options[j].selection;
            // console.log()

            //buttons
            var labelButton = document.createElement('button');
            labelButton.innerHTML = labels;
            optionButtons.appendChild(labelButton);
            labelButton.classList.add('category-button');
            labelButton.addEventListener('click', toggle);

            labelButton.id = values;
        }

    }
}


function toggle(event) {
    var selectedButton = event.currentTarget;
    var choicefromButton = event.currentTarget.id;
    console.log(choicefromButton)
    var buttonActive = selectedButton.classList.contains('active-button');
    var choices = '';
    if (buttonActive === false) {
        selectedButton.classList.add('active-button');
        choices += choicefromButton;
        console.log('choices array: ' + choices)
    } else {
        selectedButton.classList.remove('active-button')
    }


}


//also works:
// function toggle(event) {
//     event.currentTarget.classList.toggle('active-button');
// }

displayContent()