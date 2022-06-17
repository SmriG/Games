document.querySelector("#grandparent").addEventListener('click', ()=>{
    console.log("GRANDPARENT CLICKED");
}, true); // capturing


document.querySelector('#parent').addEventListener('click', () =>{
    console.log('PARENT CLICKED')
}, true);// capturing

document.querySelector('#child').addEventListener('click', () =>{
    console.log('CHILD CLICKED')
}, true)// capturing

// change true to false and it will convert to bubbling.
// in event cycle first caputring happens then bubbling by default.