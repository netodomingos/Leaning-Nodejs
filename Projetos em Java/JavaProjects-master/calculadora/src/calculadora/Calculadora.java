package calculadora;

import java.util.Scanner;

/**
 *
 * @author Geraldo Domingos 
 */
public class Calculadora {
    public static void main (String []args){
        Scanner sc = new Scanner(System.in);
        int pN = 0;
        int sN = 0;
        String sinal;
        int result = 0;
        
        System.out.println("");
        System.out.println("Calculadora do Geraldinho :)");
        System.out.println("----------------------------");
        System.out.println("|                          |");
        System.out.println("----------------------------");
        System.out.println("|    [.. 1  2  3  + ..]    |");
        System.out.println("|    [.. 4  5  6  - ..]    |");
        System.out.println("|    [.. 7  8  9  x ..]    |");
        System.out.println("|    [.. #  0  =  / ..]    |");
        System.out.println("----------------------------");
        System.out.println("");
        System.out.print("Digite o primero número: ");
        
        pN = sc.nextInt();
        System.out.println("");
        System.out.println("Calculadora do Geraldinho :)");
        System.out.println("----------------------------");
        System.out.println("| "+ pN + "                 ");
        System.out.println("----------------------------");
        System.out.println("|    [.. 1  2  3  + ..]    |");
        System.out.println("|    [.. 4  5  6  - ..]    |");
        System.out.println("|    [.. 7  8  9  x ..]    |");
        System.out.println("|    [.. #  0  =  / ..]    |");
        System.out.println("----------------------------");
        System.out.println("");
        System.out.print("Agora digite o sinal correspondente à operação desejada: ");
        sinal = sc.next();
        
        
        if("+".equals(sinal) || "-".equals(sinal) || "x".equals(sinal) || "/".equals(sinal)){
        System.out.println("");
        System.out.println("Calculadora do Geraldinho :)");
        System.out.println("----------------------------");
        System.out.println("|  "+ pN +" "+ sinal + "    ");
        System.out.println("----------------------------");
        System.out.println("|    [.. 1  2  3  + ..]    |");
        System.out.println("|    [.. 4  5  6  - ..]    |");
        System.out.println("|    [.. 7  8  9  x ..]    |");
        System.out.println("|    [.. #  0  =  / ..]    |");
        System.out.println("----------------------------");
        System.out.println("");
        System.out.print("Digite o segundo número: ");
        sN = sc.nextInt();
        System.out.println("");
        System.out.println("Calculadora do Geraldinho :)");
        System.out.println("----------------------------");
        System.out.println("|  "+ pN +"  "+sinal+"  " +sN+" ");
        System.out.println("----------------------------");
        System.out.println("|    [.. 1  2  3  + ..]    |");
        System.out.println("|    [.. 4  5  6  - ..]    |");
        System.out.println("|    [.. 7  8  9  x ..]    |");
        System.out.println("|    [.. #  0  =  / ..]    |");
        System.out.println("----------------------------");
        System.out.println("");
        
        Repositorio g = new Repositorio(pN, sN);
        
        if("+".equals(sinal)){
        System.out.println("");
        System.out.println("Calculadora do Geraldinho :)");
        System.out.println("----------------------------");
        System.out.println("|  "+ pN +"  "+sinal+"  " +sN+" = " + g.Soma());
        System.out.println("----------------------------");
        System.out.println("|    [.. 1  2  3  + ..]    |");
        System.out.println("|    [.. 4  5  6  - ..]    |");
        System.out.println("|    [.. 7  8  9  x ..]    |");
        System.out.println("|    [.. #  0  =  / ..]    |");
        System.out.println("----------------------------");
        System.out.println("");
        }
        else if ("-".equals(sinal)){
        System.out.println("");
        System.out.println("Calculadora do Geraldinho :)");
        System.out.println("----------------------------");
        System.out.println("|  "+ pN +"  "+sinal+"  " +sN+" = " + g.Subtração());
        System.out.println("----------------------------");
        System.out.println("|    [.. 1  2  3  + ..]    |");
        System.out.println("|    [.. 4  5  6  - ..]    |");
        System.out.println("|    [.. 7  8  9  x ..]    |");
        System.out.println("|    [.. #  0  =  / ..]    |");
        System.out.println("----------------------------");
        System.out.println("");
        }
        else if("x".equals(sinal)){
        System.out.println("");
        System.out.println("Calculadora do Geraldinho :)");
        System.out.println("----------------------------");
        System.out.println("|  "+ pN +"  "+sinal+"  " +sN+" = " + g.multiplicação());
        System.out.println("----------------------------");
        System.out.println("|    [.. 1  2  3  + ..]    |");
        System.out.println("|    [.. 4  5  6  - ..]    |");
        System.out.println("|    [.. 7  8  9  x ..]    |");
        System.out.println("|    [.. #  0  =  / ..]    |");
        System.out.println("----------------------------");
        System.out.println("");
        }
        else if("/".equals(sinal)){
        System.out.println("");
        System.out.println("Calculadora do Geraldinho :)");
        System.out.println("----------------------------");
        System.out.println("|  "+ pN +"  "+sinal+"  " +sN+" = " + g.divisão());
        System.out.println("----------------------------");
        System.out.println("|    [.. 1  2  3  + ..]    |");
        System.out.println("|    [.. 4  5  6  - ..]    |");
        System.out.println("|    [.. 7  8  9  x ..]    |");
        System.out.println("|    [.. #  0  =  / ..]    |");
        System.out.println("----------------------------");
        System.out.println("");
        }
        }else {
            System.out.println("Você ta trollando filha da puta!");
        }
        
    }
}

