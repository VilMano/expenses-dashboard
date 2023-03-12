const categories = document.querySelector('#categories');

console.log(`Data: ${data.categories()}`)

for(let i = 0; i < data.categories().length; i++){
    categories.innerHTML += `<div class="category ${data.categories()[i]}">
    ${data.categories()[i]}                    
    </div>`;
}

