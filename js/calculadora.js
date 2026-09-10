const PLANS = {
    rosa: {
        color: '#A91079',
        soft: '#A9107914',
        tiers: [
            { max: 50, price: 20, label: '< 50' },
            { max: 350, price: 15, label: '50 – 350' },
            { max: Infinity, price: 10, label: '350+' },
        ],
    },
    violeta: {
        color: '#8602BA',
        soft: '#8602BA14',
        tiers: [
            { max: 50, price: 28, label: '< 50' },
            { max: 350, price: 20, label: '50 – 350' },
            { max: Infinity, price: 14, label: '350+' },
        ],
    },
};

const ANNUAL_DISCOUNT = 0.15;
const SLIDER_MAX = 500;

const state = {
    plan: 'rosa',
    period: 'mensal',
    headcount: 120,
};

const els = {
    slider: document.getElementById('headcountSlider'),
    bubble: document.getElementById('bubble'),
    headcountLabel: document.getElementById('headcountLabel'),
    resultLabel: document.getElementById('resultLabel'),
    resultValue: document.getElementById('resultValue'),
    tabs: document.querySelectorAll('.tab'),
    toggles: document.querySelectorAll('.toggle-option'),
    root: document.documentElement,
};

function currencyBRL(value) {
    return value.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
}

function getTier(headcount, tiers) {
    return tiers.find(t => headcount <= t.max) || tiers[tiers.length - 1];
}

function render() {
    const plan = PLANS[state.plan];
    const tier = getTier(state.headcount, plan.tiers);
    const monthly = state.headcount * tier.price;
    const total = state.period === 'anual' ? Math.round(monthly * (1 - ANNUAL_DISCOUNT)) : monthly;

    // slider fill + bubble position
    const pct = ((state.headcount - 1) / (SLIDER_MAX - 1)) * 100;
    els.slider.style.setProperty('--fill', pct + '%');
    els.bubble.style.left = pct + '%';
    els.bubble.textContent = state.headcount >= SLIDER_MAX ? '500+' : state.headcount;

    // labels
    els.headcountLabel.textContent =
        (state.headcount >= SLIDER_MAX ? '500+' : state.headcount) + ' colaboradores';

    els.resultLabel.textContent =
        'Valor estimado (' + (state.period === 'anual' ? 'anual, por mês' : 'mensal') + ')';
    els.resultValue.textContent = 'R$ ' + currencyBRL(total) + ' /mês';

    // theme
    els.root.style.setProperty('--accent', plan.color);
    els.root.style.setProperty('--accent-soft', plan.soft);
}

els.slider.addEventListener('input', (e) => {
    state.headcount = Number(e.target.value);
    render();
});

els.tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        els.tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        state.plan = tab.dataset.plan;
        render();
    });
});

els.toggles.forEach(opt => {
    opt.addEventListener('click', () => {
        els.toggles.forEach(o => { o.classList.remove('active'); o.setAttribute('aria-selected', 'false'); });
        opt.classList.add('active');
        opt.setAttribute('aria-selected', 'true');
        state.period = opt.dataset.period;
        render();
    });
});

render();

