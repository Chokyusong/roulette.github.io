const correctPassword = "2565"; // 여기에 원하는 4자리 비밀번호를 설정하세요

function checkPassword() {
    const inputPassword = document.getElementById('password').value;
    if(inputPassword === correctPassword) {
        window.location.href = './v2/roulette.html'; // 비밀번호가 올바르면 roulette.html로 이동
    } else {
        alert('비밀번호가 틀렸습니다. 다시 시도해주세요.');
    }
}
