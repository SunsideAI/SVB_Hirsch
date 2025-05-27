export async function handler(event) {
  const payload = JSON.parse(event.body);

  const response = await fetch("https://hooks.zapier.com/hooks/catch/21938164/2xz2o65/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Daten erfolgreich weitergeleitet." })
  };
}
