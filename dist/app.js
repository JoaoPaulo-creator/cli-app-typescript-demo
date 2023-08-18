"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const simulation_1 = require("./simulation");
const proposal_1 = require("./proposal");
const commander = (0, commander_1.createCommand)();
commander
    .command("financial")
    .description("Comando padrao da CLI de financiamentos")
    .option("--simulation", "Cria um simulation id")
    .option("--proposal", "Cria uma proposta")
    .action((options) => {
    const { simulation, proposal } = options;
    const { id } = (0, simulation_1.returnId)();
    if (!simulation) {
        throw new Error("Uma simulação precisa ser criada antes");
    }
    if (simulation) {
        console.log("created simulation: ", id);
    }
    if (proposal) {
        (0, proposal_1.receiveId)(id);
    }
});
commander.parse(process.argv);
