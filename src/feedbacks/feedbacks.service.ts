import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateFeedbackDto } from "./dto/create-feedBack.dto";
import { FeedBack } from "./feedbacks.model";

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectModel(FeedBack) private feedBackRepository: typeof FeedBack
  ) {}

  async createFeedback(dto: CreateFeedbackDto) {
    const feedBack = await this.feedBackRepository.create(dto);
    return feedBack;
  }

  async getAllFeedBacks() {
    const feedBacks = await this.feedBackRepository.findAll();
    return feedBacks;
  }
}
