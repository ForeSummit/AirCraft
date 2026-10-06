const quizData = [
    // Theme 0: 비슷한 기종 1:1 디테일 비교
    [
        { img: "images/t0_q1.jpg", options: ["F-15E", "Su-27", "F-14", "MiG-29"], answer: 0, reason: "이 기체는 공기흡입구의 형태와 쌍수직 미익이 특징인 미국 F-15E 스트라이크 이글입니다." },
        { img: "images/t0_q2.jpg", options: ["라팔", "유로파이터 타이푼", "그리펜", "미라주 2000"], answer: 1, reason: "카나드(귀날개)가 주익에서 멀리 떨어져 기수 쪽에 위치한 것은 유로파이터 타이푼의 전형적인 특징입니다." },
        { img: "images/t0_q3.jpg", options: ["Su-57", "F-22", "J-20", "YF-23"], answer: 1, reason: "다이아몬드형 주익과 2차원 추력편향 노즐을 가진 미국의 F-22 랩터입니다." },
        { img: "images/t0_q4.jpg", options: ["F-16", "F-2", "FA-50", "J-10"], answer: 0, reason: "단발 엔진과 기수 아래의 공기흡입구, 버블 캐노피를 가진 F-16 파이팅 팰콘입니다." },
        { img: "images/t0_q5.jpg", options: ["라팔", "유로파이터 타이푼", "J-10", "그리펜"], answer: 0, reason: "카나드가 주익과 가깝게 위치하고 고정식 공중급유 프로브가 있는 프랑스의 라팔입니다." },
        { img: "images/t0_q6.jpg", options: ["F/A-18E", "F/A-18C", "EA-18G", "F-15K"], answer: 0, reason: "각진 공기흡입구(인테이크)를 통해 기존 C/D형과 구분되는 F/A-18E 슈퍼 호넷입니다." },
        { img: "images/t0_q7.jpg", options: ["A-10", "Su-25", "야크-130", "알파젯"], answer: 0, reason: "엔진이 동체 후방 상단에 위치하고 거대한 기총을 탑재한 A-10 썬더볼트 II입니다." },
        { img: "images/t0_q8.jpg", options: ["C-17", "C-130", "A400M", "C-5"], answer: 0, reason: "4발 제트 엔진과 T자형 꼬리날개를 가진 미국의 C-17 글로브마스터 III입니다." },
        { img: "images/t0_q9.jpg", options: ["F-35A", "F-35B", "F-35C", "F-22"], answer: 0, reason: "기총이 내장되어 있고(좌측 날개 뿌리) 캐노피 형태가 특징인 공군용 F-35A입니다." },
        { img: "images/t0_q10.jpg", options: ["KF-21", "F-35", "F-22", "Su-57"], answer: 0, reason: "반매립 무장창과 4.5세대 스텔스 형상을 띠고 있는 한국의 KF-21 보라매입니다." }
    ],
    // Theme 1: 함재기 및 해상초계기 전용
    [
        { img: "images/t1_q1.jpg", options: ["P-8 포세이돈", "P-3 오라이온", "E-2 호크아이", "C-2 그레이하운드"], answer: 0, reason: "보잉 737을 기반으로 제작된 제트 엔진 해상초계기 P-8 포세이돈입니다." },
        { img: "images/t1_q2.jpg", options: ["E-2D", "E-3", "E-737", "P-8"], answer: 0, reason: "원반형 레이더 돔을 얹고 있으며 항모 탑재가 가능한 쌍발 터보프롭 조기경보기 E-2D 어드밴스드 호크아이입니다." },
        { img: "images/t1_q3.jpg", options: ["F-35C", "F-35B", "F-35A", "F/A-18E"], answer: 0, reason: "항모 이착륙을 위해 주익과 미익의 면적이 가장 넓은 해군용 스텔스기 F-35C입니다." },
        { img: "images/t1_q4.jpg", options: ["F/A-18F", "EA-18G", "F-14", "F-35C"], answer: 0, reason: "복좌형(2인승) 구조와 항모 탑재용 테일훅을 갖춘 미 해군 주력기 F/A-18F 슈퍼 호넷입니다." },
        { img: "images/t1_q5.jpg", options: ["C-2 그레이하운드", "V-22 오스프리", "E-2 호크아이", "P-3 오라이온"], answer: 0, reason: "항모 수송 임무(COD)를 수행하며 레이더 돔이 없는 쌍발 터보프롭기 C-2 그레이하운드입니다." },
        { img: "images/t1_q6.jpg", options: ["CMV-22B", "CH-53K", "SH-60", "C-2"], answer: 0, reason: "틸트로터 방식을 사용하여 C-2를 대체하는 미 해군의 항모수송기 CMV-22B 오스프리입니다." },
        { img: "images/t1_q7.jpg", options: ["P-3 오라이온", "P-8 포세이돈", "C-130", "E-3"], answer: 0, reason: "4발 터보프롭 엔진과 기수 아래 자기이상탐지기(MAD)를 갖춘 해상초계기 P-3 오라이온입니다." },
        { img: "images/t1_q8.jpg", options: ["F-14 톰캣", "F/A-18", "F-4 팬텀", "A-6 인트루더"], answer: 0, reason: "가변익(움직이는 날개)이 특징인 과거 미 해군의 상징적인 함재기 F-14 톰캣입니다." },
        { img: "images/t1_q9.jpg", options: ["A-6 인트루더", "EA-6B 프라울러", "F-14", "S-3 바이킹"], answer: 0, reason: "복좌 병렬식 조종석과 둥근 기수를 가진 미 해군의 퇴역 공격기 A-6 인트루더입니다." },
        { img: "images/t1_q10.jpg", options: ["S-3 바이킹", "A-6", "C-2", "E-2"], answer: 0, reason: "과거 미 해군 항모에서 운용된 제트 대잠초계기 S-3 바이킹입니다." }
    ],
    // Theme 2: 스텔스기 / 차세대 기체 식별
    [
        { img: "images/t2_q1.jpg", options: ["F-22", "F-35", "Su-57", "J-20"], answer: 0, reason: "공기 흡입구가 동체 옆에 위치하고 2차원 추력편향 노즐을 가진 미국의 공중우세 스텔스기 F-22입니다." },
        { img: "images/t2_q2.jpg", options: ["B-2 스피릿", "B-21 레이더", "F-117", "RQ-170"], answer: 0, reason: "특유의 전익기(Flying Wing) 형태를 띠는 미국의 전략 스텔스 폭격기 B-2 스피릿입니다." },
        { img: "images/t2_q3.jpg", options: ["B-21 레이더", "B-2 스피릿", "RQ-180", "X-47B"], answer: 0, reason: "B-2와 유사하지만 더 밝은 도장과 단순화된 후방 라인을 가진 차세대 스텔스 폭격기 B-21 레이더입니다." },
        { img: "images/t2_q4.jpg", options: ["F-117 나이트호크", "F-22", "YF-23", "B-2"], answer: 0, reason: "각진 다면체 형상으로 설계된 세계 최초의 실용 스텔스 공격기 F-117 나이트호크입니다." },
        { img: "images/t2_q5.jpg", options: ["F-35A", "F-35B", "F-35C", "KF-21"], answer: 0, reason: "단발 엔진에 DSI(다이버터리스 초음속 흡입구)를 채택한 다목적 스텔스기 F-35A입니다." },
        { img: "images/t2_q6.jpg", options: ["RQ-4 글로벌 호크", "MQ-9 리퍼", "X-47B", "RQ-170"], answer: 0, reason: "기수 부분이 둥글게 튀어나와 있고 매우 긴 날개를 가진 고고도 무인정찰기 RQ-4 글로벌 호크입니다." },
        { img: "images/t2_q7.jpg", options: ["X-47B", "RQ-170", "MQ-25", "nEUROn"], answer: 0, reason: "꼬리날개가 없는 가오리 형태의 미 해군 무인 전투기(UCAV) 실험기 X-47B입니다." },
        { img: "images/t2_q8.jpg", options: ["MQ-9 리퍼", "MQ-1 프레데터", "RQ-4", "TB2 바이락타르"], answer: 0, reason: "기수 아래의 센서 터렛과 후방 프로펠러를 가진 대표적인 무인 공격기 MQ-9 리퍼입니다." },
        { img: "images/t2_q9.jpg", options: ["RQ-170 센티넬", "X-47B", "B-2", "RQ-4"], answer: 0, reason: "칸다하르의 야수로 불리며 스텔스 전익기 형상을 한 무인정찰기 RQ-170 센티넬입니다." },
        { img: "images/t2_q10.jpg", options: ["MQ-25 스팅레이", "X-47B", "RQ-4", "MQ-9"], answer: 0, reason: "미 해군 항모에서 운용하기 위해 개발 중인 무인 공중급유기 MQ-25 스팅레이입니다." }
    ],
    // Theme 3: 특정 임무기 (전자전기 등)
    [
        { img: "images/t3_q1.jpg", options: ["EA-18G 그라울러", "F/A-18F", "F-15E", "F-16CJ"], answer: 0, reason: "날개 끝(윙팁)과 무장 장착대에 미사일 대신 재밍 포드를 장착한 전자전기 EA-18G 그라울러입니다." },
        { img: "images/t3_q2.jpg", options: ["E-737 피스아이", "E-3 센트리", "P-8 포세이돈", "E-2D"], answer: 0, reason: "동체 상부에 길쭉한 막대 형태의 위상배열 레이더(MESA)를 얹은 조기경보통제기 E-737입니다." },
        { img: "images/t3_q3.jpg", options: ["E-3 센트리", "E-737", "KC-135", "RC-135"], answer: 0, reason: "보잉 707 동체에 거대한 원반형 레이더(로토돔)를 얹고 있는 조기경보기 E-3 센트리입니다." },
        { img: "images/t3_q4.jpg", options: ["RC-135 리벳 조인트", "E-3", "KC-135", "P-8"], answer: 0, reason: "기수 양옆과 동체 아래에 다양한 안테나가 돌출된 형태의 신호정보 정찰기 RC-135입니다." },
        { img: "images/t3_q5.jpg", options: ["KC-46 페가수스", "KC-135", "A330 MRTT", "KC-10"], answer: 0, reason: "보잉 767 기반으로 후미에 공중급유용 플라잉 붐을 장착한 차세대 공중급유기 KC-46입니다." },
        { img: "images/t3_q6.jpg", options: ["A330 MRTT", "KC-46", "KC-135", "KC-10"], answer: 0, reason: "한국 공군(시그너스)을 비롯한 여러 국가에서 운용하는 에어버스 기반의 다목적 공중급유기 A330 MRTT입니다." },
        { img: "images/t3_q7.jpg", options: ["AC-130", "C-130", "C-17", "A-10"], answer: 0, reason: "기체 측면에 야포와 기관포 등 중무장을 장착한 건십(Gunship) AC-130입니다." },
        { img: "images/t3_q8.jpg", options: ["EC-130 컴패스 콜", "C-130", "AC-130", "MC-130"], answer: 0, reason: "동체 측면과 꼬리에 대형 안테나 패널이 장착된 전자전 특수임무기 EC-130입니다." },
        { img: "images/t3_q9.jpg", options: ["U-2 드래곤 레이디", "SR-71", "RQ-4", "B-57"], answer: 0, reason: "매우 긴 날개와 특이한 자전거식 랜딩기어를 가진 고고도 유인 정찰기 U-2입니다." },
        { img: "images/t3_q10.jpg", options: ["SR-71 블랙버드", "U-2", "F-117", "B-1B"], answer: 0, reason: "마하 3 이상의 초음속으로 비행할 수 있는 검은색의 전략정찰기 SR-71입니다." }
    ]
];

let currentTheme = -1;
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    const themeButtons = document.querySelectorAll(".theme-btn");
    const quizSection = document.getElementById("quiz-section");
    const themeSelection = document.getElementById("theme-selection");
    const questionTitle = document.getElementById("question-title");
    const aircraftImage = document.getElementById("aircraft-image");
    const optionsContainer = document.getElementById("options-container");
    const feedback = document.getElementById("feedback");
    const feedbackText = document.getElementById("feedback-text");
    const nextBtn = document.getElementById("next-btn");
    const resultSection = document.getElementById("result-section");
    const finalScore = document.getElementById("final-score");
    const restartBtn = document.getElementById("restart-btn");

    themeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            currentTheme = parseInt(e.target.getAttribute("data-theme"));
            currentQuestionIndex = 0;
            score = 0;
            themeSelection.classList.add("hidden");
            quizSection.classList.remove("hidden");
            loadQuestion();
        });
    });

    function loadQuestion() {
        const question = quizData[currentTheme][currentQuestionIndex];
        questionTitle.textContent = `문제 ${currentQuestionIndex + 1} / 10`;
        aircraftImage.src = question.img;
        
        optionsContainer.innerHTML = "";
        feedback.classList.add("hidden");

        question.options.forEach((opt, index) => {
            const btn = document.createElement("button");
            btn.textContent = opt;
            btn.addEventListener("click", () => checkAnswer(index, btn));
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selectedIndex, btnElement) {
        const question = quizData[currentTheme][currentQuestionIndex];
        const buttons = optionsContainer.querySelectorAll("button");
        buttons.forEach(btn => btn.disabled = true);

        if (selectedIndex === question.answer) {
            btnElement.classList.add("correct");
            score++;
            feedbackText.textContent = "정답입니다! 🎉 " + question.reason;
            feedbackText.className = "correct-text";
        } else {
            btnElement.classList.add("incorrect");
            buttons[question.answer].classList.add("correct");
            feedbackText.textContent = "오답입니다. 😢 " + question.reason;
            feedbackText.className = "incorrect-text";
        }
        
        feedback.classList.remove("hidden");
        feedback.className = selectedIndex === question.answer ? "correct" : "incorrect";
    }

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < 10) {
            loadQuestion();
        } else {
            quizSection.classList.add("hidden");
            resultSection.classList.remove("hidden");
            finalScore.textContent = `총 10문제 중 ${score}문제를 맞추셨습니다!`;
        }
    });

    restartBtn.addEventListener("click", () => {
        resultSection.classList.add("hidden");
        themeSelection.classList.remove("hidden");
    });
});
