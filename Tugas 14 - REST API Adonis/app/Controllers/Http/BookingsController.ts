import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BookingsController {
    public async store({ request, response }: HttpContextContract) {
        const newBookingSchema = schema.create({
            name: schema.string(),
            venueName: schema.string(),
            bookingDate: schema.date({
                format: 'dd-MM-yyyy HH:mm'
            }, [
                /**
                 * boleh booking 1 hari sebelum itu maksudnya?
                 * boleh booking after 24 hours?
                 * rules.after(24,'hours')
                 * atau
                 * boleh booking after today?
                 * rules.after('today')
                 */
                rules.after('today')
            ])
        })
        
        try{
            await request.validate({ schema: newBookingSchema })
        } catch (error){
            response.badRequest(error.messages)
        }
    }
}
