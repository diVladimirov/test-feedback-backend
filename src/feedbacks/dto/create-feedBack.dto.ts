import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedbackDto {
  @ApiProperty({ example: "test", description: "User name" })
  readonly name: string;

  @ApiProperty({ example: "test@gmail.com", description: "User email" })
  readonly email: string;

  @ApiProperty({ example: "test message", description: "User message" })
  readonly message: string;
}
