import { createCommand } from "commander";
import { returnId } from "./simulation";
import { receiveId } from "./proposal";

const commander = createCommand();

commander
  .command("financial")
  .description("Comando padrao da CLI de financiamentos")
  .option("--simulation", "Cria um simulation id")
  .option("--proposal", "Cria uma proposta")
  .action((options) => {
    const { simulation, proposal } = options;

    const { id } = returnId();

    if (!simulation) {
      throw new Error("Uma simulação precisa ser criada antes");
    }

    if (simulation) {
      console.log("created simulation: ", id);
    }

    if (proposal) {
      receiveId(id);
    }
  });

commander.parse(process.argv);
