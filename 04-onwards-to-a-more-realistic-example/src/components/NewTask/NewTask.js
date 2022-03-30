import Section from '../UI/Section'
import TaskForm from './TaskForm'
import useHttp from '../../hooks/use-http'

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp()

  const enterTaskHandler = async (taskText) => {
    const createTask = (taskData) => {
      const generatedId = taskData.name
      const createdTask = { id: generatedId, text: taskText }
      props.onAddTask(createdTask)
    }

    const requestConfig = {
      url: 'https://react-complete-guide-8e169-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      },
    }

    sendRequest(requestConfig, createTask)
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  )
}

export default NewTask
