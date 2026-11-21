async function login() {

 await signInWithEmailAndPassword(
    auth,
    email,
    senha
 );

 location.href = "index.html";
}