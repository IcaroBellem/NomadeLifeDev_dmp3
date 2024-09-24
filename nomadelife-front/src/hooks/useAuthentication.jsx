import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, } from 'firebase/auth'
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(null)
   const [cancelled, setCancelled] = useState(false)

   const auth = getAuth()
   
   function checkIfIsCancelled() {
      if (cancelled) {
         return
      }
   }
      async function createUser(data) {
         checkIfIsCancelled();
         setLoading(true);
         setError("");
         try {
            const { user } = await createUserWithEmailAndPassword(
               auth,
               data.email,
               data.password
            );
            await updateProfile(user, { displayName: data.displayName });

            setLoading(false);
            return user;
         } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.inclue("Password")) {
               systemErrorMessage = "A senha precisa conter ao menos 6 caracteres";
            } else if (error.message.include("email-already")) {
               systemErrorMessage = "E-mail já cadastrado em nosso sistema";
            } else {
               systemErrorMessage = "Ocorreu um erro, Tente novamente mais tarde.";
            }
            setError(systemErrorMessage);
            setLoading(false);
            console.log("Usuário Criado com sucesso")
         }
      };
      const login = async (data) => {
         checkIfIsCancelled();
         setLoading(true);
         setError("");
         try {
         await signInWithEmailAndPassword(auth, data.email, data.password);
         } catch (error) {
            let systemErrorMessage;

            if (error.message.inclues("invalid-login-credentials")) {
               systemErrorMessage = "Este Usuário não tem registro em nossos sistemas";
            } else if (error.message.includes("wrong-password")) {
               systemErrorMessage = "Existe algum erro em suas credenciais de";
            } else {
               systemErrorMessage = "Ocorreu um erro, Tente novamente mais tarde.";
            }
            setLoading(false);
            setError(systemErrorMessage);
            console.log("Logado com sucesso")
         }
      }

      const logout = async () => {
         signOut(auth);
         console.log("Deslogado com sucesso")

         useEffect(() => {
            return () => {
               setCancelled(true);
            };
         });

         return { auth, createUser, error, loading, logout, login };
      };
   }

