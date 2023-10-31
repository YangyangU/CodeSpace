package com.qst.chapter08.exercise02;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

public class BookDemo {
	public static void main(String[] args) {
		// 创建三个Book对象
		Book book1 = new Book("JavaSE基础", 55, new Date(114, 9, 15));
		Book book2 = new Book("JavaSE高级", 66, new Date(115, 11, 12));
		Book book3 = new Book("JavaWeb", 44, new Date(115, 2, 21));

		// 创建一个泛型集合，用于添加图书对象
		List<Book> list = new ArrayList<Book>();

		// 添加图书
		list.add(book1);
		list.add(book2);
		list.add(book3);

		// 使用默认的方法进行排序（自动调用Book中的compareTo方法排序）
		list.sort(null);

		// 输出泛型集合中图书对象的属性
		for (Book book : list) {
			System.out.println("书名：" + book.getName() + "，定价："
					+ book.getPrice() + "，出版日期：" + book.getDate());
		}
	}
}
