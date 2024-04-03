import {prisma} from '../src/lib/prisma'
async function seed() {
    await prisma.event.create({
        data: {
            id: '8eef113b-4407-4d78-8d06-645dd6ece255',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por código',
            maximumAttendees: 120,
        }
    })


    
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})