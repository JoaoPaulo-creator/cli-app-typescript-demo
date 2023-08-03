import { createCommand } from "commander";
import { randomUUID } from "node:crypto";

function returnId() {
  return {
    message: "Criando simulation id",
    id: randomUUID(),
  };
}

function receiveId(id: string) {
  console.log({
    message: "Criando proposta",
    id,
  });
}

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

    if (proposal) {
      receiveId(id);
    }
  });

commander.parse(process.argv);
