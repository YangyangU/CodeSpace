package com.qst.chapter08.exercise01;
public class ListTest {
	public static void main(String[] args) {
		// 创建用于存储整数的NumList集合对象
		NumList numList = new NumList();
		numList.scann();
		// 对集合进行默认方法的排序
		numList.getList().sort(null);

		// 输出集合中的整数
		for (int i : numList.getList()) {
			System.out.print(i + " ");
		}
	}
}
