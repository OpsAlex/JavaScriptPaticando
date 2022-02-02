function createCalculator () {

    return {
        
        display: document.querySelector('.display'),
        
        
        
        start() {
            alert('Hi, start');
        },
    };
}

const calculator = createCalculator();

calculator.inicia();