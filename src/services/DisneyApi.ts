const url = "https://api.disneyapi.dev/graphql";

const getAllCharacers = (query: string) => fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query })
  }).then((res) => res.json());


// async function findTodos(e) {
//   e.preventDefault();
//   const searchText = searchForm.searchname.value;

//   if (searchText) {
//     const searchQuery = `query searchQuery{
//         todos(options:{search:{q: "${searchText}"}, sort:{field: "id", order: ASC}}){
//             data {
//               id
//               title
//               completed
//               user { name }
//             }
//           }
//     }`;
//     const { data } = await makeRequest(searchQuery);

//     todos.innerHTML = "";
//     data.todos.data.forEach((todo) => printTodo(todo));
//   }
// }

// const DisneyService = () => {
//   const getAllCharacers = async () => {
//     const data = await fetch(`${basicUrl}/characters`);
//     const res = await data.json();
//     return res;
//   };

//   return { getAllCharacers };
// };

export default getAllCharacers;
