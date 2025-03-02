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

    //** call history box */
    historyBoxContainer('history_box');

    //** set Completed_btn disabled **//
    completedBtn.disabled = true;

    //** alert when check if all task completed **//
    const taskAssignedText = parseInt(
      document.getElementById('task_assigned').innerText
    );

    if (taskAssignedText === 0) {
      alert('congrats!!! you have completed all the current task.');
    }

    // const titles = document.getElementsByClassName('card_title');
    // for (title of titles) {
    //   console.log(title.innerText);
    // }
  });
}

// ** for clear history box *//

function clearHistoryBox(id) {
  let historyBox = document.getElementById('history_box');
  historyBox.innerHTML = '';
}

function toggleDesktoFAQ() {
  // alert('toooggle');

  window.location.href = './index_2.html';
}

function toggleFAQtoDesk() {
  window.location.href = './index.html';
}
