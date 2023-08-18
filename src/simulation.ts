import { randomUUID } from "node:crypto";

export function returnId() {
  return {
    message: "Criando simulation id",
    id: randomUUID(),
  };
}
