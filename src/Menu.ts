import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";
import { Conta } from "./model/Conta";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { ContaController } from "./controller/ContaController";

export function main(){
    let opcao:number,agencia,tipo,saldo,limite,aniversario:number;
    let titular:string;
    let contas:ContaController = new ContaController();
    const tiposContas = ['Conta Corrente','Conta Poupanca'];


    while(true){
        console.log(colors.bg.black,colors.fg.yellow,
                    "*************************************************************");
        console.log("                                                             ");
        console.log("               BANCO  DO  BRASIL COM  Z                      ");                      
        console.log("                                                             ");
        console.log("*************************************************************");
        console.log("                                                             ");
        console.log("               1 - Criar Conta                               ");
        console.log("               2 - Listar todas as contas                    ");
        console.log("               3 - Buscar Conta por Numero                   ");
        console.log("               4 - Atualizar Dados da Conta                  ");
        console.log("               5 - Apagar Contas                             ");
        console.log("               6 - Sacar                                     ");
        console.log("               7 - Depositar                                 ");
        console.log("               8 - Transferir valores entre Contas           ");
        console.log("               9 - Sair                                      ");
        console.log("                                                             ");
        console.log("*************************************************************");
        console.log("                                                             ",
        colors.reset);
        console.log("Entre com a opção desejada:");
        opcao = readlinesync.questionInt("");
        
        if(opcao===9){
            console.log(colors.fg.greenstrong,
            "\nBanco do Brazil com Z - O seu Futuro comeca aqui!");
            sobre();
            console.log(colors.reset,"");
            process.exit(0);
        }
        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n",colors.reset);
                    console.log("Digite o Número da agencia");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da conta:");
                    titular = readlinesync.question("");

                    console.log("\nDigite o tipo da Conta:");
                    tipo = readlinesync.keyInSelect(tiposContas,"",{cancel:false})+1;

                    console.log("\nDigite o Saldo da Conta (R$):");
                    saldo = readlinesync.questionInt("");

                    
                 switch(tipo){
                    case 1:
                        console.log("Digite o limite da Conta(R$)");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(),agencia,tipo,titular,saldo,limite));
                        break;
                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança:");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(),agencia,tipo,titular,saldo,aniversario));
                        break;
                 }              
                    
                    KeyPress();
            break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as contas\n\n",colors.reset);
                    console.log("\"nCriar Contas\n");
                    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(),123,1,"joao da silva",1000,100.0);
                    contas.cadastrar(cc1);
                    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(),124,1,"Maria da Silva",2000,100.0);
                    contas.cadastrar(cc2);
                    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(),125,2,"Mariana dos Santos",4000,12);
                    contas.cadastrar(cp1);
                    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(),123,2,"Juliana Ramos",8000,15);
                    contas.cadastrar(cp2);
                    
                    contas.listarTodas();
                    KeyPress();
            break;
            case 3:
                 console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n",colors.reset);
                    KeyPress();
            break;
            case 4:
                 console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n",colors.reset);
                    KeyPress();
            break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n",colors.reset);
                    KeyPress();
            break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n",colors.reset);
                    KeyPress();
                    
            break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n",colors.reset);
            break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia entre Contas\n\n",colors.reset);
            break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!",colors.reset);
                break;
        }
    }
}
export function sobre():void{
   console.log("\n***************************************************");
   console.log("Projeto Desenvolvido por:");
   console.log("Generation Brail - generation@generation.org");
   console.log("github.com/conteudoGeneration");
   console.log("\n***************************************************");
}
main();
function KeyPress():void{
  console.log(colors.reset,"");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}