// PARAMETRER LA FUNCTION QUI RENVOIE LE NBR DE MINTUES CHOISI DANS LE INPUT
function getInputValue() {
   let choice = document.getElementById('choice').value;
   console.log("choice : " + choice);

   // SI LE CHOIX N'EST PAS UN NOMBRE
   if (isNaN(choice)) {
      alert('Entrez un nombre pour activer le compte à rebours !')
   } else {
      let StartMinutes = choice;
      // ON VIDE L'INPUT
      this.choice.value = ('');

      // la valeur du compte à rebours par defaut = 1 au depart
      // let StartMinutes = 1;

      let time = StartMinutes * 60
      const countDownEl = document.getElementById('countdown');

      // ON APPEL LA FUNC CHAQUE 1 SECONDE
      setInterval(updateCountdown, 1000);

      // IL FAUT CREER UN BOUTUN POUR RECOMMENCER ET STOPPER LE COMPTE A REBOURS PAR LA SUITE
      // clearInterval(updateCountdown);

      function updateCountdown() {
         // DANS LE CAS OU SrartMinutes = 90SECONDES
         // LE Math.FLOOR VA ARRONDIR A LA VAL INFERIEUR DANS CE CAS MINUTES = 1 ET NON 1.5
         const minutes = Math.floor(time / 60);
         // ON CALCULE LE MODULO POUR AJOUTER LES VAL NON INCLUSE DANS LA DIVISION DE Math.FLOOR
         let seconds = time % 60;

         seconds = seconds < 10 ? '0' + seconds : seconds;

         countDownEl.innerHTML = `${minutes} : ${seconds}`;

         if (time > 0) {
            // LA FUNC EST APPELEE CHAQUE SECONDE DONC ON RETIRE 1 CHAQUE SECONDE
            // (time--) === (time-= 1) === (time = time -1)
            time--;
            console.log("time = " + time);
         } else {
            countDownEl.innerHTML = "Time's Over !";
         }
      };
   };
};