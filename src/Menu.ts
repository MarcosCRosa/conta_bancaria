import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";

export function main(){
    let opcao:number;
    
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
                    KeyPress();
            break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as contas\n\n",colors.reset);
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