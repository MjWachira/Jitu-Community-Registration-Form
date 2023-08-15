if(window.location.pathname == '/index.html'){
    const registration_form = document.querySelector('.form')
    const fullname = document.querySelector('#fullname')
    const email = document.querySelector('#email')
    const cohortNumber = document.querySelector('#cohortNumber') 
    const graduationDate = document.querySelector('#graduationDate') 
    const reg_notification= document.querySelector('#notifications-reg') 
    // const graduationDate="2023/7/25"


    let profileurl = ''
    const regError = document.querySelector('.regError')

    
    
    registration_form.addEventListener('submit', (e)=>{
        e.preventDefault();
             
        if(fullname.value == '' || email.value == '' || cohortNumber.value == '' || graduationDate.value == ''  ){
            reg_notification.textContent = "fill all fields"
            setTimeout(function() {
                reg_notification.textContent = ""
            }, 3000);
            return
        }
        location.reload();
        console.log(profileurl);
       let user = fullname.value !== '' && email.value !== '' && cohortNumber.value !== '' && graduationDate.value !== ''
        let newUser = {

            fname: fullname.value,
            email: email.value,
            corhort: cohortNumber.value,
            graduationdate: graduationDate.value
        
          };
        //   console.log(newUser)
        // if(user){
        //     const promise = new Promise ((resolve , reject)=>{
        //         fetch('http://localhost:4200/register',{
        //             headers:{
        //                 'Accept': 'application/json',
        //                 'Content-type': 'application/json'
        //             },
        //             method: "POST",
        //             body:JSON.stringify({
        //                 newUser
        //             })
        //         }).then(res=>(res.json())).then(data=>{
        //             console.log(data);
        //             window.location.href = '/index.html'; 
        //             // regError.innerHTML = data[0]?.message ?? data?.message
        //             resolve(data)
        //         }).catch(error =>{
        //             // console.log(error);
        //             reject(error)
        //         })
        //     })
        // }


      const register =async () => {
         const res = await fetch("http://localhost:4200/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
        //console.log(res);
        }
        register()
        


  // .then((res) => {
    
  //       console.log(res);
    
  //       // window.location.href = "/success.html";
    
  //     });
    })
    const dataDisplayDiv = document.getElementById("dataDisplay");

    fetch("http://localhost:4200/register")
      .then(response => {
        if (!response.ok) {
          throw new Error("No Response");
        }
        return response.json();
      })
      .then(data => {
        const usersHTML = data.user.map(user => `
      <div class="users-div">
        <div class="user">
        <h2>${user.fname}</h2>
        <p>Email: ${user.email}</p>
        <p>Cohort: ${user.corhort}</p>
        <p>Graduation Date: ${user.graduationdate}</p>
        </div>
        <div class="buttons">
        <button>Edit</button>
        <button>Delete</button>
        </div>
      </div>
    `).join("");
    // Render the user displays in the div
    dataDisplayDiv.innerHTML = usersHTML;
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });
    

}


