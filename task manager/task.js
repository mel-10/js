document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () =>{
        const task = document.querySelector('#task').value;
        console.log(task);   
    }
});