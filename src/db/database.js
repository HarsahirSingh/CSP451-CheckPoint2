const dbConfig = {
  host: "localhost",
  port: 5432,
  name: "csp451_db",
};

export function connectDatabase() {
  console.log("Connecting to database...");
  console.log(`Host: ${dbConfig.host}, DB: ${dbConfig.name}`);

  return {
    connected: true,
    timestamp: new Date(),
  };
}
