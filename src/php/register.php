<?php 
	// 获取 POST 请求传递的参数
	$username = $_POST["username"];
	$password = $_POST["password"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	/* 将表单中提交的用户注册信息保存到数据库中 */
	echo "<meta charset='utf-8'>";
	// 建立连接
	$conn = mysql_connect("localhost:3306", "root", "");
	if (!$conn)
		die ("连接失败：" . mysql_error());
	// 选择数据库
	mysql_select_db("h51801");
	// 设置读写库字符编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	// 创建SQL语句
	$sql = "INSERT INTO users (username, password, phone, email) VALUES ('$username', '$password', '$phone', '$email')";
	// 执行SQL语句
	$result = mysql_query($sql);
	// 判断执行结果
	if ($result)
		echo "<script>alert('用户注册成功'); location='login.html';</script>";
	else
		echo "用户注册失败" . mysql_error();
	// 关闭连接
	mysql_close();
 ?>