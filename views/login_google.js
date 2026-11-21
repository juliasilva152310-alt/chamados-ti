const provider = new GoogleAuthProvider();

async function loginGoogle() {

 const result = await signInWithPopup(
   auth,
   provider
 );

 const usuarioRef = doc(
     db,
     "usuarios",
     result.user.uid
 );

 const snap = await getDoc(usuarioRef);

 if(!snap.exists()) {

   await setDoc(usuarioRef,{
      uid: result.user.uid,
      nome: result.user.displayName,
      email: result.user.email,
      perfil: "user"
   });

 }

 location.href = "index.html";
}