import { PrismaClient } from '@prisma/client'
// or const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


async function main() {
    const template = await prisma.template.findMany({
        where: {
            name: {
                contains: 'purchase-order-credited'
            }
        }
    })

    console.dir(template, { depth: null })
}

main()
    .catch(err => {
        throw err
    })
    .finally( async () => {
        prisma.disconnect()
    })