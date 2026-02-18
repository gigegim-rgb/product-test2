const prayerInput = document.getElementById('prayer-input');
const submitPrayer = document.getElementById('submit-prayer');
const responseArea = document.getElementById('response-area');
const bibleVerse = document.getElementById('bible-verse');
const verseCitation = document.getElementById('verse-citation');
const verseContext = document.getElementById('verse-context');

const bibleData = {
    '사랑': {
        verse: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라',
        citation: '요한복음 3:16',
        context: '이 말씀은 예수님께서 니고데모와 나누신 대화의 일부입니다. 하나님께서 죄인들을 위해 자신의 아들을 희생제물로 내어주실 만큼 큰 사랑을 베푸셨다는 것을 보여줍니다.'
    },
    '믿음': {
        verse: '믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니',
        citation: '히브리서 11:1',
        context: '믿음의 본질에 대해 설명하는 구절입니다. 아직 눈에 보이지 않더라도 하나님의 약속을 굳게 믿고 나아가는 것이 참된 믿음이라는 것을 가르쳐줍니다.'
    },
    '소망': {
        verse: '우리가 소망으로 구원을 얻었으매 보이는 소망이 소망이 아니니 보는 것을 누가 바라리요',
        citation: '로마서 8:24',
        context: '이 말씀은 우리가 가진 소망이 세상의 것들과는 다르다는 것을 보여줍니다. 눈에 보이는 것이 아니라, 하나님의 나라와 그의 의를 바라보는 것이 참된 소망이라는 것을 알려줍니다.'
    }
};

submitPrayer.addEventListener('click', () => {
    const prayerText = prayerInput.value;
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
        responseArea.classList.remove('hidden');
    } else {
        bibleVerse.textContent = '당신의 기도에 맞는 말씀을 찾지 못했습니다. 다른 표현으로 다시 시도해보세요.';
        verseCitation.textContent = '';
        verseContext.textContent = '';
        responseArea.classList.remove('hidden');
    }
});