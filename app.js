<script>
  // Definimos un arreglo para almacenar los productos seleccionados
  var productos = [];

  // Función para agregar productos al arreglo
  function add() {
    var producto = document.getElementById("product").value;
    var cantidad = parseInt(document.getElementById("number").value);

    if (producto !== "0" && cantidad > 0) {
      productos.push({ producto: producto, cantidad: cantidad });
      alert("Producto agregado al carrito.");
      // Limpia el formulario después de agregar el producto
      document.getElementById("product").selectedIndex = 0;
      document.getElementById("number").value = "";
    } else {
      alert("Por favor, seleccione un producto y una cantidad válida.");
    }
  }

  // Función para calcular el importe total
  function calc() {
    var total = 0;
    for (var i = 0; i < productos.length; i++) {
      total += productos[i].producto * productos[i].cantidad;
    }
    alert("El importe total es: ¥" + total);
  }
</script>
