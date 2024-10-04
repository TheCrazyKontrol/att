// Classe Pai
class Animal {
    private String nome;
    private int idade;
    
    // Construtor
    public Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Getters e Setters
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public int getIdade() {
        return idade;
    }
    
    public void setIdade(int idade) {
        this.idade = idade;
    }
    
    // Método comum
    public void fazerSom() {
        System.out.println("O animal está fazendo som");
    }
}

// Classe Herdeira (Polimorfismo e Herança)
class Cachorro extends Animal {
    // Construtor usando super para herdar da classe Animal
    public Cachorro(String nome, int idade) {
        super(nome, idade);
    }

    // Polimorfismo: Sobrescrevendo o comportamento do método
    @Override
    public void fazerSom() {
        System.out.println("O cachorro está latindo");
    }
}

// Classe Herdeira (Outro exemplo de Polimorfismo)
class Gato extends Animal {
    // Construtor usando super para herdar da classe Animal
    public Gato(String nome, int idade) {
        super(nome, idade);
    }

    // Polimorfismo: Sobrescrevendo o comportamento do método
    @Override
    public void fazerSom() {
        System.out.println("O gato está miando");
    }
}

public class Main {
    public static void main(String[] args) {
        // Instanciando objetos
        Cachorro cachorro = new Cachorro("Rex", 5);
        Gato gato = new Gato("Miau", 3);

        // Usando getters para acessar os atributos encapsulados
        System.out.println("Nome do cachorro: " + cachorro.getNome());
        System.out.println("Idade do gato: " + gato.getIdade());

        // Polimorfismo: Chamada dos métodos sobrescritos
        cachorro.fazerSom();
        gato.fazerSom();
    }
}
