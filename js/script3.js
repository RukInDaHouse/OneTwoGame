const data = [
  {stmt: "Ты выбрал мало оплачиваемую и непрестижную профессию", desc: "Близкие должны понимать, что в начале карьеры ты не сможешь претендовать на высокую зарплату вне зависимости от ее престижности. Выбирая профессию, лучше отталкиваться от своих способностей и интересов. Всегда можно найти способ остаться в своей любимой профессии и увеличить доход. Поищи информацию, как люди твоей будущей профессии находят дополнительный источник дохода и расскажи об этом близким. Например, квалифицированный педагог может стать репетитором и зарабатывать гораздо больше."},

  {stmt: "Если ты выберешь эту профессию, я не буду тебе помогать", desc: "Незнакомая для близких профессия может быть окутана мифами и недостоверной информацией. Они могут думать, что она невостребованная, низкооплачиваемая и, вообще, несерьезная. Познакомь родителей с выбранной тобой профессией поближе. Расскажи, почему выбрал именно эту профессию, что тебе в ней нравится, и каких успехов ты можешь достичь."},

  {stmt: "В нашей семье уже три поколения занимаются этим делом", desc: "Близких можно понять - они хотят передать тебе свой многолетний опыт. Так они проявляют заботу о твоем будущем. Поблагодари их за это. Но если ты не видишь себя в этой профессии, даже поработав в ней, расскажи близким почему она тебе не интересна. Объясни, что учел свои способности и интересы, и познакомь их с той профессией, которой хочешь заниматься. Расскажи, почему выбрал именно ее, что тебе в ней нравится, и каких успехов ты можешь достичь."},

  {stmt: "В этой профессии без связей и денег делать нечего", desc: "Возможно, близкие правы и хотят уберечь тебя от разочарования. Возможно у них просто устаревшая информация? Выясни, почему они так думают? Постарайся сам узнать как реально обстоят дела в выбранной тобой профессии, изучи конкретные примеры, мнения. Выясни есть ли возможность попасть в эту профессию без связей и денег. Расскажи близким как ты планируешь действовать."},

  {stmt: "У тебя еще нет опыта, чтобы самому решать", desc: "Если ты учел свои интересы и поэтому выбрал именно эту профессию, тогда поговори с близкими. Объясни, что ты серьезно подошел к выбору профессии, расскажи почему выбрал именно ее, что тебе в ней нравится, и каких успехов ты можешь достичь."},

  {stmt: "Выбери ВУЗ, в который легко поступить", desc: "Возможно, близкие хотят уберечь тебя от разочарования. Выбирать ВУЗ нужно не по принципу куда легче поступить, а туда, где хорошо готовят к твоей будущей профессией, где хороший преподавательский состав и высокий рейтинг ВУЗа."},

  {stmt: "Ты сам не знаешь, чего ты хочешь", desc: "Возможно до сегодняшнего дня так и было, и ты сам не знал чего хотел. Чуть позже мы будем изучать твои интересы, и на основе их выбирать профессии. Когда ты точно определишься с профессией, расскажи близким, почему ты выбрал именно эту профессию, что тебе в ней нравится и почему она тебе подходит. Покажи серьезность своих намерений."},

  {stmt: "Нужно выбрать престижный ВУЗ", desc: "Престижность в современном мире очень изменчива. Высокий доход и гарантированное устройство на работу зависит не от престижности ВУЗа, а от профессионализма человека. В первую очередь надо изучить выбранную профессию и уже на основе этого выбирать подходящий ВУЗ. Выигрывает всегда тот, кому нравиться его работа, а не тот, кто учился в престижном ВУЗе."},

  {stmt: "Это не твое, у тебя не получится", desc: "Возможно, близкие видят в тебе качества и особенности, которые ты сам не замечаешь. Выслушай, на чем основывается их мнение. Если их ответ не убедителен, тогда тебе стоит рассказать им о своих интересах и желаниях. Возможно ты никогда и не говорил о том, чем тебе действительно хотелось бы заниматься. Расскажи, почему выбрал именно эту профессию, что тебе в ней нравится."},


  {stmt: "Мы лучше знаем", desc: "Возможно, близкие правы и видят в тебе те качества и задатки, которые ты сам не замечаешь. Или они, знают о профессии то, чего ты не знаешь. Попроси рассказать об этом подробнее. Если же их ответ не убедителен, тогда тебе стоит рассказать им о своих интересах и желаниях. Возможно ты никогда и не говорил о том, чем тебе действительно хотелось бы заниматься."},
 
  
],
 nextBtn=document.querySelector("#next_btn"),
 completeElemBtn=document.querySelector('#testComplete_btn'),
 item_arr=document.getElementsByClassName("item")

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
  checkProgressBar()
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

function checkProgressBar(){
  let check=0,
      next=false
  for(let n=0;n<item_arr.length;n++){
    if(item_arr[n].classList.contains('complete')){
      check++
      item_arr[n].classList.contains('current')?next=true:false
    }
  }
  next?nextBtn.classList.remove('disable'):nextBtn.classList.add('disable')
  if(check==item_arr.length){
    completeElemBtn.classList.remove('hide')
    next_btn.classList.add('disable')
  }
  else{
    completeElemBtn.classList.add('hide')
  }
}
function nextQuestion(){
  for(let n=0;n<item_arr.length;n++){                           
    if(!item_arr[n].classList.contains('complete')){
      showStmt(n)
      break
    }
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
