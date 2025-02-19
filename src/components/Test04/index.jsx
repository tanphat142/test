import { useEffect, useReducer, useRef } from "react";

const init = [
  {
    id: 1,
    content: "Learn React",
  },
  {
    id: 2,
    content: "Learn NodeJS",
  },
  {
    id: 3,
    content: "Learn VueJS",
  },
];

const reducer = (state, action) => {
  //action: CREATE, DELETE
  switch (action.type) {
    case "CREATE":
      return [
        ...state,
        {
          id: Date.now(),
          content: action.value,
        },
      ];

    case "DELETE":
      var newState = state.filter(todo => todo.id !== action.id);
      return newState;

    default:
      return state;
  }
};

function Test04() {
  const [todos, dispatch] = useReducer(reducer, init);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();//de form ko load lai trang
    const vl = e.target.elements.inputTodo.value;    
    if (vl) {
      dispatch({
        type: "CREATE",
        value: vl,
      });

      inputRef.current.value = "";
    }
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} name="inputTodo" />
        <button>Them todo</button>
      </form>

      {todos.length > 0 && (
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              {item.content}
              <button onClick={() => handleDelete(item.id)}>Xoa</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Test04;
