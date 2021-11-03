var beans = document.getElementById("beans");
var interactive = document.getElementById("interactive");

const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
const synth = new Tone.Synth().connect(chorus);


var color = "salmon";

intro.addEventListener('click', () => {
  intro.style.display = "none";
});

document.body.addEventListener('keydown', (event) => {
  if(event.key == 'f'){
    synth.triggerAttackRelease("C4", "8n");
    document.body.style.backgroundColor = "orange";
  }
  else if(event.key == 'g')
  {
  synth.triggerAttackRelease("E4", "4n");
      document.body.style.backgroundColor = "aqua";
}
else if(event.key == 'h')
{
synth.triggerAttackRelease("G4", "4n");
    document.body.style.backgroundColor = "pink";
}
})
interactive.addEventListener('mouseenter', () => {
  beans.play();
  document.body.style.backgroundColor = color;
});

interactive.addEventListener('mouseleave', () => {
  beans.pause();
  document.body.style.backgroundColor = "white";
});

beans.addEventListener('timeupdate', (event) => {
  console.log("updated:", event.target.currentTime);
  if(event.target.currentTime > 0.3)
  {
    color = "green";
  }
  else{
    color = "salmon";
  }
})
