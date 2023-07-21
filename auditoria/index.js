
var botonMensualidades = document.getElementById("Mensualidades");
var botonOtrosIngresos = document.getElementById("Otrosingresos");
var botonIndicadores = document.getElementById("Indicadores");
var botonInicio = document.getElementById('Inicio');
var botonMetricas = document.getElementById("Metricas");
var seccionMensualidad = document.getElementById("Mensualidad");
var  seccionConstruccion = document.getElementById("Construccion")
var  seccionConstruccionn = document.getElementById("Construccionn")
var  seccionBotones = document.getElementById("Botones")
var  botonInicio = document.getElementById("Inicio")

var seccionOtrosIngresos = document.getElementById("OtrosIngresos")
var divcanvas = document.getElementById("myChart")
var divcanvas1 = document.getElementById("myChart1")
var divcanvas2 = document.getElementById("myChart2")
var divcanvas3 = document.getElementById("myChart3")
var divcanvas4 = document.getElementById("myChart4")

var Activos = document.getElementById("Activos");
var Cancelados = document.getElementById("Cancelados");
var Suspendidos = document.getElementById("Suspendidos");
var Gratis = document.getElementById("Gratis");
var Total = document.getElementById("Total");
				


const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');


const hideCanvasCode = `
  divcanvas.style.display = "none";
  divcanvas1.style.display = "none"; 
  divcanvas2.style.display = "none";
  divcanvas3.style.display = "none";
  divcanvas4.style.display = "none";
`;

window.addEventListener('DOMContentLoaded', function() {
  var botonInicio = document.getElementById('Inicio');
  botonInicio.style.display = 'none';
  OtrosIngresos.style.display = "none"
  seccionConstruccionn.style.display = "none";
  divcanvas.style.display = "none";
  divcanvas1.style.display = "none"; 
  divcanvas2.style.display = "none";
  divcanvas3.style.display = "none";
  divcanvas4.style.display = "none";
 
});

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Saman Tarazonero 2', 'Matacaballo', 'Pantin', 'Casco de Turmero', 'Jabillar', 'Villas del Carmen' , 'Durpa' , 'La Casona II' , 'sAMAN tARAZONERO i' ],
      datasets: [{
        label: '# Clientes Activos',
        data: [212, 156, 145, 97, 75, 74, 70, 66, 60, 44],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Saman Tarazonero 2', 'Matacaballo', 'Pantin', 'Caco de Turmero', 'Jabillar', 'Villas del Carmen' , 'Durpa' , 'La Casona II' , 'sAMAN tARAZONERO i' ],
      datasets: [{
        label: '# Clientes Cancelados',
        data: [21, 3, 2, 18, 8, 3, 0, 7, 5, 10],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Saman Tarazonero 2', 'Matacaballo', 'Pantin', 'Caco de Turmero', 'Jabillar', 'Villas del Carmen' , 'Durpa' , 'La Casona II' , 'sAMAN tARAZONERO i' ],
      datasets: [{
        label: '# Suspendidos',
        data: [5, 2, 3, 7, 0, 0, 4, 2, 5, 1],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Saman Tarazonero 2', 'Matacaballo', 'Pantin', 'Caco de Turmero', 'Jabillar', 'Villas del Carmen' , 'Durpa' , 'La Casona II' , 'sAMAN tARAZONERO i' ],
      datasets: [{
        label: '# Gratis',
        data: [3, 1, 4, 16, 0, 3, 1, 3, 5, 1],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: ['Saman Tarazonero 2', 'Matacaballo', 'Pantin', 'Caco de Turmero', 'Jabillar', 'Villas del Carmen' , 'Durpa' , 'La Casona II' , 'sAMAN tARAZONERO i' ],
      datasets: [{
        label: '# Total General',
        data: [241, 162, 154, 138, 83, 80, 75, 78, 75, 54],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  
  window.addEventListener('DOMContentLoaded', (event) => {
    // Obtenemos los elementos select
    const opcionTipoPago = document.getElementById('opcionTipoPago');
    const opcionTipoCliente = document.getElementById('opcionTipoCliente');

    // Agregamos el evento onchange a cada selector
    opcionTipoPago.addEventListener('change', marcarSeleccion);
    opcionTipoCliente.addEventListener('change', marcarSeleccion);

    // Función para marcar la opción seleccionada
    function marcarSeleccion(event) {
      const select = event.target;
      const selectedOption = select.options[select.selectedIndex];
      selectedOption.classList.add('selected');
    }
  });


// Agregar eventos de clic a los botones
botonMensualidades.addEventListener("click", function() {
  // Ocultar los botones
  botonMensualidades.style.display = "none";
  botonOtrosIngresos.style.display = "none";
  seccionConstruccion.style.display = "none";
  botonIndicadores.style.display = "none";
  seccionOtrosIngresos.style.display = "none";
  botonMetricas.style.display = "none";
  seccionConstruccionn.style.display = "none";

  
  // Mostrar la sección de Mensualidad
  seccionMensualidad.style.display = "block";
  
  botonInicio.style.display = "Block";
  
});

  botonInicio.addEventListener("click", function() {

    // Ocultar 
    
    botonInicio.style.display = "none";
    seccionConstruccion.style.display = "none";
    seccionMensualidad.style.display = "none";
    seccionOtrosIngresos.style.display = "none"
    seccionConstruccionn.style.display = "none";
    
      
    // Mostrar la sección de botones
    botonMensualidades.style.display = "flex";
    botonOtrosIngresos.style.display = "flex";
    botonIndicadores.style.display = "flex";
    botonMetricas.style.display = "flex";
  });

  botonOtrosIngresos.addEventListener("click", function() {
    // Ocultar los botones
    botonMensualidades.style.display = "none";
    botonOtrosIngresos.style.display = "none";
    botonIndicadores.style.display = "none";
    botonMetricas.style.display = "none";
    seccionConstruccionn.style.display = "none";
    divcanvas.style.display = "none";
    
      
    // Mostrar la sección de Construcción
    seccionConstruccion.style.display = "none";
    botonInicio.style.display = "block";
    OtrosIngresos.style.display = "Block"
  });
  

  botonIndicadores.addEventListener("click", function() {
    // Ocultar los botones
    botonMensualidades.style.display = "None";
    botonOtrosIngresos.style.display = "none";
    botonIndicadores.style.display = "none";
    seccionOtrosIngresos.style.display = "none"
    botonMetricas.style.display = "none";
    seccionConstruccionn.style.display = "none";
    divcanvas.style.display = "none";
    divcanvas1.style.display = "none"; 
    divcanvas2.style.display = "none";
    divcanvas3.style.display = "none";
    divcanvas4.style.display = "none";
    // Mostrar la sección de Construcción
    seccionConstruccion.style.display = "block";
    botonInicio.style.display = "block";
  
    
  });

  botonMetricas.addEventListener("click", function() {
    // Ocultar los botones
    botonMensualidades.style.display = "None";
    botonOtrosIngresos.style.display = "none";
    botonIndicadores.style.display = "none";
    seccionOtrosIngresos.style.display = "none"
    botonMetricas.style.display = "none";
    seccionConstruccionn.style.display = "none";
    
    // Mostrar la sección de Construcción
    seccionConstruccionn.style.display = "block";
    botonInicio.style.display = "block";
    divcanvas.style.display = "block";
  });
 

  Activos.addEventListener("click", function() {
    // Ocultar graficos
   
  divcanvas.style.display = "Block";
  divcanvas1.style.display = "none"; 
  divcanvas2.style.display = "none";
  divcanvas3.style.display = "none";
  divcanvas4.style.display = "none";
    
    // Mostrar los botones
    
    Activos.style.display = "block";
    Cancelados.style.display = "block";
    Gratis.style.display = "block";
    Total.style.display = "block";
    Suspendidos.style.display = "block";
   
  });
 
  Cancelados.addEventListener("click", function() {
    // Ocultar graficos
   
  divcanvas.style.display = "none";
  divcanvas1.style.display = "block"; 
  divcanvas2.style.display = "none";
  divcanvas3.style.display = "none";
  divcanvas4.style.display = "none";
    
    // Mostrar los botones
    
    Activos.style.display = "block";
    Cancelados.style.display = "block";
    Gratis.style.display = "block";
    Total.style.display = "block";
    Suspendidos.style.display = "block";
   
  });
  Suspendidos.addEventListener("click", function() {
    // Ocultar graficos
   
  divcanvas.style.display = "none";
  divcanvas1.style.display = "none"; 
  divcanvas2.style.display = "block";
  divcanvas3.style.display = "none";
  divcanvas4.style.display = "none";
    
    // Mostrar los botones
    
    Activos.style.display = "block";
    Cancelados.style.display = "block";
    Gratis.style.display = "block";
    Total.style.display = "block";
    Suspendidos.style.display = "block";
   
  });

  Gratis.addEventListener("click", function() {
    // Ocultar graficos
   
  divcanvas.style.display = "none";
  divcanvas1.style.display = "none"; 
  divcanvas2.style.display = "none";
  divcanvas3.style.display = "block";
  divcanvas4.style.display = "none";
    
    // Mostrar los botones
    
    Activos.style.display = "block";
    Cancelados.style.display = "block";
    Gratis.style.display = "block";
    Total.style.display = "block";
    Suspendidos.style.display = "block";
   
  });

  Total.addEventListener("click", function() {
    // Ocultar graficos
   
  divcanvas.style.display = "none";
  divcanvas1.style.display = "none"; 
  divcanvas2.style.display = "none";
  divcanvas3.style.display = "none";
  divcanvas4.style.display = "block";
    
    // Mostrar los botones
    
    Activos.style.display = "block";
    Cancelados.style.display = "block";
    Gratis.style.display = "block";
    Total.style.display = "block";
    Suspendidos.style.display = "block";
   
  });

/*
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4"); 
var section5 = document.getElementById("section5"); 
var section1Btn = document.getElementById("section1-btn");
var section2Btn = document.getElementById("section2-btn");
var section3Btn = document.getElementById("section3-btn");
var section4Btn = document.getElementById("section4-btn");
var section5Btn = document.getElementById("section5-btn");
var buttoncontainer = document.getElementById("button-container");
var header = document.getElementById("header");
var articuloPorReponer = document.getElementById("ArticuloporReponerUrgente");
var buscarproductos = document.getElementById("buscarproductos");
var amout = document.getElementById("amout");

var listadodeproductosconsumibles = document.getElementById ("listadodeproductosconsumibles");
var listadodeherramientasyequipos = document.getElementById ("listadodeherramientasyequipos");
var listadodeequiposdeoficina = document.getElementById ("listadodeequiposdeoficina");
var listadodematerialesconpocaexistenciaonula = document.getElementById ("listadodematerialesconpocaexistenciaonula");

var modificarproducto = document.getElementById ("modificarproducto");
var spi = document.getElementById("spi");

articuloPorReponer.style.display = "none";
buscarproductos.style.display = "none";
amout.style.display = "";
listadodeproductosconsumibles.style.display = "none";1
listadodeherramientasyequipos.style.display = "none";
listadodeequiposdeoficina.style.display = "none";
listadodematerialesconpocaexistenciaonula.style.display = "none";
modificarproducto.style.display = "none";
section1.style.display = "none";
section2.style.display = "none";
section3.style.display = "none";
section4.style.display = "none";
section5.style.display = "none";
section5Btn.style.display = "none";

function calcularValorTotal() {
    var cantidad = document.getElementById("cantidad").innerText;
    var precio = document.getElementById("precio").innerText.replace("$", "");
    var valorTotal = cantidad * precio;
    document.getElementById("valorTotal").innerText = "$" + valorTotal;
  }
function ocultarbotones(){
section1Btn.style.display = "none";
section2Btn.style.display = "none";
section3Btn.style.display = "none";
section4Btn.style.display = "none";

}

section1Btn.addEventListener("click", function() {
    
    buscarproductos.style.display = "block";
    listadodeproductosconsumibles.style.display = "block";
    header.style.display = "none";
    amout.style.display = "none";
    spi.style.display = "none";
    section5Btn.style.display = "";
    section5Btn.style.margin = "10px";
    section5Btn.style.padding = "10px";
    ocultarbotones()
}); 

section2Btn.addEventListener("click", function() {
    
    buscarproductos.style.display = "block";
    listadodeherramientasyequipos.style.display = "block";
    header.style.display = "none";
    amout.style.display = "none";
    spi.style.display = "none";
    section5Btn.style.display = "";
    section5Btn.style.margin = "10px";
    section5Btn.style.padding = "10px";
    ocultarbotones()
});

section3Btn.addEventListener("click", function() {
   
    buscarproductos.style.display = "block";
    listadodeequiposdeoficina.style.display = "block";
    header.style.display = "none";
    amout.style.display = "none";
    spi.style.display = "none";
    section5Btn.style.display = "";
    section5Btn.style.margin = "10px";
    section5Btn.style.padding = "10px";
    ocultarbotones()
});
section4Btn.addEventListener("click", function() {
   
    buscarproductos.style.display = "block";
    header.style.display = "none";
    amout.style.display = "none";
    spi.style.display = "none";
    section5Btn.style.display = "";
    section5Btn.style.margin = "10px";
    section5Btn.style.padding = "10px";
    listadodematerialesconpocaexistenciaonula.style.display = "block";
    ocultarbotones()

});

section5Btn.addEventListener("click", function() {
   
    
header.style.display= ""
articuloPorReponer.style.display = "none";
buscarproductos.style.display = "none";
amout.style.display = "";
listadodeproductosconsumibles.style.display = "none";1
listadodeherramientasyequipos.style.display = "none";
listadodeequiposdeoficina.style.display = "none";
listadodematerialesconpocaexistenciaonula.style.display = "none";
modificarproducto.style.display = "none";
section1.style.display = "none";
section2.style.display = "none";
section3.style.display = "none";
section4.style.display = "none";
section5.style.display = "none";
spi.style.display = "";
section5Btn.style.display = "none";
section1Btn.style.display = "";
section2Btn.style.display = "";
section3Btn.style.display = "";
section4Btn.style.display = "";
});

function mostrarEnunciado() {
    var selectElement = document.getElementById("opcion");
    var enunciadoElement = document.getElementById("enunciado");
    
    if (selectElement.value !== "") {
      enunciadoElement.style.display = "block";
    } else {
      enunciadoElement.style.display = "none";
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    var botonesSection = document.getElementById("Botones");
    var botones = botonesSection.getElementsByTagName("button");

    // Ocultar todos los elementos excepto los botones deseados
    for (var i = 0; i < botones.length; i++) {
        var boton = botones[i];

        if (boton.id !== "Mensualidades" && boton.id !== "Otrosingresos") {
            boton.style.display = "none";
        }
    }
});*/ 