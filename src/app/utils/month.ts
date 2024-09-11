const dateActually = new Date();
const month = dateActually.toLocaleString("pt-BR", {
  month: "long",
});

export { dateActually, month };
