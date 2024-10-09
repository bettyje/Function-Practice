const checkTaskStatus = (taskName, isCompleted) => {
    if (isCompleted) {
        console.log(`Task ${taskName} is completed`);
    } else {
        console.log(`Task ${taskName} is not completed yet`);
    }
};

const taskLogger = checkTaskStatus;

