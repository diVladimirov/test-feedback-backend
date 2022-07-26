import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { FeedBack } from "./feedbacks/feedbacks.model";
import { FeedbacksModule } from "./feedbacks/feedbacks.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "ec2-34-247-172-149.eu-west-1.compute.amazonaws.com",
      port: 5432,
      username: "ytcfmuxpcndvhm",
      password:
        "529c292862ea99f81b7db346216f7e7dd368b53f8dfdd3f1c9e395724a8f3b9e",
      database: "dj3vg61t43voa",
      models: [FeedBack],
      autoLoadModels: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
    FeedbacksModule,
  ],
})
export class AppModule {}
