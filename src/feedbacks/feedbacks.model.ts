import { Column, DataType, Model, Table } from "sequelize-typescript";

interface FeedBackCreationAttrs {
  name: string;
  email: string;
  message: string;
}

@Table({ tableName: "feddbacks" })
export class FeedBack extends Model<FeedBack, FeedBackCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;
}
