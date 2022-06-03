const prisma = require("../utils/client");

const create = async (newArticle,newPrice, type, ) => {
  try {
    const newGasto = await prisma.gastos.create({
      data: {
        article: newArticle,
        type:{
          connect: type,
        },
        price: newPrice,
      },
      include: {
        type: true,
      },
    });
    return newGasto;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

const findByArticle = async (searchArticle) => {
  try {
    const gastos = await prisma.gastos.findMany({
      where: {
        article: searchArticle,
      },
      include: {
        type: true,
        
      },

    });
    return gastos;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findByPrice = async (searchPrice) => {
  try {
    const gastos = await prisma.gastos.findMany({
      where: {
        price: searchPrice,
      },
      include: {
        type: true,
        
      },

    });
    return gastos;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findAll = async () => {
  try {
    const gastos = await prisma.gastos.findMany();
    return gastos;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create, findByArticle,findByPrice ,findAll };
