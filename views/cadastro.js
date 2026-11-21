async function cadastrar() {

 const nome = nomeInput.value;
 const email = emailInput.value;
 const senha = senhaInput.value;

 const cred = await createUserWithEmailAndPassword(
   auth,
   email,
   senha
 );

 await setDoc(
   doc(db, "usuarios", cred.user.uid),
   {
      uid: cred.user.uid,
      nome,
      email,
      perfil: "user"
   }
 );
}