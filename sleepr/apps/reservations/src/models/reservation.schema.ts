import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

Schema()
export class ReservationDocument extends AbstractDocument {
    @Prop({type: Date, required: true})
    timestamp: Date
    
    @Prop({type: Date, required: true})
    startDate: Date
    
    @Prop({type: Date, required: true})
    endDate: Date
    
    @Prop({type: String, required: true})
    userId: string
    
    @Prop({type: String, required: true})
    placeId: string
    
    @Prop({type: String, required: true})
    inVoiceId: string
}

export const ReservationSchema = SchemaFactory.createForClass(ReservationDocument)