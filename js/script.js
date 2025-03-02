const completedBtns = document.querySelectorAll('.Completed_btn');

//** set task assign dynamic value **//
setInnerTextByIdWithValue('task_assigned', completedBtns.length);

for (let i = 0; i < completedBtns.length; i++) {
  const completedBtn = completedBtns[i];

  completedBtn.addEventListener('click', function (event) {
    alert('Board updated successfully!');

    //** update task assigned value **//
    let taskAssigned = getInnerTextById('task_assigned');
    let totalCompleatTask = getInnerTextById('total_compleat_task');
    // console.log(typeof totalCompleatTask);

    if (taskAssigned > 0) {
      setInnerTextByIdWithValue('task_assigned', taskAssigned - 1);
      setInnerTextByIdWithValue('total_compleat_task', totalCompleatTask + 1);
    }

    //** set Completed_btn disabled **//
    completedBtn.disabled = true;
  });
}
