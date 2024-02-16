
	document.addEventListener('keydown', function(event) {
		if (event.ctrlKey && event.altKey && event.keyCode === 97) { // 숫자패드 1
			// '저장' 기능을 수행합니다.
			var data = document.querySelector('ul').innerHTML;
			var blob = new Blob([data], {type: 'text/html'});
			var url = URL.createObjectURL(blob);
			var a = document.createElement('a');
			a.href = url;
			a.download = 'listData.html';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
		if (event.ctrlKey && event.altKey && event.keyCode === 98) { // 숫자패드 2
			// 불러오기 기능을 수행합니다.
			document.getElementById('fileInput').click();
		}
	});
	document.getElementById('fileInput').addEventListener('change', function(e) {
		var file = e.target.files[0];
		if (!file) {
			console.log('파일이 선택되지 않았습니다.');
			return;
		}
		var reader = new FileReader();
		reader.onload = function(e) {
			// 파일의 내용을 웹 페이지에 로드합니다.
			document.querySelector('ul').innerHTML = e.target.result;
		};
		reader.onerror = function(e) {
			// 파일 읽기에 실패했을 때 오류를 콘솔에 출력합니다.
			console.error('파일을 읽는 도중 오류가 발생했습니다.',event);
		};
		reader.readAsText(file); // 파일을 텍스트 형식으로 읽습니다.
		});
