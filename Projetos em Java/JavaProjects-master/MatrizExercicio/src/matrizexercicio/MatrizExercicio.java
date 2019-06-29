package matrizexercicio;

import java.util.Locale;
import java.util.Scanner;

/**
 *
 * @author Geraldo Domingos
 */
public class MatrizExercicio {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner sc = new Scanner(System.in);
        Locale.setDefault(Locale.US);
        // CODE
        int linha, coluna,ocorrencia;
        
        
        
        System.out.print("Digite o número de LINHAS da Matriz: ");
        linha = sc.nextInt();
        System.out.print("Digite a quantidade de COLUNAS da matriz: ");
        coluna = sc.nextInt();
        
        int [][] matriz = new int[linha][coluna]; // Instaciação da Matriz
        System.out.println("");
        System.out.println("Digite os números que compõe a matriz: ");
        for(int lin = 0; lin < matriz.length; lin++){
            for(int coll = 0; coll < matriz[lin].length; coll++){
                matriz[lin][coll] = sc.nextInt();
            }
        }
        System.out.println("");
        System.out.print("Qual número deseja checar? ");
        ocorrencia = sc.nextInt();
        
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++){
                if(matriz[i][j] == ocorrencia){
                    System.out.println("posição: "+ i +"," + j +" :");
                    if(j > 0){
                        System.out.println("Esquerda: "+ matriz[i][j-1]);
                    }
                    if(i > 0){
                        System.out.println("Cima: "+ matriz[i-1][j]);
                    }
                    if(j < matriz[i].length-1){
                        System.out.println("Direita: "+ matriz[i][j+1]);
                    }
                    if(i < matriz.length-1){
                        System.out.println("Abaixo: "+ matriz[i+1][j]);
                    }
                }
            }
        }
        
        
        
        
    }
    
}
