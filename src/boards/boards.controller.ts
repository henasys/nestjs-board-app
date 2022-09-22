import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipes';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  //   @Get('/')
  //   getAllBoards(): Board[] {
  //     return this.boardsService.getAllBoards();
  //   }

  //   @Post()
  //   @UsePipes(ValidationPipe)
  //   createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //     return this.boardsService.createBoard(createBoardDto);
  //   }

  //   @Get('/:id')
  //   getBoardById(@Param('id') id: string): Board {
  //     return this.boardsService.getBoardById(id);
  //   }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  //   @Delete('/:id')
  //   deleteBoardById(@Param('id') id: string): void {
  //     return this.boardsService.deleteBoardById(id);
  //   }

  //   @Patch('/:id/status')
  //   updateBoardStatus(
  //     @Param('id') id: string,
  //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  //   ): Board {
  //     return this.boardsService.updateBoardStatus(id, status);
  //   }
}
