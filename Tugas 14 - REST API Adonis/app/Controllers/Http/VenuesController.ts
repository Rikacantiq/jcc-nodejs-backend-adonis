import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class VenuesController {
    public async store({ request, response }: HttpContextContract) {
        const newVenueSchema = schema.create({
            name: schema.string({}, [
                rules.minLength(4)
            ]),
            address: schema.string(),
            phone: schema.string({}, [
                rules.mobile({ strict: true })
            ])
        })
        try {
            await request.validate({ schema: newVenueSchema })
        } catch(error){
            response.unprocessableEntity(error.messages)
        }
    }
}
