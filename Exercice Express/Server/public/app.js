const verification = document.querySelector('.verif')
const button = document.querySelector(".btn").addEventListener("click", (e) => {
  const mdp = document.querySelector(".mdp").value;
  const confmdp = document.querySelector(".confmdp").value;
   


  console.log(mdp, confmdp);

  if (mdp === "" || confmdp === "" || mdp != confmdp) {
    verification.textContent = "le mots de passe que vous avez saise sont identique"
    verification.style.color = "red"
    e.preventDefault();
  }
});
