console.log("I'm at home.")

const modalsss = () => {
      const num = Math.random() * 10;
      console.log(num);
      if (num < 5) {
            alert('We are arranging a picnic');
      }
}

const askSomething = () => {
      const decision = confirm('Are you coming Picnic?');
      console.log(decision);
      if (decision === true) {
            alert('dst. 500 tk Bkash kor.');
      }
      else {
            alert('DGM!!! Dure Giya Mor!');
      }
}

const getInfo = () => {
      const name = prompt('Tell me your name.')
      console.log(name);
      if (!!name) {
            console.log('Welcome here', name);
      }
}



