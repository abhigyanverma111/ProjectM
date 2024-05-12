const form = document.getElementById('form')

document.addEventListener('DOMContentLoaded',()=>{

    //form event listener added
    form.addEventListener('submit',(event)=>{
        // prevent default inline address in the submit button
        event.preventDefault();
        
        // structure of the data object retrieving data from form 
        const data = {
            email:document.getElementById("email").value,
            username:document.getElementById("username").value
        }
        console.log(data)
        // data object created

        //fetch api makes a POST request using the data object
        // insert the server address here 
        fetch('http://localhost:4000/api/',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(data)
        })
    })
})