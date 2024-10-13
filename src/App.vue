<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Tienda 32 Bits</h1>
    <h3 class="text-center">Lista de juegos</h3>
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.codigo">
          <td>{{ game.codigo }}</td>
          <td><strong>{{ game.nombre }}</strong></td>
          <td>{{ game.stock }}</td>
          <td>{{ formatCurrency(game.precio) }}</td>
          <td>
            <div class="btn-group" role="group">
              <button @click="decreaseStock(game.codigo)" class="btn btn-secondary btn-sm px-3" :disabled="game.stock === 0">
                -
              </button>
              <button @click="increaseStock(game.codigo)" class="btn btn-secondary btn-sm px-3" :disabled="game.stock == game.stockMax">
                +
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useGameStore } from './stores/gameStore';

export default {
  setup() {
    const gameStore = useGameStore();
    const games = gameStore.games;

    const decreaseStock = (codigo) => {
      gameStore.decreaseStock(codigo);
    };

    const increaseStock = (codigo) => {
      gameStore.increaseStock(codigo);
    };

    // Función para formatear el precio como moneda
    const formatCurrency = (value) => {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      }).format(value);
    };

    return { games, decreaseStock, increaseStock, formatCurrency };
  }
};
</script>

<style>
.container {
  max-width: 900px;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
}
table {
  text-align: center;
}
.btn-group {
  display: flex;
  justify-content: center;
}
</style>
