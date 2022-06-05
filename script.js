document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle1 = document.getElementById('mouse-circle-1');
        mouseCircle2 = document.getElementById('mouse-circle-2');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle1.style.top = revisedMousePosY + 50 + 'px';
        mouseCircle1.style.left = revisedMousePosX + 70 + 'px';

        mouseCircle2.style.top = revisedMousePosY + 200 + 'px';
        mouseCircle2.style.left = revisedMousePosX + 200 + 'px';
    }
    delayMouseFollow();
});
