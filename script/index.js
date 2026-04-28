document.addEventListener('DOMContentLoaded', () => {

    let styleColor = [
        { color:'red' },
        { color:'green' },
        { color:'yellow' },
        { color:'blue' },
        { color:'orange' },
        { color:'black' }
        
    ];

    let canvas = document.getElementById('can');

    const ctx = canvas.getContext('2d');
    let isDrawing = false;
        
    const MENU = document.getElementById('menu');
    const SLIDER = document.getElementById('idSlider');
    const sliderLabel = document.getElementById('sliderValue');
    const clearBut = document.getElementById('clearBut');

    let mouseColor = 'black';
    let linePointWidth = 5;
    sliderLabel.innerHTML = '5';

    for (let i = 0; i < styleColor.length; i++) {
        let colorBox = document.createElement('button');

        colorBox.style = `background-color:${styleColor[i].color};`;
        colorBox.className = 'color-but';
        colorBox.setAttribute('name-color', styleColor[i].color);
        

        MENU.appendChild(colorBox);
    };

    document.querySelectorAll('.color-but').forEach(button => {
        button.onclick = () => {
            const colorData = button.getAttribute('name-color');
            mouseColor = colorData;
        };
    });

    clearBut.addEventListener('click', () => {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

    });

    

    SLIDER.addEventListener('input', () => {

        if (SLIDER.value == 0) {
            linePointWidth = 0.1;
            sliderLabel.innerHTML = '0.1';
        } else {
            linePointWidth = SLIDER.value;
            sliderLabel.innerHTML = SLIDER.value;
        }

    });


    canvas.onmousedown = ({offsetX, offsetY}) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
    };

    canvas.onmousemove = ({offsetX, offsetY}) => {
        if (isDrawing) {
            ctx.lineTo(offsetX, offsetY);
            ctx.lineWidth = linePointWidth;
            ctx.strokeStyle = mouseColor;
            ctx.stroke();
        }
    };

    canvas.onmouseup = () => {
        isDrawing = false;
    };

});