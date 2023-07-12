const switchColor = () => {
    const colors = [
        '#FF5733',  // Laranja vibrante
        '#FFC300',  // Amarelo brilhante
        '#33A8FF',  // Azul vibrante
        '#8E44AD',  // Roxo escuro
        '#FF3366',  // Rosa intenso
        '#00CC99',  // Verde esmeralda
        '#FF9933',  // Laranja suave
        '#9966FF',  // Lilás
        '#FF66CC',  // Rosa choque
        '#00BFFF',  // Azul claro
    ];
    
    let numberOfColors = colors.length;
    let counter = 0;

    setInterval(() => {
        if (counter === numberOfColors) counter = 0;
        document.body.style.background = colors[counter]
        counter++

    }, 3000)
}

switchColor();  