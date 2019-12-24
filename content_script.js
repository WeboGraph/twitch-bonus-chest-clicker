function btnClick (el) {
    const delay = Math.ceil(Math.random() * 5) * 1e3;

    setTimeout(
        () => el.click(),
        delay
    );
}

function mutationObserverCallback (mutations) {
    for (let { target } of mutations) {
        if (target) {
            const btns = target.querySelectorAll('button');
            btns.forEach(btnClick);
        }
    }
}

const mo = new MutationObserver(mutationObserverCallback);

function registerTrigger () {
    const cps_bc = document.querySelector('.community-points-summary > *:last-child');

    if (cps_bc) {
        mo.observe(cps_bc, {childList: true, subtree: true});
        console.log('Automatic clicker started!');
    } else {
        setTimeout(registerTrigger, 3e3);
    }
};

window.onload = registerTrigger;
