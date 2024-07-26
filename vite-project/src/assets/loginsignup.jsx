import { useState} from "react";

function loginSignup(){
    const[text, useText ]= useState(0);

    return(

<>
   
                <form class="padding 15px">
                    <input type="text" name="username" placeholder="Username" id="signupUser"></input>
                    <input type="password" name="password" placeholder="Password" id="signupPass"></input>
                    <input type="submit" value="Sign Up" id="signupBtn"></input>
                    </form>

                <p>Already have an account?</p>
                <a href="/login">Log in!</a>
</>
        
    )

}