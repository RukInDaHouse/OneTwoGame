const data = [
  {stmt: "Утверждение 1", desc: "Объяснение утверждения 1"},
  {stmt: "Утверждение 2", desc: "Объяснение утверждения 2"},
  {stmt: "Утверждение 3", desc: "Объяснение утверждения 3"},
  {stmt: "Утверждение 1", desc: "Объяснение утверждения 1"},
  {stmt: "Утверждение 2", desc: "Объяснение утверждения 2"},
  {stmt: "Утверждение 3", desc: "Объяснение утверждения 3"},
  {stmt: "Утверждение 1", desc: "Объяснение утверждения 1"},
  {stmt: "Утверждение 2", desc: "Объяснение утверждения 2"},
  {stmt: "Утверждение 3", desc: "Объяснение утверждения 3"},
];

let curStmt = 0;

function showStmt(idx) {
  document.getElementById('progress-item-' + curStmt).classList.remove('current');
  curStmt = idx;
  document.getElementById('stmt').innerText = data[idx].stmt;
  document.getElementById('desc').innerText = data[idx].desc;
  document.getElementById('progress-item-' + idx).classList.add('current');
  applyComplete(data[idx].complete);  
}

function applyComplete(val) {
  val = (val) ? true : false;
  document.getElementById('desc').style.visibility = (val) ? 'visible' : 'hidden';
  document.getElementById('btnTrue').disabled = val;   
  document.getElementById('btnFalse').disabled = val;   
}

function createProgressBar() {
  const parent = document.getElementById('progress');
  parent.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    const item = document.createElement('div');
    item.setAttribute('data-idx', i);
    item.id = 'progress-item-' + i;
    item.classList.add('item');
    if (data[i].complete)
      item.classList.add('complete');
    parent.appendChild(item);
  }
}

function btnClick(val) {
  data[curStmt].complete = true;
  document.getElementById('progress-item-' + curStmt).classList.add('complete');
  if (val || (curStmt === data.length - 1)) {
    applyComplete(true);
  } else {
    showStmt(curStmt + 1);
  }
}

document.getElementById('progress').addEventListener(
  'click',
  function (e) {
    if (e.target.classList.contains('item')) {
      const newIdx = e.target.getAttribute('data-idx') - 0;
      if (newIdx != curStmt) {
        showStmt(newIdx);
      }
    }
  },
  true
);

createProgressBar();
showStmt(0);