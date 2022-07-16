var categories = [{
        name: 'Tenderness',
        id: 'tenderness',
        description: 'Heirloom biodiesel quinoa mlkshk asymmetrical master cleanse affogato blog marfa chillwave semiotics gastropub',
        imgUrl: '',
        option: [{
                label: 'Crispy',
                value: 'crispy',
                imgUrl: 'cookies/cookies_crispy.png'
            },
            {
                label: 'Chewy',
                value: 'chewy',
                imgUrl: 'cookies/cookies_chewy.png',
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
                imgUrl: 'cookies/cookies_thick.png',
            },
            {
                label: 'Thin',
                value: 'thin',
                imgUrl: 'cookies/cookies_thin.png'
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
                imgUrl: 'cookies/cookies_fudgy.png'
            },
            {
                label: 'Cakey',
                value: 'cakey',
                imgUrl: 'cookies/cookies_cakey.png'
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
                imgUrl: 'cookies/cookies_chips.png'
            },
            {
                label: 'Large Chunks',
                value: 'large',
                imgUrl: 'cookies/cookies_chunky.png'
            },
            {
                label: 'Swirled In',
                value: 'swirled',
                imgUrl: 'cookies/cookies_swirl.png'
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
                imgUrl: 'cookies/cookies_dark.png'
            },
            {
                label: 'Light, milky',
                value: 'light',
                imgUrl: 'cookies/cookies_light.png'
            },
        ],
    }
]

var main = document.getElementById('main');
var row = document.getElementById('selectionRow')
var choices = [];


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
            var images = options[j].imgUrl;

            // console.log()

            //buttons
            var labelButton = document.createElement('button');
            labelButton.innerHTML = labels;
            optionButtons.appendChild(labelButton);
            labelButton.classList.add('category-button');
            labelButton.addEventListener('click', toggle);
            labelButton.id = labels;

            var imageDiv = document.createElement('div')
            var content = imageDiv.innerHTML = '"' + images + '"';
            var size = 'width="100%" height="125"'
            content = '<img src=' + content + size + '>';
            imageDiv.innerHTML = content;
            labelButton.appendChild(imageDiv)
        }


        console.log(imageDiv)

    }
}


function toggle(event) {

    //creating a variable from what's currently clicked
    var selectedButton = event.currentTarget;

    //add a class to the buttons that are selected
    var buttonActive = selectedButton.classList.contains('active-button');

    var showSelected = document.getElementById('list-content');

    //if a button isn't active
    if (buttonActive === false) {

        //add the active button class
        selectedButton.classList.add('active-button');

        //push the id of the selected button to choices
        choices.push(selectedButton.id);


        //if it's been selected
    } else {
        //remove the class
        selectedButton.classList.remove('active-button')

        //count how many are currently selected
        var idx = choices.indexOf(selectedButton.id)

        if (idx > -1) { // only splice array when item is found
            choices.splice(idx, 1); // 2nd parameter means remove one item only
        }

        console.log(idx)
    }

    if (!showSelected) {
        console.log(showSelected)
        showSelected = document.createElement('p')
        showSelected.setAttribute("id", 'list-content')
        showSelected.innerHTML = choices;
        main.append(showSelected)
    } else {
        showSelected.innerHTML = choices;
    }

    console.log(choices)

}


displayContent();