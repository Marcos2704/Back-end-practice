const prisma = require("../utils/client");

const create = async (newName) => {
  const newType = await prisma.type.create({
    data: {
      name: newName,
    },
  });
  return newType
};

const findByName = async (searchName) =>{
    try {
        const type = await prisma.type.findMany({
          where: {
            name: searchName,
          },
          include: {
            gastos: true,
          },
        });
        return type;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
}

const findAll = async () => {
  try {
    const type = await prisma.type.findMany();
    return type;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create, findAll, findByName };
