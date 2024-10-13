import { defineStore } from 'pinia'
import games from '@/assets/juegos.json'

export const useGameStore = defineStore('gameStore', {
    state: () => ({
        games: games.map(game => ({
            ...game,
            stockMax: game.stock // Usar el stock inicial como el máximo
        }))
    }),
    actions: {
        decreaseStock(codigo) {
            const game = this.games.find((game) => game.codigo === codigo)
            if (game && game.stock > 0) {
                game.stock--
            }
        },
        increaseStock(codigo) {
            const game = this.games.find((game) => game.codigo === codigo)
            if (game && game.stock < game.stockMax) {
                game.stock++
            }
        }
    }
})
