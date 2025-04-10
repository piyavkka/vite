const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
const form = document.getElementById('userForm');

inputs.forEach((input) => {
    input.addEventListener('focus', (event) => {
        event.target.style.backgroundColor = '#dcffce';
        event.target.style.border = '2px solid #0c8e1e';
        event.target.style.transition = 'border-color 0.3s'
        console.log(`${event.target.id} получил фокус`);
    });

    input.addEventListener('blur', (event) => {
        const value = event.target.value.trim();

        if (value === '') {
            event.target.style.backgroundColor = '#ffcece';
            event.target.style.border = '2px solid red';
            event.target.style.transition = 'border-color 0.3s'

        } else {
            event.target.style.border = '';
            event.target.style.backgroundColor = '';
        }

        console.log(`${event.target.id} потерял фокус`);
    });

});

const myButton = document.getElementById('button')
myButton.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    alert(`Name: ${name}\nAge: ${age}\nThe ${event.target.id} was clicked`);

    form.reset();
});