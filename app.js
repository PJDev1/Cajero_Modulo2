//Usuarios
let users = [
    {
        nombre: "1",
        correo: "1",
        NIP: "1",
        saldo: 900
    },
    {
        nombre: "2",
        correo: "2",
        NIP: "2",
        saldo: 750
    },
    {
        nombre: "Ricardo Z Tapia Knight",
        correo: "ricardoztknight@devf.com",
        NIP: "8877",
        saldo: 100
    }
]
const headerOne = document.querySelector('.header') 
const headerTwo = document.querySelector('.header2')

const userInput = document.querySelector('#inpUser')
const btnEntrar = document.querySelector('#btnEntrar')
const userNIPInput = document.querySelector('#inpNIP')
const btnValidarNIP = document.querySelector('#intro')
const depositoInput = document.querySelector('#depositar')

const btnSaldo = document.querySelector('.saldo')
const btnRetirar = document.querySelector('.retirar')
const btnDepositar = document.querySelector('.depositar')
const btnRealizarDeposito = document.querySelector('#depositoBtn')

const userScreen = document.querySelector('.user__form')
const NIPScreen = document.querySelector('.user__form2')
const userForm3 = document.querySelector('.user__form3')
const newSaldo = document.querySelector('#newSaldo')
const warningMessage = document.querySelector('.mainScreen__Warning')
const menuScreen = document.querySelector('.secondScreen')
const welcomeMessage = document.querySelector('.secondScreen__message')
const userSaldoScreen = document.querySelector('.saldo-container')
const saldoMessageViewer = document.querySelector('.saldo-message')
const saldoMessage = document.querySelector('.data')
const saldoMessage2 = document.querySelector('.data2')
const depositarScreen = document.querySelector('.depositar-container')


function selectOptions(i){
    btnSaldo.addEventListener("click", function(){
        menuScreen.style.display = 'none'
        saldoMessageViewer.style.display = 'block'
        userSaldoScreen.style.display = 'block'
        saldoMessage.innerHTML = `$${users[i].saldo}.00`
    })
    btnDepositar.addEventListener("click", function(){
        menuScreen.style.display = 'none'
        depositarScreen.style.display = 'flex';
        btnRealizarDeposito.addEventListener("click", function(){
            if(!depositoInput.value){
                alert('El monto no puede ser cero. ')
            } else{
                let saldoUsuario = users[i].saldo
                saldoUsuario = saldoUsuario + Number(depositoInput.value)
                saldoMessageViewer.style.display = 'block'
                saldoMessageViewer.style.marginTop = '0px'
                saldoUsuario > 990 ? alert('No puedes superar $990.00 para esta cuenta.') : saldoMessage2.innerHTML = `Nuevo saldo: $${saldoUsuario}.00`
                return
            }
        })
    })
    btnRetirar.addEventListener("click", function(){
        menuScreen.style.display = 'none'
    })
}

function validarDatos(){
    if(!userInput.value){
        alert('Ingresar nombre o correo electronico')
    } else {
        let usuarioEncontrado = false
        for(let i = 0; i < users.length ; i++){
            if((users[i].nombre === userInput.value) || (users[i].correo === userInput.value)){
                usuarioEncontrado = true
                userScreen.style.display = 'none'
                NIPScreen.style.display = 'flex'
                warningMessage.style.marginTop = '250px'
                btnValidarNIP.addEventListener("click",function(){
                    if(!userNIPInput.value){
                        alert('Ingresa NIP')
                    } else if(users[i].NIP === userNIPInput.value) {
                        console.log(`NIP Valido para: ${users[i].nombre}`)
                        NIPScreen.style.display = 'none'
                        warningMessage.style.display = 'none'
                        headerOne.style.display = 'none'
                        headerTwo.style.display = 'flex'
                        menuScreen.style.display = 'block'
                        welcomeMessage.innerText = `Bienvenido ${users[i].nombre}`
                        selectOptions(i)
                        return   
                    } else {
                        alert('NIP Incorrecto')
                        return 
                    }
                })
            } 
        }
        if (!usuarioEncontrado){
            alert('Nombre o correo inválidos')
        }
    }
}

btnEntrar.addEventListener("click", validarDatos)