<?php 
	// 建立连接
	$conn = mysql_connect("localhost:3306", "root", "");
	if (!$conn)
		die ("连接失败：" . mysql_error());
	// 选择数据库
	mysql_select_db("h51801");
	// 设置读写库字符编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
 ?>