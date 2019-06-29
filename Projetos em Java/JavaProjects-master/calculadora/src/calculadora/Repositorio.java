package calculadora;

/**
 *
 * @author Geraldo Domingos
 */
public class Repositorio {
    private int primeroNumero;
    private int SegundoNumero;

    public Repositorio(int primeroNumero, int SegundoNumero) {
        this.primeroNumero = primeroNumero;
        this.SegundoNumero = SegundoNumero;
    }

    public int getPrimeroNumero() {
        return primeroNumero;
    }

    public void setPrimeroNumero(int primeroNumero) {
        this.primeroNumero = primeroNumero;
    }

    public int getSegundoNumero() {
        return SegundoNumero;
    }

    public void setSegundoNumero(int SegundoNumero) {
        this.SegundoNumero = SegundoNumero;
    }
    
    public int Soma(){
        return this.primeroNumero + this.SegundoNumero;
    }
    public int Subtração(){
        return this.primeroNumero - this.SegundoNumero;
    }
    public int divisão(){
        return this.primeroNumero / this.SegundoNumero;
    }
    public int multiplicação(){
        return this.primeroNumero * this.SegundoNumero;
    }
}
