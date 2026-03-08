const db = require("../config/db");

exports.createSchool = async (school) => {
  const { name, address, latitude, longitude } = school;

  const query =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  const [result] = await db.execute(query, [
    name,
    address,
    latitude,
    longitude
  ]);

  return result;
};

exports.getAllSchools = async () => {
  const [rows] = await db.execute("SELECT * FROM schools");
  return rows;
};