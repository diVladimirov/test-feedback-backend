import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface FeedBackCreationAttrs {
  name: string;
  email: string;
  message: string;
}

@Table({ tableName: "feddbacks" })
export class FeedBack extends Model<FeedBack, FeedBackCreationAttrs> {
  @ApiProperty({ example: 1, description: "Unique identificator" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "test", description: "User name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: "test@gmail.com", description: "User email" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "test message", description: "User message" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;
}
