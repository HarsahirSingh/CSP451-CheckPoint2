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
export function getDbStatus(connection) {
  if (!connection || !connection.connected) {
    return { status: "disconnected", timestamp: new Date() };
  }

  return {
    status: "connected",
    timestamp: connection.timestamp,
  };
}
