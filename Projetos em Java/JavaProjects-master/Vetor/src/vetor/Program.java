/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vetor;


import java.util.Locale;
import java.util.Scanner;


/**
 *
 * @author DINA E JUNIOR
 */
public class Program {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite o numero dos produtos: ");
        int numeroDeProdutos = sc.nextInt();
       
        System.out.println();
        
        product[] vt = new product[numeroDeProdutos];  // Inicalização do Vetor
        System.out.println("Agora digite o produto e o seu respectivo preço:");
        for (int i = 0; i < vt.length; i++){
            sc.nextLine();
            String name = sc.nextLine();
            double price = sc.nextDouble();
            vt[i] = new product(name,price);
        }
        
        double soma = 0.0;
        for(int i = 0; i < vt.length; i++){
            soma += vt[i].getPrice();
        }
        
        double media = soma / vt.length;
        
        System.out.printf("AVERAGE PRICE: %.2f%n", media);
    }
    
}
