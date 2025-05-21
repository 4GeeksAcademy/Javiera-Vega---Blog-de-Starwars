export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    urlBaseStarWars: "https://www.swapi.tech/api/",
    starWarsCharacters: JSON.parse(localStorage.getItem("starWarsCharacters")) || [],
    favorites: [],
    planets: JSON.parse(localStorage.getItem("planets")) || []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case "ADD_CHARACTERS":
      return {
        ...store,
        starWarsCharacters: action.payload
      };
    case "ADD_FAVORITES":
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    case "ADD_PLANETS":
      return {
        ...store,
        planets: action.payload
      };
    case "DELETE_FAVORITES":
      console.log(action.payload)
      return{
        ...store,
        favorites: store.favorites.filter((item) => item._id != action.payload)
      }
    default:
      throw Error('Unknown action.');
  }
}
