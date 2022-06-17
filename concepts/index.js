document.querySelector("#grandparent").addEventListener('click', (e)=>{
    console.log("GRANDPARENT CLICKED");

}, false); 


document.querySelector('#parent').addEventListener('click', (e) =>{
    console.log('PARENT CLICKED');
}, false);

document.querySelector('#child').addEventListener('click', (e) =>{
    console.log('CHILD CLICKED');
    e.stopPropagation()
}, false);

// change true to false and it will convert to bubbling.
// in event cycle first caputring happens then bubbling by default.

// stopPropagation => bubbling and capturing are quite expensive functionality so this function stops the propapgation of event further