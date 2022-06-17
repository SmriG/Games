document.querySelector("#grandparent").addEventListener('click', ()=>{
    console.log("GRANDPARENT CLICKED");
}, false); // bubbling


document.querySelector('#parent').addEventListener('click', () =>{
    console.log('PARENT CLICKED')
}, false);// bubbling

document.querySelector('#child').addEventListener('click', () =>{
    console.log('CHILD CLICKED')
}, false)// bubbling

// change true to false and it will convert to bubbling.
// in event cycle first caputring happens then bubbling by default.