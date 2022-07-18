var categories = [{
        question: 'What\'s your preferred cookie texture?',
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
        question: 'What\'s your preferred cookie height?',
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
        question: 'What\'s your preferred cookie consistency?',
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
        question: 'What\'s your preferred chocolate for your chocolate chip cookie?',
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
        question: 'What\'s your preferred cookie flavor?',
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

        var questions = categories[i].question;
        var descriptions = categories[i].description;
        var options = categories[i].option;

        //div that holds each category
        var category = document.createElement('div');
        row.appendChild(category)
        category.classList.add('category');
        category.classList.add('col-lg-3');
        // category.classList.add('col-md-4');

        //name within the category div
        var questionText = document.createElement('h3');
        questionText.innerHTML = questions;
        category.appendChild(questionText);
        questionText.classList.add('category-name')


        //description below the name
        // var descriptionText = document.createElement('h4');
        // descriptionText.innerHTML = descriptions;
        // category.appendChild(descriptionText)
        // descriptionText.classList.add('category-description')


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