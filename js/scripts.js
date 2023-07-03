const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            awesome: true,
            swag: false,
            figo: true,
            activeIndex: 0,
            studentsNumber: 35
        }
    },
    methods: {
        qualcosa() {
            if (this.awesome) {
                console.log('Vue is awesome!');
            }
            else if (this.swag || this.figo) {
                console.log('Vue is swag o figo!');
            }
            else {
                console.log('Oh no 😢');
            }
        },
        altraFunz() {
            return false;
        },
        checkIndex() {
            return (this.activeIndex == 0 ? 'active' : '');
        }
    }
}).mount('#app');



// (condizione) ? valoreUno : valoreDue

// if (condizione) {
//     return valoreUno;
// }
// else {
//     return valoreDue;
// }


//     if (this.awesome) {
//         return 'text-red';
//     }
//     else {
//         return '';
//     }

// this.awesome ? 'text-red' : ''