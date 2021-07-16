$().ready(function() {
    // validate the comment form when it is submitted
   

    // validate signup form on keyup and submit
    $("#commentForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
           
          
            email: {
                required: true,
                email: true
            },
            course: {
                required: true,
                minlength: 1
            },
            gender:{
                required:true
            }
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
          
            email: "Please enter a valid email address",
           
            course: "Please select at least 1 topics"
        }
    });
});

   




function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  formJSON.course = data.getAll('course');


 console.log(JSON.stringify(formJSON));
 alert("success")
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);