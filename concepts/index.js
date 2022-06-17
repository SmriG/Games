document.querySelector("#grandparent").addEventListener('click', (e)=>{
    console.log("GRANDPARENT CLICKED");

}, false); 


document.querySelector('#parent').addEventListener('click', (e) =>{
    console.log('PARENT CLICKED');
    e.stopPropagation()

}, false);

document.querySelector('#child').addEventListener('click', (e) =>{
    console.log('CHILD CLICKED');
}, true);

// change true to false and it will convert to bubbling.
// in event cycle first caputring happens then bubbling by default.

// stopPropagation => bubbling and capturing are quite expensive functionality so this function stops the propapgation of event further

// stopPropagation will prevent any parent handlers from being executed stopImmediatePropagation will prevent any parent handlers and also any other handlers from executing

const list = document.querySelector("#name_list ul");
list.addEventListener('click', (e) => {
    if(e.target.className=="name"){
    const item = e.target;
    list.removeChild(item);

    }
})
