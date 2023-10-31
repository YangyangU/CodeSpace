package com.qst.chapter08.exercise01;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class NumList {
	// 定义一个集合，用于存放从键盘接收的随机数
	private  List<Integer> list = new ArrayList<Integer>();
	public List<Integer> getList() {
		return list;
	}
	public void setList(List<Integer> list) {
		this.list = list;
	}
	// 接收键盘输入的整数
	public void scann() {
		System.out.println("请输入若干个整数，输入-1结束输入：");
		Scanner scanner = new Scanner(System.in);
		int num;
		while(true){
			num = scanner.nextInt();
			if (num == -1) {// 输入-1，停止接收整数
				break;
			}
			list.add(num);
		}
		scanner.close();
	}
}
