document.querySelector("#grandparent").addEventListener('click', (e)=>{
    console.log("GRANDPARENT CLICKED");
    e.stopPropagation()

}, true); 


document.querySelector('#parent').addEventListener('click', (e) =>{
    console.log('PARENT CLICKED');
}, true);

document.querySelector('#child').addEventListener('click', (e) =>{
    console.log('CHILD CLICKED');
}, true);

// change true to false and it will convert to bubbling.
// in event cycle first caputring happens then bubbling by default.

// stopPropagation => bubbling and capturing are quite expensive functionality so this function stops the propapgation of event further