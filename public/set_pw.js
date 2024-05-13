const form = document.getElementById('form')
const main = document.getElementById('main')
const re = document.getElementById('re-enter')

document.addEventListener('DOMContentLoaded',()=>{

    //form event listener added
    form.addEventListener('submit',(event)=>{
        // prevent default inline address in the submit button
        event.preventDefault();

        //verify if the passwords match
        if(main.value!==re.value){
            alert('password should match re-entered password')
            return;
        }
        
        // structure of the data object retrieving data from form 
        const data={
            stage:"password",
            password:main.value
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