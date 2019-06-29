/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

import java.util.Locale;
import java.util.Scanner;
/**
 *
 * @author DINA E JUNIOR
 */
public class main {
    
     public static void main(String[] args) {
         
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
     
            rent[] vt = new rent[10];

            System.out.print("How many rooms will be rented? ");
            int rent = sc.nextInt();
            
        for(int i = 0; i < rent; i++){
            int countable = 1 + i;
            System.out.println("Rent #" + countable + ":");
            
            System.out.print("name: ");
            sc.nextLine();
                String name = sc.nextLine();
                
            System.out.print("Email: ");            
                String email = sc.nextLine();
                
            System.out.print("Room: ");
            int room = sc.nextInt();
            System.out.println();
            
            vt[room] = new rent(name,email);
        }
            System.out.println();
            System.out.println("Busy rooms: ");
        for(int i = 0; i < 10; i++ ){
            if(vt[i]!= null){
            System.out.println(i + ": " + vt[i].getName() + ", " +vt[i].getEmail());
                }
                }
        
}
}