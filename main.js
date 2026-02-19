const prayerInput = document.getElementById('prayer-input');
const submitPrayer = document.getElementById('submit-prayer');
const newPrayer = document.getElementById('new-prayer');
const responseArea = document.getElementById('response-area');
const bibleVerse = document.getElementById('bible-verse');
const verseCitation = document.getElementById('verse-citation');
const verseContext = document.getElementById('verse-context');

const bibleData = {
    '사랑': {
        verse: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라',
        citation: '요한복음 3:16',
        context: '혹시 스스로가 사랑받을 가치가 없다고 느껴지시나요? 이 말씀은 세상 그 무엇과도 비교할 수 없는 하나님의 크신 사랑을 보여줍니다. 하나님께서는 당신을 너무나도 사랑하셔서, 가장 귀한 아들 예수님을 우리에게 보내주셨습니다. 이 사실은 당신이 얼마나 소중한 존재인지를 증명합니다. 하나님의 사랑은 우리의 어떠한 조건이나 자격과 상관없이 주어지는 선물입니다. 그 사랑을 믿고 받아들일 때, 우리는 모든 죄와 절망에서 벗어나 영원한 생명을 누릴 수 있습니다.'
    },
    '믿음': {
        verse: '믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니',
        citation: '히브리서 11:1',
        context: '눈앞의 현실이 캄캄하고 아무것도 보이지 않아 답답하신가요? 이 말씀은 믿음이 바로 그 보이지 않는 것을 보게 하는 능력이라고 가르쳐줍니다. 믿음은 막연한 기대가 아니라, 하나님의 약속이 반드시 이루어질 것을 확신하는 것입니다. 지금 당장은 길이 보이지 않더라도, 하나님께서 당신을 위해 가장 좋은 길을 예비하고 계심을 믿으십시오. 그 믿음이 당신의 발걸음을 인도하고, 불가능해 보이는 상황 속에서도 하나님의 살아계심을 경험하게 할 것입니다.'
    },
    '소망': {
        verse: '우리가 소망으로 구원을 얻었으매 보이는 소망이 소망이 아니니 보는 것을 누가 바라리요',
        citation: '로마서 8:24',
        context: '세상의 것들에서 희망을 찾다가 지치고 실망하셨나요? 이 말씀은 우리의 소망이 눈에 보이는 세상에 있지 않다고 말합니다. 세상의 소망은 변하고 사라지지만, 하나님께서 주시는 소망은 영원하며 결코 우리를 실망시키지 않습니다. 이 소망은 고난 중에도 우리를 굳건히 붙들어주며, 마침내 우리를 구원으로 이끕니다. 지금의 어려움은 장차 우리에게 나타날 영광과 비교할 수 없음을 기억하고, 변치 않는 하나님의 나라를 소망하며 위로를 얻으시길 바랍니다.'
    }
};

submitPrayer.addEventListener('click', () => {
    const prayerText = prayerInput.value;

    if (!prayerText.trim()) {
        return;
    }

    let foundKeyword = null;

    for (const keyword in bibleData) {
        if (prayerText.includes(keyword)) {
            foundKeyword = keyword;
            break;
        }
    }

    if (foundKeyword) {
        const data = bibleData[foundKeyword];
        bibleVerse.textContent = `"${data.verse}"`;
        verseCitation.textContent = data.citation;
        verseContext.textContent = data.context;
    } else {
        const keywords = Object.keys(bibleData);
        const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
        const data = bibleData[randomKeyword];
        bibleVerse.textContent = `"${data.verse}"`;
        verseCitation.textContent = data.citation;
        verseContext.textContent = data.context;
    }

    responseArea.classList.remove('hidden');
    newPrayer.classList.remove('hidden');
    submitPrayer.classList.add('hidden');
    prayerInput.value = '';
});

newPrayer.addEventListener('click', () => {
    responseArea.classList.add('hidden');
    newPrayer.classList.add('hidden');
    submitPrayer.classList.remove('hidden');
});