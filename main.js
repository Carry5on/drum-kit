const drum = document.querySelector('.drum');


document.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    key.classList.add('transfered');
    if(!audio) return;
    audio.play();
});
document.addEventListener('keyup', function(e) {
    const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    key.classList.remove('transfered');
});

// document.addEventListener('mousedown', function(e) {
//     const audio = drum(`audio[data-key="${e.keyCode}"]`);
//     const key = drum(`.drum[data-key="${e.keyCode}"]`);
//     key.classList.add('transfered');
//     if(!audio) return;
//     audio.play();
// });
// document.addEventListener('mouseup', function(e) {
//     const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
//     key.classList.remove('transfered');
// });

