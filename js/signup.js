import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "./firebase.js";



const signupHandler = async () => {



    try {



        // GET FILEDS
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const selection = document.getElementById("selection");
        const age = document.getElementById("age");



        // CUNDITIONS
        if (!name.value) {
            alert("Invalid Name!");
            return
        } else if (!email.value) {
            alert("Invalid Email!");
            return
        } else if (!password.value) {
            alert("Invalid Password!");
            return
        } else if (!selection.value) {
            alert("select gender!");
            return
        } else if (!email.value) {
            alert("Invalid Email!");
            return
        } else if (!age.value) {
            alert("Invalid Age!");
            return
        }



        // CREATE USER DATA IN db
        const userOjb = {
            name: name.value,
            email: email.value,
            gender: selection.value,
            age: age.value
        };

        // user Signup
        const creatUser = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );


        const uid = creatUser.user.uid


        const userRespons = setDoc(doc(db, "users", uid), userOjb);
        alert("SignUp Successfully!");
        window.location.href = "../pages/signin.html"

    } catch (error) {
        alert(error.message);
    }


};


window.signupHandler = signupHandler