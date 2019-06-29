/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lista;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * @author DINA E JUNIOR
 */
public class Lista {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        List < String > List = new ArrayList<>();
        
        List.add("Geraldo");
        List.add("Leila");
        List.add("George");
        List.add("Maria");
        List.add(2,"Marco");
        List.add("Xico");
        List.add("Xayah");
        List.add("Josefa");
        List.add("Helena");
       
        
        System.out.println(List.size());
        for(String x :List){
            System.out.println(x);
        }
        System.out.println("---------------------------------------");
        List.removeIf(x -> x.charAt(0) == 'X');
        for(String x :List){
            System.out.println(x);
    }
        System.out.println("---------------------------------------");
        System.out.println("Index of Leila: " + List.indexOf("Leila"));
        System.out.println("Index if Jabuticaba: " + List.indexOf("Jabuticaba"));
        
        System.out.println("---------------------------------------");
        List <String> result = List.stream().filter(x -> x.charAt(0) == 'M').collect(Collectors.toList());
        for (String x : result){
            System.out.println(x);
        }
         System.out.println("---------------------------------------");
         String name = List.stream().filter(x -> x.charAt(0) == 'G').findFirst().orElse(null);
         System.out.println(name);
         
}   
}