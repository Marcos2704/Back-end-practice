const prisma = require("./util/cliente")


async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.movie.create( { 
      data:{
          title: "Megamente",
      },
    })

    const movies = await prisma.movie.findMany({
        include:{
            genres: true,
            review: true,
        }
    })
    console.log(movies)
    return;
  }


main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })