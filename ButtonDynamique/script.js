const button = document.getElementById('button');

button.addEventListener('mousemove', (e) => {
    
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    console.log("e.pageX = " + e.pageX );
    console.log("e.pageY = " + e.pageY );
    console.log("e.target.offsetLeft = " + e.target.offsetLeft );
    console.log("e.target.offsetTop = " + e.target.offsetTop );
    console.log("x =" + x + ' / y = ' + y);


    e.target.style.setProperty('--x', `${ x }px`);
    e.target.style.setProperty('--y', `${ y }px`);
})