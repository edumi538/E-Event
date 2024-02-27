import { IEmails, IEventos } from "../types/generic_interface";

export const mockEventos: IEventos[] = [
  {
    NomeEvento: "Conferência de Tecnologia 2024",
    EmailEvento: "info@conferenciatech.com",
    DateEvento: new Date("2024-03-15"),
  },
  {
    NomeEvento: "Workshop de Marketing Digital",
    EmailEvento: "contato@workshopmarketing.com",
    DateEvento: new Date("2024-04-20"),
  },
  {
    NomeEvento: "Seminário de Inovação Empresarial",
    EmailEvento: "info@seminarioinovacao.com",
    DateEvento: new Date("2024-05-10"),
  },
];

export const mockEmails: IEmails[] = [
  { id: 1, email: "joao.silva@example.com" },
  { id: 2, email: "maria.santos@example.com" },
  { id: 3, email: "pedro.almeida@example.com" },
];
