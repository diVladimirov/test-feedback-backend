import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateFeedbackDto } from "./dto/create-feedBack.dto";
import { FeedBack } from "./feedbacks.model";
import { FeedbacksService } from "./feedbacks.service";

@ApiTags("Feedbacks")
@Controller("feedbacks")
export class FeedbacksController {
  constructor(private feedBacksService: FeedbacksService) {}

  @ApiOperation({ summary: "create feedback" })
  @ApiResponse({ status: 200, type: FeedBack })
  @Post()
  create(@Body() feedBackDto: CreateFeedbackDto) {
    return this.feedBacksService.createFeedback(feedBackDto);
  }

  @ApiOperation({ summary: "get all feedbacks" })
  @ApiResponse({ status: 200, type: [FeedBack] })
  @Get()
  getAll() {
    return this.feedBacksService.getAllFeedBacks();
  }
}
