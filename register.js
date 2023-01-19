// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYH6QBwGZEwt88OTLWh3Z9yP4S44c7iGU",
  authDomain: "almostdone-66212.firebaseapp.com",
  projectId: "almostdone-66212",
  storageBucket: "almostdone-66212.appspot.com",
  messagingSenderId: "722717516267",
  appId: "1:722717516267:web:6d03c2f782032edfe139ae"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set, child, get, update, remove}
from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const db = getDatabase();
const name = document.getElementById('nameIp');
const phone = document.getElementById('phoneIp');
const email = document.getElementById('emailIp');
const username = document.getElementById('userName');
const pass = document.getElementById('passcode');
const passcf = document.getElementById('cfPasscode');
const submit = document.getElementById('signUpbtn');
const vkiu = document.getElementById('vkiuQ');

function isEmptyOrSpace(str) {
            return str === null || str.match(/^ *$/) !== null;  
        }
        function Validation(){
            let nameregex = /^[a-zA-Z\s]+$/;
            let userregex = /^[a-zA-Z0-9]{5,}$/;
            let phoneregex = /^[0-9]+$/;
            let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
            let ckiu = /có/;
            
            
            if(isEmptyOrSpace(name.value) ||isEmptyOrSpace(vkiu.value) || isEmptyOrSpace(email.value)||
            isEmptyOrSpace(username.value)|| isEmptyOrSpace(pass.value))
            {
                alert("ghi hết zô coi");
                return false;
            }
        
        
            
            if(!nameregex.test(name.value)){
                alert("tên");
                return false;
            }
    
            if(!emailregex.test(email.value)){
                alert("mail");
                return false;
            }
            
            // if(!phoneregex.test(phone.value)){
            //     alert("Enter a valid phone number");
            //     return false;
            // }

            // if(!userregex.test(username.value)){
            //     alert("-user name can only be alphanumeric \n-username must aleast 5 characters \n-username can not contain space");
            //     return false;
            // }
            if(!ckiu.test(username.value)){
                alert("Súc vật")
                return false;
            }
            // if(!pass.value.match(passcf.value)){
            //     alert("Must be the same password");
            //     return false;
            // }
            
                return true;
            }
            

        function RegisterUser () {
            if(!Validation()){
                return;
            };
            const dbRef = ref(db);
            get(child(dbRef, "UserList/" + username.value)).then((snapshot)=> {
                if(snapshot.exists()){
                    alert("bình chọn 1 lần thôi ck iu ơi");
                }
                else{
                    set(ref(db,"UserList/" + username.value),
                    {
                        fullname: name.value,
                        email: email.value,
                        // phone: phone.value,
                        username: username.value,
                        password: pass.value,
                        vkiu: vkiu.value,
                    })
                    .then(()=> {
                        alert("cãm ơn ck iu");
                    })
                    .catch((error)=> {
                        alert("error" + error);
                    } )
                }
            });
        }
        // function encPass(){
        //     var passEnc = CryptoJS.AES.encrypt(pass.value, pass.value);
        //     return passEnc.toString();
        // }

        submit.addEventListener('click', RegisterUser);