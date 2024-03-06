import connectDB from "@/config/database"
import Property from "@/models/Property"

// GET /api/properties
export const GET = async(request) => {
    try {
        
        await connectDB()
        
        const properties = await Property.find({})
        if(!properties) return new Response("Property not found", { status: 404 })

        return new Response(JSON.stringify(properties), { status: 200 })

    } catch (error) {

        console.error(error)
        return new Response('Error', { status: 500})
        
    }
}