window.addEventListener('DOMContentLoaded',()=>{
	// 没设置身份证
	if (localStorage.getItem('idNum')==null||localStorage.getItem('birth')==null) {
		document.querySelector('button#confirmBtn').addEventListener('click',(e)=>{
			e.preventDefault();
			const idNum=document.querySelector('input#idNum').value;
			// 出于良心，这里仅验证长度
			// const pattern=/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
			// pattern.test(idNum)?alert('身份证号码合法'):alert('身份证号码不合法');
			if(idNum.length==18&&!(document.querySelector('input#name').value.length<2)||!(document.querySelector('input#name').value.length>4)){
				localStorage.setItem('idNum',idNum);
				localStorage.setItem('birth',idNum.substr(6,4));
				location.reload();
			}else{
				alert('身份证或姓名不合法！');
			}
		});
	}else{
		const age=new Date().getFullYear()- parseInt(localStorage.getItem('birth'));
		const day=new Date().getDay();
		const time=new Date().getHours();
		if (age<18) {
			// 未成年
			if(day!=0&&day!=6&&day!=5){
				//非周56日
				location.href="blocked.html";
			}else{
				//非8点
				if(time!=20){
					location.href="blocked.html";
				}else{
					location.href='../tapToStart/index.html';
				}
			}
		}else{
			location.href='../tapToStart/index.html';
		}
	}
});