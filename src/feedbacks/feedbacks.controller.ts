import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateFeedbackDto } from "./dto/create-feedBack.dto";
import { FeedbacksService } from "./feedbacks.service";

@Controller("feedbacks")
export class FeedbacksController {
  constructor(private feedBacksService: FeedbacksService) {}

  @Post()
  create(@Body() feedBackDto: CreateFeedbackDto) {
    return this.feedBacksService.createFeedback(feedBackDto);
  }

  @Get()
  getAll() {
    return this.feedBacksService.getAllFeedBacks();
  }
}
