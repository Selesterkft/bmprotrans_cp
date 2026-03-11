import app from "./app";
// import setAutomaticEmailSending from "./repository/cron/automaticEmailSending";

const PORT = process.env.PORT || 3000;

// setAutomaticEmailSending();
app.listen(PORT, () => {
  console.info(`App is listening on ${PORT}`);
});
