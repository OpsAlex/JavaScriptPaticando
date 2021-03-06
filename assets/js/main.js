function createCalculator () {

    return {
        
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        start() {
            this.clickbuttons();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.makeAccount();
                }
            });
        },

        makeAccount() {
          let account = this.display.value;
          
          try {
              account = eval(account);
              
              if(!account) {
                  alert('Conta Inválida!');
                  return;
              }

              this.display.value = String(account);
          }
          catch(e) {
            alert('Conta Inválida!');
            return;
          }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        clickbuttons() {
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')) {
                    this.makeAccount();
                }
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculator = createCalculator();

calculator.start();