const faker = require("faker");
const mongoose = require("mongoose");
const Employee = require("../back-end/src/models/employee");

const dotenv = require("dotenv");
dotenv.config();

const makeConnection = async () => {
  const db = await mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("db is connected", db.connection.name);
  return db;
};

const createEmployee = async (db) => {
  try {
    const employee = new Employee({
      name: faker.name.firstName(),
      position: faker.name.jobTitle(),
      office: faker.address.country(),
      salary: faker.commerce.price(),
    });

    await employee.save();

    console.log("Nuevo empleado creado");
    db.connection.close();
  } catch (error) {
    console.error(error);
  }
};

async function main() {
  const db = await makeConnection();
  await createEmployee(db);
}

main();
