'use strict';

//object
var app = {
    title: 'Indecision App',
    subtitle: 'Place you live in the hands of a computer.',
    options: []
}; //end of app

//function
function getSubtitle(value) {
    if (value) {
        return value;
    } else {
        return undefined;
    }
} //end of function

var onFormSub = function onFormSub(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; //to clear the input
    }
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSub },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};
renderApp();
