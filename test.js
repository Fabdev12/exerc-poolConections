

const { createEvent, getAllEvents, getEventsByName, getEventsByDate, sellTickets } = require("./functions")

async function test(){
  //await createEvent("Show 1", new Date("2025-01-01", 5))
  await createEvent("Flamengo vs São Paulo", new Date("2025-07-12"),50)
  await createEvent("Expoimp - Leo Santana", new Date("2025-07-12"),80)

  //Teste para todos os eventos
  const result = await getAllEvents()
  console.log(result)

  //Teste para procurar eventos pelo nome
  const result2 = await getEventsByName("Flamengo vs Sao Paulo")
  console.log(result2)

  //Teste para procurar pela data do evento
  const result3 = getEventsByDate(new Date("2025-07-12"))
  console.log(result3)

  await sellTickets(5)

  process.exit(0)
}


test()

""