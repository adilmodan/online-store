const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

function login() {
			var x = document.getElementById("login-email").value;
			alert("Welcome back, " + x + "!");
		}

function signup() {
			var x = document.getElementById("signup-email").value;
			alert("Welcome " + x + "!");
		}