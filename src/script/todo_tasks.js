const todo_task = () => {
    return {
        ...title(), 
        ...description(),
        ...dueDate(),
        ...priority(),
        ...completion(),
    }
}
const title = () => {
    return {
        title: () => {}
     }
}

const description = () => {
    return {
        description: () => {} // Code to retrieve description string
    }
}

const dueDate = () => {
    return {
        dueDate: () => {} // Code to retrieve due date
    }
}

const priority = () => {
    return {
        priority: () => {} // Code to set priority of task
    }
}

const completion = () => {
    return {
        completion: () => {} // Code to determine if task has been completed
    }
}