import { IsDate, IsString } from "class-validator";

export class CreateReservationDto {
    @IsString()
    startDate: Date;
    
    @IsString()
    endDate: Date;
    
    @IsString()
    userId: string;
    
    @IsString()
    placeId: string;
    
    @IsString()
    inVoiceId: string;
}
