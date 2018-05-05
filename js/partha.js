function registrationcall()
{
	window.location.href="login.html";
}
function validate() {
	var element = document.getElementById('input-field-0');
	element.value = element.value.replace(/[^a-zA-Z]+/, '');
}
function validate1() {
	var element = document.getElementById('input-field-1');
	element.value = element.value.replace(/[^a-zA-Z]+/, '');
}
function num(e)
{
	var code = (e.which) ? e.which : e.keyCode;
	if (code > 31 && (code < 48 || code > 57)) {
		e.preventDefault();
	}
}

function login_open()
{
	window.location.href="login.html";
}

function customer()
{
	window.location.href="customer.php";
}
function conform()
{
	confirm("you don't want to delete this record ?");
	window.location.href="delete-customer.php";
}