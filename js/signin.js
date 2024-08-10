import { auth, signInWithEmailAndPassword } from "./firebase.js";


const signinhandler = async () => {

    try {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        const respons = await signInWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );
        console.log(respons);

        localStorage.setItem("user", respons.user.uid);
        window.location.replace("../index.html")
        

    } catch (error) {
        alert(error.message);
    }
};


window.signinhandler = signinhandler