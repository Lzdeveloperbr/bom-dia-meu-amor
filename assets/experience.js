/* Recursos interativos adicionais — sem dependências externas */
(()=>{
 "use strict";
 const $=(id)=>document.getElementById(id);
 const reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??false;
 const start=new Date(2024,10,17,0,0,0);
 const pad=n=>String(n).padStart(2,"0");
 function updateLoveClock(){
  const now=new Date();
  let months=(now.getFullYear()-start.getFullYear())*12+now.getMonth()-start.getMonth();
  let anchor=new Date(start);anchor.setMonth(start.getMonth()+months);
  if(now<anchor)months--;
  anchor=new Date(start);anchor.setMonth(start.getMonth()+months);
  const elapsed=Math.max(0,now-anchor);
  const values={labYears:Math.floor(months/12),labMonths:months%12,labDays:Math.floor(elapsed/86400000)};
  Object.entries(values).forEach(([id,value])=>{if($(id))$(id).textContent=value});
  const next=new Date(now.getFullYear(),10,17);
  if(next<=now)next.setFullYear(next.getFullYear()+1);
  const days=Math.ceil((new Date(next.getFullYear(),next.getMonth(),next.getDate())-new Date(now.getFullYear(),now.getMonth(),now.getDate()))/86400000);
  if($("anniversaryDays"))$("anniversaryDays").textContent=days===0?"É hoje!":days+" dias";
 }
 updateLoveClock();setInterval(updateLoveClock,60000);
 const moodMessages={
  feliz:"Guarda esse sorriso, meu amor. Que a alegria encontre muitos motivos para ficar. 💗",
  cansada:"Você não precisa resolver tudo hoje. Descanse, respire e lembre que merece cuidado também. 🌙",
  saudade:"Se eu pudesse, atravessava qualquer distância só para te dar um abraço bem apertado. 🤍",
  ansiosa:"Um passo de cada vez. Respira com calma: você não está atrasada na vida. Que Deus te dê serenidade. 🕊️",
  grata:"Que seu coração continue percebendo a beleza das pequenas coisas. A gratidão faz florescer o dia. ✨"
 };
 document.querySelectorAll("[data-mood]").forEach(button=>button.addEventListener("click",()=>{
  const result=$("moodResult");if(result)result.textContent=moodMessages[button.dataset.mood]||"Você merece carinho em todos os momentos. ♡";
 }));
 const cards=[
  "Eu escolheria conhecer você outra vez, em qualquer lugar do mundo. ♡",
  "Que a nossa casa tenha paz, risadas e espaço para todos os sonhos. 🏡",
  "Quero ser seu parceiro nas conquistas e seu abraço nos dias difíceis. 🤍",
  "Que nunca falte diálogo, respeito e vontade de cuidar um do outro. 🌷",
  "Ainda temos tantos lugares para conhecer e lembranças para construir. ✨",
  "Meu amor por você também aparece nas pequenas atitudes de todos os dias. 💗"
 ];
 $("surpriseCardBtn")?.addEventListener("click",()=>{
  const result=$("surpriseCardText");if(!result)return;
  result.textContent=cards[Math.floor(Math.random()*cards.length)];
  result.animate?.([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:reduced?1:420});
 });
 const note=$("privateNote"),status=$("noteStatus"),key="meu-amor-private-note-v1";
 if(note){
  try{note.value=localStorage.getItem(key)||""}catch{}
  $("saveNoteBtn")?.addEventListener("click",()=>{
   try{localStorage.setItem(key,note.value);if(status)status.textContent="Sua mensagem ficou guardada neste aparelho. ♡"}
   catch{if(status)status.textContent="Não foi possível guardar. O armazenamento pode estar cheio."}
  });
  $("clearNoteBtn")?.addEventListener("click",()=>{
   note.value="";try{localStorage.removeItem(key)}catch{}
   if(status)status.textContent="Anotação apagada deste aparelho.";
  });
 }
 $("readingModeBtn")?.addEventListener("click",()=>{
  const active=document.body.classList.toggle("reading-mode");
  $("readingModeBtn").textContent=active?"Sair do modo leitura":"Ativar modo leitura";
 });
 $("readLetterBtn")?.addEventListener("click",()=>{
  if(!("speechSynthesis" in window)){if(status)status.textContent="A leitura em voz alta não está disponível neste navegador.";return}
  window.speechSynthesis.cancel();
  const text=$("carta")?.innerText||"Boa noite, meu amor. Eu te amo.";
  const utterance=new SpeechSynthesisUtterance(text);utterance.lang="pt-BR";utterance.rate=.88;utterance.pitch=1.04;
  utterance.onend=()=>{if(status)status.textContent="Leitura concluída. Boa noite. ♡"};
  window.speechSynthesis.speak(utterance);
  if(status)status.textContent="Lendo sua mensagem em voz alta…";
 });
 $("stopReadingBtn")?.addEventListener("click",()=>{
  if("speechSynthesis" in window)window.speechSynthesis.cancel();
  if(status)status.textContent="Leitura interrompida.";
 });
 $("copyLoveBtn")?.addEventListener("click",async()=>{
  const text="Boa noite, meu amor. Que Deus cuide do seu descanso, acalme seu coração e ilumine seus sonhos. Eu te amo. ❤️";
  try{await navigator.clipboard.writeText(text);if(status)status.textContent="Mensagem copiada para compartilhar. ♡"}
  catch{if(status)status.textContent="Seu navegador não liberou a cópia automática. Você pode selecionar a mensagem na tela."}
 });
})();
