import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from 'zod';
import { ClientError } from "../errors/client-error";
import { dayjs } from "../lib/dayjs";
import { prisma } from "../lib/prisma";


export async function getActivity(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/trips/:tripId/activities', 
        {
            schema: {
                params: z.object({
                    tripId: z.string().uuid(),
                }),
               }
        },
        async (request) => {
            const { tripId } = request.params
            
            const trip = await prisma.trip.findUnique({
                where: { id: tripId },
                include: {
                    activities: {
                        orderBy: {
                            occurs_at: 'asc',
                        }
                    }
                },
            })

            if (!trip) {
                throw new ClientError('Trip not found.')
            }
            
            const differenceInDaysBetweenTripStartAndEnd = dayjs(trip.ends_at).diff(trip.starts_at, 'days')

            const activities = Array.from({ length: differenceInDaysBetweenTripStartAndEnd + 1 }).map((_, index) => {
                const date = dayjs(trip.starts_at).add(index, 'days')

                return {
                    date: date.toDate(),
                    activities: trip.activities.filter(activities => {
                        return dayjs(activities.occurs_at).isSame(date, 'days')
                    })
                }
            })

            return { activities }
        }
    )
}