(function (w, d) {
    //adding new point input
    const addPointBtn = d.querySelector('#point-btn');
    const wrapperPoint = d.querySelector('.meeting-tab-inputs')

    addPointBtn.addEventListener('click', function (e) {
        const div = d.createElement('div');
        const input = d.createElement('input');
        const button = d.createElement('button');
        div.classList.add('meeting-tab-input-wrap');
        input.classList.add('meeting-tab-input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Number');
        button.classList.add('meeting-tab-close');
        button.innerText = 'x';
        button.setAttribute('type', 'submit');
        e.preventDefault();
        div.append(input);
        div.append(button);
        wrapperPoint.append(div);
    });

    //adding new retrospective value
    const retroBtn = d.querySelector('#retro-btn');
    const wrapperRetro = d.querySelector('.meeting-tab-inputs-second');

    retroBtn.addEventListener('click', function (e) {
        const div = d.createElement('div');
        const input = d.createElement('input');
        const button = d.createElement('button');
        div.classList.add('meeting-tab-input-wrap-second');
        input.classList.add('meeting-tab-input-second');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Enter value');
        button.classList.add('meeting-tab-close');
        button.innerText = 'x';
        button.setAttribute('type', 'submit');
        e.preventDefault();
        div.append(input);
        div.append(button);
        wrapperRetro.append(div);
    });

    const closeBtn = d.getElementsByClassName('meeting-tab-close');

    function deleteInput() {
        for (let i = 0; i < closeBtn.length; i++) {
            closeBtn[i].addEventListener('click', function (e) {
               this.parentElement.remove();
            });
        }
    }
    deleteInput();

})(window, document);