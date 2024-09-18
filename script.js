let lightOff = true;
let switchOff = true;

updateView()
function updateView(){
    document.getElementById('updateView').innerHTML = /*HTML*/`
    <div class="textView">
        <h1>Lyspære</h1>
        <div id="lightText">Before there was darkness.</div>
    </div>
    <div class="view">
        <img id="lightOffPic" class="bulbStyle" src="lightBulbOff.png">
        <img id="toggleSwitch" onclick="changeLightStatus()" class="switchStyle" src="switchOff.png">
    </div>
    `
}
function changeLightStatus(){
    lightOff = !lightOff;
    switchOff = !switchOff;
    changeLightAndSwitch()
}
function changeLightAndSwitch(){
    if(lightOff == true && switchOff == true && lightOff == true){
        document.getElementById('lightOffPic').src="lightBulbOff.png";
        document.getElementById('toggleSwitch').src="switchOff.png";
        document.getElementById('lightText').innerHTML = "Before there was darkness.";
    }
    else{
        document.getElementById('lightOffPic').src="lightBulbOn.png";
        document.getElementById('toggleSwitch').src="switchOn.png";
        document.getElementById('lightText').innerHTML = "And God said, Let there be light: and there was light.";
                
    }
}