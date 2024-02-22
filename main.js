bienvenida()
function bienvenida(){
  Swal.fire({
  title: 'Bienvenido a Rame ingrese su nombre: ',
  input: 'text',
  inputAttributes: {
  autocapitalize: 'off'
  },
  showCancelButton: false,
  confirmButtonText: 'Enviar',
  showLoaderOnConfirm: true
  }).then((result) => {
  if (result.isConfirmed) {
  console.log(result);
  localStorage.setItem("nombreC", result.value);
  Swal.fire({
  title: `Has ingresado los siguientes datos para tu compra: ${result.value}`,
  })
  }
  })}

fetch('productos.json')
.then((response) => response.json())
.then((data) => {
    console.log(data);
    const resultado = document.getElementById("resultado");
    data.forEach(valor => {
        let columna = document.createElement("div");
        columna.className = "container";
        let div_padre = document.createElement("div");
        div_padre.className = "imagenes";
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "texto3";
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card-body";
        let parrafo = document.createElement("p");
        div_hijo1.innerHTML = `${valor.nombre}`;
        let imagen = document.createElement("img");
        imagen.src = "img/" + valor.imagen;
        imagen.alt = valor.nombre;
        imagen.width = 200;
        imagen.className = "img";
        div_hijo2.appendChild(parrafo);
        div_hijo2.appendChild(imagen);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        columna.appendChild(div_padre);
        resultado.appendChild(columna);
    });
}) 

class Agregados {
  constructor(nombre, precio, id){
      this.nombre=nombre;
      this.precio=precio;
      this.id =id;
  }
}
const marco = new Agregados ("Marco", 4000, 1)
const vidrio = new Agregados ("Vidrio", 3000, 2)
const cancion = new Agregados ("Cancion", 2000, 3)
const texto = new Agregados("Texto", 1000, 4)
const envio = new Agregados ("Envio", 3000, 5)
const arrayAgregados = [ marco, vidrio, cancion, texto, envio]

localStorage.setItem ("arrayAgregados", JSON.stringify(arrayAgregados));
let arrayAgregadosLS = JSON.parse(localStorage.getItem("arrayAgregados"));
console.log (arrayAgregadosLS);

let carrito = JSON.parse(localStorage.getItem("carrito"))||[];

let BD = [];

const button = document.getElementById("formulario");

const form = document.getElementById(`${Agregados.id}`);

let x = [];

let Eliminados =[];

let cliente = [];

let correoC =[];

let nombreC =[];

let main = document.querySelector('.main-box');

let cart = document.querySelector('.carrito');

let modalContainer = document.querySelector('.modal-container');

let resultado = document.querySelector('.resultado');

localStorage.setItem ('BD', JSON.stringify(carrito))

localStorage.setItem ('Eliminados', JSON.stringify(x))

main.innerHTML = `<div class="texto">
    <p>A continuacion encontraras todo lo que podes agregarle a tu fotografia:</p>
    <br>
    <p>El precio inicial de la lamina es de $1000</p>
    <br>
    <p>Los productos que selecciones apareceran debajo del bonton TOTAL</p>
    </div>`
    main.style.display = "flex";
    modalContainer.innerHTML =`<p class="color">Productos seleccionados:</p>`
    mostrarCarrito();
    function crearCards() {
      arrayAgregados.forEach((Agregados) => {
        main.innerHTML += `     <div class="caja">
        <button id="${Agregados.id}" class="botones">
        <div class="card">
                                 <div>
                                      <h2> ${Agregados.nombre} </h2>
                                  </div>
                                  <span>$${Agregados.precio}</span>
                                  </div></button>  </div>`;                       
      });
      darFuncionalidadBtns();
    }
    function darFuncionalidadBtns() {
      arrayAgregados.forEach((Agregados) => {
          document.getElementById(`${Agregados.id}`).addEventListener('click', (e) => {
          e.preventDefault();
          agregarAlCarrito(Agregados);
          if (Agregados.id === 3){
            song();
           } 
          else if (Agregados.id === 4){
            textoExtra();
          } 
          else if (Agregados.id === 5){
            direction();
          }
          
          mostrarAlerta(Agregados);
        });
      });
    }
    function mostrarAlerta (Agregados) {
      let aA = JSON.parse(localStorage.getItem("arrayAgregados"))
      Toastify({
        text:"Agregaste " + (Agregados.nombre) + " a tu fotografia",
          duration: 5000,
          gravity: "top",
          position: "center",
          close: false,
          style: {
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            background: "linear-gradient(to right, blue, black)",
          },
          className:"cartel",
        }).showToast();
    }
    
  
    function song() {
      Swal.fire({
        title: 'Ingresá la cancion que deseas incrustar en la fotografia como aparece en Spotify seguido del nombre del interprete:',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result);
          localStorage.setItem("cancionIncrustada", result.value);
          Swal.fire({
            title: `Has agregado la cancion ${result.value}`,
          })
        }
      })
    }
    function textoExtra() {
      Swal.fire({
        title: 'Ingresá el texto que desea agregar en la fotografia y la zona donde le gustaria que se encuentre escrita:',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result);
          localStorage.setItem("textoExtra", result.value);
          Swal.fire({
            title: `Has agregado el siguiente texto adicional: ${result.value}`,
          })
        }
      })
    }
    function direction() {
      Swal.fire({
        title: 'Ingresá la direccion a la que quieres que llegue la fotografia y el codigo postal:',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result);
          localStorage.setItem("envioADomicilio", result.value);
          Swal.fire({
            title: `Has agregado la siguiente direccion: ${result.value}`,
          })
        }
      })
    }
    function agregarAlCarrito(Agregados) {
      let existe = carrito.some((element) => element.id == Agregados.id);
    
      if (existe === false) {
        Agregados.cantidad = 1;
        carrito.push(Agregados);
      } else {
        let miProd = carrito.find((element) => element.id == Agregados.id);
        miProd.cantidad++;
      }
      let x = JSON.parse (localStorage.getItem("BD"))
      x.push (Agregados);
      localStorage.setItem('BD', JSON.stringify(x));
      console.log(x);
      mostrarCarrito();
    }
    
    function mostrarCarrito() {
      modalContainer.innerHTML = "";
      modalContainer.style.display = "flex";
      carrito.forEach((Agregados) => {
      let carritoContent = document.createElement("div");
      carritoContent.innerHTML += `
        <div class="card">
          <h3>${Agregados.nombre}</h3>
          <p> $ ${Agregados.precio}</p>
          <p> Cantidad: ${Agregados.cantidad}</p>
          <span class="delete-product"> ❌ </span>
          </div>
        `;
    
      modalContainer.append(carritoContent);
    
      let eliminar = carritoContent.querySelector(".delete-product");
    
      eliminar.addEventListener("click", () => {
        eliminarProducto(Agregados.id);
        mostrarAlertaEliminado(Agregados);
      });
    })};
      const eliminarProducto = (id)=> {
      const foundID = carrito.find ((element)=> element.id=== id) 
      carrito = carrito.filter ((carritoID)=>{
      return carritoID !== foundID;})
      let Eliminados = JSON.parse (localStorage.getItem("Eliminados"))
      Eliminados.push (foundID);
      localStorage.setItem('Eliminados', JSON.stringify(Eliminados));
      console.log(Eliminados);
      mostrarCarrito()
      
    }
    function mostrarAlertaEliminado (Agregados) {
      let aA = JSON.parse(localStorage.getItem("Eliminados"))
      Toastify({
        text:"Eliminaste " + (Agregados.nombre) + " de tu fotografia",
          duration: 5000,
          gravity: "top",
          position: "center",
          close: false,
          style: {
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            background: "linear-gradient(to right, red, black)",
          },
          className:"cartel",
        }).showToast();}
    crearCards();
    
    function sumar () {
    const btn = document.getElementById ("btn");
    btn.addEventListener ("click", (e)=>{
      e.preventDefault();
      const total = carrito.reduce ((acc, el)=> acc + el.precio*el.cantidad, 1000)
    
    resultado.innerHTML = `<div class="texto2">
    <p>El total a pagar es de $${total}</p>
                           <br>
                         <p>Si desea eliminar uno de los seleccionados solo haga click en la ❌ y luego vuelva tocar el boton de "TOTAL" para conocer el monto final a abonar</p>
                         <br>
                         <p>Gracias por tu compra que la disfutes :)</p>
                          <br> 
  <p>Para confirmar tu compra completa los siguientes campos</p>
  <form id="formulario" class="form1">
  <button class ="botones" id="btn1">Correo electronico</button>
</form> </div>`
darFuncionalidadBtns2 ()
    })
   
 }
 function darFuncionalidadBtns2 () {
  const btn1 = document.getElementById ("btn1");
  btn1.addEventListener("click", (e)=>{
  e.preventDefault();
  Swal.fire({
  title: 'Ingresá su correo:',
  input: 'text',
  inputAttributes: {
  autocapitalize: 'off'
  },
  showCancelButton: false,
  confirmButtonText: 'Enviar',
  showLoaderOnConfirm: true
  }).then((result) => {
  if (result.isConfirmed) {
  console.log(result);
  localStorage.setItem("correoC", result.value);
  Swal.fire({
  title: `Has ingresado los siguientes datos para tu compra: ${result.value}`,
  })
  }
})
  }) 
}
    sumar();