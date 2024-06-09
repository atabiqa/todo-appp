import React from 'react'

const TodoForm = ({ addTodo }) => {
    // Definisikan function handleSubmit
    const handleSubmit = (event) => {
      event.preventDefault()
      addTodo(title)
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
      }
  
    return (
      <div style={styles.container}>
        <form
          // Panggil function handleSubmit dengan argument "event"
          onSubmit={(event) => {
            handleSubmit(event)
          }}
        >
          <input
            type="text"
            placeholder="Add your Todo"
            style={styles.formInput}
          />
          <button style={styles.button}>Add Todo</button>
        </form>
      </div>
    )
  }

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm