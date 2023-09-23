// Loading function

export async function loadJsonFromFilename(filename) {
  var jsonData = [];

  if (filename == null) return;

  try {
    const response = await fetch(filename);
    jsonData = await response.json();
  } catch (err) {
    throw "Error fetching data";
  }

  return jsonData;
}
